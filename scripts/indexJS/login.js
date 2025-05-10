if(sessionStorage.getItem("user-id") == null){
    document.getElementById("login-open").click();
}

async function createDocument(collectionName) {
    try {
        const response = await fetch(cloudURL + '/createDocument', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ collectionName }),
        });

        if (!response.ok) {
            throw new Error('Failed to create document');
        }

        const responseData = await response.json();
        const userId = responseData.documentId;

        // console.log('Document created with ID:', userId);
        return userId;
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
}

document.getElementById("login-info").addEventListener("submit", async function(event) {
    event.preventDefault();
    document.getElementById('spinner-circle').style.display = 'block';
    document.getElementById('spinner-overlay').style.display = "block";

    const name = document.getElementById("login-name").value;
    const email = document.getElementById("login-email").value;
    const field = document.getElementById("login-field").value;
    const area = document.getElementById("login-area").value;
    const gamingExperience = document.getElementById("login-gaming-knowledge").value;
    const accessibilityKnowledge = document.getElementById("login-accessibilty-knowledge").value;
    const accessibilityEducation = document.getElementById("login-accessibility-education").value;

    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000;
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + utcOffset + istOffset);

    var subfield='';
    switch(document.getElementById("login-field").value){
        case 'High School Student': subfield = document.getElementById('subfield-highschool').value; break;
        case 'Undergraduate Student': subfield = document.getElementById('subfield-undergrad').value; break;
        case 'Graduate Student': subfield = document.getElementById('subfield-grad').value; break;
        case 'Working Professional': subfield = document.getElementById('subfield-worker').value; break;
        case 'Other': subfield = document.getElementById('subfield-other').value; break;
    }

    var userId = await createDocument(collectionName);

    const documentData = {
        id: userId,
        name: name,
        email: email,
        field: field,
        subfield: subfield,
        consent: document.getElementById('anonymousDataConsent').checked,
        area: area,
        gamingExperience: gamingExperience,
        accessibilityKnowledge: accessibilityKnowledge,
        accessibilityEducation: accessibilityEducation,
        timestamp: String(istTime)
    };
    
    fetch(cloudURL + `/addDocumentData?collectionName=${collectionName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(documentData)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(() => {
        // console.log("Document successfully written with ID: ", userId);
        sessionStorage.setItem("user-id", userId);
        sessionStorage.setItem("user-name", name);
        sessionStorage.setItem("user-email", email);
        document.getElementById('spinner-circle').style.display = 'none';
        document.getElementById('spinner-overlay').style.display = "none";
        document.getElementById('First-Modal-Next').click();
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
});

function accountOpen(){
    document.getElementById('account-name').innerText = "Name: " + sessionStorage.getItem('user-name');
    document.getElementById('account-email').innerText = "Email: " + sessionStorage.getItem('user-email');
    document.getElementById('account-score').innerText = document.getElementById('score-text').innerText;
}

document.getElementById('login-field').addEventListener('change', function() {
    var selectedValue = '';
    switch (this.value) {
        case 'High School Student': selectedValue = 'subfield-highschool'; break;
        case 'Undergraduate Student': selectedValue = 'subfield-undergrad'; break;
        case 'Graduate Student': selectedValue = 'subfield-grad'; break;
        case 'Working Professional': selectedValue = 'subfield-worker'; break;
        case 'Other': selectedValue = 'subfield-other'; break;
    };
    var dropdowns = document.getElementById('sub-field-dropdowns').children;
    
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = 'none';
    }

    document.getElementById(selectedValue).style.display = 'block';
    document.getElementById(selectedValue + '-label').style.display = 'block';
});