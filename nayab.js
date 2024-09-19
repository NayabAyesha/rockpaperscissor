let rps_buttons = document.querySelectorAll(".rps");
let play_button = document.querySelector("#turn");
let userChoice = "";
let result_div = document.querySelector("#result");

rps_buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) userChoice = "rock";
        else if (index == 1) userChoice = "scissors";
        else if (index === 2) userChoice = "paper";
        play_button.classList.remove("result-error");
        result_div.innerHTML = "";
    });
});

let playgame = () => {
    if (!userChoice) {
        result_div.innerHTML = "Please select any options as you see Rock, Scissor or Paper";
        result_div.className="result-error";
        return;
    }

    let randomChoice = Math.floor(Math.random() * 3);
    let computerChoice = ['rock', 'scissors', 'paper'][randomChoice];
    let result = checkWinner(userChoice, computerChoice);
    result_div.innerHTML = `Computer selected: ${computerChoice}<br> and You have selected: ${userChoice}<br>${result}`;

    if (result === "It's a tie!") {
        result_div.className = "result-tie";
    } else if (result === "You win!" || result === "Computer wins!" ) {
        result_div.className = "result-win";
    } else {
        result_div.className = "result-error";
    }
};

let checkWinner = (user, computer) => {
    if (user === computer) {
        return "It's a tie!";
    }
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
};

play_button.addEventListener("click", playgame);
