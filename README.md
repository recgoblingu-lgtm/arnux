# Arnux OS

Arnux is a local-first desktop operating system that runs in the browser and deploys as a static GitHub Pages site. Its current interface is a modern desktop shell with dark glass surfaces, rounded app windows, subtle depth, responsive layout, and a compact taskbar.

## Automatic GitHub publishing

Developer Hub includes a **Connect GitHub** button and a **Publish app to GitHub** button. Click **Connect GitHub**, create a fine-grained token for this repository with `Contents: Read and write`, paste it into the local Developer Hub field, and then click Publish. The token is stored only in the current browser's local storage.

Publishing automatically creates or updates:

```text
apps/<app-id>/manifest.js
apps/<app-id>/app.js
apps/<app-id>/README.md
```

GitHub Actions then validates the app, rebuilds `apps/catalog.js`, and ArnuxStore discovers it. No download or manual file upload is required after the one-time token connection.

## Developer Hub

Open **Developer Hub** from the launcher or ArnuxStore to create an app. The Hub provides editable fields for app identity, version, icon, color, permissions, HTML, and JavaScript. It can save a local draft, preview the app, validate the manifest, generate GitHub-ready files, connect GitHub, publish automatically, and copy the resulting repository link.

## App database workflow

GitHub is the only app database and sharing system. Apps live under `/apps/`, and the catalog workflow scans that folder after every change.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## License

MIT
