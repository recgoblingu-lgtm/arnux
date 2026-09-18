window.ArnuxAppManifest = ArnuxSDK.manifest({
  id: 'deeznutssimulator',
  name: 'DeezNutsSimulator',
  version: '1.0.0',
  icon: '◆',
  color: '#5778ff',
  description: 'test game (NOT OUT YRT)',
  permissions: ['storage'],
  dependencies: [],
  changelog: ['Initial release'],
  render: () => `
    <div class="arnux-test">
      <h2>Hello, People.</h2>
      <input class="hello-name" placeholder="Your name">
      <button class="hello-save">Save greeting</button>
      <p class="hello-result"></p>
    </div>
  `
});
