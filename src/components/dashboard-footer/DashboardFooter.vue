<template>
  <div class="footer">
    <small>built and designed by Jared Booker &copy; {{ new Date().getFullYear() }}</small>
    <br>
    <small>
      <a href="https://iexcloud.io" target="_blank">Data provided by IEX Cloud</a>
    </small>
  </div>
</template>
<script>
export default {
  name: "DashboardFooter"
};
</script>
<style>
.footer {
  bottom: 0;
  width: 100%;
  margin: auto;
  display: block;
  /* display: flex; */
  text-align: center;
  border-top: 1px solid rgba(25, 29, 45, 0.85);
  justify-content: center;
  align-content: center;
  padding-top: 2em;
}

.footer a {
  color: white;
  text-transform: none;
  text-decoration: none;
}
.footer a:hover {
  color: rgb(113, 75, 253);
}

.p-footer {
  display: flex;
  flex-direction: columns;
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

