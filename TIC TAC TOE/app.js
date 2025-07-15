let boxes = document.querySelectorAll(".box");
let display = document.querySelector(".display");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#newBtn");
let reset = document.querySelector("#reset");

let turn = true;

for(let i of boxes){
    i.addEventListener("click" , () => {
        if(turn === true){
            i.innerText = "X";
            turn = false;
            i.disabled = true;
            checkWinner();
        } else if(turn === false){
            i.innerText = "O";
            turn = true;
            i.disabled = true;
            checkWinner();
        }
    })
    
}

function vanish(){
    for(let i of boxes){
        i.innerText = "";
        i.disabled = false;

    }
}

function NewGame(){
    turn = true;
    vanish();
    display.classList.add("hide");
}

function block(){
    for(let i of boxes){
        i.disabled = true;
    }
}

function displayWinner(winner) {
    msg.innerText = `Winner is ${winner}`;
    display.classList.remove("hide");
}



let winPattern = [[0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]];

function checkWinner (){
    
    for(let i of winPattern){
        let val1 = boxes[i[0]].innerText;
        let val2 = boxes[i[1]].innerText;
        let val3 = boxes[i[2]].innerText;

        if(val1 === "X" && val2 ==="X" && val3 === "X"){
            console.log("winner is X");
            displayWinner("X");
            block();
        } else if(val1 === "O" && val2 ==="O" && val3 === "O"){
            console.log("winner is O");
            displayWinner("O");
            block();
        }

    }

}

newBtn.addEventListener("click" , NewGame);

reset.addEventListener("click" , NewGame);