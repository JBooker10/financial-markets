<template>
  <div class="card card-chart" v-if="quoteData && chartData">
    <div class="timeseries-header">
      <time-series-header
        :onHover="hover"
        :historicalQuote="previousQuote"
        :latestPrice="quoteData.latestPrice"
        :changePercent="quoteData.changePercent"
        :latestTime="quoteData.latestTime"
        :date="date"
      ></time-series-header>
      <div class="buttons">
        <!-- <button @click="getChartData('1d')" :class="setClassName('1d', 'active', 'left')">1D</button> -->
        <button @click="getChartData('1m')" :class="setClassName('1m', 'active', 'left')">1M</button>
        <button @click="getChartData('3m')" :class="setClassName('3m', 'active')">3M</button>
        <button @click="defaultChartSize" :class="!emitUpdate ?  'btn btn-active' : 'btn' ">6M</button>
        <button @click="getChartData('1y')" :class="setClassName('1y', 'active')">1Y</button>
        <button @click="getChartData('ytd')" :class="setClassName('ytd', 'active', 'right')">YTD</button>
      </div>
    </div>
    <div class="card-margins" @mouseenter="mouseOver" @mouseleave="mouseLeave">
      <time-series-chart
        v-if="!emitUpdate"
        class="mobile"
        :symbol="quoteData.symbol"
        :changePercent="chartData.map(data => data.changePercent)"
        :close="chartData.map(d => d.close)"
        :high="chartData.map(data => data.high)"
        :low="chartData.map(data => data.low)"
        :date="chartData.map(d => this.formatTime(d.date))"
        :chartlabel="chartData.map(d => this.formatTime(d.date))"
        :height="153"
        @update-quote="getHistoricalQuote"
      />
      <time-series-chart
        v-else
        :key="size"
        class="mobile"
        :symbol="quoteData.symbol"
        :changePercent="timeSeries.map(data => data.changePercent)"
        :close="timeSeries.map(d => d.close)"
        :high="timeSeries.map(data => data.high)"
        :low="timeSeries.map(data => data.low)"
        :date="timeSeries.map(d => this.formatTime(d.date))"
        :chartlabel="timeSeries.map(d => this.formatTime(d.date))"
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
import TimeSeriesHeader from "./TimeSeriesHeader";
import moment from "moment";

export default {
  name: "TimeSeries",
  components: { TimeSeriesMetrics, TimeSeriesChart, TimeSeriesHeader },
  props: { quoteData: [Object, Error], chartData: [Array, Error] },
  data() {
    return {
      previousQuote: this.quoteData.latestPrice,
      date: "Today",
      emitUpdate: false,
      size: "",
      timeSeries: [],
      hover: false,
      browsing: false
    };
  },
  methods: {
    getHistoricalQuote(val, name) {
      this.previousQuote = val.quote;
      this.date = val.label;
    },

    setClassName(size, active, nonactive) {
      return this.size === size && this.emitUpdate
        ? `btn btn-${active} btn-${nonactive}`
        : `btn btn-${nonactive}`;
    },

    defaultChartSize() {
      this.emitUpdate = false;
    },

    getChartData(size) {
      if (this.size !== size) {
        const { IEX_API, IEX_SECRET } = process.env;
        const myRequest = new Request(
          `${IEX_API}v1/stock/${
            this.quoteData.symbol
          }/chart/${size}?chartCloseOnly=true&token=${IEX_SECRET}`
        );
        fetch(myRequest)
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.timeSeries = data;
            this.emitUpdate = true;
            this.size = size;
          })
          .catch(error => {
            console.log(error);
          });
      }
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
  },
  watch: {
    quoteData: function() {
      this.emitUpdate = false;
    }
  }
};
</script>
<style>
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
  outline: none;
  border: 1px solid rgba(25, 29, 45, 1);
}

.btn-left {
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
}

.btn-right {
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
}
</style>




