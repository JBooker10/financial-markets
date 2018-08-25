<template>
    <div class="card-row" v-bind:style="[hasBorder ? getBorder : 'null']">
        <div class="col flex-start" v-bind:style="[sm]"><p>{{ propName }}</p></div>
        <div class="col flex-end"   v-bind:style="[sm]"><p class="highlight">{{ propValue }}</p></div>
    </div>
</template>
<script>
export default {
    name: 'CardRow',
    props: { propName: String, propValue: [String, Number], hasBorder: Boolean },
    data() {
        return {
          getBorder: {
              borderBottom: '1px solid rgba(25,29,45,1)'
          },
          sm: { margin: '.75em 0' }
        }
    }
}
</script>
<style>

.card-row {
    padding:0 2em;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    cursor:pointer;
}

.flex-end {
    align-self: flex-end;
    text-align:right;
  }

.flex-start {
    align-self: flex-start;
    text-align:left;
  }

.card-row:hover {
    /* background-image: linear-gradient(to right top, #23ffc6, #00ffb6, #00ffa5, #00ff90, #00ff7a); */
    background: rgba(25,29,45,1);
}


.col {
    margin:1em 0;
}

</style>


