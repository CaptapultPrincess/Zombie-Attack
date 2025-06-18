let progression = 1
let btnZ = document.querySelector(".quiz-opt-z")
let btnS = document.querySelector(".quiz-opt-s")
let btnV = document.querySelector(".quiz-opt-v")
let btnH = document.querySelector(".quiz-opt-h")
let btnC = document.querySelector(".quiz-opt-c")
let btnD = document.querySelector(".quiz-opt-d")
let btnB = document.querySelector(".quiz-opt-b")
let btnF = document.querySelector(".quiz-opt-f")

btnZ.addEventListener("click", function() {
    document.querySelector(".quiz-box-" + progression).style.display = "none";
    document.querySelector(".quiz-box-" + progression).style.zIndex = -1
    progression++;
    document.querySelector(".quiz-box-" + progression).style.zIndex = 1

    console.log(document.querySelector(".quiz-box-" + progression).style.zIndex);

});

btnS.addEventListener("click", function() {
    document.querySelector(".quiz-box-" + progression).style.display = "none";
    progression++;
    console.log(btnS);

});

btnV.addEventListener("click", function() {
    document.querySelector(".quiz-box-" + progression).style.display = "none";
    progression++;
    console.log(btnV);

});

btnH.addEventListener("click", function() {
    document.querySelector(".quiz-box-" + progression).style.display = "none";
    progression++;
    console.log(btnH);

});

btnC.addEventListener("click", function() {
    document.querySelector(".quiz-box-" + progression).style.display = "none";
    progression++;
    console.log(btnC);

});

btnD.addEventListener("click", function() {
    document.querySelector(".quiz-box-" + progression).style.display = "none";
    progression++;
    console.log(btnD);

});

btnB.addEventListener("click", function() {
    document.querySelector(".quiz-box-" + progression).style.display = "none";
    progression++;
    console.log(btnB);

});

btnF.addEventListener("click", function() {
    console.log("Hello")
    document.querySelector(".quiz-box-" + progression).style.display = "none";
    progression++;
    console.log(btnF);

});