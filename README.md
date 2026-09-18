# Arnux OS

Arnux is a local-first desktop operating system that runs in the browser and deploys as a static GitHub Pages site. Its current interface combines modern responsive behavior with a Windows 95-inspired visual language.

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

## Browser note

External pages can be opened in the sandboxed iframe browser when their own security policy permits framing. Sites that send `X-Frame-Options` or restrictive `Content-Security-Policy` headers may refuse to load, which Arnux does not bypass.

## Third-party starter template

Open [`arnux-app-template/starter.js`](arnux-app-template/starter.js) for a ready-to-copy app manifest. It demonstrates `ArnuxSDK.manifest`, local storage, permissions, notifications, placeholders, and a `wire()` interaction hook.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## License

MIT
