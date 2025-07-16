function getTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('fr-FR', {
    timeZone: 'America/Montreal',
    hour: 'numeric',
    minute: 'numeric',
  });
  document.getElementById('time').textContent = timeStr;
}

window.onload = () => {
  getTime();
  setInterval(getTime, 1000);
};
