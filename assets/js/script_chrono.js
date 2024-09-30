let timer;
let isRunning = false;
let elapsedTime = 0;
let laps = [];

const timeDisplay = document.getElementById('time-display');
const startStopBtn = document.getElementById('start-stop-btn');
const lapBtn = document.getElementById('lap-btn');
const resetBtn = document.getElementById('reset-btn');
const lapsList = document.getElementById('laps-list');

// Fonction pour afficher le temps écoulé sous format HH:MM:SS
function updateDisplay() {
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;
    timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Démarrer ou arrêter le chronomètre
startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
    } else {
        stopTimer();
    }
});

// Démarrer le chronomètre
function startTimer() {
    isRunning = true;
    lapBtn.disabled = false;
    resetBtn.disabled = false;
    startStopBtn.textContent = 'Arrêter';
    timer = setInterval(() => {
        elapsedTime++;
        updateDisplay();
    }, 1000);
}

// Arrêter le chronomètre
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startStopBtn.textContent = 'Démarrer';
}

// Enregistrer un tour
lapBtn.addEventListener('click', () => {
    const lapTime = timeDisplay.textContent;
    laps.push(lapTime);
    const li = document.createElement('li');
    li.textContent = `Tour ${laps.length}: ${lapTime}`;
    lapsList.appendChild(li);
});

// Réinitialiser le chronomètre
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    laps = [];
    updateDisplay();
    lapsList.innerHTML = '';
    startStopBtn.textContent = 'Démarrer';
    lapBtn.disabled = true;
    resetBtn.disabled = true;
});
