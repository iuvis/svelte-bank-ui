<script lang="ts">
  import type {TransactionType} from "../../../types/ITransaction";
  import {Motion} from "svelte-motion";

  export let target: string;
  export let amount: number;
  export let type: TransactionType;
</script>

<Motion
  initial={{ x: -10 }}
  exit={{ x: -10 }}
  animate={{ x: 0 }}
  let:motion
>
  <div class="transaction" use:motion>
    <span class="target">
      {target}
    </span>
      <span class="amount" class:positive={type === 'receive'}>
      {type === 'receive' ? '+' : '-'} {amount.toLocaleString('ru-RU')}
    </span>
  </div>
</Motion>

<style lang="scss">
  @import '../../../utils/utils';

  .transaction {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: pxToVh(60);
    border-radius: pxToVh(10);
    padding: 0 pxToVh(30);
    background-color: #252534;

    .target {
      font-size: pxToVh(17);
    }

    .amount {
      color: #ff164a;

      &.positive {
        color: lightgreen;
      }
    }
  }
</style>