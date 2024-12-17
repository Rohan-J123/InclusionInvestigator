var specialEffectsEnabled = sessionStorage.getItem("specialEffectsEnabled");

if(specialEffectsEnabled == 'false'){
    $('#specialEffectsToggle').click();
}

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

function shakeScreen(){
    if(specialEffectsEnabled == 'true'){
        var shakeElement = document.querySelector("body");
        shakeElement.classList.add("shake-slow");
        setTimeout(function () {
        shakeElement.classList.remove("shake-slow");
        }, 1000);
    }
}

function shakeElement(shakeElement) {
    if(specialEffectsEnabled == 'true'){
        shakeElement.classList.add("shake-slow");
        setTimeout(function () {
        shakeElement.classList.remove("shake-slow");
        }, 1000);
    }
}

$('#specialEffectsToggle').on('change', function() {
    if ($(this).is(':checked')) {
        specialEffectsEnabled = 'true';
        sessionStorage.setItem('specialEffectsEnabled', 'true');
    } else {
        specialEffectsEnabled = 'false';
        sessionStorage.setItem('specialEffectsEnabled', 'false');
    }
});