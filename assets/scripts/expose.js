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

  
}

function playAudio(hornType, currentHorn) {
  const playButton = document.querySelector('button');
  playButton.addEventListener("click", (event) => { 
    currentHorn.src = 'assets/audio/' + hornType + '.mp3';
    currentHorn.play();
  });
}