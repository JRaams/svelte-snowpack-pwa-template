# svelte-snowpack-pwa-template

This is a project template for [Svelte](https://svelte.dev) apps.

## Tech
Current:
- [Svelte](https://svelte.dev) (v3): frontend component framework/ compiler.
- [Snowpack](https://snowpack.dev) (v2): build tool, replacement for webpack for faster development.
  - [@snowpack/plugin-optimize](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-optimize) (v0.2): Optimize snowpack app: minify html, css, js
- [Svelte-i18n](https://github.com/kaisermann/svelte-i18n) (v3.2): Internationalization package to allow easy switching of language and storage of text.
- [Postcss](https://postcss.org/): Transform css with javascript
    - [Autoprefixer](https://github.com/postcss/autoprefixer): Add vendor prefixes to CSS rules using values from Can I Use.

Todo:
- [Sass](https://www.sass-lang.com/): CSS extension to make styling the app easier.
- [PWA](https://en.wikipedia.org/wiki/Progressive_web_applications): allows the site to work offline, and achieve higher (mobile) performance.
- [Prettier](https://prettier.io/): Formats code issues like quote and semicolon usage.
- [Eslint](https://eslint.org/): Finds and fixes problems in the code.
- [Routify](https://routify.dev/): Automated routes based on file structure.  

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
