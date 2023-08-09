//Casino selectors
const mainBtnCasino = document.querySelector(".main-buttons-casino");
const casinoSection = document.querySelector(".casino_section");


//Sports selector
const mainBtnSport = document.querySelector(".main-buttons-sports");
const sportSection = document.querySelector(".sports_section");


console.log(casinoSection.style.display);
console.log(sportSection.style);


//add event listeners
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