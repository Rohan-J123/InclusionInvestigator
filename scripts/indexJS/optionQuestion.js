function getSubstringBetween(str, startWord, endWord) {
    const startIndex = str.indexOf(startWord) + startWord.length;
    const endIndex = str.indexOf(endWord, startIndex);
  
    if (startIndex >= startWord.length && endIndex !== -1) {
      return str.substring(startIndex, endIndex).trim();
    }
  
    return null;
}

function getSubstringFromWord(str, startWord) {
    const startIndex = str.indexOf(startWord);
  
    if (startIndex !== -1) {
      return str.substring(startIndex);
    }
  
    return null;
}
  
var fetchedData;
var optionScenario;
var optionQuestion;

var optionAtext;
var optionBtext;
var optionCtext;

var optioncorrectAnswer;
var optionExplanation;

var correctAnswer;

var inputScenario;
var inputQuestion;
var inputcorrectAnswer;
var inputExplanation;

if(parseInt(sessionStorage.getItem('question-number')) <= 10){
    document.getElementById('spinner-circle').style.display = "block";
    document.getElementById('spinner-overlay').style.display = "block";

    stop = true;

    var questionDifficulty = JSON.parse(sessionStorage.getItem('correct-questions')).length + 1;

    if(questionDifficulty > 5){
        questionDifficulty = 5;
    }

    const payload = {
        pastScenarios: JSON.parse(sessionStorage.getItem('past-scenarios')),
        difficulty: questionDifficulty,
    };
    

    fetch('https://inclusion-investigator.netlify.app/.netlify/functions/api/getChoiceScenario', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            fetchedData = data.scenario;
            console.log(fetchedData);
            
            optionScenario = getSubstringBetween(fetchedData, "Scenario: ", "Question");
            optionQuestion = getSubstringBetween(fetchedData, "Question: ", "A)");

            optionAtext = getSubstringBetween(fetchedData, "A) ", "B)");
            optionBtext = getSubstringBetween(fetchedData, "B) ", "C)");
            optionCtext = getSubstringBetween(fetchedData, "C) ", "Correct Answer");

            optioncorrectAnswer = getSubstringBetween(fetchedData, "Correct Answer: ", "Explanation");
            optionExplanation = getSubstringFromWord(fetchedData, "Explanation: ");

            document.getElementById('code').innerText = "Scenario: " + optionScenario + "\n\n" + "Question: " + optionQuestion;

            if(sessionStorage.getItem('start-dont-show') == 'true'){
                document.getElementById('optionAButton').innerText = "A) " + optionAtext;
                document.getElementById('optionBButton').innerText = "B) " + optionBtext;
                document.getElementById('optionCButton').innerText = "C) " + optionCtext;
            }

            document.getElementById('spinner-circle').style.display = "none";
            document.getElementById('spinner-overlay').style.display = "none";

            correctAnswer = optioncorrectAnswer.slice(0, 1);

            stop = false;
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
} else {
    document.getElementById('options-container').style.display = "none";
    document.getElementById('input-container').style.display = "block";

    document.getElementById('spinner-circle').style.display = "block";
    document.getElementById('spinner-overlay').style.display = "block";

    stop = true;

    var questionDifficulty = JSON.parse(sessionStorage.getItem('correct-input-questions')).length + 1;

    if(questionDifficulty > 5){
        questionDifficulty = 5;
    }

    const payload = {
        pastScenarios: JSON.parse(sessionStorage.getItem('past-only-scenarios')),
        difficulty: questionDifficulty,
    };
    

    fetch('https://inclusion-investigator.netlify.app/.netlify/functions/api/getInputScenario', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            fetchedData = data.scenario;
            console.log(fetchedData);

            inputScenario = getSubstringBetween(fetchedData, "Scenario: ", "Question");
            inputQuestion = getSubstringBetween(fetchedData, "Question: ", "Correct Answer");

            inputcorrectAnswer = getSubstringBetween(fetchedData, "Correct Answer: ", "Explanation");
            inputExplanation = getSubstringFromWord(fetchedData, "Explanation: ");

            document.getElementById('code').innerText = "Scenario: " + inputScenario + "\n\n" + "Question: " + inputQuestion;

            document.getElementById('spinner-circle').style.display = "none";
            document.getElementById('spinner-overlay').style.display = "none";

            stop = false;
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}

function onOptionChosen(optionLetter){
    if(correctAnswer == optionLetter){
        var inner = 
        `<h3 class="lobster-regular" style="text-align: center;">Congratulations!</h3>
        <div style="font-size: large; margin: 0.5vw;"><b>Correct Option: ${correctAnswer}</b></div>
        <div style="font-size: medium; margin: 0.5vw; text-align: justify; height: 100px; overflow-y: auto;">${optionExplanation}</div>
        <div style="display: flex; font-size: x-large;">
            <button id="submit-line-number" type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 0.5vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 0.5vw;" onclick="onNextQuestion(true)">NEXT QUESTION</button>
        </div> `;
        document.getElementById('part1Result').innerHTML = inner;

        currentScore = currentScore + 5;
        onScoreIncrease();

        var currentQuestionNumber = parseInt(sessionStorage.getItem('question-number'));
        correctQuestions = JSON.parse(sessionStorage.getItem('correct-questions'));
        correctQuestions.push(currentQuestionNumber);
        sessionStorage.setItem('correct-questions', JSON.stringify(correctQuestions));

        confettiAnimation();
    } else {
        var inner = 
        `<h3 class="lobster-regular" style="text-align: center;">Sorry!</h3>
        <div style="font-size: large; margin: 0.5vw;"><b>Correct Option: ${correctAnswer}</b></div>
        <div style="font-size: medium; margin: 0.5vw; text-align: justify; height: 100px; overflow-y: auto;">${optionExplanation}</div>
        <div style="display: flex; font-size: x-large;">
            <button id="submit-line-number" type="button" class="btn btn-outline-danger" style="flex: 1; margin-right: 0.5vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 0.5vw;" onclick="onNextQuestion(false)">NEXT QUESTION</button>
        </div> `;
        document.getElementById('part1Result').innerHTML = inner;

        currentScore = currentScore - 2;
        onScoreIncrease();

        shakeElement(document.getElementById("carouselExampleIndicators"));
    }
    stop = true;

    var currentQuestionNumber = parseInt(sessionStorage.getItem('question-number'));
    sessionStorage.setItem('question-number', currentQuestionNumber + 1);

    sessionStorage.setItem('score', currentScore);
    sessionStorage.setItem('timer', document.getElementById("clock").textContent);

    var pastScenarios = JSON.parse(sessionStorage.getItem('past-scenarios'));
    pastScenarios.push(fetchedData);
    sessionStorage.setItem('past-scenarios', JSON.stringify(pastScenarios));
    
    var pastOnlyScenarios = JSON.parse(sessionStorage.getItem('past-only-scenarios'));
    pastOnlyScenarios.push(optionScenario);
    sessionStorage.setItem('past-only-scenarios', JSON.stringify(pastOnlyScenarios));

    document.getElementById('goToPart1Result').click();
}

function onNextQuestion(correctlyAnswered){
    document.getElementById('spinner-circle').style.display = 'block';
    document.getElementById('spinner-overlay').style.display = 'block';

    var userId = sessionStorage.getItem('user-id');

    if (!userId) {
        console.error("User ID not found in sessionStorage");
        return;
    }

    var score = parseInt(sessionStorage.getItem('score'));
    var timeTaken = document.getElementById('clock-mini').textContent;
    
    db.collection(collectionName).doc(userId).get().then(function(doc) {
        if (doc.exists) {
            var docData = doc.data();
            var updatedScore = docData.score || [];
            var updatedTimeTaken = docData.timeTaken || [];
            var updatedCorrectlyAnswered = docData.correctlyAnswered || [];

            score = score - sumArray(updatedScore);
            updatedScore.push(score);
            updatedTimeTaken.push(timeTaken);
            updatedCorrectlyAnswered.push(correctlyAnswered);

            db.collection(collectionName).doc(userId).set({
                score: updatedScore,
                timeTaken: updatedTimeTaken,
                correctlyAnswered: updatedCorrectlyAnswered
            }, { merge: true })
            .then(function() {
                console.log("Document successfully updated!");
                document.getElementById('spinner-circle').style.display = 'none';
                document.getElementById('spinner-overlay').style.display = 'none';

                window.location.href = "./question.html";
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.error("Error getting document:", error);
    });
}

document.getElementById("input-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var userAnswer = document.getElementById('input-form-user-answer').value.trim();

    const payload = {
        givenScenario: inputScenario,
        userAnswer: userAnswer,
    };

    document.getElementById('spinner-circle').style.display = "block";
    document.getElementById('spinner-overlay').style.display = "block";
    

    fetch('https://inclusion-investigator.netlify.app/.netlify/functions/api/getInputScenarioAnswer', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            var fetchedResult = data.scenario;
            var resultAccuracy = getSubstringBetween(fetchedResult, "Accuracy: ", "Rating");
            var resultRating = getSubstringBetween(fetchedResult, "Rating: ", "Explanation");
            var resultExplanation = getSubstringFromWord(fetchedResult, "Explanation: ");

            stop = true;

            var inner = 
            `<h3 class="lobster-regular" style="text-align: center;">Answer: ${resultAccuracy}</h3>
            <div style="font-size: large; margin: 0.5vw;"><b>Answer Rating: ${resultRating}</b></div>
            <div style="font-size: medium; margin: 0.5vw; text-align: justify; height: 100px; overflow-y: auto;">${resultExplanation}</div>
            `;

            document.getElementById('spinner-circle').style.display = "none";
            document.getElementById('spinner-overlay').style.display = "none";

            currentScore = currentScore + parseInt(getSubstringFromWord(resultRating, "", "/"));
            onScoreIncrease();

            if(resultAccuracy.includes("Not") || resultAccuracy.includes("In")){
                shakeElement(document.getElementById("carouselExampleIndicators"));
                inner += `
                <div style="display: flex; font-size: x-large;">
                    <button id="submit-line-number" type="button" class="btn btn-outline-danger" style="flex: 1; margin-right: 0.5vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 0.5vw;" onclick="onNextQuestion(false)">NEXT QUESTION</button>
                </div>`;
            } else {
                var currentQuestionNumber = parseInt(sessionStorage.getItem('question-number'));

                correctQuestions = JSON.parse(sessionStorage.getItem('correct-questions'));
                correctQuestions.push(currentQuestionNumber);
                sessionStorage.setItem('correct-questions', JSON.stringify(correctQuestions));

                correctInputQuestions = JSON.parse(sessionStorage.getItem('correct-input-questions'));
                correctInputQuestions.push(currentQuestionNumber);
                sessionStorage.setItem('correct-input-questions', JSON.stringify(correctInputQuestions));

                confettiAnimation();

                inner += `
                <div style="display: flex; font-size: x-large;">
                    <button id="submit-line-number" type="button" class="btn btn-outline-success" style="flex: 1; margin-right: 0.5vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 0.5vw;" onclick="onNextQuestion(true)">NEXT QUESTION</button>
                </div>`;
            }

            document.getElementById('part1Result').innerHTML = inner;

            var currentQuestionNumber = parseInt(sessionStorage.getItem('question-number'));
            sessionStorage.setItem('question-number', currentQuestionNumber + 1);

            sessionStorage.setItem('score', currentScore);
            sessionStorage.setItem('timer', document.getElementById("clock").textContent);

            var pastScenarios = JSON.parse(sessionStorage.getItem('past-scenarios'));
            pastScenarios.push(fetchedData);
            sessionStorage.setItem('past-scenarios', JSON.stringify(pastScenarios));
            
            var pastOnlyScenarios = JSON.parse(sessionStorage.getItem('past-only-scenarios'));
            pastOnlyScenarios.push(inputScenario);
            sessionStorage.setItem('past-only-scenarios', JSON.stringify(pastOnlyScenarios));

            document.getElementById('goToPart1Result').click();
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
});