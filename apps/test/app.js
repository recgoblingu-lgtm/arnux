window.ArnuxAppWire = function(win) {
  win.querySelector('.app-button').onclick = () => ArnuxSDK.notify('It works!');
};
