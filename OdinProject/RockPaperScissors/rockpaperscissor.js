document.getElementById("rockpaperscissorForm").onsubmit = function(){warWinner()};


function getWeapon(){
    let selectedWeapon = document.querySelector('input[name="weapon"]:checked').value;
    if (selectedWeapon){
    return selectedWeapon;
}
}

let compWeapon = function(){
    let compNumber = Math.floor(Math.random() * 3);
    console.log(compNumber);
    switch (compNumber) {
        case 0: return 'rock';
        case 1: return 'scissor';
        case 2: return 'paper';
    }
   }


function warWinner(){
    let compFunction = compWeapon();
    let userWeapon = getWeapon();
    let compCount = 0;
    let userCount = 0;
    let tieCount = 0;
    let winnerElement = document.getElementById('results');
    document.getElementById('computer').innerHTML = `Computer weapon = ${compFunction}`;
    if (compFunction === userWeapon){
        winnerElement.innerHTML = 'Its a tie!';
        tieCount ++ ;
    } else if (userWeapon === 'rock' && compFunction === 'scissor'){
        winnerElement.innerHTML = `You win, ${userWeapon} beats ${compFunction}`;
        userCount++;
    }else if (userWeapon === 'scissor' && compFunction === 'paper'){
        winnerElement.innerHTML = `You win, ${userWeapon} beats ${compFunction}`;
        userCount++;
    }else if (userWeapon === 'paper' && compFunction === 'rock'){
        winnerElement.innerHTML = `You win, ${userWeapon} beats ${compFunction}`;
        userCount++;
    } else {
        winnerElement.innerHTML = `Computer wins, ${compFunction} beats ${userWeapon}`;
        compCount++;
    }
}


