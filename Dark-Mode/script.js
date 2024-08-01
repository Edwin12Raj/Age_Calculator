document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeImage = document.getElementById('theme-image');
  
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        body.classList.add('dark');
        body.classList.remove('light');
        themeImage.src = 'dark-theme.jpg';
      } else {
        body.classList.add('light');
        body.classList.remove('dark');
        themeImage.src = 'light-theme.jpg';
      }
    });
  });
  