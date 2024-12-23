const SnavTwo = document.getElementById('SibTwo')
SnavTwo.addEventListener("click", dropiNG)
let sState = false
function dropiNG() {
    switch (sState) {
        case true:
            document.getElementById("SuiTwo").className = "Sdropdown";
            sState = false;
            break;
        case false:
            document.getElementById("SuiTwo").className = "Sdrop";
            sState = true;
            break;
    }
}
const SnavThree = document.getElementById('SibThree')
SnavThree.addEventListener("click", dropiNGThree)
let sStateThree = false
function dropiNGThree() {
    switch (sStateThree) {
        case true:
            document.getElementById("SuiThree").className = "Sdropdown";
            sStateThree = false;
            break;
        case false:
            document.getElementById("SuiThree").className = "Sdrop";
            sStateThree = true;
            break;
    }
}
const SnavFour = document.getElementById('SibFour')
SnavFour.addEventListener("click", dropiNGFour)
let sStateFour = false
function dropiNGFour() {
    switch (sStateFour) {
        case true:
            document.getElementById("SuiFour").className = "Sdropdown";
            sStateFour = false;
            break;
        case false:
            document.getElementById("SuiFour").className = "Sdrop";
            sStateFour = true;
            break;
    }
}
const SnavFive = document.getElementById('SibFive')
SnavFive.addEventListener("click", dropiNGFive)
let sStateFive = false
function dropiNGFive() {
    switch (sStateFive) {
        case true:
            document.getElementById("SuiFive").className = "Sdropdown"
            sStateFive = false;
            break;
        case false:
            document.getElementById("SuiFive").className = "Sdrop"
            sStateFive = true;
            break;
    }
}
const SnavSix = document.getElementById('SibSix')
SnavSix.addEventListener("click", dropiNGSix)
let sStateSix = false;
function dropiNGSix() {
    switch (sStateSix) {
        case true:
            document.getElementById("SuiSix").className = "Sdropdown"
            sStateSix = false;
            break;
        case false:
            document.getElementById("SuiSix").className = "Sdrop"
            sStateSix = true;
            break;
    }
}