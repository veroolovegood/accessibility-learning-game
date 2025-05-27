import confetti from 'canvas-confetti';

export function showConfettiAnimation() {
  confetti({
    particleCount: 150,
    spread: 180,
    origin: {y: 0.6},
    colors: ['#FF5B5B', '#9F9FED', '#558564', '#F1E7BC'],
    disableForReducedMotion: true
  });
}
