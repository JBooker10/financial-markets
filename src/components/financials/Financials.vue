<template>
  <div class="card">
    <div class="financial-header">
      <h3>Financials</h3>
    </div>
    <div>
      <financials-chart
        class="fade"
        :reportDate="financialData.map(data => data.reportDate )"
        :grossProfit="financialData.map(data =>  data.grossProfit)"
        :totalRevenue="financialData.map(data =>  data.totalRevenue)"
        :netIncome="financialData.map(data =>  data.netIncome)"
        :operatingIncome="financialData.map(data =>  data.operatingIncome)"
        :symbol="quoteData.symbol"
        :height="135"
      />
    </div>
  </div>
</template>
<script>
import FinancialsChart from "./FinancialsChart.vue";
import numeral from "numeral";

export default {
  name: "Financials",
  props: { financialData: Array, quoteData: Object },
  components: { FinancialsChart },
  methods: {
    format(num) {
      return num / num.length;
    }
  }
};
</script>
<style>
.financial-header {
  padding: 1.2em;
  /* border-bottom:1px solid rgba(25,29,45,1); */
}

.financials-table {
  height: 88%;
}

.fade {
  filter: brightness(120%);
}

table {
  border-collapse: collapse;
  border-collapse: collapse;
  width: 100%;
  font-size: 1.3em;
  text-align: center;
  /* display: inline-block;
  vertical-align: top;
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  border-collapse: collapse;
  border-spacing: 0; */
}

tr th {
  text-align: center;
  padding: 8px;
}

.table-head {
  text-align: left;
  border-right: 1px solid rgba(25, 29, 45, 1);
  /* background:rgba(25,29,45,1); */
  font-weight: 700;
  width: 20%;
}

.table-row > td {
  border-top: 1px solid rgba(25, 29, 45, 1);
  padding: 0 1em;
}
</style>


