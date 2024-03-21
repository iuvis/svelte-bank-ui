<script lang="ts">
  import { Line } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale, Tooltip, Legend, Title,
  } from "chart.js";
  import { Motion } from "svelte-motion";

  ChartJS.register(
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );

</script>

<Motion
  initial={{ height: 0, opacity: 0 }}
  exit={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  let:motion
>
  <div class="main" use:motion>
    <p class="mainDescription">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci amet architecto at beatae
      consequuntur dolore doloremque ea eaque eius error exercitationem
    </p>
    <div class="chartContainer">
      <Line
        data={{
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
              label: 'Get',
              data: [10, 5, 22, 100, 110, 120, 200],
              fill: false,
              borderColor: 'rgb(64,245,126)',
              tension: .35,
            },
            {
              label: 'Lost',
              data: [2, 55, 22, 100, 110, 8, 250],
              fill: false,
              borderColor: 'rgb(252,19,107)',
              tension: .35,
            }
          ],
        }}
        options={{
          responsive: true,
          aspectRatio: 1,
          scales: {
            x: {

            },
            y: {
              ticks: {
                callback: (value) => '$' + value
              }
            }
          }
        }}
      />
    </div>
  </div>
</Motion>


<style lang="scss">
  @import '../../../utils/utils';

  .main {
    display: grid;
    grid-template-columns: 1fr 1.5fr;

    gap: pxToVh(50);
  }

  .mainDescription {
    font-size: pxToVh(15);
    opacity: .3;
    width: 100%;
  }

  .chartContainer {
    display: flex;
    justify-content: flex-end;
    position: relative;

    height: pxToVh(440);
    width: pxToVh(440);
  }
</style>