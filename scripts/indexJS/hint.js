var onHintTaken = false;

if(parseInt(sessionStorage.getItem('question-number')) <= 10){
    document.getElementById('hint-button').innerText = "50-50";
}

function onHint(){
    if(parseInt(sessionStorage.getItem('question-number')) <= 10){
        var allOptions = ["A", "B", "C"];
        allOptions = allOptions.filter(option => option !== correctAnswer);

        var randomIndex = Math.floor(Math.random() * allOptions.length);
        var randomChoice = allOptions[randomIndex];

        document.getElementById("option" + randomChoice + "Button").disabled = true;
    } else {
        document.getElementById('code').innerText = document.getElementById('code').innerText + "\n\n" + inputHint;
    }

    document.getElementById("hint-button").disabled = true;

    onHintTaken = true;
}