function onScoreIncrease(){
    document.getElementById('score-text').innerText = "Score: " + currentScore;
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

if(sessionStorage.getItem('start-dont-show') == 'true'){
    startButtonPressed();
}

function startButtonPressed(){
    document.getElementById('main-code-area').style.display="block";
    document.getElementById('main-start-area').style.display="none";

    var element = document.getElementById("instructions-block-in-sidebar");
    if (element.style.maxHeight) {
        element.style.maxHeight = null;
    } else {
        element.style.maxHeight = "100%";
    }

    startStop();

    document.getElementById("optionAButton").disabled = false;
    document.getElementById("optionBButton").disabled = false;
    document.getElementById("optionCButton").disabled = false;
    
    document.getElementById("input-form-submit").disabled = false;

    document.getElementById("WCAG-button").disabled = false;
    document.getElementById("hint-button").disabled = false;
    document.getElementById("Report-button").disabled = false;

    if (document.getElementById("hide-starting-instructions").checked) {
        sessionStorage.setItem('start-dont-show', 'true');
    }

    document.getElementById('optionAButton').innerText = "A) " + optionAtext;
    document.getElementById('optionBButton').innerText = "B) " + optionBtext;
    document.getElementById('optionCButton').innerText = "C) " + optionCtext;
}

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var focusedElement = document.activeElement;
        if (focusedElement.type === "checkbox") {
            focusedElement.checked = !focusedElement.checked;
        }
    }
});

function scrollWithArrows(event) {
    var keyCode = event.keyCode;
    var scrollableElement = document.querySelector('.scrollable-content');
    var scrollAmount = 50; 

    if (keyCode === 37) {
        scrollableElement.scrollLeft -= scrollAmount;
        event.preventDefault();
    } else if (keyCode === 38) {
        scrollableElement.scrollTop -= scrollAmount;
        event.preventDefault();
    } else if (keyCode === 39) {
        scrollableElement.scrollLeft += scrollAmount;
        event.preventDefault();
    } else if (keyCode === 40) {
        scrollableElement.scrollTop += scrollAmount;
        event.preventDefault();
    }
}

var scoreTextBox = document.getElementById("score-text");

var tempScore = parseInt(currentScore);

const scoreObserver = new MutationObserver(() => {
    var scoreIncreaseText = document.querySelector("#score-increase-text");
    if(currentScore - tempScore > 0){
        scoreIncreaseText.innerHTML = "+" + String(currentScore - tempScore);
    } else {
        scoreIncreaseText.innerHTML = String(currentScore - tempScore);
    }
    
    scoreIncreaseText.classList.add("score-text");
    tempScore = currentScore;
    setTimeout(function () {
        scoreIncreaseText.classList.remove("score-text");
    }, 2000);
});

scoreObserver.observe(scoreTextBox, { childList: true, characterData: true, subtree: true });   