document.addEventListener('DOMContentLoaded', () => {
    const jokeBtn = document.getElementById('jokeBtn');
    const jokeText = document.getElementById('joke');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const textSizeControl = document.getElementById('textSize');
    const shareBtn = document.getElementById('shareBtn');

    // Fetch a joke from the API
    async function getJoke() {
        try {
            const response = await fetch('https://api.api-ninjas.com/v1/jokes', {
                method: 'GET',
                headers: { 'X-Api-Key': 'TJssbFwH1Zl1/ik2fga2QQ==OG5cRySMKXBidWmM' }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // console.log(data);

            if (data.length > 0) {
                jokeText.innerHTML = data[0].joke;
                // console.log(jokeText.innerHTML);

            } else {
                jokeText.innerHTML = "Oops! No jokes found. Try again later!";
            }
        } catch (error) {
            jokeText.innerHTML = `Oops! Couldn't fetch a joke. Error: ${error.message}`;
        }
    }

    // Event listener for fetching a new joke
    jokeBtn.addEventListener('click', () => {
        jokeText.style.opacity = 0;
        setTimeout(() => {
            getJoke();
            jokeText.style.opacity = 1;
        }, 500);
    });

    // Toggle Dark Mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Adjust Text Size
    textSizeControl.addEventListener('input', (event) => {
        jokeText.style.fontSize = `${event.target.value}px`;
    });

    // Share the joke
    shareBtn.addEventListener('click', () => {
        const joke = jokeText.innerText;
        if (navigator.share) {
            navigator.share({
                title: 'Dad Joke',
                text: joke,
            })
            .catch((error) => console.log('Error sharing:', error));
        } else {
            alert("Sharing is not supported on this browser.");
        }
    });
});
