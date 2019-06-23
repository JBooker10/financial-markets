<template>
  <div class="notfound">
    <div v-if="isLoading">
      <svg xmlns="http://www.w3.org/2000/svg" class="jb-spinner" viewBox="0 0 476.62 367.57">
        <path
          class="cls-1"
          d="M476.62,240.47c0,70.08-62.39,127.1-139.1,127.1-38.78,0-75.57-14.95-101.57-40.26-25.69,23-60.41,36.08-96.51,36.18h-.56c-53.76,0-103.13-28.77-125.89-73.41l-.08-.18a135.07,135.07,0,0,1-6.2-14.43l-.08-.22A117.45,117.45,0,0,1,0,236.78l45.82-.19a71.69,71.69,0,0,0,4,23.39,86.89,86.89,0,0,0,4,9.37c15.08,29.49,48.59,48.48,85.42,48.32,26.8-.08,52.27-10.31,69.89-28.06C224,274.72,232.05,255.66,232,236v-4.67h45.82v4.56a118,118,0,0,1-13.39,55c17.53,19.31,44.42,30.89,73.13,30.89,51.44,0,93.28-36.46,93.28-81.28S389,159.19,337.52,159.19c-25.46,0-49.27,8.82-67,24.82l-30.68-34c26.18-23.59,60.88-36.6,97.7-36.6C414.23,113.37,476.62,170.39,476.62,240.47Z"
          fill="#ffffff"
        ></path>
        <path
          class="cls-1"
          d="M230.55,113.53c-.12-37.95-.06-76.14.18-113.53l45.82.24c-.24,37.27-.3,75.34-.18,113.17Z"
          fill="#ffffff"
        ></path>
      </svg>
    </div>
    <div v-else>
      <img src="./../../assets/sad.svg" alt class="not">
      <h2 class="void">Uh-oh! {{ capture.toUpperCase() }} is not a valid ticker</h2>
      <h1>404 Not Found</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  props: { getSearch: String },
  data() {
    return {
      capture: this.getSearch,
      isLoading: true
    };
  },
  methods: {
    displayNotFound() {
      setTimeout(() => {
        this.isLoading = false;
      }, 4000);
    }
  },
  mounted() {
    this.displayNotFound();
  }
};
</script>
<style>
.notfound {
  padding-top: 10em;
  height: 75vh;
}

.not {
  margin: auto;
  display: block;
  height: 15em;
  width: 15em;
}
</style>


