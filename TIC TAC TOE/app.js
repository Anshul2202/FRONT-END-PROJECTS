let boxes = document.querySelectorAll(".box");


let abc = true;


boxes.forEach((i) => {

   let task = () => {
      if(abc == true){
         i.innerText ="X";
         abc = false;
         i.disabled = true;
         checkWinner();
      }else if(abc == false){
         i.innerText ="O";
         abc = true;
         i.disabled = true;
         checkWinner();
      }
   }
   
   i.addEventListener("click" , task);


     
})

let chances = [ [0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]];

let bigBox =document.querySelector(".bigBox");

let checkWinner = () => {
   
   for (let i of chances){

     if(boxes[i[0]].innerText =="X" && boxes[i[1]].innerText =="X" && boxes[i[2]].innerText == "X"){


      bigBox.innerText = "Winner Is X [Reload This Page To Play Again]";
      bigBox.style.backgroundColor = "ffafcc";
      bigBox.style.fontSize = "50px";
      bigBox.style.border =" 2px solid black";
      bigBox.style.borderRadius = "10px";
      bigBox.style.width = "1200px";
      bigBox.style.position = "relative";
      bigBox.style.left = "120px";
      bigBox.style.color = "white";


     }else if(boxes[i[0]].innerText =="O"&& boxes[i[1]].innerText =="O" && boxes[i[2]].innerText == "O"){


      bigBox.innerText = "Winner Is O [Reload This Page To Play Again]";
      bigBox.style.backgroundColor = "ffafcc";
      bigBox.style.fontSize = "50px";
      bigBox.style.border =" 2px solid black";
      bigBox.style.borderRadius = "10px";
      bigBox.style.width = "1200px";
      bigBox.style.position = "relative";
      bigBox.style.left = "120px";
      bigBox.style.color = "white";
     }

}


}



let reset = document.querySelector("#reset-btn");

let set = () => {
   boxes.forEach((i) => {
      i.innerText = "";
      i.disabled = false;
   })
 
 
}


reset.addEventListener("click" , set);
