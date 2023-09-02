const playBtn = document.getElementById("play-btn");
const gameArea = document.getElementById("game-area");
const playerContainer = document.getElementById("person");
const computerContainer = document.getElementById("computer");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const roundHeading = document.querySelector('.round-heading')
const roundNo = document.getElementById("round");
const maxRoundHeading = document.querySelector(".max-round-heading");
const messageContainer = document.querySelector(".message-container");
const allMessages = document.querySelectorAll('.message');
const winnerHeading = document.getElementById("winner-heading");
const form = document.getElementById("start-form");
const Mround = document.getElementById("max-round");

// player(person)
const playerName = playerContainer.querySelector(".name");
const playerScore = playerContainer.querySelector(".score")
const snake = document.getElementById("snake");
const water = document.getElementById("water");
const gun = document.getElementById("gun");


// Computer
const computerName = computerContainer.querySelector(".name");
const computerScore = computerContainer.querySelector(".score")
const Cwater = document.getElementById("Cwater");
const Csnake = document.getElementById("Csnake");
const Cgun = document.getElementById("Cgun");

let player = {
    name: "Player",
    turn: true,
    score: 0,
    option: null
}
let computer = {
    name: "Computer",
    turn: false,
    score: 0,
    option: null
}
let maxRound = 5;
let round = 1;
const option = ["snake", "water", "gun"];

form.addEventListener("submit", (e) => {
    e.preventDefault()
    maxRound = Mround.value;
    form.style.display = "none";
    gameArea.style.display = "grid";
    roundHeading.style.display = "block";
    messageContainer.style.display = "grid";
    maxRoundHeading.style.display = "block";
    maxRoundHeading.textContent = `Total Rounds: ${maxRound}`
    resetOption();
    displayRound()
    color()
})
snake.addEventListener('click', () => {
    if (player.turn && round <= maxRound) {
        player.option = "snake"
        game()
    }
})
water.addEventListener('click', () => {
    if (player.turn && round <= maxRound) {
        player.option = "water"
        game()
    }
})
gun.addEventListener('click', () => {
    if (player.turn && round <= maxRound) {
        player.option = "gun"
        game()
    }
})
const game = () => {
    displayRound()
    changeTurn()
    setComputerOption()
    setImages()
    result()
    resetOption()
    round++;
    if(round > maxRound) {
        displayResult()
    }
}
const setComputerOption = () => {
    if (computer.turn) {
        computer.option = option[Math.floor(Math.random() * 3)]
        changeTurn()
    }
}
const result = () => {
    if (computer.option === player.option) {
        displayMessage(1,"Tie","blue")
    } else if (computer.option === "snake" && player.option === "water") {
        computer.score++;
        displayMessage(2,"+1","green")
    } else if (computer.option === "snake" && player.option === "gun") {
        player.score++;
        displayMessage(0,"+1","green")
    } else if (computer.option === "water" && player.option === "snake") {
        player.score++;
        displayMessage(0,"+1","green")
    } else if (computer.option === "water" && player.option === "gun") {
        computer.score++;
        displayMessage(2,"+1","green")
    } else if (computer.option === "gun" && player.option === "water") {
        player.score++;
        displayMessage(0,"+1","green")
    } else if (computer.option === "gun" && player.option === "snake") {
        computer.score++;
        displayMessage(2,"+1","green")
    }
    displayScore()
}
const displayName = () => {
    computerName.textContent = computer.name;
    playerName.textContent = player.name;
}
const displayScore = () => {
    computerScore.textContent = computer.score;
    playerScore.textContent = player.score;
}
const color = () => {
    playerName.style.color = "green";
    computerName.style.color = "red";
}
const resetOption = () => {
    player.option = null
    computer.option = null
}
const changeTurn = () => {
    player.turn = !player.turn;
    computer.turn = !computer.turn;
}
const setImages = () => {
    img1.src = giveSrc(player.option);
    img2.src = giveSrc(computer.option);
}

const giveSrc = (x) => {
    const imgSrc = {
        snake: "static/snake.png",
        water: "static/drop.png",
        gun: "static/gun.png"
    }
    if (x === "water") {
        return imgSrc.water;
    }
    if (x === "snake") {
        return imgSrc.snake;
    }
    if (x === "gun") {
        return imgSrc.gun;
    }
}
const displayRound = () => {
    roundNo.textContent = round;
}
const displayMessage = (index,m,color) => {
    const message = allMessages[index];
    message.textContent = m;
    message.style.color = color
    message.classList.add("visible");
    setTimeout(() => {
        message.classList.remove("visible")
    }, 1500);
}

const displayResult = () => {
    if(player.score === computer.score) {
        winnerHeading.textContent = "Tie"
        winnerHeading.style.color = "blue"
    } else if(player.score > computer.score) {
        winnerHeading.textContent = "You Won"
        winnerHeading.style.color = "green"
    } else {
        winnerHeading.textContent = "You Lost"
        winnerHeading.style.color = "red"
    }
    winnerHeading.style.display = "block"
}