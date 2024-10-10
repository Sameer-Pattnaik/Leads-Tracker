Here is the documentation for the project based on the uploaded files:

---

## Project Overview

This project consists of a basic webpage that allows users to save and manage URLs. The core functionality involves saving a URL entered by the user, storing it locally in the browser, and displaying it on the webpage. The user can also save the current active tab's URL and delete all saved URLs from the local storage.

### Files Included:
1. **index.html** - Defines the structure of the webpage.
2. **script.js** - Provides the logic and functionality for the page.
3. **style.css** - Contains the styling for the webpage elements.

---

## **File Descriptions**

### 1. **index.html** 
This file defines the layout of the webpage. It includes an input field, buttons for saving URLs, saving the active tab, and deleting all saved URLs. It also links the external CSS and JavaScript files.

**Key HTML Elements:**
- An input field (`<input>`) for entering URLs.
- Three buttons:
  - "Save Input" - Saves the URL entered by the user.
  - "Save Tab" - Saves the currently active browser tab's URL.
  - "Delete All" - Clears all saved URLs from local storage.
- An unordered list (`<ul>`) to display the saved URLs.
  
**Linked Files**:
- Links `style.css` for styling.
- Links `script.js` for the functionality of the buttons.

Example snippet from the file:
```html
<input type="text" id="input-el">
<button id="input-btn">SAVE INPUT</button>
<button id="tab-btn">SAVE TAB</button>
<button id="delete-btn">DELETE ALL</button>
<ul id="ul-el"></ul>
```

[Full Source](7).

---

### 2. **script.js**
This JavaScript file contains the logic for handling user interactions such as saving URLs, deleting them, and displaying them.

**Main Functionality**:
- **Local Storage Integration**: The user's saved URLs are stored in `localStorage` using `JSON.stringify()` and `JSON.parse()` for persistence across page reloads.
- **Button Event Listeners**:
  - `input-btn` saves the URL entered in the input field to `localStorage`.
  - `tab-btn` saves the URL of the currently active browser tab.
  - `delete-btn` clears all URLs from `localStorage` and resets the displayed list.
- **Render Function**: Updates the list of saved URLs in the HTML when new URLs are added or when the page is loaded.

Example event listener for saving the input:
```javascript
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});
```

[Full Source](8).

---

### 3. **style.css**
This file contains the styles for the webpage, including the layout of buttons, input fields, and the saved URL list.

**Styling Overview**:
- Sets font and basic page layout.
- Provides styling for the buttons (e.g., font size, colors).
- Defines how the list and links are displayed.
- Makes use of a green color (`#5f9341`) for buttons and link text.

Example CSS for the Save buttons:
```css
#input-btn, #tab-btn {
    font-weight: 700;
    font-size: 18px;
    padding: 10px;
    width: 150px;
    background-color: #5f9341;
    color: white;
}
```

[Full Source](9).

---

## **Usage Instructions**

1. **Saving Input URL**:
   - Enter a URL in the text input field.
   - Click the "Save Input" button to store it locally and display it on the page.

2. **Saving Current Tab**:
   - Click the "Save Tab" button to store the URL of the active tab in your browser.

3. **Deleting All URLs**:
   - Click the "Delete All" button to remove all saved URLs from the local storage and clear the list displayed on the page.

4. **Persistent Storage**:
   - The saved URLs remain available even after refreshing the page, thanks to the usage of `localStorage`.

---

## **Conclusion**
This project demonstrates how to build a simple webpage that leverages local storage to persist user data (saved URLs). The HTML, JavaScript, and CSS files are structured to provide a seamless and responsive user experience. The project serves as a foundation for learning how to handle data persistence, user input, and dynamic page updates.
