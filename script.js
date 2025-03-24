// Fetch and parse the CSV
let leaderboardData = [];
let playerData = []; // Array to hold player leaderboard data

fetch('data.csv')
  .then(response => response.text())
  .then(csvText => {
    const parsed = Papa.parse(csvText, { header: true });
    const data = parsed.data;
    const teamData = {};

    // Process each row (one row = one team's performance in one round)
    data.forEach(row => {
      const team = row.team;
      if (!teamData[team]) {
        teamData[team] = {
          chickens: 0,
          kills: 0,
          place: 0,
          points: 0,
          players: {}
        };
      }

      // Calculate kills for this round from player kills
      const player1_kills = parseInt(row.player1_kills) || 0;
      const player2_kills = parseInt(row.player2_kills) || 0;
      const player3_kills = parseInt(row.player3_kills) || 0;
      const player4_kills = parseInt(row.player4_kills) || 0;
      const round_kills = player1_kills + player2_kills + player3_kills + player4_kills;

      // Other stats for this round
      const chickens = parseInt(row.chickens) || 0;
      const place = parseInt(row.place) || 0;
      const round_points = 10 * chickens + round_kills + place;

      // Accumulate cumulative stats
      teamData[team].chickens += chickens;
      teamData[team].kills += round_kills;
      teamData[team].place += place;
      teamData[team].points += round_points;

      // Update player kills
      const players = [row.player1, row.player2, row.player3, row.player4];
      const player_kills = [player1_kills, player2_kills, player3_kills, player4_kills];
      players.forEach((player, index) => {
        if (player) {
          teamData[team].players[player] = (teamData[team].players[player] || 0) + player_kills[index];
        }
      });
    });

    // Convert to team leaderboard format
    leaderboardData = Object.entries(teamData).map(([team, data]) => ({
      team: team,
      chickens: data.chickens,
      kills: data.kills,
      place: data.place,
      points: data.points,
      players: Object.entries(data.players).map(([name, kills]) => ({ name, kills }))
    }));

    // Sort team leaderboard by total points (descending)
    leaderboardData.sort((a, b) => b.points - a.points);

    // Create player leaderboard data
    Object.entries(teamData).forEach(([team, data]) => {
      Object.entries(data.players).forEach(([player, kills]) => {
        playerData.push({ name: player, team: team, kills: kills });
      });
    });

    // Sort player leaderboard by kills (descending)
    playerData.sort((a, b) => b.kills - a.kills);

    // Update the rounds completed text
    const uniqueRounds = [...new Set(data.map(row => row.round))].length;
    // document.querySelector('.header .subtitle:last-child').textContent = `${uniqueRounds}/9 Rounds Complete`;

    // Populate both leaderboards and add interactivity
    populateTeamLeaderboard();
    populatePlayerLeaderboard();
    addClickListeners();

    // Add button event listeners for toggling
    document.getElementById("team-btn").addEventListener("click", () => {
      document.getElementById("team-leaderboard").style.display = "block";
      document.getElementById("player-leaderboard").style.display = "none";
      document.getElementById("team-btn").classList.add("active");
      document.getElementById("player-btn").classList.remove("active");
    });

    document.getElementById("player-btn").addEventListener("click", () => {
      document.getElementById("team-leaderboard").style.display = "none";
      document.getElementById("player-leaderboard").style.display = "block";
      document.getElementById("player-btn").classList.add("active");
      document.getElementById("team-btn").classList.remove("active");
    });
  })
  .catch(error => console.error('Error loading CSV:', error));

