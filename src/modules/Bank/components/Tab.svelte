<script lang="ts">
  export let onClick = () => {}
</script>

<button class="tab" on:click={onClick}>
  <slot />
</button>

<style lang="scss">
  @import '../../../utils/utils';

  .tab  {
    background-color: #1d252a;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: pxToVh(15);
    border-radius: pxToVh(7);
    height: pxToVh(70);
    color: white;
    font-size: pxToVh(22);

    &:hover {
      background-color: #324048;
    }
  }
</style>