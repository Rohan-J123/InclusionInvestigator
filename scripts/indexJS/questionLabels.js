var currentScore = parseInt(sessionStorage.getItem('score'));

if(parseInt(sessionStorage.getItem('question-number')) == 6 && sessionStorage.getItem('checkpoint-5') == 'false'){
    window.location.href = './checkpoint.html';
}

if(parseInt(sessionStorage.getItem('question-number')) == 11 && sessionStorage.getItem('checkpoint-10') == 'false'){
    window.location.href = './checkpoint.html';
}

if(parseInt(sessionStorage.getItem('question-number')) > 15 && sessionStorage.getItem('checkpoint-15') == 'false'){
    window.location.href = './checkpoint.html';
}

if(parseInt(sessionStorage.getItem('question-number')) > 15 && sessionStorage.getItem('checkpoint-15') == 'true'){
    window.location.href = './index.html';
}

var userId = sessionStorage.getItem('user-id');

var s = "";
correctQuestions = JSON.parse(sessionStorage.getItem('correct-questions'));

document.getElementById('question-label-text').innerText = "Question: " + sessionStorage.getItem('question-number');
document.getElementById('score-text').innerText = "Score: " + currentScore;

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

s += '<button type="button" class="btn btn-warning question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;">' + parseInt(sessionStorage.getItem('question-number')) +'</button>';
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