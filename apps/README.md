# Arnux Apps

Put third-party Arnux apps in this folder. Each app should have its own directory:

```text
apps/
  weather-plus/
    manifest.js
    app.js
    README.md
```

## Fastest way to start

1. Copy [`../arnux-app-template`](../arnux-app-template) into `apps/my-app`.
2. Change the `id`, `name`, logo, color, and `render` function in `manifest.js`.
3. Add your app-specific event wiring in `app.js`.
4. Run `npm run validate-apps`.
5. Commit and open a pull request.

## App contract

Every app should export a manifest with:

```js
{
  id: 'my-app',
  name: 'My App',
  version: '1.0.0',
  icon: '◆',
  color: '#5778ff',
  description: 'What the app does',
  permissions: [],
  dependencies: [],
  changelog: ['Initial release'],
  render: () => '<div>App UI</div>'
}
```

Use `ArnuxSDK` for permissions, local app storage, notifications, and opening other apps. Do not use network services or secrets without documenting them.
