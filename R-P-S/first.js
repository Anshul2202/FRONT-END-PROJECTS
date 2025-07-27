let options = document.querySelectorAll(".options");
let userScore = document.querySelector("#user");
let compScore = document.querySelector("#comp");
let drawNum = document.querySelector("#draw");
let msg1 = document.querySelector("#msg1");
let msgContainer = document.querySelector(".display");
let rstBtn = document.querySelector("#rst");

let userSrc = 0;
let compSrc = 0;
let draw = 0;
msg1.style.color = "cornsilk";

function updateUserScore(){
        userScore.innerText = `USER SCORE = ${userSrc}`;
}

function updateCompScore(){
        compScore.innerText = `USER SCORE = ${compSrc}`;
}

function compPlay(){
    let chances = ["rock" , "paper" , "scissors"];
    let idx  = Math.floor(Math.random() * 3);
    return chances[idx];
}


function diplayMsg(winner){
    msg1.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("display");

}


function reset(){
    userSrc = 0;
    compSrc = 0;
    draw = 0;
    updateUserScore();
    updateCompScore();
    drawNum.innerText = `DRAW = ${draw}`;
    msgContainer.classList.add("display");
}



function changeColorUser(winner){

    if(winner ==="user"){
        msg1.style.backgroundColor = "rgba(21, 207, 36 ,0.8)";
    } else if(winner ==="comp"){
        msg1.style.backgroundColor = "rgba(253, 33, 33,0.8)";
    }
}


function checkWinner(user , comp){
    if(user === comp){
        draw++;
        drawNum.innerText = `DRAW = ${draw}`;
        msg1.innerText = "It's A Draw!";
        msg1.style.backgroundColor = "rgba(30, 104, 253 ,0.8)";
    } else if(user ==="rock" && comp ==="scissors"){
        userSrc++;
        updateUserScore();
        diplayMsg("USER");
        changeColorUser("user");
    } else if(user === "scissors" && comp ==="rock"){
        compSrc++;
        updateCompScore();
        diplayMsg("COMPUTER");
        changeColorUser("comp");
    } else if(user === "paper" && comp ==="scissors"){
        compSrc++;
        updateCompScore();
        diplayMsg("COMPUTER");
        changeColorUser("comp");
    } else if(user === "scissors" && comp ==="paper"){
        userSrc++;
        updateUserScore();
        diplayMsg("USER");
        changeColorUser("user")
    } else if(user === "paper" && comp ==="rock"){
        userSrc++;
        updateUserScore();
        diplayMsg("USER");
        changeColorUser("user")
    } else if(user === "rock" && comp ==="paper"){
        compSrc++;
        updateCompScore();
        diplayMsg("COMPUTER");
        changeColorUser("comp");
    }
}

for(let i of options){
    i.addEventListener("click" , () => {
        let userChoice = i.getAttribute("id");
        let compChoice = compPlay();

        checkWinner(userChoice , compChoice);
        
    })
}

rstBtn.addEventListener("click" , () => {
    reset();
})