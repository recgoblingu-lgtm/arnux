window.ArnuxAppWire = function wireHelloArnux(win) {
  const input = win.querySelector('.hello-name');
  const result = win.querySelector('.hello-result');
  input.value = ArnuxSDK.storage.get('hello-name', '');
  win.querySelector('.hello-save').onclick = () => {
    ArnuxSDK.storage.set('hello-name', input.value);
    result.textContent = `Hello, ${input.value || 'friend'}!`;
    ArnuxSDK.notify('Greeting saved locally');
  };
};
