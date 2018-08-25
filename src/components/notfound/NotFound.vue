<template>
    <div class="notfound">
    <div v-if="isLoading">
      <img src="./../../assets/loading.gif" class="load"/>
    </div>
    <div v-else>
        <img src="./../../assets/sad.svg" alt="" height="200" class="not">
        <h2 class="void">Uh-oh! {{ capture.toUpperCase() }} is not a valid ticker </h2>
        <h1>404 Not Found</h1>
    </div>
    </div>
</template>
<script>
export default {
    name: 'NotFound',
    props: { getSearch: String },
    data() {
        return {
            capture: this.getSearch,
            isLoading: true
        
        }
        
    },
    methods: {
         displayNotFound() {  
            setTimeout(() => {
                this.isLoading = false
            }
            , 4000) 
        }
    },
    mounted() {
        this.displayNotFound()
    }
}
</script>
<style>

.notfound {
    padding-top:4em;
    height:75vh;
}

.not {
    margin:auto;
    display:block;
}

</style>


