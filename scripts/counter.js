let counter = 0;
let counter2 = 0;
/*This is for the first ELement*/
const zeroCounter = document.getElementById("zero-counter");
const btns = document.querySelectorAll(".btn");
/*Lets see if works with the second one*/
const zeroCounter2 = document.getElementById("zero-counter2");

btns.forEach(function (btn){

    btn.addEventListener("click", function(e) {

        let longArr = e.currentTarget.classList;

        if(longArr.contains("addition")){
            counter ++
        }
        else if(longArr.contains("sustraction")) {
            counter --
        }
        else{
            counter = 0
        }
        if (counter > 0){
            zeroCounter.style.color = "green"
        }
        else if(counter < 0) {
            zeroCounter.style.color = "red"
        }
        else {
            zeroCounter.style.color = "black"
        }
        zeroCounter.textContent = counter;
    })
})

btns.forEach(function (btn){

    btn.addEventListener("click", function(e) {

        let longArr = e.currentTarget.classList;

        if(longArr.contains("addition")){
            counter2 ++
        }
        else if(longArr.contains("sustraction")) {
            counter2 --
        }
        else{
            counter2 = 0
        }
        if (counter2 > 0){
            zeroCounter2.style.color = "green"
        }
        else if(counter2 < 0) {
            zeroCounter2.style.color = "red"
        }
        else {
            zeroCounter2.style.color = "black"
        }
        zeroCounter2.textContent = counter2;
    })
})
// zeroCounter2.addEventListener("function")