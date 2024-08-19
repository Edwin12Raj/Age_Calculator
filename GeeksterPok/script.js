document.addEventListener("DOMContentLoaded", () => {
    fetchPokemonTypes();
    fetchAllPokemon();
});

const fetchAllPokemon = async () => {
    try {
        showLoadingSpinner();
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        displayPokemon(data.results);
    } catch (error) {
        console.error("Failed to fetch Pokémon data:", error);
        alert("Failed to load Pokémon data. Please try again later.");
    } finally {
        hideLoadingSpinner();
    }
};

const fetchPokemonTypes = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/type/");
        const data = await response.json();
        populateTypeDropdown(data.results);
    } catch (error) {
        console.error("Failed to fetch Pokémon types:", error);
    }
};

const populateTypeDropdown = (types) => {
    const typeFilter = document.getElementById("type-filter");
    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type.name;
        option.textContent = type.name.charAt(0).toUpperCase() + type.name.slice(1);
        typeFilter.appendChild(option);
    });
};

const displayPokemon = (pokemonList) => {
    const container = document.querySelector(".pokemon-container");
    container.innerHTML = "";

    pokemonList.forEach(pokemon => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.innerHTML = `
            <div class="pokemon-card-inner">
                <div class="pokemon-card-front">
                    <img src="https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png" alt="${pokemon.name}">
                    <h2>${pokemon.name}</h2>
                </div>
                <div class="pokemon-card-back">
                    <h3>Abilities:</h3>
                    <ul class="abilities-list">
                        <!-- Abilities will be dynamically added here -->
                    </ul>
                </div>
            </div>
        `;
        container.appendChild(pokemonCard);

        fetchPokemonDetails(pokemon.name, pokemonCard);
    });

    document.querySelectorAll(".pokemon-card").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
};

const fetchPokemonDetails = async (pokemonName, card) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) throw new Error("Failed to fetch Pokémon details");
        const data = await response.json();

        const abilitiesList = card.querySelector(".abilities-list");
        data.abilities.forEach(ability => {
            const li = document.createElement("li");
            li.textContent = ability.ability.name;
            abilitiesList.appendChild(li);
        });
    } catch (error) {
        console.error("Failed to fetch Pokémon details:", error);
    }
};

document.getElementById("filter-btn").addEventListener("click", async () => {
    const selectedType = document.getElementById("type-filter").value;
    if (selectedType === "all") {
        fetchAllPokemon();
    } else {
        try {
            showLoadingSpinner();
            const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
            if (!response.ok) throw new Error("Failed to fetch Pokémon by type");
            const data = await response.json();
            displayPokemon(data.pokemon.map(p => p.pokemon));
        } catch (error) {
            console.error("Failed to fetch Pokémon by type:", error);
        } finally {
            hideLoadingSpinner();
        }
    }
});

document.getElementById("reset-btn").addEventListener("click", () => {
    fetchAllPokemon();
});

document.getElementById("search-bar").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const allPokemonCards = document.querySelectorAll(".pokemon-card");

    allPokemonCards.forEach(card => {
        const name = card.querySelector("h2").textContent.toLowerCase();
        card.style.display = name.includes(query) ? "block" : "none";
    });

    if (!allPokemonCards.length) {
        document.querySelector(".pokemon-container").innerHTML = "No Pokémon found";
    }
});

const showLoadingSpinner = () => {
    document.getElementById("loading-spinner").style.display = "block";
};

const hideLoadingSpinner = () => {
    document.getElementById("loading-spinner").style.display = "none";
};
