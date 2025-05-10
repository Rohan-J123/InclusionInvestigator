if(sessionStorage.getItem('survey') == 'true'){
    document.getElementById('survey-open-button').disabled = true;
}

if(parseInt(sessionStorage.getItem('question-number')) >= 15){
    document.getElementById('survey-open-button').click();
    document.getElementById('survey-modal-close').style.display = 'none';
}

for (let i = 1; i <= 28; i++) {
    document.getElementById('weightSlider' + String(i)).addEventListener('input', function(e) {
        var weightValue = parseInt(e.target.value);
        document.getElementById('weightLabel' + String(i)).value = weightValue;
    });

    document.getElementById('weightLabel' + String(i)).addEventListener('input', function(e) {
        var weightValue = parseInt(e.target.value);
        document.getElementById('weightSlider' + String(i)).value = weightValue;
    });
}

for (let i = 1; i <= 12; i++) {
    document.getElementById('weightLabel' + String(i)).addEventListener('blur', function(e) {
        var weightValue = parseInt(e.target.value);
        if (!isNaN(weightValue)) {
            e.target.value = weightValue;
            if (weightValue < 0) {
                e.target.value = '0';
            }
            else if (weightValue > 7) {
                e.target.value = '7';
            }
        }
    });
}

for (let i = 13; i <= 28; i++) {
    document.getElementById('weightLabel' + String(i)).addEventListener('blur', function(e) {
        var weightValue = parseInt(e.target.value);
        if (!isNaN(weightValue)) {
            e.target.value = weightValue;
            if (weightValue < 0) {
                e.target.value = '0';
            }
            else if (weightValue > 5) {
                e.target.value = '5';
            }
        }
    });
}

async function onSurveySubmit() {
    var surveyIntegerResponses = [];
    for (let i = 1; i <= 28; i++) {
        let weightInput = document.getElementById('weightLabel' + String(i));
        if (weightInput) {
            let weightValue = parseInt(weightInput.value);
            if (!isNaN(weightValue)) {
                surveyIntegerResponses.push(weightValue);
            } else {
                surveyIntegerResponses.push(null);
            }
        }
    }

    var surveyTextResponses = [];
    for (let i = 29; i <= 32; i++) {
        let textInput = document.getElementById('Question' + String(i) + 'Input').value;
        surveyTextResponses.push(textInput);
    }

    var userId = sessionStorage.getItem('user-id');

    if (!userId) {
        console.error("User ID not found in sessionStorage.");
        return;
    }

    const documentData = {
        id: userId,
        surveyIntegerResponses: surveyIntegerResponses,
        surveyTextResponses: surveyTextResponses
    };

    try {
        const response = await fetch(`${cloudURL}/addDocumentData?collectionName=${collectionName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(documentData)
        });

        if (!response.ok) {
            throw new Error('Failed to submit survey: ' + response.statusText);
        }

        document.getElementById('survey-open-button').disabled = true;
        sessionStorage.setItem('survey', 'true');
        document.getElementById('survey-modal-close').click();
        console.log('Survey submitted successfully.');
    } catch (error) {
        console.error('Error submitting survey:', error);
    }
}
