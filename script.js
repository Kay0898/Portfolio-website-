//Show Nav
function showNav() {
    // Show Navigation links
    document.getElementById("navigations").style.right = "0";
}

//Hide Nav
function hideNav() {
    // Hide Navigation links
    document.getElementById("navigations").style.right = "-100%";
}

//Remove navbar


//Random Quotes
let wordsArray, ranNum, intervals;

wordsArray = [
    "I want to put a ding in the universe — Stev Jobs",

    "Let's go invent tomorrow rather than worrying about what happened yesterday — Stev Jobs",

    "Quality is better than quantity  — Stev Jobs",

    "Design is not what it looks like but how it works — Stev Jobs",

    "Simplicity is key — Kelechi Victor",

    "My goal is to build flexible applications— Kelechi Victor"
];

function ranWord() {
    ranNum = Math.floor(Math.random() * wordsArray.length);
    document.getElementById("random-quotes").innerHTML = wordsArray[ranNum];
}

onload = function () {
    ranWord();
};

intervals = setInterval(function () {
    ranWord();
}, 5000);

