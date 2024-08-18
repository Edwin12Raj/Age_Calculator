document.getElementById('fetch-users').addEventListener('click', fetchUsers);

async function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const response = await fetch(url);
        const users = await response.json();

        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
        `;
        userList.appendChild(userDiv);
    });
}
