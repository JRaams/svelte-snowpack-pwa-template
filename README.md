# svelte-snowpack-pwa-template

This is a project template for [Svelte](https://svelte.dev) apps.

## Tech
Current:
- [Svelte](https://svelte.dev) (v3): frontend component framework/ compiler.
- [Snowpack](https://snowpack.dev) (v2): build tool, replacement for webpack for faster development.
  - [@snowpack/plugin-optimize](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-optimize) (v0.2): Optimize snowpack app: minify html, css, js
- [Svelte-i18n](https://github.com/kaisermann/svelte-i18n) (v3.2): Internationalization package to allow easy switching of language and storage of text.
- [Sass](https://www.sass-lang.com/): CSS extension to make styling the app easier.

Todo:
- [PWA](https://en.wikipedia.org/wiki/Progressive_web_applications): allows the site to work offline, and achieve higher (mobile) performance.
- [Prettier](https://prettier.io/): Formats code issues like quote and semicolon usage.
- [Eslint](https://eslint.org/): Finds and fixes problems in the code.
- [Routify](https://routify.dev/): Automated routes based on file structure.  
- [Tailwind](https://tailwindcss.com/): CSS Framework

## Get started
Requires: [Node.js](https://nodejs.org), [yarn](https://classic.yarnpkg.com/en/docs/install/) (or [npm](https://www.npmjs.com/get-npm))

Install the dependencies...

```bash
yarn install
```

...then start [Snowpack](https://snowpack.dev):

```bash
yarn start
```

## Dev environment
Fix scss errors in visual studio code:
1. Install the 'svelte' extension by James Birtles
2. Open user settings (`ctrl + shift + p`, 'Preferences: Open User Settings' OR `file -> Preferences -> Settings`)
3. Get the path of the node binary in a terminal: `$ which node` on mac/linux or `$ where node` on windows
4. Search 'svelte' -> Svelte > Language-server: Runtime, fill in the path to the node binary.
5. Restart VSC

Show text for the i18n plugin (Visual Studio Code):
1. Install the 'i18n Ally' plugin by Anthony Fu
2. Restart VSC
3. Change language with the tray icon