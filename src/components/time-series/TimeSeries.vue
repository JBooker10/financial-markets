<template>
    <div class="card card-chart" v-if="quoteData && chartData
     ">
     <div class="buttons">
     <button class="btn btn-left" >1D</button>
    <button class="btn" >1M</button>
     <button class="btn" >3M</button>
    <button class="btn btn-right">6M</button>
     </div>
         <h3>{{ quoteData.companyName.slice(0,32) }} Price Per Share:<span class="highlight"> {{quoteData.latestPrice}}</span>
             <span class="highlight2">{{quoteData.changePercent | numeralFormat('(0.00%)') }}</span> </h3>
        <div class="card-margins">
        <time-series-chart 
                :symbol="quoteData.symbol"
                :high="chartData.map(data => data.high)"
                :low="chartData.map(data => data.low)"
                :chartlabel="chartData.map(data => data.label)"
                :height="130"/>
        <time-series-metrics
                :latestVolume="quoteData.latestVolume"
                :peRatio="quoteData.peRatio"
                :high="quoteData.high"
                :low="quoteData.low"
                :change="quoteData.change"
                :changePercent="quoteData.changePercent"
                />
        </div>
    </div>
</template>
<script>
import TimeSeriesMetrics from './TimeSeriesMetrics'
import TimeSeriesChart from './TimeSeriesChart'

export default {
    name: 'TimeSeries',
    components: { TimeSeriesMetrics, TimeSeriesChart },
    props: {quoteData: [Object, Error], chartData: [Array, Error] }
}
</script>
<style>

/* rgba(25,29,45,1) */

/* rgba(183, 100, 255, 1) */


.card-margins {
    padding:0 2em;
}

.highlight2 {
    /* color:#23ffc6; */
    color:rgba(183, 100, 255, 1);
    font-weight:100;
    font-size:14px;
}

.buttons {
    display:flex;
    padding: 0 2em;
    justify-content:flex-end;
}

.btn {
    padding:.5em 1em;
    background:none;
    border:1px solid rgba(25,29,45,1);
    color: rgba(255,255,255,.5);
    cursor:pointer;
    outline:none;
    z-index:3;
}

.btn:hover {
    background:rgba(183, 100, 255, 1);
}

.btn-left {
    border-top-left-radius:.5em;
    border-bottom-left-radius:.5em;
}

.btn-right {
    border-top-right-radius:.5em;
    border-bottom-right-radius:.5em;
}



</style>




