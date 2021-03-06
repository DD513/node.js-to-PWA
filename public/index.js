document.addEventListener('DOMContentLoaded', init, false);

function init() {
  if ('serviceWorker' in navigator && navigator.onLine) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((reg) => {
        console.log('Service worker registered -->', reg); // 註冊成功
      }, (err) => {
        console.log('Service worker not registered -->', err);  // 註冊失敗
      });
  }
}