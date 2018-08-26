
<template>
    <div class="card news" v-if="newsData.length >= 0">
        <div class="news-header">
            <h3>News Feed</h3>
        </div>
        <div class="feed" v-if="newsData">
        <h2 class="slide animated flipInX" :key="iterator">{{ newsFeed.headline }}</h2>
            <div>
            <a :href="newsFeed.url"  target="_blank" class="btn-news">Learn More</a>
            </div>
        </div>
        <div class="news-footer">
          source: {{ newsFeed.source }}
        </div>
        </div>
</template>
<script>


export default {
    name: 'News',
    props: { newsData: Array },
    data() {
        return {
            iterator: 0,
            timer: null
          
        }
    },
    methods: {
          
        incrementIterator() {
            this.iterator += 1
        },

        play() {  
            this.timer = setInterval(this.incrementIterator, 7000) 
        }
      
    },
    computed: {
        newsFeed: function() {
            return this.newsData[this.iterator % this.newsData.length]
        }
    },
    mounted() {
         this.play()

    }
}
</script>
<style>


.feed {
    display:flex;
    flex-direction:column;
    align-content: center;
    align-items: center;
    padding:1em;
}

h2 {
    font-size:2em;
    text-align:center;
    background: linear-gradient(330deg,#C162FF, #57AFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

.btn-news {
    border:1px solid #fff;
    border-color:rgba(255,255,255,.7);
    color:#fff;
    padding:.5em 1em;
    border-radius:2em;
    font-size:12px;
    text-decoration: none;
}

.btn-news:hover {
    background:rgba(255,255,255,1);
    color:rgba(25,29,45,1);
}


.news-header, .news-footer {
padding:1em;
}

.news-board {
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding:0 1em;
    min-height:180px;
}

.news-header {
    border-bottom:1px solid rgba(25,29,45,1);
}

.tns-outer button {
    display:none;
}


.no-border {
    border-bottom:0 !important;
    padding-bottom:0;
}

.news {
    min-height:300px;
    justify-content: space-between;
    overflow:hidden;
}



.padding{
    padding:0 1em;
    justify-content: center;
    /* background:red; */
}



</style>






