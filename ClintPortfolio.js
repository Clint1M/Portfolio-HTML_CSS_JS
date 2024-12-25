const fbOne = document.getElementById('ibTwo')
fbOne.addEventListener("click", dropiT)
let state = true
function dropiT() {
    switch (state) {
        case true:
            document.getElementById("uiTwo").className = "dropdown";
            document.getElementById("uiThree").className = "drop";
            document.getElementById("uiFour").className = "drop";
            document.getElementById("uiFive").className = "drop";
            document.getElementById("uiSix").className = "drop";
            state = false;
            stateTwo = true;
            stateThree = true;
            stateFour = true;
            stateFive = true;
            break;
        case false:
            document.getElementById("uiTwo").className = "drop";
            state = true;
            break;
    }
}
const fbTwo = document.getElementById('ibThree')
fbTwo.addEventListener("click", dropiTTwo)
let stateTwo = true
function dropiTTwo() {
    switch (stateTwo) {
        case true:
            document.getElementById("uiTwo").className = "drop";
            document.getElementById("uiThree").className = "dropdown";
            document.getElementById("uiFour").className = "drop";
            document.getElementById("uiFive").className = "drop";
            document.getElementById("uiSix").className = "drop";
            state = true;
            stateTwo = false;
            stateThree = true;
            stateFour = true;
            stateFive = true;
            break;
        case false:
            document.getElementById("uiThree").className = "drop";
            stateTwo = true;
            break;
    }
}
const fbThree = document.getElementById('ibFour')
fbThree.addEventListener("click", dropiTThree)
let stateThree = true
function dropiTThree() {
    switch (stateThree) {
        case true:
            document.getElementById("uiTwo").className = "drop";
            document.getElementById("uiThree").className = "drop";
            document.getElementById("uiFour").className = "dropdown";
            document.getElementById("uiFive").className = "drop";
            document.getElementById("uiSix").className = "drop";
            state = true;
            stateTwo = true;
            stateThree = false;
            stateFour = true;
            stateFive = true;
            break;
        case false:
            document.getElementById("uiFour").className = "drop";
            stateThree = true;
            break;
    }
}
const fbFour = document.getElementById('ibFive')
fbFour.addEventListener("click", dropiTFour)
let stateFour = true
function dropiTFour() {
    switch (stateFour) {
        case true:
            document.getElementById("uiTwo").className = "drop";
            document.getElementById("uiThree").className = "drop";
            document.getElementById("uiFour").className = "drop";
            document.getElementById("uiFive").className = "dropdown";
            document.getElementById("uiSix").className = "drop";
            state = true;
            stateTwo = true;
            stateThree = true;
            stateFour = false;
            stateFive = true;
            break;
        case false:
            document.getElementById("uiFive").className = "drop";
            stateFour = true;
            break;
    }
}
const fbFive = document.getElementById('ibSix')
fbFive.addEventListener("click", dropiTFive)
let stateFive = true
function dropiTFive() {
    switch (stateFive) {
        case true:
            document.getElementById("uiTwo").className = "drop";
            document.getElementById("uiThree").className = "drop";
            document.getElementById("uiFour").className = "drop";
            document.getElementById("uiFive").className = "drop";
            document.getElementById("uiSix").className = "dropdown";
            state = true;
            stateTwo = true;
            stateThree = true;
            stateFour = true;
            stateFive = false;
            break;
        case false:
            document.getElementById("uiSix").className = "drop";
            stateFive = true;
            break;
    }
}

