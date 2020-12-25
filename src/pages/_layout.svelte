<script>
  import { isActive, url, layout } from '@roxi/routify';
</script>

<ul>
  {#each $layout.children as { path, title }}
    <li class:active={$isActive(path)}><a href={$url(path)}>{title}</a></li>
  {/each}
</ul>

<slot />
