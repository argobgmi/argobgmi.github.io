// script.js
const leaderboardData = [

  { team: "Team Zero", chickens: 3, kills: 89,place: 18, points: 0 }, //done

  { team: "XSpark", chickens: 1, kills: 48,place: 20, points: 0 }, //done

  { team: "TEAM SD Warriors", chickens: 0, kills: 45, place: 24, points: 0 }, //done

  { team: "BINARY 4", chickens: 1, kills: 52,place: 0, points: 0 }, //done

  { team: "Apsarao ke patidev", chickens: 1, kills: 32,place: 14, points: 0 }, //done
  
  { team: "The.બાઝ", chickens: 1, kills: 33,place: 10, points: 0 }, //done

  { team: "Maqsad", chickens: 1, kills: 26,place: 12, points: 0 }, //done

  { team: "X-Factor Elite", chickens: 0, kills: 3,place: 41, points: 0 }, //done

  { team: "Death", chickens: 0, kills: 3,place: 26, points: 0 }, //done

  { team: "Team Rookie", chickens: 0, kills: 22,place: 6, points: 0 }, //done

  { team: "TokTok Gang", chickens: 0, kills: 13,place: 12, points: 0 }, //done

  { team: "Team Chatakapataka", chickens: 1, kills: 6,place: 8, points: 0 }, //done

  { team: "MAUT KE SAUDAGAR", chickens: 0, kills: 1,place: 0, points: 0 }, //done
  
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
