const scoreDiv = document.getElementById('score-text');
const rankImage = document.getElementById('rank-image');
const modalRankImage = document.getElementById('congrats-modal-image');

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
    modalRankImage.alt = 'You are at Rank 5';
} else if(currentScore >= 60){
    changedToThreeThousand = true;
    changedToTwoThousand = true;
    changedToOneThousand = true;

    rankImage.src = "./Images/rank3.png";
    rankImage.alt = 'You are at Rank 4';
    modalRankImage.alt = 'You are at Rank 4';
} else if(currentScore >= 40){
    changedToTwoThousand = true;
    changedToOneThousand = true;

    rankImage.src = "./Images/rank2.png";
    rankImage.alt = 'You are at Rank 3';
    modalRankImage.alt = 'You are at Rank 3';
} else if(currentScore >= 20){
    changedToOneThousand = true;
    
    rankImage.src = "./Images/rank1.png";
    rankImage.alt = 'You are at Rank 2';
    modalRankImage.alt = 'You are at Rank 2';
}

const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if(currentScore >= 20 && changedToOneThousand == false){
                rankImage.src = "./Images/rank1.png";
                rankImage.alt = 'You are at Rank 2';
                modalRankImage.alt = 'You are at Rank 2';

                document.getElementById('congrats-modal-image').src = "./Images/rank1.png";
                changedToOneThousand = true;
                document.getElementById('congratsModalOpenButton').click();
            }
            else if(currentScore >= 40 && changedToTwoThousand == false){
                rankImage.src = "./Images/rank2.png";
                rankImage.alt = 'You are at Rank 3';
                modalRankImage.alt = 'You are at Rank 3';

                document.getElementById('congrats-modal-image').src = "./Images/rank2.png";
                changedToTwoThousand = true;
                document.getElementById('congratsModalOpenButton').click();
            }
            else if(currentScore >= 60 && changedToThreeThousand == false){
                rankImage.src = "./Images/rank3.png";
                rankImage.alt = 'You are at Rank 4';
                modalRankImage.alt = 'You are at Rank 4';

                document.getElementById('congrats-modal-image').src = "./Images/rank3.png";
                changedToThreeThousand = true;
                document.getElementById('congratsModalOpenButton').click();
            }
            else if(currentScore >= 80 && changedToFourThousand == false){
                rankImage.src = "./Images/rank4.png";
                rankImage.alt = 'You are at Rank 5';
                modalRankImage.alt = 'You are at Rank 5';

                document.getElementById('congrats-modal-image').src = "./Images/rank4.png";
                changedToFourThousand = true;
                document.getElementById('congratsModalOpenButton').click();
            }
        }
    }
};

const observer = new MutationObserver(callback);

const config = {
    childList: true,
    subtree: true
};

observer.observe(scoreDiv, config);