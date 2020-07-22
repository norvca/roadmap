const intervalID = setInterval(() => {
  const toolbar = document.querySelector('#toolbar');
  const overlay = document.querySelector('#loader');
  // speed load
  overlay.remove();
  // more space
  toolbar.remove();
}, 300);

setTimeout(() => {
  clearInterval(intervalID);
}, 1500);
