window.onload = function() {
  const frame = document.getElementById('frame');
  const img = document.getElementById('skin');

  function resizeFrame() {
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const frameRatio = frame.clientWidth / frame.clientHeight;

    if (imgRatio > frameRatio) {
      img.style.width = '100%';
      img.style.height = 'auto';
    } else {
      img.style.width = 'auto';
      img.style.height = '100%';
    }
  }

  resizeFrame();
  window.addEventListener('resize', resizeFrame);

  // Start audio playback
  const audio = document.getElementById('audio');
  audio.play().catch(error => {
    // Autoplay was prevented
    console.log('Autoplay was prevented');
  });
};

// Modal functionality
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementsByClassName("close")[0];

document.querySelectorAll('.proof-section img, .mod-proof-section img').forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

closeModal.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Fallback to YouTube video if audio file cannot be played
const audio = document.getElementById('audio');
audio.addEventListener('error', function() {
  const youtubeIframe = document.getElementById('youtube-iframe');
  youtubeIframe.style.width = '1px';
  youtubeIframe.style.height = '1px';
  youtubeIframe.src += "&autoplay=1";
});
