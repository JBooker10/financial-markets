<template>
  <div class="main">
    <nav>
      <logo></logo>
      <input
        type="text"
        class="search"
        v-bind:value="search"
        v-on:input="search = $event.target.value"
        placeholder="Enter company ticker..."
        autofocus
      >
      <div class="nil">
        <p>Sign In</p>
      </div>
    </nav>
    <div class="dashboard">
      <profile
        :company="company$"
        :quote="quote$"
        :chart="chart$"
        :earnings="earnings$"
        :stats="stats$"
        :financials="financials$"
        :news="news$"
        :advancedStats="advancedStats$"
        :getSearch="search"
      />
    </div>
    <dashboard-footer class="dashboard-footer"/>
  </div>
</template>

<script>
import Profile from "./profile/Profile";
import DashboardFooter from "./dashboard-footer/DashboardFooter";
import Logo from "./utils/Logo.vue";
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
import { page } from "vue-analytics";

export default {
  name: "Dashboard",
  components: { Profile, DashboardFooter, Logo },
  data() {
    return {
      search: "",
      financialChart: 4,
      chart: "6m"
    };
  },
  methods: {
    searchMarkets(symbol) {
      const { IEX_API, IEX_SECRET } = process.env;

      return ajax(
        `${IEX_API}stable/stock/${symbol}/batch?types=company,quote,earnings,news,stats,advanced-stats,chart&chartCloseOnly=true&range=${
          this.chart
        }&last=${this.financialChart}&token=${IEX_SECRET}`
      ).pipe(
        map(validate),
        catchError(val => of(new Error())),
        share()
      );
    },

    marketObservable$(callback) {
      return this.$watchAsObservable("search").pipe(
        pluck("newValue"),
        filter(str => str.trim() != ""),
        debounceTime(750),
        distinctUntilChanged(),
        switchMap(callback),
        share()
      );
    },

    track() {
      page("/");
    }
  },
  subscriptions() {
    let markets$ = this.marketObservable$(this.searchMarkets);

    let error$ = markets$.pipe(pluck("request"));
    let company$ = markets$.pipe(pluck("company"));
    let quote$ = markets$.pipe(pluck("quote"));
    let chart$ = markets$.pipe(pluck("chart"));
    let earnings$ = markets$.pipe(pluck("earnings", "earnings"));
    let stats$ = markets$.pipe(pluck("stats"));
    let advancedStats$ = markets$.pipe(pluck("advanced-stats"));
    let financials$ = markets$.pipe(pluck("financials", "financials"));
    let news$ = markets$.pipe(pluck("news"));

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

.nil {
  display: flex;
  flex: 0.25;
}

.nil p {
  text-align: center;
  margin: auto;
  font-size: 1.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
}

.JBmarkets {
  fill: rgba(49, 57, 92, 0.7);
  height: 30px;
  display: flex;
  flex: 0.25;
}

.JBmarkets:hover {
  fill: white;
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
