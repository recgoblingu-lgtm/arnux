# Arnux OS

Arnux is a full desktop-style operating system that runs entirely in the browser. It is local-first, dependency-free, and designed for GitHub Pages or any static web host.

## Built-in apps

- **Browser** — internal `arnux://` pages for Home, Files, ArnuxStore, and About. It deliberately does not contact external websites.
- **Files** — persistent browser filesystem with folders, file creation, and an in-browser editor.
- **Terminal** — Linux-inspired local shell with file commands, Node/npm-style simulations, and persistent storage.
- **Notes** — autosaving local notes app.
- **ArnuxStore** — local app directory with install/open flows.

All user data is stored in browser `localStorage`. Arnux cannot access the host computer's files or execute native Linux programs.

## Add an app

Apps are intentionally easy to add. In `app.js`, add an entry to the `APPS` registry:

```js
weather: {
  name: 'Weather',
  icon: '☼',
  color: '#36a6c8',
  render: () => '<div class="my-app">Hello from Weather</div>'
}
```

Then add any app-specific behavior in `wireWindow(win, id)`. The desktop launcher, dock, and ArnuxStore use the registry automatically.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## License

MIT
