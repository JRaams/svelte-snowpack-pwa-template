<script>
  import { isLoading, _, locale, locales } from 'svelte-i18n';
  import { onMount } from 'svelte';
  let count = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

{#if !$isLoading}
  <div class="language-select-wrapper">
    <label for="language-select">{$_('app.language.label')}</label>
    <select name="language-select" id="language-select" bind:value={$locale}>
      {#each $locales as locale}
        <option value={locale}>{locale}</option>
      {/each}
    </select>
  </div>

  <div class="App">
    <header class="App-header">
      <img src="/logo.svg" class="App-logo" alt="logo" />
      <p>{$_('app.header.editAndReload')}</p>
      <p>{$_('app.header.pageHasBeenOpenFor', { values: { count } })}</p>
      <p>
        <a class="App-link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
          {$_('app.header.learnSvelte')}
        </a>
      </p>
    </header>
  </div>
{/if}

<style lang="scss">
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .language-select-wrapper {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .App {
    text-align: center;

    .App-header {
      background-color: #f9f6f6;
      color: #333;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);

      .App-logo {
        height: 36vmin;
        pointer-events: none;
        margin-bottom: 3rem;
        animation: App-logo-spin infinite 1.6s ease-in-out alternate;
      }

      p {
        margin: 0.4rem;
      }

      .App-link {
        color: #ff3e00;
      }
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>
