# Arnux OS

Arnux is a full desktop-style operating system that runs entirely in the browser. It is local-first, dependency-free, and designed for GitHub Pages or any static web host.

## First boot and personalization

The animated boot screen initializes the local filesystem and app registry. On first launch, the setup page lets the user choose a display name and accent color. The Settings app can later change the display name, desktop logo, accent color, or reset local data.

## Built-in apps

- **Browser** — internal `arnux://` pages for Home, Files, ArnuxStore, and About. It deliberately does not contact external websites.
- **Files** — persistent browser filesystem with folders, file creation, and an in-browser editor.
- **Terminal** — Linux-inspired local shell with file commands and persistent storage.
- **Notes** — autosaving local notes app.
- **Settings** — profile, logo, accent, and local-storage controls.
- **ArnuxStore** — local app directory with install/open flows.

All user data is stored in browser `localStorage`. Arnux cannot access the host computer's files or execute native Linux programs.

## Add advanced apps

Apps are defined in the `APPS` manifest at the top of `app.js`:

```js
weather: {
  name: 'Weather',
  icon: '☼',
  color: '#36a6c8',
  placeholder: 'Search a city',
  render: weatherApp
}

function weatherApp() {
  return `<div class="my-app"><input placeholder="Search a city"><button>Forecast</button></div>`;
}
```

The desktop launcher, dock, ArnuxStore, window chrome, logos, and placeholder replacement use the manifest automatically. Add app-specific behavior in `wireWindow(win, id)` using a `wireWeather(win)` function for richer interactions and local persistence.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## License

MIT
