const messageInput = document.getElementById('messageInput');
const passMessageButton = document.getElementById('passMessageButton');
const messageDisplay = document.getElementById('messageDisplay');

// Function to pass the message
passMessageButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    
    if (message) {
        messageDisplay.innerText = message; // Display the message
        messageInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a message to pass!');
    }
});
