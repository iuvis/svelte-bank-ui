<script lang="ts">
  import { Motion } from "svelte-motion";
  import Transaction from "./Transaction.svelte";
  import type { ITransaction } from "../../../types/ITransaction";
  import Pagination from "./Pagination.svelte";

  const TRANSACTIONS_PER_PAGE = 5;
  const TRANSACTIONS: ITransaction[] = [
    {
      target: 'Harland Sanders',
      amount: 1,
      type: 'receive'
    },
    {
      target: 'Harland Sanders',
      amount: 2,
      type: 'receive'
    },
    {
      target: 'Harland Sanders',
      amount: 3,
      type: 'receive'
    },
    {
      target: 'Harland Sanders',
      amount: 4,
      type: 'receive'
    },
    {
      target: 'Harland Sanders',
      amount: 5,
      type: 'receive'
    },
    {
      target: 'Harland Sanders',
      amount: 6,
      type: 'receive'
    },
    {
      target: 'Harland Sanders',
      amount: 7,
      type: 'receive'
    },
    {
      target: 'Harland Sanders',
      amount: 8,
      type: 'receive'
    },
    {
      target: 'Romario Gay',
      amount: 9,
      type: 'send'
    }
  ]

  let page = 1;

  $: filteredTransactions = TRANSACTIONS.slice(TRANSACTIONS_PER_PAGE * (page - 1), TRANSACTIONS_PER_PAGE * (page - 1) + TRANSACTIONS_PER_PAGE)


</script>

<Motion
  initial={{ height: 0, opacity: 0 }}
  exit={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  let:motion
>
  <div use:motion>
    <div class="transactions">
      {#each filteredTransactions as transaction}
        <Transaction
          target={transaction.target}
          amount={transaction.amount}
          type={transaction.type}
        />
      {/each}
    </div>
    <Pagination
      page={page}
      elementsCount={TRANSACTIONS.length}
      elementsPerPage={TRANSACTIONS_PER_PAGE}
      onPageSelect={newPage => page = newPage}
    />
  </div>
</Motion>

<style lang="scss">
  @import '../../../utils/utils';

  .transactions {
    display: flex;
    flex-direction: column;
    gap: pxToVh(10);
  }

  :global(.pagination) {
    margin-top: pxToVh(20);
  }
</style>