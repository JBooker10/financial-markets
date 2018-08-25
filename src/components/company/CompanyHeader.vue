<template>
    <div class="card-main-header">
        <div class="header">
            <svg height="25" width="25" class="tag tag-left">
            <circle cx="12.5" cy="12.5" r="10" class="circle"  />
            </svg>
            <h1 class="head1">{{ symbol }}</h1>
            </div>
    <p class="card-main-name">{{ companyName }}</p>
    </div>
</template>
<script>
export default {
    name: 'CompanyHeader',
    props: { symbol: String, companyName: String }
}
</script>
<style>

.card-main-header {
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    border-bottom: 1px solid rgba(25,29,45,1);
    width:100%;
    padding-bottom:1em;

    /* margin-bottom:1em; */
}

/* .head1 {
     background: linear-gradient(330deg,#C162FF, #57AFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
} */

.header {
    display:flex;
    margin: .25em 0 0 0;
    flex-direction:row;
    align-items:center;
    justify-content: center;
    width:100%;
 }

.tag {
    stroke-width: 1px;
    display:flex;
    flex-direction:row;
    align-self:center;
}

.tag-left {
    /* stroke:#E94343; */
    /* stroke:#23ffc6; */
    stroke:#b764ff;
    fill:transparent;
  }

</style>


