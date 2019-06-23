<template>
  <div class="card-tags" v-bind:style="[hasBorder ? getBorder : 'null']">
    <div class="tags" v-for="(value, i) in propValue" :key="i">
      <span class="tag">{{value}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardTags",
  props: { propValue: [Array], hasBorder: Boolean },
  data() {
    return {
      getBorder: {
        borderBottom: "1px solid rgba(25,29,45,1)"
      },
      sm: { margin: ".75em 0" }
    };
  }
};
</script>
<style>
.card-tags {
  padding: 0 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  cursor: pointer;
}

.tag {
  font-size: 1em;
  color: white;

  background: rgba(25, 29, 45, 1);
  /* background: linear-gradient(45deg, #57afff, #601cf1); */
  /* background: linear-gradient(45deg, #57afff, #601cf1, #f142fc); */
  border-radius: 20px;
  padding: 0.7em 1.5em;
  margin: 0.5em 0.25em 1em 0.25em;
}

.tag:hover {
  background: linear-gradient(45deg, #57afff, #601cf1);
  color: white;
}

.flex-end {
  align-self: flex-end;
  text-align: right;
}

.flex-start {
  align-self: flex-start;
  text-align: left;
}

.card-row:hover {
  /* background-image: linear-gradient(to right top, #23ffc6, #00ffb6, #00ffa5, #00ff90, #00ff7a); */
  color: white;
  background: rgba(25, 29, 45, 1);
}

.col {
  margin: 1em 0;
}
</style>