function populateTeamLeaderboard() {
  const leaderboardBody = document.getElementById("team-leaderboard-body");
  leaderboardBody.innerHTML = leaderboardData
    .map((team, index) => {
      // Team row
      const teamRow = `
        <tr class="team-row" data-team-id="${index}">
          <th scope="row">${index + 1}</th>
          <td class="team-name">${team.team}</td>
          <td>${team.chickens}</td>
          <td>${team.kills}</td>
          <td>${team.place}</td>
          <td>${team.points}</td>
        </tr>
      `;
      // Player stats row (hidden by default)
      const playerRow = `
        <tr class="player-stats" id="team-players-${index}">
          <td colspan="6">
            <div class="player-stats-container">
              <h5 class="player-stats-title">PLAYER STATISTICS</h5>
              <div class="player-grid">
                ${team.players.map(player => `
                  <div class="player-card">
                    <div class="player-name">${player.name}</div>
                    <div class="player-kills">${player.kills} kills</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </td>
        </tr>
      `;
      return teamRow + playerRow;
    })
    .join("");
}

function populatePlayerLeaderboard() {
  const playerLeaderboardBody = document.getElementById("player-leaderboard-body");
  playerLeaderboardBody.innerHTML = playerData
    .map((player, index) => `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${player.name}</td>
        <td>${player.team}</td>
        <td>${player.kills}</td>
      </tr>
    `)
    .join("");
}

function addClickListeners() {
  // Store the currently expanded row
  let currentlyExpanded = null;

  document.querySelectorAll('.team-row').forEach(row => {
    row.addEventListener('click', () => {
      const teamId = row.getAttribute('data-team-id');
      const playerRow = document.getElementById(`team-players-${teamId}`);
      
      // Toggle active class on team row to rotate arrow
      row.classList.toggle('active');
      
      // If clicking on an already expanded row, close it
      if (currentlyExpanded === playerRow) {
        // First remove opacity from content
        const container = playerRow.querySelector('.player-stats-container');
        container.style.opacity = '0';
        container.style.transform = 'translateY(-20px)';
        
        // Then after a short delay, collapse the row
        setTimeout(() => {
          playerRow.classList.remove('expanded');
          playerRow.style.height = '0';
          
          // Add this line to ensure the row is properly hidden after transition
          setTimeout(() => {
            if (!playerRow.classList.contains('expanded')) {
              playerRow.style.display = 'none';
            }
          }, 400); // Match this to your CSS transition time
        }, 200);
        
        currentlyExpanded = null;
        return;
      }
      
      // If there's another expanded row, close it first
      if (currentlyExpanded) {
        // Find the corresponding team row and remove active class
        const prevTeamId = currentlyExpanded.id.replace('team-players-', '');
        const prevTeamRow = document.querySelector(`.team-row[data-team-id="${prevTeamId}"]`);
        prevTeamRow.classList.remove('active');
        
        // Hide content first
        const prevContainer = currentlyExpanded.querySelector('.player-stats-container');
        prevContainer.style.opacity = '0';
        prevContainer.style.transform = 'translateY(-20px)';
        
        // Then collapse after delay
        setTimeout(() => {
          currentlyExpanded.classList.remove('expanded');
          currentlyExpanded.style.height = '0';
          
          // Add this line to ensure previous row is properly hidden
          setTimeout(() => {
            if (!currentlyExpanded.classList.contains('expanded')) {
              currentlyExpanded.style.display = 'none';
            }
          }, 400); // Match this to your CSS transition time
        }, 200);
      }
      
      // Expand the clicked row
      setTimeout(() => {
        // Ensure the row is visible before expanding
        playerRow.style.display = 'table-row';
        
        // Set height based on content
        const contentHeight = playerRow.querySelector('.player-stats-container').offsetHeight;
        playerRow.style.height = contentHeight + 'px';
        playerRow.classList.add('expanded');
        
        // Show the content with a slight delay
        setTimeout(() => {
          const container = playerRow.querySelector('.player-stats-container');
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
        }, 100);
        
        currentlyExpanded = playerRow;
        
        // Scroll to make sure the expanded section is visible
        setTimeout(() => {
          const rect = playerRow.getBoundingClientRect();
          // If the expanded section is not fully visible, scroll to it
          if (rect.bottom > window.innerHeight) {
            playerRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }, currentlyExpanded ? 250 : 0); // Delay if closing another row
    });
  });
}
