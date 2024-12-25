const SnavTwo = document.getElementById('SibTwo')
SnavTwo.addEventListener("click", dropiNG)
let sState = true
function dropiNG() {
    switch (sState) {
        case true:
            document.getElementById("SuiTwo").className = "Sdropdown";
            document.getElementById("SuiThree").className = "Sdrop";
            document.getElementById("SuiFour").className = "Sdrop";
            document.getElementById("SuiFive").className = "Sdrop";
            document.getElementById("SuiSix").className = "Sdrop";
            sState = false;
            sStateThree = true;
            sStateFour = true;
            sStateFive = true;
            sStateSix = true;
            break;
        case false:
            document.getElementById("SuiTwo").className = "Sdrop";
            sState = true;
            break;
    }
}
const SnavThree = document.getElementById('SibThree')
SnavThree.addEventListener("click", dropiNGThree)
let sStateThree = true
function dropiNGThree() {
    switch (sStateThree) {
        case true:
            document.getElementById("SuiTwo").className = "Sdrop";
            document.getElementById("SuiThree").className = "Sdropdown";
            document.getElementById("SuiFour").className = "Sdrop";
            document.getElementById("SuiFive").className = "Sdrop";
            document.getElementById("SuiSix").className = "Sdrop";
            sState = true;
            sStateThree = false;
            sStateFour = true;
            sStateFive = true;
            sStateSix = true;
            break;
        case false:
            document.getElementById("SuiThree").className = "Sdrop";
            sStateThree = true;
            break;
    }
}
const SnavFour = document.getElementById('SibFour')
SnavFour.addEventListener("click", dropiNGFour)
let sStateFour = true
function dropiNGFour() {
    switch (sStateFour) {
        case true:
            document.getElementById("SuiTwo").className = "Sdrop";
            document.getElementById("SuiThree").className = "Sdrop";
            document.getElementById("SuiFour").className = "Sdropdown";
            document.getElementById("SuiFive").className = "Sdrop";
            document.getElementById("SuiSix").className = "Sdrop";
            sState = true;
            sStateThree = true;
            sStateFour = false;
            sStateFive = true;
            sStateSix = true;
            break;
        case false:
            document.getElementById("SuiFour").className = "Sdrop";
            sStateFour = true;
            break;
    }
}
const SnavFive = document.getElementById('SibFive')
SnavFive.addEventListener("click", dropiNGFive)
let sStateFive = true
function dropiNGFive() {
    switch (sStateFive) {
        case true:
            document.getElementById("SuiTwo").className = "Sdrop";
            document.getElementById("SuiThree").className = "Sdrop";
            document.getElementById("SuiFour").className = "Sdrop"
            document.getElementById("SuiFive").className = "Sdropdown";
            document.getElementById("SuiSix").className = "Sdrop";
            sState = true;
            sStateThree = true;
            sStateFour = true;
            sStateFive = false;
            sStateSix = true;
            break;
        case false:
            document.getElementById("SuiFive").className = "Sdrop"
            sStateFive = true;
            break;
    }
}
const SnavSix = document.getElementById('SibSix')
SnavSix.addEventListener("click", dropiNGSix)
let sStateSix = true;
function dropiNGSix() {
    switch (sStateSix) {
        case true:
            document.getElementById("SuiTwo").className = "Sdrop";
            document.getElementById("SuiThree").className = "Sdrop";
            document.getElementById("SuiFour").className = "Sdrop";
            document.getElementById("SuiFive").className = "Sdrop";
            document.getElementById("SuiSix").className = "Sdropdown";
            sState = true;
            sStateThree = true;
            sStateFour = true;
            sStateFive = true;
            sStateSix = false;
            break;
        case false:
            document.getElementById("SuiSix").className = "Sdrop"
            sStateSix = true;
            break;
    }
}
