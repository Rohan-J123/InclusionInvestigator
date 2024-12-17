function onTutorialReset(){
    if(document.getElementById("main-start-area").style.display == "block"){
        var intro = introJs();

        intro.setOptions({
            steps:[
                {
                    element: document.querySelector('#main-start-area'),
                    title: "Code Box",
                    intro: "Code will be displayed here once all instructions have been reviewed and the 'Start' button has been pressed."
                },
                {
                    element: document.querySelector('#game-hint-button'),
                    title: "Hint Button",
                    intro: "Clicking this button will provide hints as comments within the code, and the corresponding line number will be shown in the input field."
                },
                {
                    element: document.querySelector('#redirect-to-WCAG'),
                    title: "WCAG Button",
                    intro: "This button opens a new tab linking to the official WCAG website."
                },
                {
                    element: document.querySelector('#game-run-code-button'),
                    title: "Run Button",
                    intro: "Activate this button to display the code output in the sidebar, at the expense of 100 points."
                },
                {
                    element: document.querySelector('#carouselExampleIndicators'),
                    title: "Questions",
                    intro: "The line number query, POUR question, and criteria question will be displayed in this section."
                },
                {
                    element: document.querySelector('#sidebar'),
                    title: "SideBar",
                    intro: "Instructions for the current question and the output from running the code will be shown here."
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
                    intro: "The current question number and remaining criteria to be identified will be displayed here."
                },
                {
                    element: document.querySelector('#wifi-bars-and-label'),
                    title: "WiFi Bars",
                    intro: "The remaining WiFi bars are shown here; the game ends when all bars are depleted."
                },
                {
                    element: document.querySelector('#tutorial-reset-button'),
                    title: "Tutorial Button",
                    intro: "Click this button to run this UI tutorial again."
                },
                {
                    element: document.querySelector('#rank-image'),
                    title: "Rank",
                    intro: "Users will be promoted to a higher rank upon reaching every 1,000-point milestone."
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
                    title: "Code Box",
                    intro: "Code has been displayed here."
                },
                {
                    element: document.querySelector('#game-hint-button'),
                    title: "Hint Button",
                    intro: "Clicking this button will provide hints as comments within the code, and the corresponding line number will be shown in the input field."
                },
                {
                    element: document.querySelector('#redirect-to-WCAG'),
                    title: "WCAG Button",
                    intro: "This button opens a new tab linking to the official WCAG website."
                },
                {
                    element: document.querySelector('#game-run-code-button'),
                    title: "Run Button",
                    intro: "Activate this button to display the code output in the sidebar, at the expense of 100 points."
                },
                {
                    element: document.querySelector('#carouselExampleIndicators'),
                    title: "Questions",
                    intro: "The line number query, POUR question, and criteria question will be displayed in this section."
                },
                {
                    element: document.querySelector('#sidebar'),
                    title: "SideBar",
                    intro: "Instructions for the current question and the output from running the code will be shown here."
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
                    intro: "The current question number and remaining criteria to be identified will be displayed here."
                },
                {
                    element: document.querySelector('#wifi-bars-and-label'),
                    title: "WiFi Bars",
                    intro: "The remaining WiFi bars are shown here; the game ends when all bars are depleted."
                },
                {
                    element: document.querySelector('#tutorial-reset-button'),
                    title: "Tutorial Button",
                    intro: "Click this button to run this UI tutorial again."
                },
                {
                    element: document.querySelector('#rank-image'),
                    title: "Rank",
                    intro: "Users will be promoted to a higher rank upon reaching every 1,000-point milestone."
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
