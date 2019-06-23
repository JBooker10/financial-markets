<template>
  <div class="news-feed">
    <transition-group class="news-slider" tag="div">
      <div class="slide" v-for="(news, i) in newsData" :key="i">
        <h2>{{ news.headline }}</h2>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "NewsFeed",
  props: { newsData: Array },
  methods: {
    next() {
      const first = this.newsData.shift();
      this.newsData = this.newsData.concat(first);
    },
    previous() {
      const last = this.newsData.pop();
      this.newsData = [last].concat(this.slides);
    }
  }
};
</script>
<style>
.news-feed {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 45em;
}
.news-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 24em;
  height: inherit;
  /* min-height: 25em; */
}

.slide {
  flex: 0 0 20em;
  height: 100%;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em dashed #000;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
</style>

