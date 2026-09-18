# Arnux

Arnux is a Linux-inspired terminal that runs entirely in the browser. It is a static, dependency-free project designed for GitHub Pages or any static web host.

## Features

- Interactive shell with `help`, `ls`, `cd`, `cat`, `echo`, `neofetch`, `history`, `touch`, and `mkdir`
- Virtual filesystem that persists during the current browser session
- Command history with arrow keys and Tab autocomplete
- Dark mode, quick-start commands, and responsive layout
- No backend, build step, or account required

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## License

MIT
