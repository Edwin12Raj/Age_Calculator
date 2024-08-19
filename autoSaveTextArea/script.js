document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('autoSaveTextArea');
    const themeSelect = document.getElementById('themeSelect');
    
    // Load saved data from localStorage
    const savedText = localStorage.getItem('autoSaveText');
    if (savedText) {
        textArea.value = savedText;
    }

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeSelect.value = savedTheme === 'dark-mode' ? 'dark' : 'light';
    }

    // Auto-save text to localStorage
    textArea.addEventListener('input', () => {
        localStorage.setItem('autoSaveText', textArea.value);
    });

    // Theme selector change event
    themeSelect.addEventListener('change', (e) => {
        const selectedTheme = e.target.value === 'dark' ? 'dark-mode' : '';
        document.body.className = selectedTheme;
        localStorage.setItem('selectedTheme', selectedTheme);
    });
});
