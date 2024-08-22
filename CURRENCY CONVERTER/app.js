let dropDown1 = document.querySelector(".dropDown1");

let flag1 = document.querySelector(".flag1");

let code1;

for(let i in countryList){
    let opt1 = document.createElement("option");
    dropDown1.append(opt1);
    opt1.innerText = i;
    opt1.classList.add(i);

    let abc = document.querySelector(".USD");

    if(abc){
        if(abc.innerText =="USD"){
            abc.selected ="selected";
        }
    }

    dropDown1.addEventListener("change" , (i) => {
        changeFlag1(i.target.value);
        code1 = i.target.value;
    })

}


function changeFlag1(i) {
    let countryCode = countryList[i];
    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
    flag1.src = newSrc;
}    

//------------------------2ND DROPDOWN----------------------//


let dropDown2 = document.querySelector(".dropDown2");

let code2;
for(let i in countryList){
    let opt2 = document.createElement("option");
    dropDown2.append(opt2);
    opt2.innerText= i;
    opt2.classList.add(`${i}2`);

    let xyz = document.querySelector(".INR2");

    if(xyz){
        if(xyz.innerText == "INR"){
            xyz.selected = "selected";
        }
    }


    dropDown2.addEventListener("change" , (i) => {
        
        changeFlag2(i.target.value);
        code2 = i.target.value;
        
        })
  
    
}

let flag2 = document.querySelector(".flag2");


function changeFlag2 (i) {
    let countryCode = countryList[i];

    newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    flag2.src = newSrc;
}




let url = "https://v6.exchangerate-api.com/v6/b6f03a9cd9190ab773d62722/latest/USD";

let allCodes;
(async function ()  {
    let exchange =await fetch(url);

    let abc = await exchange.json();

    allCodes = abc.conversion_rates;

}) ();



let btn = document.querySelector("#btn");

btn.addEventListener("click" , (i) => {
    i.preventDefault();
    changeRate();
})


let inputBar = document.querySelector("#amount");

let result = document.querySelector("#result");

function abc () {
    console.log(inputBar.value);
}


function changeRate () {
    let firstRate = allCodes[code1];
    let secondRate = allCodes[code2];

    let halfResult = inputBar.value / firstRate;
    let finalResult = halfResult * secondRate;

    result.innerText = `${inputBar.value} ${code1} = ${finalResult} ${code2}`;
}
