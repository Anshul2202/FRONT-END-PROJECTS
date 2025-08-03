let dropDown = document.querySelectorAll("select");
let a = true;
let flag1 = document.querySelector("#flag1");
let flag2 = document.querySelector("#flag2");
let btn = document.querySelector("button");
let inputTab = document.querySelector("input");
let displayRes = document.querySelector("#result");

let opt1 = document.querySelector("#option1");
let opt2 = document.querySelector("#option2");


let exchangeRate;
let baseUrl = "https://v6.exchangerate-api.com/v6/b6f03a9cd9190ab773d62722/latest/USD";

(async function (){
    let data = await fetch(baseUrl);
    let realData = await data.json();

    exchangeRate = realData.conversion_rates;
}) ();


for (let i in countryList){
    for(let j of dropDown){
        let newOption = document.createElement("option");
        newOption.innerText = i;
        if(i == "USD" && a == true){
            newOption.selected = "selected";
            a = false;
        } else if(i == "INR" && a == true){
            newOption.selected = "selected";
        }
        j.append(newOption);

    }
}


for(let i of dropDown){
    i.addEventListener("change" , (evt ) => {
        let imgTag = i.parentElement.parentElement.children[0];

        changeFlag(countryList[evt.target.value] , imgTag);

    })
}



function changeFlag(id , tag){
    tag.setAttribute("src" , `https://flagsapi.com/${id}/flat/64.png` );
}



let val1 = "USD" ;
let val2 = "INR";
opt1.addEventListener("change" , (evt) => {
    val1 = evt.target.value;
})

opt2.addEventListener("change" , (evt) => {
    val2 = evt.target.value;

})

let exVal1 , exVal2 , inputVal , finalVal;

btn.addEventListener("click" , () => {

    exVal1 = exchangeRate[val1];
    exVal2 = exchangeRate[val2];
    inputVal = inputTab.value;
    
    finalVal = (exVal2 / exVal1) * inputVal;
    displayRes.innerText = `${inputVal}${val1} = ${finalVal}${val2}`;

})

