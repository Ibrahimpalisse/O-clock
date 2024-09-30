let timer;
let isRunning = false;
let timeRemaining = 0;

const timeInput = document.getElementById('time-input');
const timeDisplay = document.getElementById('time-display');
const startStopBtn = document.getElementById('start-stop-btn');

// Fonction pour afficher le temps restant dans un format MM:SS
function updateDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Augmenter le temps d'une minute
document.getElementById('increase-time').addEventListener('click', () => {
    timeInput.value = parseInt(timeInput.value) + 1;
});

// Diminuer le temps d'une minute
document.getElementById('decrease-time').addEventListener('click', () => {
    if (timeInput.value > 0) {
        timeInput.value = parseInt(timeInput.value) - 1;
    }
});

// Démarrer ou arrêter le minuteur avec un seul bouton
startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
    } else {
        stopTimer();
    }
});

// Démarrer le minuteur
function startTimer() {
    timeRemaining = parseInt(timeInput.value) * 60;
    updateDisplay();
    isRunning = true;
    startStopBtn.textContent = 'Arrêter';  // Changer le texte en "Arrêter"
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateDisplay();
        } else {
            stopTimer();
            alert('Le temps est écoulé !');
        }
    }, 1000);
}

// Arrêter le minuteur
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startStopBtn.textContent = 'Démarrer';  // Revenir à "Démarrer"
}
