# Contributing Arnux Apps

## Create an app

Copy `arnux-app-template` into `apps/your-app`, then edit `manifest.js`, `app.js`, and `README.md`.

## Validate locally

```bash
npm run validate-apps
```

## Submit on GitHub

Create a branch, commit the new app directory, push it, and open a pull request. The **Validate Arnux Apps** workflow checks the manifest shape and documentation automatically.

Apps should be local-first, request the smallest possible permissions, avoid secrets, and document any dependencies or network behavior.
