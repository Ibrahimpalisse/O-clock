let alarms = [];

const alarmTimeInput = document.getElementById('alarm-time');
const alarmMessageInput = document.getElementById('alarm-message');
const setAlarmBtn = document.getElementById('set-alarm-btn');
const alarmsList = document.getElementById('alarms-list');

// Fonction pour ajouter une alarme
setAlarmBtn.addEventListener('click', () => {
    const alarmTime = alarmTimeInput.value;
    const alarmMessage = alarmMessageInput.value;

    if (alarmTime && alarmMessage) {
        const alarmObj = {
            time: alarmTime,
            message: alarmMessage,
            status: 'active'
        };
        alarms.push(alarmObj);
        updateAlarmsList();
        alarmTimeInput.value = '';
        alarmMessageInput.value = '';
    }
});

// Fonction pour afficher la liste des alarmes
function updateAlarmsList() {
    alarmsList.innerHTML = '';
    const now = new Date();

    alarms.forEach((alarm, index) => {
        const alarmTime = new Date();
        const [hours, minutes] = alarm.time.split(':');
        alarmTime.setHours(hours, minutes, 0, 0);

        const timeDifference = alarmTime - now;
        let timeStatus;

        if (timeDifference <= 0) {
            alarm.status = 'passée';
            timeStatus = 'passée';
        } else {
            const remainingTime = formatTimeDifference(timeDifference);
            timeStatus = `dans ${remainingTime}`;
        }

        const li = document.createElement('li');
        li.innerHTML = `${alarm.time} - ${alarm.message} <strong>${timeStatus}</strong>`;
        alarmsList.appendChild(li);
    });
}

// Formater le temps restant avant l'alarme
function formatTimeDifference(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours}h ${minutes}m ${seconds}s`;
}

// Vérification régulière des alarmes et affichage de l'alerte lorsque l'alarme est atteinte
setInterval(() => {
    const now = new Date();

    alarms.forEach(alarm => {
        const alarmTime = new Date();
        const [hours, minutes] = alarm.time.split(':');
        alarmTime.setHours(hours, minutes, 0, 0);

        if (alarm.status === 'active' && now >= alarmTime) {
            alert(`Alarme ! ${alarm.message}`);
            alarm.status = 'passée';
        }
    });

    updateAlarmsList();
}, 1000);
