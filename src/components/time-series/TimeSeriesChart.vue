<script>
import { Line } from 'vue-chartjs'
import { timeSeriesOptions } from './timeSeriesOptions.js'

export default {
    extends: Line,
    props: { symbol: String, high: Array, low: Array, chartlabel: Array},
    data() {
        return {
            options: timeSeriesOptions.options,
            gradient: '',
            gradient2: '',
            gradient3: '',
            gradient4: '',
            color: 'rgba(183, 100, 255, 1)'
        }
    },
    methods: {
          renderTimeSeries(chartlabel, high, color, low, symbol) {
            this.renderChart(
                 {
                 labels: chartlabel,
                datasets: [
                {
                    label: `${symbol } Price Per Share High in USD`,
                    data: high,
                    borderColor: color,
                    backgroundColor: 'transparent',
                    lineTension: 0,
                    borderWidth: 1,
                    pointRadius:0,
                    pointHitRadius:5,
                    pointHoverBackgroundColor: color,
                    pointHoverBorderWidth:0
                },
                 {
                    label: `${symbol } Price Per Share Low in USD`,
                    data: low,
                    borderColor: ['rgba(255,255,255,.4)'],
                    backgroundColor: [ 'transparent'],
                    lineTension: 0,
                    borderWidth: 1,
                    pointRadius:0,
                    pointHitRadius:4,
                    borderHoverColor: '#ffffff',
                    pointHoverBackgroundColor: 'rgba(255,255,255,1)',
                    pointHoverBorderWidth:2,
                    showLine:false
            
                }]
            }, this.options)
        }
    },
    watch: {
        chartlabel: function () {
          return this.renderTimeSeries(this.chartlabel, this.high, this.gradient, this.low, this.symbol)
       }
    },
    mounted () {

        //"#6512FF"
        //"#E94343"

        // "rgba(35, 255, 198, 1)"
        // "#3B9AF0"


         this.gradient3 = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(500, 0, 100, 0);
            this.gradient3.addColorStop(0, "#6512FF");
            this.gradient3.addColorStop(1, "#E94343");
        
        this.gradient = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(500, 0, 100, 0);

            this.gradient.addColorStop(0, "#57AFFF");
            this.gradient.addColorStop(1, "#C162FF");

// background-image: linear-gradient(to right, #3b9af0, #2a8bff, #4a78ff, #795bff, #a821ff);

          this.gradient2 = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(500, 0, 100, 0);
            this.gradient2.addColorStop(0, "rgba(35, 255, 198, .5)");
            this.gradient2.addColorStop(1, "rgba(0, 255, 122, .5)");


          this.renderTimeSeries(this.chartlabel, this.high, this.gradient, this.low, this.symbol)
        
          
    }
}
</script>

