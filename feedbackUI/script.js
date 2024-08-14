const feedbackOptions = document.querySelectorAll('.feedback');
const sendFeedbackButton = document.getElementById('send-feedback');
const feedbackConfirmation = document.getElementById('feedback-confirmation');
const selectedFeedbackText = document.getElementById('selected-feedback');

let selectedFeedback = '';

feedbackOptions.forEach(option => {
    option.addEventListener('click', () => {
        selectedFeedback = option.textContent;
        feedbackOptions.forEach(btn => btn.style.backgroundColor = '#f0f0f0');
        option.style.backgroundColor = '#007bff';
        option.style.color = 'white';
    });
});

sendFeedbackButton.addEventListener('click', () => {
    if (selectedFeedback) {
        selectedFeedbackText.textContent = selectedFeedback;
        document.getElementById('feedback-system').classList.add('hidden');
        feedbackConfirmation.classList.remove('hidden');
    }
});
