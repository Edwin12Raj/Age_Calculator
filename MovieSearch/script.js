const apiKey ='c49fbfd1'; 
const moviesContainer = document.getElementById('moviesContainer');
const loading = document.getElementById('loading');
let page = 1;
let loadingMore = false;

const fetchMovies = async (query = '', page = 1) => {
    loading.style.display = 'block';
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`);
        const data = await response.json();
        if (data.Response === "True") {
            data.Search.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'assets/placeholder.jpg'}" alt="${movie.Title}">
                    <div class="info">
                        <h3>${movie.Title}</h3>
                        <p>${movie.Year}</p>
                    </div>
                `;
                movieCard.addEventListener('click', () => showMovieDetails(movie.imdbID));
                moviesContainer.appendChild(movieCard);
            });
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
    } finally {
        loading.style.display = 'none';
        loadingMore = false;
    }
};

const showMovieDetails = (movieId) => {
    window.location.href = `movie-details.html?id=${movieId}`;
};

const loadMoreMovies = () => {
    if (loadingMore) return;
    loadingMore = true;
    page++;
    fetchMovies('', page);
};

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loadingMore) {
        loadMoreMovies();
    }
});

// Initial load
fetchMovies();

