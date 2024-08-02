document.addEventListener('DOMContentLoaded', () => {
    const keyDisplay = document.getElementById('key');
    const keycodeDisplay = document.getElementById('keycode');
    const historyList = document.getElementById('history');

    let combination = [];

    document.addEventListener('keydown', (event) => {
        combination.push(event.key);
        if (combination.length > 1) {
            keyDisplay.textContent = combination.join(' + ');
            keycodeDisplay.textContent = combination.map(key => event[key + 'Key']).join(' + ');
        } else {
            keyDisplay.textContent = event.key;
            keycodeDisplay.textContent = event.keyCode;
        }

        const listItem = document.createElement('li');
        listItem.textContent = `Key: ${keyDisplay.textContent}, Key Code: ${keycodeDisplay.textContent}`;
        historyList.appendChild(listItem);

        // Play sound on keypress
        const audio = new Audio('keypress-sound.mp3');
        audio.play();

        setTimeout(() => {
            combination = [];
        }, 1000);
    });
});
