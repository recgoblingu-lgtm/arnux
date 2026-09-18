# Arnux Apps

`/apps/` is the source of truth for community apps. Arnux automatically discovers every app folder with a `manifest.js`, lists it in ArnuxStore, adds it to the launcher, and gives it a window shell.

```text
apps/
  my-app/
    manifest.js
    app.js
    README.md
```

## Fastest workflow

1. Copy [`../arnux-app-template`](../arnux-app-template) into `apps/my-app`.
2. Edit the manifest and app code.
3. Run `npm run validate-apps`.
4. Commit and push to GitHub.
5. The **Build Arnux App Catalog** workflow scans `/apps/`, rebuilds `apps/catalog.js`, and commits the catalog automatically.

The catalog is loaded at boot by `index.html`; Store, launcher, and taskbar entries are generated from it. Built-in apps can add a runtime renderer and `wireWindow` branch, while third-party apps start with a safe catalog view until their runtime is wired into the OS.

Every manifest should include an id, name, version, icon/logo, color, description, permissions, dependencies, changelog, and render function. Use the Arnux SDK for local storage, permissions, notifications, and app navigation.
