var scores, roundscore, activeplayer, game;
ini();

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (game) {
    var dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = "images/d-" + dice + ".png";

    //update the current score
    if (dice !== 1) {
      //first player
      roundscore += dice;
      document.querySelector(
        "#current-" + activeplayer
      ).textContent = roundscore;
    } else {
      //next player
      nextplayer();
    }
  }
});
document.querySelector(".btn-hold").addEventListener("click", function() {
  //add current score to global score
  score[activeplayer - 1] += roundscore;

  //update the UI
  document.getElementById("score" + activeplayer).textContent =
    score[activeplayer - 1];

  //check if the player won or not
  if (score[activeplayer - 1] >= 50) {
    //will win if score is greater than 50
    document.getElementById("name" + activeplayer).textContent = "WINNER!";
    document
      .querySelector(".player" + activeplayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player" + activeplayer + "-panel")
      .classList.remove("active");
    game = false;
  } else {
    //nextplayer
    nextplayer();
  }
});

let nextplayer = function() {
  activeplayer === 1 ? (activeplayer = 2) : (activeplayer = 1);
  roundscore = 0;
  document.getElementById("current-1").textContent = "0";
  document.getElementById("current-2").textContent = "0";
  if (activeplayer === 1) {
    document.querySelector(".player2-panel").classList.remove("active");
    document.querySelector(".player1-panel").classList.add("active");
  } else {
    document.querySelector(".player2-panel").classList.add("active");
    document.querySelector(".player1-panel").classList.remove("active");
  }
  document.querySelector(".dice").style.display = "none";
};
document.querySelector(".btn-new").addEventListener("click", ini);
function ini() {
  score = [0, 0];
  roundscore = 0;
  activeplayer = 1;
  game = true;
  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("current-2").textContent = "0";
  document.getElementById("name2").textContent = "PLAYER 2";
  document.getElementById("name1").textContent = "PLAYER 1";
  document.querySelector(".player2-panel").classList.remove("winner");
  document.querySelector(".player1-panel").classList.remove("winner");
  document.querySelector(".player2-panel").classList.remove("active");
  document.querySelector(".player1-panel").classList.remove("active");
  document.querySelector(".player1-panel").classList.add("active");
}
