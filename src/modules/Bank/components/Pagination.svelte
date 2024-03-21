<script lang="ts">
  export let page: number;
  export let elementsCount: number;
  export let elementsPerPage: number;
  export let onPageSelect: (page: number) => void;

  $: pages = Math.round(elementsCount / elementsPerPage);
</script>

<div class='pagination'>
  {#each Array(pages) as _, i}
    <button
      on:click={() => onPageSelect(i + 1)}
      class='paginationItem' class:active={ (i + 1) === page }
    >
      {i + 1}
    </button>
  {/each}
</div>

<style lang='scss'>
  @import '../../../utils/utils';

  .pagination {
    display: flex;
    align-items: center;
    gap: pxToVh(10);

    &Item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: pxToVh(50);
      height: pxToVh(50);
      border-radius: pxToVh(10);
      background-color: #24252a;
      color: white;

      &.active {
        background-color: #43474d;
      }
    }
  }
</style>