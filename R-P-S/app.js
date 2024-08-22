let userScore = document.querySelector("#user");

let compScore = document.querySelector("#comp");

let choices = document.querySelectorAll(".options");


let options = [ "rock" , "paper" , "scissors"];

let user ="";

let comp ="";


choices.forEach( (i) => {

    let trackClick = () => {
       user= i.getAttribute("id");
       comp = options[Math.floor(Math.random()*3)];
       checkWinner();
    }

    i.addEventListener( "click" , trackClick)
})



let a = 0;

let b = 0;

let c=0;

let draw = document.querySelector("#draw");


let checkWinner = () => {

    if (user == "rock" && comp == "paper"){
        compScore.innerText = `COMP SCORE = ${++b}`;
    }else if(user == "rock" && comp =="scissors"){
        userScore.innerText = `USER SCORE = ${++a}`;
    }else if(user == "paper" && comp =="rock"){
        userScore.innerText = `USER SCORE = ${++a}`;
    }else if(user == "paper" && comp =="scissors"){
        compScore.innerText = `COMP SCORE = ${++b}`;
    }else if(user == "scissors" && comp =="rock"){
        compScore.innerText = `COMP SCORE = ${++b}`;
    }else if(user == "scissors" && comp =="paper") {
        userScore.innerText = `USER SCORE = ${++a}`;
    }else {
        draw.innerText = `DRAW = ${++c}`;
    }
    
}


let restart = document.querySelector("#rst");

let btn = () => {
    a = 0;
    b=0;
    c=0;
    userScore.innerText = `USER SCORE = ${a}`;
    draw.innerText = `DRAW = ${c}`;
    compScore.innerText = `COMP SCORE = ${b}`;
}


restart.addEventListener("click" , btn);