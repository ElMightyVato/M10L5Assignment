// Task 2: Function to change color of the box when clicked
function changeColor() {
    // Get the element by its ID
    const box = document.getElementById('box');
    
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the background color of the box
    box.style.backgroundColor = randomColor;
}

// Task 3: Function to change size of the box when button is clicked
function changeBoxSize() {
    // Get the element by its ID
    const box = document.getElementById('box');
    
    // Toggle the size of the box
    if (box.style.width === '200px') {
        box.style.width = '300px';
        box.style.height = '300px';
    } else {
        box.style.width = '200px';
        box.style.height = '200px';
    }
}

// Function to change the text color on hover
function changeTextColor() {
    const textElement = document.getElementById('textContent');
    textElement.style.color = '#e74c3c'; // Change text color on hover
}

// Function to reset the text color when mouse is out
function resetTextColor() {
    const textElement = document.getElementById('textContent');
    textElement.style.color = '#2c3e50'; // Reset to original color
}
