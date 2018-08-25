<template>
<div class="card">
<div class="card-header">
    <h3>{{ title }}</h3>
    </div>
    <card-row propName="Trailing 12 Months EPS" :propValue="statsData.ttmEPS | numeralFormat('0.00') " :hasBorder="true"/>
    <card-row propName="Return on Equity" :propValue="statsData.returnOnEquity | numeralFormat('0.00')"  :hasBorder="true"/>
    <card-row propName="Return on Assets" :propValue="statsData.returnOnAssets | numeralFormat('0.00')" :hasBorder="true"/>
    <card-row propName="Profit Margin" :propValue="statsData.profitMargin + '%'" :hasBorder="true"/>
    <card-row propName="Price to Sales" :propValue="statsData.priceToSales | numeralFormat('0.00')" :hasBorder="true"/>
    <card-row propName="Price to Book" :propValue="statsData.priceToBook | numeralFormat('0.00')" :hasBorder="true"/>
    <card-row propName="Institution" :propValue="statsData.institutionPercent + '%'" :hasBorder="true"/>
    <card-row propName="Short Ratio" :propValue="statsData.shortRatio | numeralFormat('0.00')"/>
</div>
</template>
<script>
import CardRow from './../utils/CardRow'


export default {
    name: 'KeyStats',
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