# Quick Notes Chrome Extension

**Quick Notes** is a simple Chrome extension that allows users to jot down and save quick notes directly from the browser. The extension uses Chrome's `storage.sync` API to store notes, so they persist across different Chrome sessions.

## Features

- Jot down quick notes from the pop-up.
- Save notes for later use.
- Retrieve saved notes when reopening the extension.

## Project Structure

```plaintext
quick-notes-extension/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── popup.html
├── popup.js
├── manifest.json
└── README.md

## Installation
Clone or download this repository to your local machine.
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the quick-notes-extension folder where the project files are stored.
The extension will now be installed and available in your Chrome toolbar.

## Usage
Click on the Quick Notes icon in your Chrome toolbar.
Type your note in the text area.
Click the Save Note button to save your note.
The note will be saved and can be retrieved the next time you open the extension.

## Files and Code Overview
manifest.json
This file defines the metadata for the extension, such as its name, version, and permissions required. It also specifies the popup.html file as the pop-up interface for the extension.

popup.html
This is the front-end of the extension. It includes the structure for a simple text area where users can type their notes and a button to save the note.

popup.js
This is the main JavaScript file responsible for handling the saving and retrieval of notes. It uses Chrome's storage.sync API to store and fetch notes.

## Icons
The extension uses three icon sizes (16x16, 48x48, and 128x128 pixels) to represent itself in different parts of the Chrome interface.