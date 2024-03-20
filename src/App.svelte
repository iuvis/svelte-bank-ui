<script lang="ts">
  import VisibilityProvider from './providers/VisibilityProvider.svelte';
  import Bank from "./modules/Bank/Bank.svelte";
</script>

<main>
  <VisibilityProvider>
    <Bank/>
  </VisibilityProvider>
</main>

<style lang="scss">
  :global(body) {
    margin: 0;
  }

  :global(button, input) {
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
  }
</style>
