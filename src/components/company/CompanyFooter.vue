<template>
  <div class="description">
    <small>{{ truncateDescription(description, 110) }}</small>
  </div>
</template>
<script>
export default {
  name: "CompanyFooter",
  props: { description: String },
  methods: {
    truncateDescription(str, num) {
      if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    }
  }
};
</script>
<style>
.description {
  border-top: 1px solid rgba(25, 29, 45, 1);
  padding: 1em 2em 2em 2em;
  text-align: justify;
}
</style>


