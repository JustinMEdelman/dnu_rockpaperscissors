document.getElementById("rockpaperscissorForm").onsubmit = function(){warWinner()};


function getWeapon(){
    let selectedWeapon = document.querySelector('input[name="weapon"]:checked').value;
    if (selectedWeapon){
    return selectedWeapon;
}
}

let compWeapon = function(){
    let compNumber = Math.floor(Math.random() * 3);
    //console.log(compNumber);
    switch (compNumber) {
        case 0: return 'rock';
        case 1: return 'scissor';
        case 2: return 'paper';
    }
   }

   let compCount = 0;
   let userCount = 0;
   let tieCount = 0;

function warWinner(){
    let compFunction = compWeapon();
    let userWeapon = getWeapon();
    let winCount = 2;  //set number needed to win here
    let winnerElement = document.getElementById('results');
    document.getElementById('computer').innerHTML = `Computer weapon = ${compFunction}`;
    if(userCount == winCount){
        winnerElement.textContent = `You win with ${winCount} points!`;
        document.getElementById("rockpaperscissorForm").style.display = "none";
        document.getElementById("userWinner").style.fontWeight = "600";

    } else if (compCount == winCount){
        winnerElement.textContent = `Computer wins with ${winCount} points!`;
        document.getElementById("rockpaperscissorForm").style.display = "none";
        document.getElementById("computerWinner").style.fontWeight = "600";
    } else {
    if (compFunction === userWeapon){
        winnerElement.innerHTML = 'Its a tie!';
        tieCount += 1;
        document.getElementById("tieCount").textContent = tieCount;
    } else if ((userWeapon === 'rock' && compFunction === 'scissor')||
               (userWeapon === 'paper' && compFunction === 'rock')||
               (userWeapon === 'scissor' && compFunction === 'paper')){
        winnerElement.innerHTML = `You win, ${userWeapon} beats ${compFunction}`;
        userCount += 1;
        document.getElementById("userWinCount").textContent = userCount;
    } else {
        winnerElement.innerHTML = `Computer wins, ${compFunction} beats ${userWeapon}`;
        compCount += 1;
        document.getElementById("compWinCount").textContent = compCount;
    }
}
}

