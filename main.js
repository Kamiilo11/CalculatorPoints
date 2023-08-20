//Casino selectors
const mainBtnCasino = document.querySelector(".main-buttons-casino");
const casinoSection = document.querySelector(".casino_section");
const casinoInfoBtn = document.querySelector(".casino_iic-button");
const casinoImportInfo = document.querySelector(".casino-iic-text");
const casinoImportIcon = document.querySelector(".casino_iic-icon");
//Casino options value
const slotsValue = document.querySelector("#casino_slots");
const bjValue = document.querySelector("#casino_blackjack");
const rouletteValue = document.querySelector("#casino_roulette");

//Sports selector
const mainBtnSport = document.querySelector(".main-buttons-sports");
const sportSection = document.querySelector(".sports_section");
const sportInfoBtn = document.querySelector(".sports_iic-button");
const sportImportInfo = document.querySelector(".sports-iic-text");
const sportImportIcon = document.querySelector(".sports_iic-icon");
//Sports odds selection buttons and sections
const singleOddBtn = document.querySelector(".sports_buttons-single");
const singleOddSect = document.querySelector(".sports_odds_single_container");
const combiOddBtn = document.querySelector(".sports_buttons-combi");
const combiOddSect = document.querySelector(".sports_odds_combi_container");
//sports single options value
const singleValue1 = document.querySelector("#sports_single1");
const singleValue2 = document.querySelector("#sports_single2");
const singleValue3 = document.querySelector("#sports_single3");
const singleValue4 = document.querySelector("#sports_single4");
//combi values
const combiValue1 = document.querySelector("#sports_combi1");
const combiValue2 = document.querySelector("#sports_combi2");
const combiValue3 = document.querySelector("#sports_combi3");
const combiValue4 = document.querySelector("#sports_combi4");

//obtain result values
const resultInput = document.querySelector("#user_input")
const resultBtn = document.querySelector(".submit_btn");
const resultDisplay = document.querySelector(".display_result_span");
const resetBtn = document.querySelector(".reset_button");


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

//Sports bet Odds section function

singleOddBtn.addEventListener("click", () => {
    if (singleOddSect.style.visibility == "" || combiOddSect.style.visibility == "visible") {
        singleOddSect.style.visibility = "visible";
        combiOddSect.style.visibility = "";
        console.log(singleOddSect.style.visibility);
    } else {
        singleOddSect.style.visibility = "";
    }
});

combiOddBtn.addEventListener("click", () => {
    if (combiOddSect.style.visibility == "" || singleOddSect.style.visibility == "visible") {
        combiOddSect.style.visibility = "visible";
        singleOddSect.style.visibility = "";
        console.log(combiOddSect.style.visibility);
    } else {
        combiOddSect.style.visibility = "";
    }
});

//Make calculus of the points

resultBtn.addEventListener("click", () => {
    if (singleValue1.checked == true && singleOddSect.style.visibility == "visible" && sportSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(singleValue1.value)).toFixed(2);
    } else if (singleValue2.checked == true && singleOddSect.style.visibility == "visible" && sportSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(singleValue2.value)).toFixed(2);
    } else if (singleValue3.checked == true && singleOddSect.style.visibility == "visible" && sportSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(singleValue3.value)).toFixed(2);
    } else if (singleValue4.checked == true && singleOddSect.style.visibility == "visible" && sportSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(singleValue4.value)).toFixed(2);
    } else if (combiValue1.checked == true && combiOddSect.style.visibility == "visible" && sportSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(combiValue1.value)).toFixed(2);
    } else if (combiValue2.checked == true && combiOddSect.style.visibility == "visible" && sportSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(combiValue2.value)).toFixed(2);
    } else if (combiValue3.checked == true && combiOddSect.style.visibility == "visible" && sportSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(combiValue3.value)).toFixed(2);
    } else if (combiValue4.checked == true && combiOddSect.style.visibility == "visible" && sportSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(combiValue4.value)).toFixed(2);
    } else if (slotsValue.checked == true && casinoSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(slotsValue.value)).toFixed(2);
    } else if (bjValue.checked == true && casinoSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(bjValue.value)).toFixed(2);
    } else if (rouletteValue.checked == true && casinoSection.style.display == "block") {
        resultDisplay.innerHTML = (Number(resultInput.value) / Number(rouletteValue.value)).toFixed(2);
    }
});

//Reset selections

resetBtn.addEventListener("click", () => {
    if (singleValue1.checked == true) {
        singleValue1.checked = false;
    } else if (singleValue2.checked == true) {
        singleValue2.checked = false;
    } else if (singleValue3.checked == true) {
        singleValue3.checked = false;
    } else if (singleValue4.checked == true) {
        singleValue4.checked = false;
    } else if (combiValue1.checked == true) {
        combiValue1.checked = false;
    } else if (combiValue2.checked == true) {
        combiValue2.checked = false;
    } else if (combiValue3.checked == true) {
        combiValue3.checked = false;
    } else if (combiValue4.checked == true) {
        combiValue4.checked = false;
    } else if (slotsValue.checked == true) {
        slotsValue.checked = false;
    } else if (bjValue.checked == true) {
        bjValue.checked = false;
    } else if (rouletteValue.checked == true) {
        rouletteValue.checked = false;
    }
});