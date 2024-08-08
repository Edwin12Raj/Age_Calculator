let emoji_container = document.getElementById("emoji-container");
let search_field = document.getElementById("search-bar");

function displayEmojee(searchQuery = ""){
    let filteredList = emojiList.filter(function(emoji){
        if(searchQuery.length === 0){
            return true;
        }
        return emoji.description.toLowerCase().includes(searchQuery.toLowerCase());
    });

    emoji_container.innerHTML = "";
    filteredList.forEach(function(emoji){
        let emojiDiv = document.createElement("div");
        emojiDiv.className = "emoji";
        emojiDiv.innerHTML = emoji.emoji;
        emoji_container.appendChild(emojiDiv);
    });
}

window.addEventListener("load", function() {
    displayEmojee();
});

search_field.addEventListener("keyup", function(e) {
    let value = e.target.value;
    displayEmojee(value);
});
