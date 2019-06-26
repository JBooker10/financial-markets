<template>
  <div class="entry">
    <div class="lane animated flipInX" :key="iterator">
      <h1 class="colored text-head">{{ tickerAnimation.symbol }}</h1>
      <p class="company">{{ tickerAnimation.companyName }}</p>
      <p class="price">
        {{ tickerAnimation.close | numeralFormat('$0.00a') }}
        <span
          class="percentage"
        >{{ tickerAnimation.changePercent | numeralFormat('%0.00')}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Entry",
  data() {
    return {
      symbols: [],
      // symbols: [
      //   "MSFT",
      //   "AAPL",
      //   "SNAP",
      //   "FB",
      //   "NFLX",
      //   "JPM",
      //   "IBM",
      //   "GOOGL",
      //   "INTC",
      //   "AMZN",
      //   "XOM",
      //   "WFC",
      //   "V",
      //   "BAC",
      //   "WMT",
      //   "JNJ",
      //   "PG",
      //   "CVX",
      //   "BUD",
      //   "UBER",
      //   "DBX"
      // ],
      iterator: 0,
      timer: null
    };
  },
  methods: {
    incrementIterator() {
      this.iterator += 1;
    },

    fetchData() {
      const { IEX_API, IEX_SECRET } = process.env;
      const myRequest = new Request(
        `${IEX_API}v1/stock/market/list/mostactive?token=${IEX_SECRET}`
      );
      fetch(myRequest)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.symbols = data;
        })
        .then(data => {
          this.play();
        })
        .catch(error => {
          console.log(error);
        });
    },

    play() {
      this.timer = setInterval(this.incrementIterator, 1500);
    }
  },
  computed: {
    tickerAnimation: function() {
      return this.symbols[this.iterator % this.symbols.length];
    }
  },
  mounted() {
    this.fetchData();

    console.log(this.symbols);
  }
};
</script>
<style>
.entry {
  height: 75vh;
  background: #14171c;
  display: flex;
}

.entry h3 {
  color: rgba(25, 29, 45, 0.7);
}

.percentage {
  color: #9666ff;
}

.lane {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 0.1em;
  margin: auto;
}

.lane h1 {
  font-size: 4.5em;
}

.lane .company {
  font-size: 22px;
  font-weight: bold;
}

.lane .price {
  font-size: 20px;
}

.lane h2 {
  font-size: 24px;
}

.text-head {
  font-size: 0.8em;
  text-align: center;
}

.logo-cover {
  height: 100px;
  fill: rgba(25, 29, 45, 0.4);
  margin: auto;
  display: block;
}

.entry-head {
  font-weight: 100;
  font-size: 0.4em;
  text-align: left;
}

.bar-chart {
  margin: auto;
  display: block;
}

.colored {
  /* font-size:2em; */
  /* font-weight:100; */

  background: linear-gradient(45deg, #57afff, #7134f5, #f474fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>


