let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
});

window.addEventListener('appinstalled', (e) => {
  if (e.open) {
    e.open();
  }
});

const showModalInstall = async () => {
  if (deferredPrompt !== null) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      deferredPrompt = null;
    }
  }
};

const interval = setInterval(() => {
  const pwaAppInstallBtn = document.getElementById('pwaAppInstallBtn');

  if (pwaAppInstallBtn) {
    clearInterval(interval);
    pwaAppInstallBtn.addEventListener('click', showModalInstall);
  }
}, 500);
