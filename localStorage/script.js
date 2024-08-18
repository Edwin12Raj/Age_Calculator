document.getElementById('userForm').addEventListener('submit', addUser);

function addUser(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let village = document.getElementById('village').value;
    let city = document.getElementById('city').value;

    let userData = {
        name,
        phone,
        village,
        city
    };

    storeUserData(userData);
    displayUserCards();
    
    document.getElementById('userForm').reset();
}

function storeUserData(userData) {
    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
}

function displayUserCards() {
    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    let userCards = document.getElementById('userCards');
    userCards.innerHTML = '';
    users.forEach(user => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>Phone: ${user.phone}</p>
            <p>Village: ${user.village}</p>
            <p>City: ${user.city}</p>
        `;
        userCards.appendChild(card);
    });
}

document.getElementById('light-mode').addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
});

document.getElementById('dark-mode').addEventListener('click', () => {
    document.body.classList.add('dark-mode');
});

// Initial call to display user cards from local storage
displayUserCards();
