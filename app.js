const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const playGame = (userChoice) => {
  console.log("User choice =", userChoice);

  const compChoice = genCompChoice();
  console.log("Computer choice =", compChoice);


  if (userChoice === compChoice) {
    alert(`Game Draw!\nBoth chose ${userChoice}`);
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    if (userWin) {
      alert(`You Win!\n${userChoice} beats ${compChoice}`);
    } else {
      alert(`You Lose!\n${compChoice} beats ${userChoice}`);
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id").trim();
    playGame(userChoice);
  });
});
