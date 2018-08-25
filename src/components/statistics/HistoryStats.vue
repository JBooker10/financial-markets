<template>
    <div class="card">
        <div class="card-header">
        <h3>{{ title }}</h3>
        </div>
        <card-row propName="Beta" :propValue="statsData.beta | numeralFormat('0.000')" :hasBorder="true"/>
        <card-row propName="52 Week High" :propValue="statsData.week52high | numeralFormat('0.00')" :hasBorder="true"/>
        <card-row propName="52 Week Low" :propValue="statsData.week52low | numeralFormat('0.00')" :hasBorder="true"/>
        <card-row propName="52 Week Change" :propValue="statsData.week52change | numeralFormat('0.00') + '%'" :hasBorder="true"/>
        <card-row propName="Month 6 Change" :propValue="statsData.month6ChangePercent | numeralFormat('0.00%') " :hasBorder="true"/>
        <card-row propName="YTD Change" :propValue="statsData.ytdChangePercent | numeralFormat('0.00%') " :hasBorder="true"/>
        <card-row propName="50 Day Moving Average" :propValue="statsData.day50MovingAvg | numeralFormat('0.00')" :hasBorder="true"/>
        <card-row propName="200 Day Moving Average" :propValue="statsData.day200MovingAvg | numeralFormat('0.00')"/>
    </div>
</template>
<script>
import CardRow from './../utils/CardRow'


export default {
    name: 'HistoryStats',
    components: { CardRow },
    props: { statsData:Object, title: String }
}
</script>
<style>

.card-header {
    border-bottom: 1px solid  rgba(25,29,45,1);
    padding:1em;
    overflow: hidden;
}

</style>

