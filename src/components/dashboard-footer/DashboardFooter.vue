<template>
  <div class="footer">
    <small class="p-footer">built and designed by Jared Booker &copy; {{ new Date().getFullYear() }}</small>
  </div>
</template>
<script>
export default {
  name: "DashboardFooter"
};
</script>
<style>
.footer {
  margin-top: 2em;
  bottom: 0;
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(25, 29, 45, 0.85);
  justify-content: center;
  align-content: center;
  padding: 2em;
}

.p-footer {
  display: flex;
  /* text-align:center; */
  align-items: center;
  padding: 0 0.5em;
}

.logo {
  display: flex;
  content: url(./../../assets/logo2.svg);
  height: 3em;
  align-self: center;
  opacity: 0.6;
}
</style>

