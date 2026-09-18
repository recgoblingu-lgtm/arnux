# Contributing Arnux Apps

## Create an app

Copy `arnux-app-template` into `apps/your-app`, then edit `manifest.js`, `app.js`, and `README.md`.

## Validate locally

```bash
npm run validate-apps
```

## Publish through GitHub

Create a branch, commit the new app directory, push it, and open a pull request. The **Validate Arnux Apps** workflow checks the manifest shape and documentation. After merge to `main`, the **Build Arnux App Catalog** workflow scans `/apps/`, generates `apps/catalog.js`, and commits it automatically. ArnuxStore, the launcher, and the taskbar read that catalog on the next deployment.

Apps should be local-first, request the smallest possible permissions, avoid secrets, and document any dependencies or network behavior.
