document.addEventListener("DOMContentLoaded", function() {
    const soundboard = document.querySelector(".soundboard");

    // Function to convert text to speech
    function convertToSpeech() {
        const text = document.getElementById('text-to-speech-input').value;
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        window.speechSynthesis.speak(utterance);
    }

    // Event listener for the text-to-speech button
    document.getElementById('text-to-speech-button').addEventListener('click', convertToSpeech);

    // Array of sample names and corresponding audio files
    const samples = [
        { name: "Ah-Ha", audio: "Audio/ah-ha.mp3" },
        { name: "Dan", audio: "Audio/dan.mp3" },
        { name: "Back of the net", audio: "Audio/back-of-the-net.mp3" },
        { name: "Bang out of order", audio: "Audio/bangoutoforder.mp3" },
        { name: "email of the evening", audio: "Audio/emailoftheevening.mp3" },
        { name: "I ate a scotch egg", audio: "Audio/iateascotchegg.mp3" },
        { name: "Im confused", audio: "Audio/imconfused.mp3" },
        { name: "Hello Patridge", audio: "Audio/hellopartridge.mp3" },
    ];

    // Function to play audio
    function playAudio(audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play();
    }

    samples.forEach(sample => {
        const button = document.createElement("button");
        button.textContent = sample.name;
        button.classList.add("sample-button");
        button.addEventListener("click", () => {
            playAudio(sample.audio);
        });
        soundboard.appendChild(button);
    });
});
