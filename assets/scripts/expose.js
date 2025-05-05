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
      audio.src = 'assets/audio/air-horn.mp3'; 
      const playButton = document.querySelector('button');
      playButton.addEventListener("click", (event) => { 
        const audio = new Audio('assets/audio/air-horn.mp3');
        audio.play();
      });
    }

    else if (selectedValue == 'car-horn') {
      image.src = 'assets/images/car-horn.svg'; 
      image.alt = 'Car Horn Selected';
      audio.src = 'assets/audio/car-horn.mp3'; 
      const playButton = document.querySelector('button');
      playButton.addEventListener("click", (event) => { 
        const audio = new Audio('assets/audio/car-horn.mp3');
        audio.play();
      });
    }

    else if (selectedValue == 'party-horn') {
      image.src = 'assets/images/party-horn.svg'; 
      image.alt = 'Party Horn Selected';
      audio.src = 'assets/audio/party-horn.mp3'; 
      const playButton = document.querySelector('button');
      playButton.addEventListener("click", (event) => { 
        const audio = new Audio('assets/audio/party-horn.mp3');
        audio.play();
      });
    }
  });

  
}