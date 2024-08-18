document.getElementById('fetch-images').addEventListener('click', fetchImages);
// let apiKey = "2p8lpMpkI-VxEK1Vy0EOfQE646wmysvZLMGztoVpLq8";
let count = 10;

let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
function fetchImages() {
    // const url = 'https://api.unsplash.com/photos/random?count=6&client_id=YOUR_ACCESS_KEY';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageGallery = document.getElementById('image-gallery');
            imageGallery.innerHTML = '';

            data.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.urls.small;
                imgElement.alt = image.alt_description;
                imageGallery.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
}
