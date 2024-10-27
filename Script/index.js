const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#D8042A",
  progressColor: "#383351",
  url: "assets/Besos(Prueba).mp3", // Cambia esta ruta según tu archivo
  backend: "mediaelement",
  height: 128,
  barWidth: 2,
  cursorColor: "#000000",
});

// Evento cuando el audio está listo
wavesurfer.on("ready", () => {
  console.log("El audio está listo para ser reproducido.");
});

// Evento para mostrar el progreso de reproducción
wavesurfer.on("audioprocess", () => {
  const currentTime = wavesurfer.getCurrentTime();
  document.getElementById("currentTimeDisplay").innerText =
    formatTime(currentTime);
});

// Función para dar formato al tiempo
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Botón de Play
document.getElementById("playButton").addEventListener("click", () => {
  wavesurfer.play();
  console.log("Botón de play presionado");
});

// Botón de Pause
document.getElementById("pauseButton").addEventListener("click", () => {
  wavesurfer.pause();
  console.log("Botón de pause presionado");
});

// Botón de Stop
document.getElementById("stopButton").addEventListener("click", () => {
  wavesurfer.stop();
  console.log("Botón de stop presionado");
});

// Control de volumen
const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", (event) => {
  const volume = event.target.value;
  wavesurfer.setVolume(volume);
  console.log("Volumen ajustado a:", volume);
});
