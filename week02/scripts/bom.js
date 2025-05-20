// Declare variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap'); // Corrected selector for ID
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Corrected selector for ID

// Remove or comment out the incorrect element creation/manipulation outside the event listener
/*
const li = document.querySelector('li');
const deleteButton = document.createElement('button');
li.textContent = input.ariaValueMax; // This was incorrect
deleteButton.textContent = '❌';
li.append(deleteButton);
li.append(li);
*/

if (button) {
    button.addEventListener('click', function () {
        const chapterText = input.value.trim(); // Get the input value and remove leading/trailing whitespace

        if (chapterText === '') {
            alert('Please enter a chapter.'); // Provide a message to the user
            input.focus(); // Return focus to the input field
            return; // Exit the function early
        }

        // Input is not blank, so create and populate elements:

        // 1. Create a new list item (li)
        const listItem = document.createElement('li');

        // Create a span element to hold the chapter text
        const chapterSpan = document.createElement('span');
        chapterSpan.textContent = chapterText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Using the 'X' as in the image

        // Append the span and the delete button to the list item
        listItem.appendChild(chapterSpan);
        listItem.appendChild(deleteButton);

        // Add an event listener to the delete button (for THIS specific listItem)
        deleteButton.addEventListener('click', function () {
            list.removeChild(listItem); // Remove the parent li element from the list
            input.focus(); // Optional: Return focus to the input field after deletion
        });

        // 3. Append the list item to the unordered list in your HTML.
        list.appendChild(listItem);

        // 4. Clear the input field and return focus to it.
        input.value = ''; // Sets the input field's value to an empty string
        input.focus();    // Returns the keyboard focus to the input field
    });

} else {
    console.error('Could not find the "Add Chapter" button. Check your HTML.');
}