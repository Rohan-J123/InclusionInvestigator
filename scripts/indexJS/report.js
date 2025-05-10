var reportedOptionsSelected = [];

function checkSelection(checkbox) {
    const checkboxId = checkbox.id;
    const label = document.querySelector(`label[for=${checkboxId}]`);
    const originalLabelText = label.getAttribute('data-original-text') || label.textContent.trim();

    if (!label.hasAttribute('data-original-text')) {
        label.setAttribute('data-original-text', originalLabelText);
    }

    if (checkbox.checked) {
        if (!reportedOptionsSelected.includes(originalLabelText)) {
            reportedOptionsSelected.push(originalLabelText);
        }
        label.textContent = '🗸 ' + originalLabelText;
    } else {
        reportedOptionsSelected = reportedOptionsSelected.filter(item => item !== originalLabelText);
        label.textContent = label.textContent.replace('🗸 ', '');
    }
}

var userReport = {};

document.getElementById('submit-report-button').addEventListener('click', () => {
    var previousReports = JSON.parse(sessionStorage.getItem('user-reports')) || [];
    var userExplanation = document.getElementById('report-additional-explanation').value;

    userReport = {
        questionNumber: sessionStorage.getItem('question-number'),
        questionScenario: `${inputScenario ? inputScenario : ''} ${optionScenario ? optionScenario : ''}`,
        reportedOptionsSelected: reportedOptionsSelected,
        userExplanation: userExplanation
    }

    var newReport = `User Reported Scenario: ${inputScenario ? inputScenario : ''} ${optionScenario ? optionScenario : ''}; User Issues: ${reportedOptionsSelected}; User Explanation: ${userExplanation}; `;

    previousReports.push(newReport);
    sessionStorage.setItem('user-reports', JSON.stringify(previousReports));

    document.getElementById('report-modal-close').click();
    document.getElementById('Report-button').disabled = true;
});
