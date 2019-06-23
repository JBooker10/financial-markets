<template>
  <div class="metrics">
    <span>
      Volume:
      <span class="highlight">{{ latestVolume | numeralFormat('0,0') }}</span>
    </span>
    <span>
      PE Ratio:
      <span class="highlight">{{ peRatio }}</span>
    </span>
    <span>
      High:
      <span class="highlight">{{ high | numeralFormat('($0.00)') }}</span>
    </span>
    <span>
      Low:
      <span class="highlight">{{ low | numeralFormat('($0.00)') }}</span>
    </span>
    <span>
      Change:
      <span class="highlight">{{ change }} ({{ changePercent | numeralFormat('0.00%') }})</span>
    </span>
  </div>
</template>
<script>
export default {
  name: "TimeSeriesMetrics",
  props: {
    latestVolume: Number,
    peRatio: Number,
    high: Number,
    low: Number,
    change: Number,
    changePercent: Number
  }
};
</script>
<style>
.metrics {
  display: flex;
  /* margin-top: .5em; */
  justify-content: space-between;
  font-size: 1.4em;
}
</style>

