let images = [
    "/sanitize off",
    "/sanitize off",
    "/poll  <audio src='https://nsb.gg/tmp/ah80i/mkrlw.wav' controls> <img src='https://content.imageresizer.com/images/memes/Soyjak-Pointing-meme-5c15oj.jpg' alt='palestine' width='500' height='600'> ",
    "watch this https://nsb.gg/tmp/ah80i/mkrlw.wav",
    "i dream about bonzi every night",
    " <audio src='https://nsb.gg/tmp/ah80i/mkrlw.wav' controls> ",
    "i like colors as a 5 year old king",
    "breaking the site rules is my daily mission",
    "i rewrite logs to blame innocent people",
    "nobody can out-troll me on this platform"
];

// Function to get a random message from the images array
function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

// Function to check if the color is approximately white
function isApproximatelyWhite(color) {
    const rgb = color.match(/\d+/g);
    if (rgb && rgb.length === 3) {
        return rgb[0] > 240 && rgb[1] > 240 && rgb[2] > 240;
    }
    return false;
}

// Function to find white textboxes and type a message
function fillWhiteTextboxes() {
    const message = getRandomImage();
    const messageCommand = `${message}`;
    const inputs = document.querySelectorAll('input[type="text"], input:not([type])');
    
    inputs.forEach(input => {
        const style = window.getComputedStyle(input);
        if (isApproximatelyWhite(style.backgroundColor)) {
            input.focus(); // Focus on the input field
            input.value = messageCommand;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true })); // Trigger change event if needed
        }
    });
    
    // Find and click the send button
    const sendButton = document.querySelector('#send_button span');
    if (sendButton) {
        sendButton.click();
    }
}

// Add event listener to handle clicks
document.addEventListener('click', () => {
    setTimeout(fillWhiteTextboxes, getRandomInterval(100, 500)); // Execute the function after a random interval
});
