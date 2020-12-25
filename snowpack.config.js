/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
    '.routify': '/.routify'
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-sass'],
  "install": ["@roxi/routify/runtime/buildRoutes"]
};
