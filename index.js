console.log('Hello World')

//Variables for Team Scores
let redTeamScore = 0
let blueTeamScore = 0

//Reset Function

function resetTeamScores() {

  redTeamScore = 0
  blueTeamScore = 0
}

//Score Incremental Functions
function incrementRedTeamScore() {
  redTeamScore++
  document.getElementById("redTeamScore").innerHTML = redTeamScore
}

function incrementBlueTeamScore() {
  blueTeamScore++
  document.getElementById("blueTeamScore").innerHTML = blueTeamScore
}


