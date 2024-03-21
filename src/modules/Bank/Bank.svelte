<script lang="ts">
  import Tab from "./components/Tab.svelte";
  import History from "./components/History.svelte";
  import Main from "./components/Main.svelte";
  import {Motion} from "svelte-motion";


  type Page = 'main' | 'history';

  let page: Page = 'main';

  const setPage = (newPage: Page) => page = newPage;

  const pages: Record<Page, typeof History> = {
    history: History,
    main: Main
  }

  const tabs: { label: string, page: Page }[] = [
    {
      label: 'History',
      page: 'history'
    },
    {
      label: 'Main',
      page: 'main'
    }
  ]

</script>

<main class="wrapper">
  <div class="bank">
    <div class="bankHeader">
      <div class="bankTitle">
        <h1>
          Fleeca
        </h1>
      </div>
    </div>
    <svelte:component this={pages[page]}/>
    <div class="bankNavigation">
      {#each tabs as tab}
        <Tab onClick={() => setPage(tab.page)}>
          {tab.label}
        </Tab>
      {/each}
    </div>
  </div>
</main>

<style lang="scss">
  @import "../../utils/utils";

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, .5);
  }

  .bank {
    display: flex;
    flex-direction: column;
    gap: pxToVh(20);
    background-color: #060e18;
    border-radius: pxToVh(20);
    padding: pxToVh(50);
    color: white;
    width: pxToVh(850);


    &Navigation {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: pxToVh(10);

      :global(.tab) {
        width: 100%;
      }
    }
  }
</style>