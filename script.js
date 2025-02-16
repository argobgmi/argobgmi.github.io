// script.js
const leaderboardData = [

  { team: "Team Zero", chickens: 3, kills: 94,place: 18, points: 0 }, //done

  { team: "XSpark", chickens: 1, kills: 49,place: 22, points: 0 }, //done

  { team: "TEAM SD Warriors", chickens: 0, kills: 46, place: 32, points: 0 }, //done

  { team: "BINARY 4", chickens: 1, kills: 52,place: 0, points: 0 }, //done

  { team: "The.બાઝ", chickens: 1, kills: 40,place: 10, points: 0 }, //done

  { team: "Apsarao ke patidev", chickens: 1, kills: 32,place: 14, points: 0 }, //
  
  

  { team: "Maqsad", chickens: 1, kills: 29,place: 12, points: 0 }, //done

  { team: "Team Rookie", chickens: 1, kills: 35,place: 6, points: 0 }, //done

  { team: "X-Factor Elite", chickens: 0, kills: 3,place: 47, points: 0 }, //done

  { team: "Death", chickens: 0, kills: 3,place: 26, points: 0 }, //done

  

  { team: "TokTok Gang", chickens: 0, kills: 13,place: 16, points: 0 }, //done

  { team: "Team Chatakapataka", chickens: 1, kills: 6,place: 8, points: 0 }, //

  { team: "MAUT KE SAUDAGAR", chickens: 0, kills: 1,place: 0, points: 0 }, //
  
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
