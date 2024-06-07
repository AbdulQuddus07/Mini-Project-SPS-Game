let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let compScorePara = document.querySelector("#computer-score");
let userScorePara = document.querySelector("#user-score");

let compGame = () => {
  let option = ["rock", "paper", "scissors"];
  let randIndex = Math.floor(Math.random() * 3);
  return option[randIndex];
};
let drawGame = () => {
  msg.innerHTML = "Game was drawn ! Play Again"
  msg.style.background = "#081b31"
};
let showWinner = (userWin,compChoice,userChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You Win ! Your ${userChoice} beats ${compChoice}`
    msg.style.background = "green"
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
   msg.innerHTML = `You Lose ! Your ${compChoice} beaten by ${userChoice}`
   msg.style.background = "red"
  }
};
let playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);
  let compChoice = compGame();
  console.log("Comp Choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
  
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
