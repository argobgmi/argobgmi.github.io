// script.js
const leaderboardData = [

  { team: "Team Zero", chickens: 3, kills: 76,place: 14, points: 0 }, //done

  { team: "TEAM SD Warriors", chickens: 0,place: 22, kills: 42, points: 0 }, //done

  { team: "Apsarao ke patidev", chickens: 1,place: 14, kills: 32, points: 0 }, //done
  
  { team: "BINARY 4", chickens: 1, kills: 44,place: 0, points: 0 }, //done

  { team: "The.બાઝ", chickens: 1, kills: 25,place: 10, points: 0 }, //done

  { team: "XSpark", chickens: 0, kills: 30,place: 14, points: 0 }, //done

  { team: "Maqsad", chickens: 0, kills: 16,place: 12, points: 0 }, //done

  { team: "X-Factor Elite", chickens: 0, kills: 1,place: 25, points: 0 }, //done

  { team: "Death", chickens: 0, kills: 2,place: 22, points: 0 }, //done

  { team: "Team Chatakapataka", chickens: 1, kills: 5,place: 6, points: 0 }, //done

  { team: "TokTok Gang", chickens: 0, kills: 9,place: 12, points: 0 }, //done

  { team: "Team Rookie", chickens: 0, kills: 12,place: 0, points: 0 }, //done

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
