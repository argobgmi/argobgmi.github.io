// script.js
const leaderboardData = [
  { team: "TokTok Gang", chickens: 0, kills: 0,place: 0, points: 0 },

  { team: "XSpark", chickens: 0, kills: 0,place: 0, points: 0 },

  { team: "Team Zero", chickens: 0, kills: 0,place: 0, points: 0 },

  { team: "BINARY 4", chickens: 0, kills: 0,place: 0, points: 0 },

  { team: "Apsarao ke patidev", chickens: 0,place: 0, kills: 0, points: 0 },

  { team: "TEAM SD Warriors", chickens: 0,place: 0, kills: 0, points: 0 },

  { team: "The.બાઝ", chickens: 0, kills: 0,place: 0, points: 0 },

  { team: "Maqsad", chickens: 0, kills: 0,place: 0, points: 0 },

  { team: "Death", chickens: 0, kills: 0,place: 0, points: 0 },

  { team: "X-Factor Elite", chickens: 0, kills: 0,place: 0, points: 0 },

  { team: "MAUT KE SAUDAGAR", chickens: 0, kills: 0,place: 0, points: 0 },

  { team: "Team Chatakapataka", chickens: 0, kills: 0,place: 0, points: 0 },
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
