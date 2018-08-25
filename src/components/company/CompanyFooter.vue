<template>
   <div class="description">
        <small>{{ description }}</small>
    </div> 
</template>
<script>
export default {
    name: 'CompanyFooter',
    props: { description: String }
}
</script>
<style>

.description {
    border-top:1px solid rgba(25,29,45,1);
    padding:1em 2em 2em 2em;
    text-align:justify;
  }

</style>


