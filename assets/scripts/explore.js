// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector("select");
  let image = document.querySelector('img');
  const playButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  //Populate the voice list when the page loads
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  //Actions when the button is clicked
  playButton.onclick = () => {
    let utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    speechSynthesis.speak(utterance);
    utterance.onstart = (event) => {
      image.src = 'assets/images/smiling-open.png';
      image.alt = 'Smiling with mouth open';
    }
    utterance.onend = (event) => {
      image.src = 'assets/images/smiling.png';
      image.alt = 'Smiling Face';
    }
  }
  
}