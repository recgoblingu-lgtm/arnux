# Arnux OS

Arnux is a local-first desktop operating system that runs in the browser and deploys as a static GitHub Pages site.

The default visual skin is inspired by Windows 95: teal desktop, gray beveled controls, blue title bars, classic Start-style launcher, and retro window chrome. The underlying apps and local-first APIs remain modern and functional.

## Platform features

- **IndexedDB filesystem** with automatic migration from the earlier localStorage filesystem
- **App permissions** declared in each app manifest (`files`, `storage`, or `settings`)
- **ArnuxStore lifecycle** with Get, Open, Update, and Uninstall controls
- **Themes and wallpapers** in Settings
- **Keyboard shortcuts:** `Ctrl/Cmd + Space` launcher, `Ctrl/Cmd + L` terminal, `Alt + Tab` window switching, `Esc` dismisses overlays
- **Movable and resizable windows** with minimize, maximize, and close controls
- **File import/export** through the Files app as an `arnux-files.json` backup
- **Direct file downloads** from the Files app, plus full filesystem backup export
- **Terminal tabs** with independent local sessions
- **Classic apps:** working Minesweeper and ArnuxPaint with PNG export
- **Media and utility apps:** Image Viewer for uploaded images, Music Player for local MP3s, Mini Game Hub with Snake and Pong, Weather demo, and Clock with analog, digital, and timer modes
- **Startup MIDI-style music** generated with Web Audio after the user enables it on the boot screen
- **First-boot setup** for display name and accent color

## Developer SDK

` sdk.js ` exposes a small API for advanced apps:

```js
ArnuxSDK.manifest({
  id: 'weather', name: 'Weather', icon: '☼', color: '#36a6c8',
  permissions: ['storage'], render: weatherApp
});

await ArnuxSDK.permissions.request('weather', ['storage']);
ArnuxSDK.storage.set('weather-settings', { city: 'Tokyo' });
ArnuxSDK.notify('Forecast refreshed');
ArnuxSDK.openApp('notes');
```

Add the app to the `APPS` registry in `app.js`. Provide `render()` for markup and a `wireWindow(win, id)` branch for interactive behavior. Manifest `placeholder` text is automatically applied to app inputs.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## License

MIT
