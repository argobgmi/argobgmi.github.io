// script.js
const leaderboardData = [
  
  { team: "BINARY 4", chickens: 1, kills: 16,place: 0, points: 0 }, //done

  { team: "TEAM SD Warriors", chickens: 0,place: 4, kills: 6, points: 0 }, //done

  { team: "Maqsad", chickens: 0, kills: 0,place: 8, points: 0 }, //done

  { team: "Team Zero", chickens: 0, kills: 8,place: 0, points: 0 }, //done

  { team: "Death", chickens: 0, kills: 0,place: 6, points: 0 }, //done

  { team: "The.બાઝ", chickens: 0, kills: 4,place: 2, points: 0 }, //done


  { team: "XSpark", chickens: 0, kills: 1,place: 0, points: 0 }, //done

  { team: "Apsarao ke patidev", chickens: 0,place: 0, kills: 0, points: 0 }, //done

  
  { team: "X-Factor Elite", chickens: 0, kills: 0,place: 0, points: 0 }, //done

  { team: "MAUT KE SAUDAGAR", chickens: 0, kills: 0,place: 0, points: 0 }, //done

  { team: "Team Chatakapataka", chickens: 0, kills: 0,place: 0, points: 0 }, //done

  { team: "TokTok Gang", chickens: 0, kills: 0,place: 0, points: 0 }, //done
  // { team: "", chickens: 0, kills: 0,place: 0, points: 0 },
];

const leaderboard = document.getElementById("leaderboard");

function populateLeaderboard() {
  leaderboard.innerHTML = leaderboardData
    .map(
      (team, index) => `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${team.team}</td>
        <td>${team.chickens}</td>
        <td>${team.kills}</td>
        <td>${team.place}</td>
        <td>${team.points = 10*team.chickens + team.kills + team.place}</td>
      </tr>
    `
    )
    .join("");
}

populateLeaderboard();
