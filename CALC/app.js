let allClear = document.querySelector("#delAll");
let percent = document.querySelector("#percent");
let del = document.querySelector("#del");
let divide = document.querySelector("#divide");
let mult = document.querySelector("#mult");
let min = document.querySelector("#min");
let add = document.querySelector("#add");
let dot = document.querySelector("#dot");
let enter = document.querySelector("#enter");



for( let i=0 ; i<=11 ; i++){

    let btni = document.querySelector(`#btn${i}`);
   
}

let display = document.querySelector("#display");
let result = "";
let store = '';

btn1.addEventListener("click" , () => {
        
    result = result + '1';
    store = store +"1";
    display.innerText = result;
})

btn2.addEventListener("click" , () => {
        
    result = result + '2';
    store = store +"2";
    display.innerText = result;
})

btn3.addEventListener("click" , () => {
        
    result = result + '3';
    store = store +"3";
    display.innerText = result;
})

btn4.addEventListener("click" , () => {
        
    result = result + '4';
    store = store +"4";
    display.innerText = result;
})


btn5.addEventListener("click" , () => {
        
    result = result + '5';
    store = store +"5";
    display.innerText = result;
})

btn6.addEventListener("click" , () => {
        
    result = result + '6';
    store = store +"6";
    display.innerText = result;
})
btn7.addEventListener("click" , () => {
        
    result = result + '7';
    store = store +"7";
    display.innerText = result;
})

btn8.addEventListener("click" , () => {
        
    result = result + '8';
    store = store +"8";
    display.innerText = result;
})

btn9.addEventListener("click" , () => {
        
    result = result + '9';
    store = store +"9";
    display.innerText = result;
})

btn10.addEventListener("click" , () => {
        
    result = result + '00';
    store = store +"00";
    display.innerText = result;
})

btn0.addEventListener("click" , () => {
        
    result = result + '0';
    store = store +"0";
    display.innerText = result;
})

allClear.addEventListener("click" , () => {
        
    result = '';
    store = "";
    display.innerText = result;
})


del.addEventListener("click" , () => {
    result = result.slice(0 , -1);
    store = store.slice(0 , -1);
    display.innerText = result;
})

divide.addEventListener("click" , () => {
    result = result + '/';
    display.innerText = result;
    store = store +"/";
})

mult.addEventListener("click" , () => {
    result = result + "x";
    display.innerText = result;
    store = store +"*";
})

min.addEventListener("click" , () => {
    result = result + "-";
    display.innerText = result;
    store = store +"-";
})


add.addEventListener("click" , () => {
    result = result + "+";
    display.innerText = result;
    store = store +"+";

})

dot.addEventListener("click" , () => {
    if(result == "" || store == ""){
        result = "0."
        store = "0.";
    }else if (result !== "" || store !== ""){
        result = result + "."
        store = store +".";
    }
    display.innerText = result;
})


enter.addEventListener("click" , (i) => {
    i.preventDefault();
    let abc = eval(store);
    display.innerText = abc;
})
