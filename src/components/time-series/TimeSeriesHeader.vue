<template>
  <div class="price">
    <h3>
      <span
        class="highlight stock-head"
      >{{ onHover ? historicalQuote : latestPrice | numeralFormat('($0.00)') }}</span>
    </h3>
    <p>
      <span class="highlight2">{{changePercent * latestPrice | numeralFormat('$0.00')}}</span>
      <span class="highlight2">
        {{changePercent | numeralFormat('(0.00%)') }}
        <span
          class="time"
        >&nbsp;{{ onHover ? date : latestTime + " EST", }}</span>
      </span>
    </p>
  </div>
</template>
<script>
export default {
  name: "TimeSeriesHeader",
  props: {
    onHover: Boolean,
    historicalQuote: [Number, String],
    latestPrice: [Number, String],
    changePercent: [Number],
    latestTime: [Number, String],
    date: [Number, String]
  }
};
</script>
<style>
</style>