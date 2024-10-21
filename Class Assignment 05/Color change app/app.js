const colorButtons = document.querySelectorAll('.color');
const randomColorButton = document.getElementById('randomColorButton');

function changeBackgroundColor(color, button) {
    document.body.style.backgroundColor = color;
    button.style.backgroundColor = color; // Change button color to match the background
}

// Add event listeners to color buttons
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.style.backgroundColor;
        changeBackgroundColor(color, button);
    });
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener for random color button
randomColorButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    changeBackgroundColor(randomColor, randomColorButton);
});
