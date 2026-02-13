// This project is a pure CSS-based dynamic interactive book that simulates page-flipping animations using cutting-edge features available in modern Chrome (134–135+). It seamlessly combines several powerful CSS technologies to create a fully scrollable, sprite-driven animated experience resembling a book with turning pages.

// Follow me on X for more: https://x.com/troshkin_pavel

// Activar música después de clic
document.getElementById('play-music-btn').addEventListener('click', () => {
  const audio = document.getElementById('musica-fondo');
  audio.play().then(() => {
    // Oculta el botón si se reproduce bien
    document.getElementById('play-music-btn').style.display = 'none';
  }).catch(error => {
    alert('No se pudo reproducir la música: ' + error);
  });
});