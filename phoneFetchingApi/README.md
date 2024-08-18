# PhoneMart - Phone Shopping Web Application

## Overview

PhoneMart is a responsive phone shopping web application that allows users to search for phones, view detailed information, and browse a list of available phones. This project was built using HTML, CSS, and JavaScript and is designed to be visually appealing, user-friendly, and fully responsive across all screen sizes.

## Features

- **Responsive Design**: The application adapts seamlessly to different screen sizes, ensuring a smooth user experience on desktops, tablets, and mobile devices.
- **Search Functionality**: Users can search for phones by entering keywords, and relevant results are displayed dynamically.
- **Phone Details Pop-up**: Clicking on a phone card opens a pop-up modal displaying detailed information about the phone, with a close button to return to the main view.
- **Show All Phones**: A "Show All" button allows users to view a complete list of all available phones.

## How the Task Was Accomplished

### 1. HTML & CSS Structure
- **Header and Footer**: A professional header and footer were designed with navigation links and social media icons, using Flexbox for layout management.
- **Search Box**: A search input field and button were added to the top of the page, styled to be user-friendly and accessible.
- **Phone Cards**: The phone cards display an image and basic information for each phone, and they are styled to look clean and modern.
- **Modal for Details**: The modal that pops up when clicking on a phone card was designed to display additional details about the phone in a centered, overlay style.

### 2. JavaScript Functionality
- **Fetching Phone Data**: JavaScript was used to fetch phone data from the provided API. This data is then dynamically inserted into the DOM to display the phone cards on the page.
- **Search Functionality**: A JavaScript function was implemented to filter the phones based on the user's search input. The search results are updated in real-time.
- **Modal Pop-up for Details**: Event listeners were added to each phone card to trigger the modal pop-up. The modal displays detailed information about the selected phone, fetched dynamically based on the user's click.
- **Show All Button**: The "Show All" button triggers a function that fetches and displays all available phones, allowing users to browse through the entire collection.

### 3. Responsive Design
- **Media Queries**: CSS media queries were utilized to adjust the layout and styling of the webpage across different screen sizes. This ensures that the application is fully responsive, providing an optimal viewing experience on mobile devices, tablets, and desktops.
- **Flexbox Layouts**: Flexbox was used extensively to create flexible and responsive layouts for the header, footer, phone cards, and other components.