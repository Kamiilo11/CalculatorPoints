//Casino selectors
const mainBtnCasino = document.querySelector(".main-buttons-casino");
const casinoSection = document.querySelector(".casino_section");
const casinoInfoBtn = document.querySelector(".casino_iic-button");
const casinoImportInfo = document.querySelector(".casino-iic-text");
const casinoImportIcon = document.querySelector(".casino_iic-icon");


//Sports selector
const mainBtnSport = document.querySelector(".main-buttons-sports");
const sportSection = document.querySelector(".sports_section");
const sportInfoBtn = document.querySelector(".sports_iic-button");
const sportImportInfo = document.querySelector(".sports-iic-text");
const sportImportIcon = document.querySelector(".sports_iic-icon");
//Sports odds selection buttons and sections
const singleOddBtn = document.querySelector(".sports_buttons-single");
const singleOddSect = document.querySelector(".sports_odds_single_container");


console.log(singleOddSect.style.zIndex);
console.log(casinoSection);
console.log(sportSection);


//add event listeners

//big sections listeners
mainBtnCasino.addEventListener("click", () => {
    if (casinoSection.style.display == "" || sportSection.style.display == "block") {
        casinoSection.style.display = "block";
        sportSection.style.display = "";
    } else {
        casinoSection.style.display = "";
    }
})

mainBtnSport.addEventListener("click", () => {
    if (sportSection.style.display == "" || casinoSection.style.display == "block") {
        sportSection.style.display = "block";
        casinoSection.style.display = "";
    } else {
        sportSection.style.display = "";
    }
})

//important info sections

casinoInfoBtn.addEventListener("click", () => {
    if (casinoImportInfo.style.display == "") {
        casinoImportInfo.style.display = "block";
        casinoImportIcon.style.rotate = "90deg";

    } else {
        casinoImportInfo.style.display = "";
        casinoImportIcon.style.rotate = "";
    }
})

sportInfoBtn.addEventListener("click", () => {
    if (sportImportInfo.style.display == "") {
        sportImportInfo.style.display = "block";
        sportImportIcon.style.rotate = "90deg";

    } else {
        sportImportInfo.style.display = "";
        sportImportIcon.style.rotate = "";
    }
})

//Sports bet Odds section function still not working, changes have to be made

singleOddBtn.addEventListener("click", () => {
    if (singleOddSect.style.zIndex == "") {
        console.log("si leo");
        singleOddSect.style.zIndex == "Initial";
        console.log(singleOddSect.style.zIndex);
    }
})