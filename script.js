const choices = ['rock', 'paper', 'scissors'];
let ps = 0;
let cs = 0;

function makeChoice(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('ps').src = `${playerChoice}.png`;
    document.getElementById('cs').src = `${computerChoice}.png`;

    if(ps == 10){
        document.write("<h1 >You win the match</h1>");
    }
    else if(cs == 10){
        document.write("<h1>You lose the match</h1>");
    }
    else{
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('resultText').innerText = result;
    }
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        ps += 1;
        document.getElementById("playerscore").innerHTML = "Your score "+ ps;
        return 'You win!';

    } else {
        cs += 1;
        document.getElementById("computerscore").innerHTML = "Computer score " + cs;
        return 'Computer wins!';
    }
}