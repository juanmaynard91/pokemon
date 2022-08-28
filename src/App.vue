<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
html,
body {
  background-size: 200% 200%;
  background-image: linear-gradient(to right, #833ab4, #fd1d1d);
  text-align: center;
  text-transform: uppercase;
  animation: bg-animado 5s linear infinite alternate;
  cursor: url(./assets/cursor.cur), auto;
}
a:hover {
  cursor: url(./assets/cursor.cur), auto;
}
@keyframes bg-animado {
  from {
    background-position: 0, 0;
  }
  to {
    background-position: 100% 100%;
  }
}
ul {
  list-style: none;
}
</style>