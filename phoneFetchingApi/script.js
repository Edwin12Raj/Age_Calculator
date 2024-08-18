// script.js

document.addEventListener('DOMContentLoaded', () => {
    const phoneContainer = document.getElementById('phone-container');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const showAllBtn = document.getElementById('show-all-btn');
    const phoneDetailsModal = document.getElementById('phone-details-modal');
    const phoneDetails = document.getElementById('phone-details');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    // Function to fetch and display phones
    function fetchPhones(searchTerm = '') {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchTerm}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const phones = data.data;
                displayPhones(phones);
            })
            .catch(error => console.error('Error fetching phones:', error));
    }

    // Function to display phones
    function displayPhones(phones) {
        phoneContainer.innerHTML = ''; // Clear previous results

        if (phones.length === 0) {
            phoneContainer.innerHTML = '<p>No phones found.</p>';
            return;
        }

        phones.forEach(phone => {
            const phoneCard = document.createElement('div');
            phoneCard.className = 'phone-card';
            phoneCard.innerHTML = `
                <img src="${phone.image}" alt="${phone.phone_name}">
                <h3>${phone.phone_name}</h3>
                <p>${phone.brand}</p>
            `;

            // Click event to display detailed info in a modal
            phoneCard.addEventListener('click', () => {
                fetchPhoneDetails(phone.slug);
            });

            phoneContainer.appendChild(phoneCard);
        });
    }

    // Function to fetch and display phone details
    function fetchPhoneDetails(phoneSlug) {
        const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayPhoneDetails(data.data);
            })
            .catch(error => console.error('Error fetching phone details:', error));
    }

    // Function to display detailed phone information in a modal
    function displayPhoneDetails(phone) {
        phoneDetails.innerHTML = `
            <h2>${phone.name}</h2>
            <img src="${phone.image}" alt="${phone.name}">
            <p><strong>Release Date:</strong> ${phone.releaseDate || 'N/A'}</p>
            <p><strong>Main Features:</strong></p>
            <ul>
                <li><strong>Chipset:</strong> ${phone.mainFeatures.chipSet}</li>
                <li><strong>Display Size:</strong> ${phone.mainFeatures.displaySize}</li>
                <li><strong>Memory:</strong> ${phone.mainFeatures.memory}</li>
                <li><strong>Storage:</strong> ${phone.mainFeatures.storage}</li>
            </ul>
            <p><strong>Sensors:</strong> ${phone.mainFeatures.sensors.join(', ')}</p>
            <p><strong>Other Features:</strong></p>
            <ul>
                ${phone.others ? Object.entries(phone.others).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('') : '<li>N/A</li>'}
            </ul>
        `;

        // Show the modal and overlay
        phoneDetailsModal.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Event listener for the search button
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        fetchPhones(searchTerm);
    });

    // Event listener for the "Show All" button
    showAllBtn.addEventListener('click', () => {
        fetchPhones(); // Fetch all phones
    });

    // Event listener to close the modal
    closeBtn.addEventListener('click', () => {
        phoneDetailsModal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Event listener to close the modal when clicking outside of it
    overlay.addEventListener('click', () => {
        phoneDetailsModal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Initial fetch to show some phones on startup
    fetchPhones('oppo'); // Fetching "oppo" as the default search term
});
