<template>
  <div class="card card-chart" v-if="quoteData && chartData">
    <div class="timeseries-header">
      <div class="price">
        <h3>
          <span
            class="highlight stock-head"
          >{{ this.hover ? previousQuote : quoteData.latestPrice | numeralFormat('($0.00)') }}</span>
        </h3>
        <p>
          <span
            class="highlight2"
          >{{quoteData.changePercent * quoteData.latestPrice | numeralFormat('$0.00')}}</span>
          <span class="highlight2">
            {{quoteData.changePercent | numeralFormat('(0.00%)') }}
            <span
              class="time"
            >&nbsp;{{ this.hover ? this.date : "Today " + this.quoteData.latestTime + " EST", }}</span>
          </span>
        </p>

        <!-- <p class="time">{{quoteData.latestTime}}</p> -->
      </div>
      <div class="buttons">
        <!-- <button @click="updateTimeSeries('1d')" class="btn btn-left">1D</button> -->
        <button @click="updateTimeSeries('1m')" class="btn btn-left" disabled>1M</button>
        <button @click="updateTimeSeries('3m')" class="btn" disabled>3M</button>
        <button @click="updateTimeSeries('6m')" class="btn btn-active" disabled>6M</button>
        <button @click="updateTimeSeries('1y')" class="btn" disabled>1Y</button>
        <button @click="updateTimeSeries('ytd')" class="btn btn-right" disabled>YTD</button>
      </div>
    </div>
    <div class="card-margins" @mouseenter="mouseOver" @mouseleave="mouseLeave">
      <time-series-chart
        class="mobile"
        :symbol="quoteData.symbol"
        :changePercent="chartData.map(data => data.changePercent)"
        :close="chartData.map(d => d.close)"
        :high="chartData.map(data => data.high)"
        :low="chartData.map(data => data.low)"
        :date="chartData.map(d => this.formatTime(d.date))"
        :chartlabel="chartData.map(data => data.label)"
        :height="153"
        @update-quote="getHistoricalQuote"
      />

      <time-series-metrics
        class="series-metrics"
        :latestVolume="quoteData.latestVolume"
        :peRatio="quoteData.peRatio"
        :high="quoteData.high"
        :low="quoteData.low"
        :change="quoteData.change"
        :changePercent="quoteData.changePercent"
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
import TimeSeriesMetrics from "./TimeSeriesMetrics";
import TimeSeriesChart from "./TimeSeriesChart";
import moment from "moment";

export default {
  name: "TimeSeries",
  components: { TimeSeriesMetrics, TimeSeriesChart },
  props: { quoteData: [Object, Error], chartData: [Array, Error] },
  data() {
    return {
      previousQuote: this.quoteData.latestPrice,
      date: "Today",

      hover: false,
      browsing: false
    };
  },
  methods: {
    getHistoricalQuote(val, name) {
      this.previousQuote = val.quote;
      this.date = val.label;
    },

    updateTimeSeries(val) {
      this.$parent.$emit("update-time-series", val);
    },

    formatTime(time) {
      return moment(time).format("LL");
    },

    mouseOver() {
      this.hover = true;
    },

    mouseLeave() {
      this.hover = false;
    }
  }
};
</script>
<style>
/* rgba(25,29,45,1) */

/* rgba(183, 100, 255, 1) */

.card-margins {
  padding: 0 2em;
}

.slide-fade-enter-active {
  animation: bounce-in 0.5s;
}
.slide-fade-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.center {
  margin: auto;
  display: flex;
  height: 100%;
}

.stock-head {
  text-align: left !important;
  font-size: 1.7em;
}

.price h3 {
  text-align: left;
}
.price {
  margin: 1em;
}

.time {
  color: rgba(51, 58, 88);
}

.highlight2 {
  /* color:#23ffc6; */

  color: rgba(183, 100, 255, 1);
  font-weight: 100;
  font-size: 14px;
}

.buttons {
  display: flex;
  padding: 0 2em;
  justify-content: flex-end;
}

.btn {
  padding: 0.5em 1em;
  background: none;
  height: 2.5em;
  border: 1px solid rgba(25, 29, 45, 1);
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  outline: none;
  z-index: 3;
}

.timeseries-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn:hover,
.btn-active {
  background: rgba(183, 100, 255, 1);
}

.btn-left {
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
}

.btn-right {
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
}
</style>




