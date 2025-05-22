export function muteAndHideVolumeControls(){
  if(!document.getElementById('muted-style')) {
    const style = document.createElement('style');
    style.id = 'muted-style'; // Eine ID geben, um ihn später leicht zu finden
    style.textContent = `
        audio::-webkit-media-controls-volume-slider,
        video::-webkit-media-controls-volume-slider {
            display: none !important;
        }

        audio::-webkit-media-controls-mute-button,
        video::-webkit-media-controls-mute-button {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
  }
  document.querySelectorAll('audio, video').forEach((el: Element) => {
    const mediaElement = el as HTMLMediaElement;
    mediaElement.muted = true;
  });
}

export function unmuteAndShowVolumeControls(){
  document.getElementById('muted-style')?.remove();
  document.querySelectorAll('audio, video').forEach((el: Element) => {
    const mediaElement = el as HTMLMediaElement;
    mediaElement.muted = false;
  });
}

export function playTinitus(){
  const audio = document.getElementById('beep-sound') as HTMLMediaElement;
  console.log(audio);
// Setze die loop-Eigenschaft auf true
  audio.loop = true;

// Starte die Wiedergabe
  audio.play();
}

export function stopTinitus(){
  const audio = document.getElementById('beep-sound') as HTMLMediaElement;
  audio.pause();
}
