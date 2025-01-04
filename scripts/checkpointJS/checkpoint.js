let pastScenarios = JSON.parse(sessionStorage.getItem('past-scenarios'));

var result = "";

for(var i = 0; i < pastScenarios.length; i++){
    result += `<li>${pastScenarios[i].replace(/\n/g, '<br>')}</li><br>`

    if(i != pastScenarios.length - 1){
        result += `<div style="background-color: gray; height: 1.5px; width: 99%; margin: 10px;"></div>`;
    }
}

if(parseInt(sessionStorage.getItem('question-number')) >= 15){
    document.getElementById('continue-button').innerText = "PLAY AGAIN"
}

document.getElementById('checkpoint-div').innerHTML = result;

let seconds = parseInt(sessionStorage.getItem('timer').split(':')[2]);
let minutes = parseInt(sessionStorage.getItem('timer').split(':')[1]);
let hours = parseInt(sessionStorage.getItem('timer').split(':')[0]);

document.getElementById("clock").textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

document.getElementById("score-text").innerHTML = "Score: " + parseInt(sessionStorage.getItem('score'));

var currentScore = parseInt(sessionStorage.getItem('score'));

const rankImage = document.getElementById('rank-image');

let changedToOneThousand = false;
let changedToTwoThousand = false;
let changedToThreeThousand = false;
let changedToFourThousand = false;

if(currentScore >= 80){
    changedToFourThousand = true;
    changedToThreeThousand = true;
    changedToTwoThousand = true;
    changedToOneThousand = true;

    rankImage.src = "./Images/rank4.png";
    rankImage.alt = 'You are at Rank 5';
} else if(currentScore >= 60){
    changedToThreeThousand = true;
    changedToTwoThousand = true;
    changedToOneThousand = true;

    rankImage.src = "./Images/rank3.png";
    rankImage.alt = 'You are at Rank 4';
} else if(currentScore >= 40){
    changedToTwoThousand = true;
    changedToOneThousand = true;

    rankImage.src = "./Images/rank2.png";
    rankImage.alt = 'You are at Rank 3';
} else if(currentScore >= 20){
    changedToOneThousand = true;
    
    rankImage.src = "./Images/rank1.png";
    rankImage.alt = 'You are at Rank 2';
}

function continueButton(){
    if(parseInt(sessionStorage.getItem('question-number')) == 6){
        sessionStorage.setItem('checkpoint-5', 'true'); 
    } else if((parseInt(sessionStorage.getItem('question-number')) == 11)){
        sessionStorage.setItem('checkpoint-10', 'true');
    } else {
        sessionStorage.setItem('checkpoint-15', 'true');
    }
        
    window.location.href = './question.html';
}

var specialEffectsEnabled = sessionStorage.getItem("specialEffectsEnabled");

function confettiAnimation(){
    if(specialEffectsEnabled == 'true'){
        confetti({
            particleCount: 500,
            spread: 90,
            origin: {x: 0, y: 1},
            startVelocity: 75,
            angle: 45,
            zIndex: 3000
        });
        confetti({
            particleCount: 500,
            spread: 90,
            origin: {x: 1, y: 1},
            startVelocity: 75,
            angle: 135,
            zIndex: 3000
        });
    }
}

confettiAnimation();


var s = "";
correctQuestions = JSON.parse(sessionStorage.getItem('correct-questions'));

var disabledCheckpoint = 
`<button type="button" class="btn btn-outline-warning question-label" style="font-size: x-large;">
    &#128274;
</button>`;

var abledCheckpoint = 
`<button type="button" class="btn btn-outline-warning question-label" style="font-size: x-large;">
    &#128275;
</button>`;

for(var i = 1; i < parseInt(sessionStorage.getItem('question-number')); i++){
    if(correctQuestions.includes(i)){
        s += '<button type="button" class="btn btn-success question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;" disabled>' + i +'<span>&#10003;</span></button>';
    } else {
        s += '<button type="button" class="btn btn-danger question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;" disabled>' + i +'<span>&#10007;</span></button>';
    }

    if (i == 5 || i == 10 || i == 15) {
        if(i > parseInt(sessionStorage.getItem('question-number'))){
            s += disabledCheckpoint;
        } else {
            s += abledCheckpoint;
        }
        
    }
}
if(i != 16){
    s += '<button type="button" class="btn btn-warning question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;">' + parseInt(sessionStorage.getItem('question-number')) +'</button>';
}

if(i == 10 || i == 5 || i == 15){
    s += disabledCheckpoint;
}

for(var i = parseInt(sessionStorage.getItem('question-number')) + 1; i <= 15; i++){
    s += '<button type="button" class="btn btn-outline-primary question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;" disabled>' + i +'</button>';
    if (i == 5 || i == 10 || i == 15) {
        s += disabledCheckpoint;
    }
}

document.getElementById('question-label-container').innerHTML = s;