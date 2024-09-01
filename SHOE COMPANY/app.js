let btn1 = document.querySelector("#btn1");

let list = document.querySelector("#lst");

let logo = document.querySelector("#logo");

let btn2 = document.querySelector("#btn2");

let front = document.querySelector("#page2")

btn1.addEventListener("click" , () => {
    list.classList.remove("hidden");
    list.classList.add("abc");
    front.classList.add("hidden")
    btn1.classList.add("hidden");
    btn2.classList.remove("hidden");
    logo.classList.add("mb-[200px]");
   
    

});

btn2.addEventListener("click" , () => {
    btn2.classList.add("hidden");
    list.classList.add("hidden");
    list.classList.add("left-[400px]");
    btn1.classList.remove("hidden");
    front.classList.remove("hidden")

})