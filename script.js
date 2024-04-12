let recognition = null;
const textArea = document.getElementById('textArea');
const button = document.querySelector('button');

function startRecording() {
    recognition = new webkitSpeechRecognition();
    recognition.lang = ['en-US', 'fr-FR'];
    recognition.onresult = function(event) {
        console.log(event);
        textArea.value = event.results[0][0].transcript;
    };
    recognition.onend = function() {
        recognition.start(); // Restart recognition when it ends
    };
    recognition.start();
    button.textContent = 'Recording...';
}

function stopRecording() {
    if (recognition) {
        recognition.stop();
        recognition = null;
        button.textContent = 'Click Button To Start Recording';
    }
}

function toggleRecording() {
    if (recognition) {
        stopRecording();
    } else {
        startRecording();
    }
}

button.addEventListener('click', toggleRecording);

function copyInputField() {
    textArea.select();
    document.execCommand("copy");
    alert("Text copied: " + textArea.value);
}

