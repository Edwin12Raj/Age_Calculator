document.addEventListener('DOMContentLoaded', function () {
    const noteArea = document.getElementById('noteArea');
    const saveButton = document.getElementById('saveNote');
    const clearButton = document.getElementById('clearNote');

    // Load the saved note when the popup opens
    chrome.storage.sync.get(['quickNote'], function (result) {
        if (result.quickNote) {
            noteArea.value = result.quickNote;
        }
    });

    // Save the note when the Save button is clicked
    saveButton.addEventListener('click', function () {
        const note = noteArea.value;
        chrome.storage.sync.set({ quickNote: note }, function () {
            console.log('Note saved!');
        });
    });

    // Clear the note when the Clear button is clicked
    clearButton.addEventListener('click', function () {
        noteArea.value = '';
        chrome.storage.sync.remove('quickNote', function () {
            console.log('Note cleared!');
        });
    });
});
