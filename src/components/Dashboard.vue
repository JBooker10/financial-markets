<template>
  <div class="main">
    <nav>
      <input
        type="text"
        class="search"
        v-bind:value="search"
        v-on:input="search = $event.target.value"
        placeholder="Enter company ticker..."
        autofocus
      >
    </nav>
    <div class="dashboard">
      <profile
        :key="chartType"
        :company="company$"
        :quote="quote$"
        :chart="chart$"
        :earnings="earnings$"
        :stats="stats$"
        :financials="financials$"
        :news="news$"
        :advancedStats="advancedStats$"
        :getSearch="search"
        @update-time-series="getTimeSeries"
      />
    </div>
    <dashboard-footer class="dashboard-footer"/>
  </div>
</template>

<script>
import Profile from "./profile/Profile";
import DashboardFooter from "./dashboard-footer/DashboardFooter";
import { validate } from "./utils/utils.js";

import { of } from "rxjs";
import {
  map,
  share,
  pluck,
  filter,
  tap,
  concatMap,
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  merge
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export default {
  name: "Dashboard",
  components: { Profile, DashboardFooter },
  data() {
    return {
      search: "",
      financialChart: 4,
      chartType: "6m"
    };
  },
  methods: {
    getTimeSeries(val) {
      this.$data.chartType = val;
      this.chartType = val;
    }
  },
  created() {
    this.$watch(
      "chartType",
      () =>
        function getTimeSeries(val) {
          this.chartType = val;
        }
    );
    this.$forceUpdate();
  },
  subscriptions() {
    const IEX = process.env.IEX_API;
    const token = process.env.IEX_SECRET;

    let path = `${this.chartType}&last=${this.financialChart}&token=${token}`;

    const searchMarkets = (symbol, chart) =>
      ajax(
        `${IEX}stable/stock/${symbol}/batch?types=company,quote,earnings,financials,news,stats,advanced-stats,chart&range=${path}`
      ).pipe(
        map(validate),
        catchError(val => of(new Error())),
        share()
      );

    const markets$ = this.$watchAsObservable("search").pipe(
      pluck("newValue"),
      filter(str => str.trim() != ""),
      debounceTime(750),
      distinctUntilChanged(),
      switchMap(searchMarkets),
      share()
    );

    const error$ = markets$.pipe(pluck("request"));
    const company$ = markets$.pipe(pluck("company"));
    const quote$ = markets$.pipe(pluck("quote"));
    const chart$ = markets$.pipe(pluck("chart"));
    const earnings$ = markets$.pipe(pluck("earnings", "earnings"));
    const stats$ = markets$.pipe(pluck("stats"));
    const advancedStats$ = markets$.pipe(pluck("advanced-stats"));
    const financials$ = markets$.pipe(pluck("financials", "financials"));
    const news$ = markets$.pipe(pluck("news"));

    this.$watch(
      "chartType",
      () =>
        function getTimeSeries(val) {
          this.chartType = val;
        }
    );

    this.$forceUpdate();

    return {
      error$,
      company$,
      quote$,
      chart$,
      earnings$,
      stats$,
      financials$,
      news$,
      advancedStats$
    };
  }
};
</script>


<style>
.main {
  display: flex;
  flex-direction: column;
}

.dashboard-footer {
  align-content: flex-end;
  align-self: flex-end;
  justify-content: flex-end;
}

.nav-brand {
  z-index: 3;
  opacity: 8;
}
</style>
