<template>
    
</template>
<script>
export default {
    name: 'Slider',
    data() {
        return {
            articles: ['Headline1', 'Headline2', 'Headline3'],
            iteration: 0,
            timer:null
        }
    },
    methods: {
        startSlide() {
            this.timer = setInterval(this.next, 3000)
        },

        stopSlide() {
            clearTimeout(this.timer)
            this.timer = null
        },

        next() {
            this.currentNumber += 1
        },

    },
    mounted() {
        this.startSlide()
    }

}
</script>
<style>

</style>

