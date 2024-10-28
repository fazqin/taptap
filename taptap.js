let score = 0;
const button = document.getElementById('tap-button');
const scoreDisplay = document.querySelector('.score');
const clickSound = document.getElementById('click-sound');
const bubbleContainer = document.getElementById('bubble-container');

button.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
    clickSound.currentTime = 0; // Reset audio to the beginning
    clickSound.play().catch(error => {
        console.log('Sound play error:', error);
    });
    createBubble();
});

// Optional: Function to change the button image and sound dynamically
function changeButtonImage(imagePath) {
    const buttonImage = document.getElementById('button-image');
    buttonImage.src = imagePath;
}

function changeClickSound(soundPath) {
    clickSound.src = soundPath;
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + '%'; // Random horizontal position
    bubbleContainer.appendChild(bubble);

    // Remove the bubble after animation is complete
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

function createBubble() {
    const bubble = document.createElement('img');
    bubble.src = 'crypto.png'; // Ganti dengan path gambar Anda
    bubble.classList.add('bubble');
    bubble.style.position = 'absolute'; // Pastikan posisi absolut
    bubble.style.left = Math.random() * 100 + '%'; // Posisi horizontal acak
    bubbleContainer.appendChild(bubble);

    // Remove the bubble after animation is complete
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}


// Example usage (replace 'new-image.png' and 'new-click.mp3' with your files):
// changeButtonImage('images/new-image.png');
// changeClickSound('sounds/new-click.mp3');
