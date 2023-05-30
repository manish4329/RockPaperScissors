const playerText = document.querySelector("#Player");
const computerText = document.querySelector("#Computer");
const resultText = document.querySelector("#Result");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const PlayerImg = document.querySelector("#PlayerImg");
const ComputerImg = document.querySelector("#ComputerImg");

document.getElementById("PlayerImg").style.display = "none";
document.getElementById("ComputerImg").style.display = "none";

let player;
let computer;
let result;
let PlayerChoice;
let ComputerChoice;

const RockImg = "./images/rockhand.png";
const PaperImg = "./images/paperhand.png";
const ScissorsImg = "./images/scissorshand.png";

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    document.getElementById("PlayerImg").style.display = "block";
    document.getElementById("ComputerImg").style.display = "block";
    player = img.alt;
    computerTurn();
    changeComputerImg(computer);
    changePlayerImg(player);
    PlayerImg.src = PlayerChoice;
    ComputerImg.src = ComputerChoice;
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    result = checkWinner();
    resultText.textContent = `Result: ${result}`;
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function checkWinner() {
  if (player === computer) {
    return "It's a tie!";
  } else if (player === "Paper" && computer === "Rock") {
    return "Player wins!";
  } else if (player === "Scissors" && computer === "Paper") {
    return "Player wins!";
  } else if (player === "Rock" && computer === "Scissors") {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

const changePlayerImg = (x) => {
  if (x == "Rock") {
    return (PlayerChoice = RockImg);
  } else if (x == "Paper") {
    return (PlayerChoice = PaperImg);
  } else if (x == "Scissors") {
    return (PlayerChoice = ScissorsImg);
  }
};

const changeComputerImg = (x) => {
  if (x == "Rock") {
    return (ComputerChoice = RockImg);
  } else if (x == "Paper") {
    return (ComputerChoice = PaperImg);
  } else if (x == "Scissors") {
    return (ComputerChoice = ScissorsImg);
  }
};
