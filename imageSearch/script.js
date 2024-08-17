const apiKey = 'dljKfrXnMUbQYRRwvym8MTk14K_kH5Ss2QskQozv7S0';
let currentPage = 1;
let currentQuery = '';

const searchButton = document.getElementById('search-button');
const showMoreButton = document.getElementById('show-more-button');
const imagesContainer = document.getElementById('images-container');
const loadingSpinner = document.getElementById('loading-spinner');

async function fetchImages(query, page = 1) {
    loadingSpinner.style.display = 'block';
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imagesContainer.appendChild(imgElement);
    });
}

searchButton.addEventListener('click', async () => {
    currentQuery = document.getElementById('search-input').value;
    if (!currentQuery) return;
    imagesContainer.innerHTML = '';
    currentPage = 1;
    const images = await fetchImages(currentQuery, currentPage);
    displayImages(images);
    showMoreButton.style.display = images.length ? 'block' : 'none';
});

showMoreButton.addEventListener('click', async () => {
    currentPage++;
    const images = await fetchImages(currentQuery, currentPage);
    displayImages(images);
});
