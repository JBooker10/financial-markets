<script>
import { Line } from "vue-chartjs";
import { earningsOptions } from "./earningsOptions.js";

export default {
  extends: Line,
  props: {
    symbol: String,
    actualEPS: Array,
    consensusEPS: Array,
    fiscalPeriod: Array
  },
  data() {
    return {
      options: earningsOptions.options,
      gradient: ""
    };
  },
  methods: {
    renderEarnings(fiscalPeriod, actualEPS, color, consensusEPS, symbol) {
      this.renderChart(
        {
          labels: fiscalPeriod,
          datasets: [
            {
              label: `${symbol} Actual EPS in USD`,
              data: actualEPS,
              borderColor: color,
              backgroundColor: "transparent",
              lineTension: 0,
              borderWidth: 2,
              pointRadius: 9,
              pointHitRadius: 10,
              pointHoverColor: "rgba(183, 100, 255, 1)",
              pointHoverBackgroundColor: "rgba(183, 100, 255, 1)",

              showLine: false
            },
            {
              label: `${symbol} Consensus EPS in USD`,
              data: consensusEPS,
              borderColor: ["rgba(255,255,255,1)"],
              backgroundColor: ["transparent"],
              lineTension: 0,
              borderWidth: 2,
              pointRadius: 7,
              pointHitRadius: 10,
              pointHoverBackgroundColor: "rgba(255,255,255,.7)",

              showLine: false
            }
          ]
        },
        this.options
      );
    }
  },
  watch: {
    consensusEPS: function() {
      return this.renderEarnings(
        this.fiscalPeriod,
        this.actualEPS,
        this.gradient,
        this.consensusEPS,
        this.symbol
      );
    }
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(500, 0, 100, 0);

    this.gradient.addColorStop(0, "#57AFFF");
    this.gradient.addColorStop(1, "#C162FF");

    this.renderEarnings(
      this.fiscalPeriod,
      this.actualEPS,
      this.gradient,
      this.consensusEPS,
      this.symbol
    );
  }
};
</script>
