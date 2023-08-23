const playWithComputer = document.getElementById("playWithComputer");
const twoPlayer = document.getElementById("twoPlayer");
let numberOfPlayer;

playWithComputer.addEventListener("click", () => {
    numberOfPlayer = 1;
    startGame()
})
twoPlayer.addEventListener('click', () => {
    numberOfPlayer = 2;
    startGame()
})

const startGame = () => {
    playWithComputer.style.display = "none";
    twoPlayer.style.display = "none";
    if(numberOfPlayer === 1) {
        
    } 
    if(numberOfPlayer === 2) {

    } 
}