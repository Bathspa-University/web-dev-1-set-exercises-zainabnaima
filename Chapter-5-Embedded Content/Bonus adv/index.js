// Function to convert text to speech
function convertToSpeech() {
    const text = document.getElementById('text-to-speech-input').value;

    // Create speech synthesis request
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    
    // Speak the text
    window.speechSynthesis.speak(utterance);
}

// Event listener for the text-to-speech button
document.getElementById('text-to-speech-button').addEventListener('click', convertToSpeech);

// Array of audio samples
const audioSamples = [
    { title: 'Sample 1', duration: 30 },
    { title: 'Sample 2', duration: 45 },
    // Add more audio samples here
];

// Constants for pagination
const samplesPerPage = 9;
let currentPage = 1;

// Function to display audio samples for the current page
function displaySamples() {
    const startIndex = (currentPage - 1) * samplesPerPage;
    const endIndex = startIndex + samplesPerPage;
    const samplesToShow = audioSamples.slice(startIndex, endIndex);

    const soundboard = document.querySelector('.soundboard');
    soundboard.innerHTML = '';

    samplesToShow.forEach(sample => {
        const button = document.createElement('button');
        button.classList.add('sample-button');
        button.textContent = sample.title + ' (' + sample.duration + 's)';
        soundboard.appendChild(button);
    });

    updatePaginationButtons();
}

// Function to update pagination buttons
function updatePaginationButtons() {
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');

    if (currentPage === 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    const totalPages = Math.ceil(audioSamples.length / samplesPerPage);
    if (currentPage === totalPages) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Event listener for pagination buttons
document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displaySamples();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(audioSamples.length / samplesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displaySamples();
    }
});

// Initial display of samples
displaySamples();

