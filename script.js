// script.js
const leaderboardData = [

  { team: "Team Zero", chickens: 3, kills: 81,place: 14, points: 0 }, //d

  { team: "TEAM SD Warriors", chickens: 0,place: 24, kills: 43, points: 0 }, //d

  { team: "Apsarao ke patidev", chickens: 1,place: 14, kills: 32, points: 0 }, //d
  
  { team: "BINARY 4", chickens: 1, kills: 48,place: 0, points: 0 }, //d

  { team: "The.બાઝ", chickens: 1, kills: 27,place: 10, points: 0 }, //d

  { team: "XSpark", chickens: 1, kills: 44,place: 14, points: 0 }, //done

  { team: "Maqsad", chickens: 0, kills: 17,place: 12, points: 0 }, //d

  { team: "X-Factor Elite", chickens: 0, kills: 1,place: 33, points: 0 }, //done

  { team: "Death", chickens: 0, kills: 2,place: 26, points: 0 }, //done

  { team: "Team Chatakapataka", chickens: 1, kills: 6,place: 6, points: 0 }, //done

  { team: "TokTok Gang", chickens: 0, kills: 10,place: 12, points: 0 }, //done

  { team: "Team Rookie", chickens: 0, kills: 21,place: 6, points: 0 }, //d

  { team: "MAUT KE SAUDAGAR", chickens: 0, kills: 1,place: 0, points: 0 }, //d
  
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
