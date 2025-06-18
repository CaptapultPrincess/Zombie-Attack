let progression = 1;
const btnZ = document.querySelectorAll(".quiz-opt-z");
const btnS = document.querySelectorAll(".quiz-opt-s");
const btnV = document.querySelectorAll(".quiz-opt-v");
const btnH = document.querySelectorAll(".quiz-opt-h");
const btnC = document.querySelectorAll(".quiz-opt-c");
const btnD = document.querySelectorAll(".quiz-opt-d");
const btnB = document.querySelectorAll(".quiz-opt-b");
const btnF = document.querySelectorAll(".quiz-opt-f");
let result = document.querySelector(".quiz-box-12");
let endTxt = document.querySelector(".end-txt");
let endP = document.querySelector(".end-p");


let endZ = 0;
let endS = 0;
let endV = 0;
let endH = 0;
let endC = 0;
let endD = 0;
let endB = 0;
let endF = 0;


document.querySelector(".quiz-box-1").style.display = "block";
//const buttons = document.querySelectorAll('.myButton');

btnZ.forEach(div => {
    div.addEventListener('click',() => {
        document.querySelector(".quiz-box-" + progression).style.display = "none";
        progression++;
        document.querySelector(".quiz-box-" + progression).style.display = "block";
        console.log(endZ);
        endZ++;
    });
});

btnS.forEach(div => {
    div.addEventListener('click',() => {
        document.querySelector(".quiz-box-" + progression).style.display = "none";
        progression++;
        document.querySelector(".quiz-box-" + progression).style.display = "block";
        console.log(endS);
        endS++;
    });
});

btnV.forEach(div => {
    div.addEventListener('click',() => {
        document.querySelector(".quiz-box-" + progression).style.display = "none";
        progression++;
        document.querySelector(".quiz-box-" + progression).style.display = "block";
        console.log(endV);
        endV++;
    });
});

btnH.forEach(div => {
    div.addEventListener('click',() => {
        document.querySelector(".quiz-box-" + progression).style.display = "none";
        progression++;
        document.querySelector(".quiz-box-" + progression).style.display = "block";
        console.log(endH);
        endH++;
    });
});

btnC.forEach(div => {
    div.addEventListener('click',() => {
        document.querySelector(".quiz-box-" + progression).style.display = "none";
        progression++;
        document.querySelector(".quiz-box-" + progression).style.display = "block";
        console.log(endC);
        endC++;
    });
});

btnD.forEach(div => {
    div.addEventListener('click',() => {
        document.querySelector(".quiz-box-" + progression).style.display = "none";
        progression++;
        document.querySelector(".quiz-box-" + progression).style.display = "block";
        console.log(endD);
        endD++;
    });
});

btnB.forEach(div => {
    div.addEventListener('click',() => {
        document.querySelector(".quiz-box-" + progression).style.display = "none";
        progression++;
        document.querySelector(".quiz-box-" + progression).style.display = "block";
        console.log(endB);
        endB++;
    });
});

btnF.forEach(div => {
    div.addEventListener('click',() => {
        document.querySelector(".quiz-box-" + progression).style.display = "none";
        progression++;
        document.querySelector(".quiz-box-" + progression).style.display = "block";
        console.log(endF);
        endF++;
    });
});

result.addEventListener('click', function() {
    let combined = [endZ, endS, endV, endH, endC, endD, endB, endF];
    let winner = Math.max(...combined);
    if (endS === winner){
        endTxt.innerHTML = "A Survivor";
        endP.innerHTML = "You are a survivor, the main character, you do what it takes to survive and nothing more. You are able to adapt to the changing world and would survive a Zombie Apocalypse just long enough for help to arrive.";

    }else if(endV === winner){
        endTxt.innerHTML = "A Fighter";
        endP.innerHTML = "You are not afraid of the zombies, the zombies are afraid of you. You learn how to fight the incoming raid really fast. Using whatever you have, you are able to fend of the zombies, you don't need help to arrive.";

    }else if(endH === winner){
        endTxt.innerHTML = "A Medic";
        endP.innerHTML = "You provide aid to your own wounds and the wounds of your friends. You may not be a fighter but you know your books. With some allies, you will be the reason they all survive, but alone you might struggle to survive";

    }else if(endC === winner){
        endTxt.innerHTML = "The Cure";
        endP.innerHTML = "Using your knowledge, you are able to develop the cure to the infection. With a little protection, it won't take long for you to find the solution, saving the world and humanity.";


    }else if(endB === winner){
        endTxt.innerHTML = "A Backstabber"
        endP.innerHTML = "You survive, but at what cost? You sabatage your friends to save yourself, but hey, you did survive.";


    }else if(endF === winner){
        endTxt.innerHTML = "A Friend";
        endP.innerHTML = "You make friends fast, even with the zombies. Using soft but convincing language, you help the zombies and humans to unite. You find peace together.";


    }else if(endD === winner){
        endTxt.innerHTML = "Dead";
        endP.innerHTML = "You may be great at some things, but surviving a zombie apocalypse is not one them. You struggle to fend of the raid, and sadly don't make it.";


    }else if(endZ === winner){
        endTxt.innerHTML = "A Zombie Psychopath";
        endP.innerHTML = "Forgot about surviving a zombie acpocalyspe, you are for it. You see zombies as the key to immorality, and accept your fate as a zombie.";


    }else{
        endTxt.innerHTML = "Broken";
        endP.innerHTML = "How did you manage to get this?";
    }








    document.querySelector(".quiz-box").style.display = "block";
});