import App from './App.svelte';
import './locales/svelte-i18n.js';

const app = new App({
  target: document.body
});

export default app;

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
