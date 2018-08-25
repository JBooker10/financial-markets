<script>
import { Bar } from 'vue-chartjs'
import { financialOptions } from './financialOptions.js'


export default {
    extends: Bar,
    props: { 
        symbol: String, 
        reportDate: Array, 
        totalRevenue: Array, 
        grossProfit: Array, 
        netIncome: Array,
        operatingIncome: Array
        
        },
    data() {
        return {
            options: financialOptions.options,
            gradient: '',
            gradient2: ''
        }
    },
    methods: {
           renderFinancials(
               reportDate, 
           totalRevenue, 
           grossProfit, 
           operatingIncome, 
           netIncome, 
           symbol, 
           color,
           color2
           ) {
            this.renderChart(
                 {
                 labels: reportDate,
                 datasets: [
                {
                    label: `${symbol } Total Revenue`,
                    data: totalRevenue,
                    borderColor: color,
                    backgroundColor: 'rgba(25,29,45,1)',
                    borderWidth: 0,
                },
                 {
                    label: `${symbol } Gross Profit`,
                    data: grossProfit,
                    borderColor: color,
                    backgroundColor: 'rgba(25,29,45,1)',
                    borderWidth: 0,
                },
                 {
                    label: `${symbol } Operating Income`,
                    data: operatingIncome,
                    borderColor: color,
                    backgroundColor: 'rgba(25,29,45,1)',
                    borderWidth: 0,
                },
                 {
                    label: `${symbol } Net Income`,
                    data: netIncome,
                    borderColor: 'rgba(19,137,214, 1)',
                    backgroundColor: 'rgba(25,29,45,1)',
                    borderWidth: 0,
                }]
            }, this.options)
           },
    },
    watch: {
        totalRevenue:  function () {
          return this.renderFinancials(
            this.reportDate,
            this.totalRevenue, 
            this.grossProfit,
            this.operatingIncome, 
            this.netIncome,
            this.symbol,
            this.gradient,
            this.gradient2
          )
       }
    },
    mounted () {

           this.gradient = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 300);

            this.gradient.addColorStop(0, "rgba(109,40,222, .4)");
            this.gradient.addColorStop(1, "#629DFF");


              this.gradient2 = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 200);

            this.gradient2.addColorStop(1, "rgba(109,40,222, .4)");
            this.gradient2.addColorStop(0, "#629DFF");
            


        this.renderFinancials(
            this.reportDate,
            this.totalRevenue, 
            this.grossProfit,
            this.operatingIncome, 
            this.netIncome,
            this.symbol,
            this.gradient,
            this.gradient2
            )

    }
    

}
</script>
