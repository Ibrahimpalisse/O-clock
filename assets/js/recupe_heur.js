let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function updateClock() {
    let now = new Date();
    console.log(now);
    
    hours.textContent = now.getHours().toString().padStart(2, '0');
    minutes.textContent = now.getMinutes().toString().padStart(2, '0');
    seconds.textContent = now.getSeconds().toString().padStart(2, '0');
}


setInterval(updateClock, 1000);


updateClock();




