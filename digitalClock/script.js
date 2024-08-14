function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const greeting = document.getElementById('greeting');

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

    if (hours < 12) {
        greeting.textContent = 'Good Morning';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon';
    } else {
        greeting.textContent = 'Good Evening';
    }
}

setInterval(updateTime, 1000); // Updates the time every second
updateTime(); // Initial call
