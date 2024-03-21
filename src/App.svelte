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
  @import "./utils/utils";

  :global(body) {
    margin: 0;
    font-size: pxToVh(15);
  }

  :global(button, input) {
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0;
  }

  :global(ul, ol) {
    margin: 0;
    padding: 0;
  }

</style>
