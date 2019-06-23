<template>
  <div>
    <div v-if="!company && !chart">
      <div v-if="getSearch !== ''">
        <div v-if="company && quote && chart">Loading...</div>
        <div v-else>
          <div class="loading">
            <not-found :getSearch="getSearch"/>
          </div>
        </div>
      </div>
      <div v-else>
        <entry/>
      </div>
    </div>
    <div class="profile" v-else>
      <div class="row">
        <company class="flex-1" :companyData="company" :quoteData="quote"/>
        <time-series class="flex-2" :chartData="chart" :quoteData="quote"/>
      </div>
      <div class="row">
        <history-stats class="flex-1" title="Stock Price History" :statsData="stats"/>
        <earnings class="flex-1-5" :earningsData="earnings" :statsData="stats"/>
        <news :newsData="news" class="flex-1"/>
        <!-- <key-stats  title="Key Statistics" :statsData="stats" class="flex-1"/> -->
      </div>
      <div class="row">
        <financials class="flex-1" :quoteData="quote" :financialData="financials"/>
        <key-stats
          title="Key Statistics"
          :statsData="stats"
          :advancedStatsData="advancedStats"
          class="flex-half"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Company from "./../company/Company";
import Earnings from "./../earnings/Earnings";
import TimeSeries from "./../time-series/TimeSeries";
import HistoryStats from "./../statistics/HistoryStats";
import News from "./../news/News";
import KeyStats from "./../statistics/KeyStats";
import NotFound from "./../notfound/NotFound";
import Financials from "./../financials/Financials";
import Entry from "./../entry/Entry";

import { pluck } from "rxjs/operators";

export default {
  name: "Profile",
  components: {
    Company,
    TimeSeries,
    HistoryStats,
    KeyStats,
    Earnings,
    NotFound,
    Financials,
    News,
    Entry
  },
  props: {
    company: Object,
    quote: Object,
    chart: Array,
    earnings: Array,
    stats: Object,
    financials: Array,
    news: Array,
    advancedStats: Object,
    getSearch: String
  },
  methods: {
    getTimeSeries(val) {
      this.test = val;
      console.log(val);
    }
  }
};
</script>
<style>
.flex-1 {
  flex: 1;
  height: auto;
}

.flex-2 {
  flex: 2;
  height: auto;
}

.flex-half {
  flex: 0.4;
}

.home {
  margin-top: 3em;
  font-size: 7em;
  height: 55vh;
}

.flex-1-5 {
  flex: 1.5;
}

.flex-new {
  max-width: 25em;
}

.load {
  margin-top: 17em;
}

.loading {
  height: 80vh;
}
</style>

