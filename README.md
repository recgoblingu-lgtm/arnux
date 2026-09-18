# Arnux OS

Arnux is a local-first desktop operating system that runs in the browser and deploys as a static GitHub Pages site. Its current interface is a modern desktop shell with dark glass surfaces, rounded app windows, subtle depth, responsive layout, and a compact taskbar.

## Developer Hub

Open **Developer Hub** from the launcher or ArnuxStore to create an app without leaving Arnux. The Hub provides editable fields for app identity, version, icon, color, permissions, HTML, and JavaScript. It can save a local draft, preview the app in a new tab, validate the manifest, download `manifest.js`, `app.js`, and `README.md`, and copy the GitHub URL for the app folder.

GitHub is the only app database and sharing system. Commit the downloaded files to `apps/your-app` in the repository. The GitHub Actions catalog workflow scans `/apps/`, rebuilds `apps/catalog.js`, and ArnuxStore automatically discovers the app.

## Platform features

- IndexedDB filesystem with localStorage migration
- Image thumbnails, drag-and-drop import, cut/copy/paste, and device downloads in Files
- Music playlists and audio queue
- Minesweeper save/resume
- Mini Game Hub modes: Snake, Pong, Tetris, Solitaire, and Breakout
- Image Viewer, Music Player, Weather, Clock, ArnuxPaint, and classic apps
- Desktop widgets, notification center, taskbar, virtual desktops, and system sounds
- Browser tabs, history, bookmarks, download panel, and fullscreen iframe browsing
- Local accounts/profile switching, snapshots, and restore points
- Custom desktop icons, wallpaper uploads, themes, accessibility modes, and quota display
- App permissions, Store install/update/uninstall, developer mode, and SDK manifests with versions, changelogs, and dependencies

## App database workflow

1. Open Developer Hub.
2. Edit the app fields and code.
3. Click **Validate** and **Download app files**.
4. Create `apps/your-app` on GitHub and upload the three downloaded files.
5. Open a pull request or merge to `main`.
6. GitHub Actions validates the app and rebuilds the catalog automatically.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## License

MIT
