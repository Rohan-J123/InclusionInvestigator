function onTutorialReset(){
    if(document.getElementById("main-start-area").style.display == "block"){
        var intro = introJs();

        intro.setOptions({
            steps:[
                {
                    element: document.querySelector('#main-start-area'),
                    title: "Scenario Box",
                    intro: "The scenarios will be displayed here once all instructions have been reviewed and the 'Start' button has been pressed."
                },
                {
                    element: document.querySelector('#hint-button'),
                    title: "Hint Button",
                    intro: "This button removes one of the incorrect options in first ten question and gives out criterion violated in next five questions."
                },
                {
                    element: document.querySelector('#WCAG-button'),
                    title: "WCAG Button",
                    intro: "This button opens a new tab linking to the official WCAG website."
                },
                {
                    element: document.querySelector('#Report-button'),
                    title: "Report Button",
                    intro: "This button can be used to report the AI-generated questions."
                },
                {
                    element: document.querySelector('#carouselExampleIndicators'),
                    title: "User Input",
                    intro: "The options for the first ten questions and input field for the next five questions will be displayed here."
                },
                {
                    element: document.querySelector('#sidebar'),
                    title: "SideBar",
                    intro: "Instructions for the game, question numbers and buttons beneficial to the user will be shown here."
                },
                {
                    element: document.querySelector('#open-account'),
                    title: "Account Button",
                    intro: "This button displays user details, along with options for restarting the game or viewing the 'About Us' page."
                },
                {
                    element: document.querySelector('#open-leaderboard'),
                    title: "Leaderboard Button",
                    intro: "Press this button to access the leaderboard, where top ten performers are displayed based on the selected filters."
                },
                {
                    element: document.querySelector('#questions-headings-and-labels'),
                    title: "Question Numbers",
                    intro: "The current question number and checkposts cleared will be displayed here."
                },
                {
                    element: document.querySelector('#tutorial-reset-button'),
                    title: "Tutorial Button",
                    intro: "Click this button to run this UI tutorial again."
                },
                {
                    element: document.querySelector('#rank-image'),
                    title: "Rank",
                    intro: "Users will be promoted to a higher rank upon reaching every 20-point milestone."
                }
            ]
        });

        intro.onafterchange(function() {
            var nextButton = document.querySelector('.introjs-nextbutton');
            var prevButton = document.querySelector('.introjs-prevbutton');
            
            if (nextButton) {
                nextButton.classList.add('btn', 'btn-outline-success');
                nextButton.classList.remove('introjs-button', 'introjs-disabled');
            }
            if (prevButton) {
                prevButton.classList.add('btn', 'btn-outline-danger');
                prevButton.classList.remove('introjs-button', 'introjs-disabled');
            }
        });
        
        intro.start();
    } else {
        var intro = introJs();

        intro.setOptions({
            steps:[
                {
                    element: document.querySelector('#main-code-area'),
                    title: "Scenario Box",
                    intro: "The current scenario has been displayed here."
                },
                {
                    element: document.querySelector('#hint-button'),
                    title: "Hint Button",
                    intro: "This button removes one of the incorrect options in first ten question and gives out criterion violated in next five questions."
                },
                {
                    element: document.querySelector('#WCAG-button'),
                    title: "WCAG Button",
                    intro: "This button opens a new tab linking to the official WCAG website."
                },
                {
                    element: document.querySelector('#Report-button'),
                    title: "Report Button",
                    intro: "This button can be used to report the AI-generated questions."
                },
                {
                    element: document.querySelector('#carouselExampleIndicators'),
                    title: "User Input",
                    intro: "The options for the first ten questions and input field for the next five questions are displayed here."
                },
                {
                    element: document.querySelector('#sidebar'),
                    title: "SideBar",
                    intro: "Instructions for the game, question numbers and buttons beneficial to the user are shown here."
                },
                {
                    element: document.querySelector('#open-account'),
                    title: "Account Button",
                    intro: "This button displays user details, along with options for restarting the game or viewing the 'About Us' page."
                },
                {
                    element: document.querySelector('#open-leaderboard'),
                    title: "Leaderboard Button",
                    intro: "Press this button to access the leaderboard, where top ten performers are displayed based on the selected filters."
                },
                {
                    element: document.querySelector('#questions-headings-and-labels'),
                    title: "Question Numbers",
                    intro: "The current question number and checkposts cleared are displayed here."
                },
                {
                    element: document.querySelector('#tutorial-reset-button'),
                    title: "Tutorial Button",
                    intro: "Click this button to run this UI tutorial again."
                },
                {
                    element: document.querySelector('#rank-image'),
                    title: "Rank",
                    intro: "Users will be promoted to a higher rank upon reaching every 20-point milestone."
                }
            ]
        });

        intro.onafterchange(function() {
            var nextButton = document.querySelector('.introjs-nextbutton');
            var prevButton = document.querySelector('.introjs-prevbutton');
            
            if (nextButton) {
                nextButton.classList.add('btn', 'btn-outline-success');
                nextButton.classList.remove('introjs-button', 'introjs-disabled');
            }
            if (prevButton) {
                prevButton.classList.add('btn', 'btn-outline-danger');
                prevButton.classList.remove('introjs-button', 'introjs-disabled');
            }
        });
        
        intro.start();
    }
}
