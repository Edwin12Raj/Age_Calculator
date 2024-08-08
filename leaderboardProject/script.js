const addScoreButton = document.getElementById('addScore');
const leaderboard = document.getElementById('leaderboard');

addScoreButton.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const score = parseInt(document.getElementById('score').value);

    if (firstName && lastName && country && !isNaN(score)) {
        addPlayer(firstName, lastName, country, score);
        sortLeaderboard();
    } else {
        alert('Please fill in all fields');
    }
});

function addPlayer(firstName, lastName, country, score) {
    const playerRow = document.createElement('div');
    playerRow.classList.add('player-row');

    playerRow.innerHTML = `
        <div>${firstName} ${lastName} <br> ${new Date().toLocaleDateString()}</div>
        <div>${country}</div>
        <div>
            <span class="score">${score}</span>
            <button onclick="changeScore(this, -5)">-5</button>
            <button onclick="changeScore(this, 5)">+5</button>
            <button onclick="deletePlayer(this)">🗑️</button>
        </div>
    `;
    leaderboard.appendChild(playerRow);
}

function changeScore(button, value) {
    const scoreSpan = button.parentElement.querySelector('.score');
    let newScore = parseInt(scoreSpan.innerText) + value;
    scoreSpan.innerText = newScore;
    sortLeaderboard();
}

function deletePlayer(button) {
    button.parentElement.parentElement.remove();
    sortLeaderboard();
}

function sortLeaderboard() {
    let rows = Array.from(document.querySelectorAll('.player-row'));
    rows.sort((a, b) => {
        let scoreA = parseInt(a.querySelector('.score').innerText);
        let scoreB = parseInt(b.querySelector('.score').innerText);
        return scoreB - scoreA;
    });

    leaderboard.innerHTML = '';
    rows.forEach(row => leaderboard.appendChild(row));
}
