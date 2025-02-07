// Select the elements by their IDs
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const gif = document.getElementById('gif');
const welcomeText = document.getElementById('welcomeText');
const buttonContainer = document.querySelector('.button-container'); // Container for buttons

// Keep track of the size of the green button
let greenButtonSize = 1;

// When the green button is clicked, change the GIF, text, and remove buttons
yesButton.addEventListener('click', function() {
    // Change the source of the GIF to img2.gif
    gif.src = 'img2.gif';  // Replace 'img2.gif' with the actual path to your second GIF
    
    // Change the text to "YOHOOOOOOO"
    welcomeText.textContent = 'YOHOOOOOOO';
    
    // Remove the buttons from the page
    buttonContainer.style.display = 'none';  // Hides the buttons
    
    // Optionally, you can also remove the button container if you want to
    // buttonContainer.remove();  // This will completely remove the buttons from the DOM
});

// When the red button is clicked, make the green button bigger
noButton.addEventListener('click', function() {
    // Increase the size of the green button each time
    greenButtonSize += 0.2;  // Increase by 20% each time
    
    // Update the green button's scale (make it bigger)
    yesButton.style.transform = `scale(${greenButtonSize})`;
});
