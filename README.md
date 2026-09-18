# Arnux OS

Arnux is a local-first desktop operating system that runs in the browser and deploys as a static GitHub Pages site.

The default visual skin is inspired by Windows 95: teal desktop, gray beveled controls, blue title bars, classic Start-style launcher, and retro window chrome.

## Platform features

- IndexedDB filesystem with migration from localStorage
- Image thumbnails, drag-and-drop import, cut/copy/paste, and device downloads in Files
- Local MP3 playlists and audio queue
- Minesweeper save/resume
- Mini Game Hub with Snake, Pong, Tetris, Solitaire, and Breakout modes
- Image Viewer, Music Player, Weather, Clock, ArnuxPaint, and classic apps
- Desktop widgets, notification center, virtual desktops, and system sounds
- Local accounts/profile switching, snapshots, and restore points
- Custom desktop logo, themes, wallpapers, and app icons
- App permissions, Store install/update/uninstall, and the Arnux SDK

## Third-party starter template

Open [`arnux-app-template/starter.js`](arnux-app-template/starter.js) for a ready-to-copy app manifest. It demonstrates `ArnuxSDK.manifest`, local storage, permissions, notifications, placeholders, and a `wire()` interaction hook.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## License

MIT
