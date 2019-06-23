<template>
  <div class="card card-chart" v-if="earningsData && statsData">
    <h3>Earnings Per Share</h3>
    <div class="card-margins">
      <earnings-chart
        :symbol="statsData.symbol"
        :actualEPS="earningsData.map(data => data.actualEPS)"
        :consensusEPS="earningsData.map(data => data.consensusEPS)"
        :fiscalPeriod="earningsData.map(data => data.fiscalPeriod)"
        :height="270"
        class="chart"
      />
    </div>
  </div>
  <div v-else>
    <div class="center">
      <img src="./../../assets/bar-chart.svg" alt class="not">
    </div>
  </div>
</template>
<script>
import EarningsChart from "./EarningsChart";

export default {
  name: "Earnings",
  components: { EarningsChart },
  props: { earningsData: Array, statsData: Object }
};
</script>
<style>
.chart {
  position: relative;
}
</style>


