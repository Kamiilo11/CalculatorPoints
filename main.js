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

console.log(slotsValue.checked);
console.log(bjValue.value);
console.log(rouletteValue.value);



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

console.log(singleValue1.id);
console.log(singleValue2.value);
console.log(singleValue3.value);
console.log(singleValue4.value);
console.log(combiValue1.value);
console.log(combiValue2.value);
console.log(combiValue3.value);
console.log(combiValue4.value);

//body selector
const bodySelector = document.querySelector("body");
console.log(bodySelector.style);



//obtain result values
const resultInput = document.querySelector("#user_input")
const resultBtn = document.querySelector(".submit_btn");
const resultDisplay = document.querySelector(".display_result_span");
const resetBtn = document.querySelector(".reset_button");

console.log(resultInput.value);
console.log(resultBtn);

//resultBtn.addEventListener("click", () => { //test to get value and write html, to be erased when finished
//    console.log(typeof resultInput.value);
//    resultDisplay.innerHTML = resultInput.value;
//});

resetBtn.addEventListener("click", () => {//test to remove the check on radio buttons, to be erased when finished
    slotsValue.checked = false
})


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
    if (singleValue1.checked == true) {
        console.log('si leo sports');
    }
});


//let valArr = [];
//valArr.push(slotsValue.value, 
//    bjValue.value, 
//    rouletteValue.value, 
//    singleValue1.value,
//    singleValue2.value,
//    singleValue3.value,
//    singleValue4.value, 
//    combiValue1.value,
//    combiValue2.value,
//    combiValue3.value,
//    combiValue4.value,
//    );
//    console.log(valArr);
//let valArrNum = [];
//for (const element of valArr) {
//    valArrNum.push(Number(element));
//}
//console.log(valArrNum);