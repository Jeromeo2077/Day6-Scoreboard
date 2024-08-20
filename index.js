//Variables for Team Scores
let redTeamScore = 0
let blueTeamScore = 0

//Enable Teams Scores to Display the Initial Score of Zero
document.getElementById("redTeamScore").innerHTML = redTeamScore
document.getElementById("blueTeamScore").innerHTML = blueTeamScore

//Reset Function

function resetTeamScores() {

  redTeamScore = 0
  blueTeamScore = 0

  document.getElementById("redTeamScore").innerHTML = redTeamScore
  document.getElementById("blueTeamScore").innerHTML = blueTeamScore
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


