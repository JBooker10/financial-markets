<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
    </div>
    <card-row
      propName="Beta"
      :propValue="statsData.beta | numeralFormat('0.000')"
      :hasBorder="true"
      v-tooltip.top-center="'Beta coefficient is a measure of sensitivity of a company\'s \n stock price to movement in the broad market index.'"
    />
    <card-row
      propName="52 Week High"
      :propValue="statsData.week52high | numeralFormat('$0.00')"
      :hasBorder="true"
      v-tooltip.top-center="'A 52-week High is the highest price at which a stock has traded during the previous year. '"
    />
    <card-row
      propName="52 Week Low"
      :propValue="statsData.week52low | numeralFormat('$0.00')"
      :hasBorder="true"
      v-tooltip.top-center="'A 52-week Low is the lowest price at which a stock has traded during the previous year. '"
    />
    <card-row
      propName="52 Week Change"
      :propValue="statsData.week52change | numeralFormat('0.00%') "
      :hasBorder="true"
      v-tooltip.top-center="'The 52-week range shows the lowest and highest price at which a stock has traded at in the previous 52 weeks. '"
    />
    <card-row
      propName="Month 6 Change"
      :propValue="statsData.month6ChangePercent | numeralFormat('0.00%') "
      :hasBorder="true"
      v-tooltip.top-center="'The 6 Month change shows the lowest and highest price at which a stock has traded at in the previous 6 months. '"
    />
    <card-row
      propName="YTD Change"
      :propValue="statsData.ytdChangePercent | numeralFormat('0.00%') "
      :hasBorder="true"
      v-tooltip.top-center="'The YTD change shows the lowest and highest price at which a stock has traded at in the previous year. '"
    />
    <card-row
      propName="50 Day Moving Average"
      :propValue="statsData.day50MovingAvg | numeralFormat('0.00')"
      :hasBorder="true"
      v-tooltip.top-center="'50-Day moving avaerage is a security\'s average closing price over the last 50 days.'"
    />
    <card-row
      propName="200 Day Moving Average"
      :propValue="statsData.day200MovingAvg | numeralFormat('0.00')"
      v-tooltip.top-center="'200-Day moving avaerage is a security\'s average closing price over the last 200 days.'"
    />
    <card-row
      propName="Average 30 Day Volume"
      :propValue="statsData.avg30Volume"
      v-tooltip.top-center="'Average 30 Day trading volume (ADTV) is the average number of shares traded within 30 days in a given stock. Average 30 Day volume is how many shares are traded every 30 days'"
    />
  </div>
</template>
<script>
import CardRow from "./../utils/CardRow";

export default {
  name: "HistoryStats",
  components: { CardRow },
  props: { statsData: Object, title: String }
};
</script>
<style>
.card-header {
  border-bottom: 1px solid rgba(25, 29, 45, 1);
  padding: 1em;
  overflow: hidden;
}
</style>

