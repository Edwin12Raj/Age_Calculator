document.addEventListener('DOMContentLoaded', function () {
    const noteArea = document.getElementById('noteArea');
    const saveButton = document.getElementById('saveNote');

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
});
