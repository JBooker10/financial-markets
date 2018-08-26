<template>
  <div class="main">
     <nav>

    <input type="text" class="search" v-bind:value="search"
          v-on:input="search = $event.target.value" placeholder="Enter a company ticker" autofocus>
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
               :getSearch="search"
               />
            
    </div>
    <dashboard-footer class="dashboard-footer"/>
  </div>
</template>

<script>
import Profile from './profile/Profile'
import DashboardFooter from './dashboard-footer/DashboardFooter'
import { validate } from './utils/utils.js'

import { of } from 'rxjs'
import { map, share, pluck, filter, tap, concatMap, catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'


export default {
  name: 'Dashboard',
  components: { Profile, DashboardFooter },
  data () {
    return {
      search: '',
      newsAmount: 10,
      chartType: '6m'
    }
  },

  subscriptions () {

    // d173d5fd38684228b77829d8b13c54e3

    //https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=d173d5fd38684228b77829d8b13c54e3

    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2018-08-24&' +
          'sortBy=popularity&' +
          'apiKey=d173d5fd38684228b77829d8b13c54e3';

    const urlnew = 'https://newsapi.org/v2/everything?q=Apple&from=2018-08-24&sortBy=popularity&apiKey=d173d5fd38684228b77829d8b13c54e3'
      
      const searchMarkets = (symbol) =>
        ajax(`https://api.iextrading.com/1.0/stock/${symbol}/batch?types=company,quote,earnings,stats,financials,news,chart&range=${this.chartType}&last=${this.newsAmount}`)
        .pipe(map(validate),  catchError((val) => of(new Error)), share())

      const markets$ = this.$watchAsObservable('search').pipe(
        pluck('newValue'),
        filter(str => str.trim() != ''),
        debounceTime(750),
        distinctUntilChanged(),
        switchMap(searchMarkets),
        share()

    )

    const error$ = markets$.pipe(pluck('request'))
    const company$ = markets$.pipe(pluck('company'))
    const quote$ = markets$.pipe(pluck('quote'))
    const chart$ = markets$.pipe(pluck('chart'))
    const earnings$ = markets$.pipe(pluck('earnings', 'earnings'))
    const stats$ = markets$.pipe(pluck('stats'))
    const financials$ = markets$.pipe(pluck('financials', 'financials'))
    const news$ = markets$.pipe(pluck('news'))


    return {
      error$,
      company$,
      quote$,
      chart$,
      earnings$,
      stats$,
      financials$,
      news$
    }
    
  }
}
</script>


<style>
.main {
  display:flex;
  flex-direction:column;
}

.dashboard-footer {
  align-content: flex-end;
  align-self: flex-end;
  justify-content: flex-end;
}

.nav-brand {
  z-index:3;
  opacity:8;
}


</style>
