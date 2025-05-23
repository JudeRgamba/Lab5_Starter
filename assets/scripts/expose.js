// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let image = document.querySelector('img');
  let audio = document.querySelector('audio');
  const selectHorn = document.getElementById("horn-select");
  
  selectHorn.addEventListener("change", function() {
    const selectedValue = selectHorn.value;

    if (selectedValue == 'air-horn') {
      image.src = 'assets/images/air-horn.svg'; 
      image.alt = 'Air Horn Selected';
      playAudio('air-horn', audio);
    }

    else if (selectedValue == 'car-horn') {
      image.src = 'assets/images/car-horn.svg'; 
      image.alt = 'Car Horn Selected';
      playAudio('car-horn', audio);
    }

    else if (selectedValue == 'party-horn') {
      image.src = 'assets/images/party-horn.svg'; 
      image.alt = 'Party Horn Selected';
      playAudio('party-horn', audio);
    }
  });

  //Audio
  let divElement = document.getElementById('volume-controls');
  let imageElement = divElement.querySelector('img');
  const obj = document.getElementById("volume");
  obj.addEventListener("input", function() {
    const objValue = Number(obj.value);
    if (objValue == 0) {
      imageElement.src = 'assets/icons/volume-level-0.svg';
      imageElement.alt = 'Volume Level 0';
      audio.volume = 0;
    }

    else if (objValue < 33) {
      imageElement.src = 'assets/icons/volume-level-1.svg';
      imageElement.alt = 'Volume 1';
      audio.volume = objValue / 100;
    }

    else if (objValue < 67) {
      imageElement.src = 'assets/icons/volume-level-2.svg';
      imageElement.alt = 'Volume 2';
      audio.volume = objValue / 100;
    }

    else if (objValue >= 67){
      imageElement.src = 'assets/icons/volume-level-3.svg';
      imageElement.alt = 'Volume 3';
      audio.volume = objValue / 100;
    }
  });
}

const jsConfetti = new JSConfetti()

function playAudio(hornType, currentHorn) {
  const playButton = document.querySelector('button');
  playButton.onclick = () => { 
    if (hornType == 'party-horn') {
      jsConfetti.addConfetti()
    }
    currentHorn.src = 'assets/audio/' + hornType + '.mp3';
    currentHorn.play();
  };
}