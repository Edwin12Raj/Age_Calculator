const accessKey = "dljKfrXnMUbQYRRwvym8MTk14K_kH5Ss2QskQozv7S0"; // Replace with your Unsplash API access key
let page = 1;

const loadImages = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}&per_page=10`
  );
  const data = await response.json();
  const gallery = document.getElementById("gallery");
  data.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.urls.small;
    gallery.appendChild(imgElement);
  });
  page++;
};

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadImages();
  }
};

window.addEventListener("scroll", handleScroll);

// Initial load
loadImages();
