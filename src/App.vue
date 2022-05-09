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
  /*background-image: linear-gradient( to bottom right, #4affde 0%, #5b9dff 40%, #d06bff 60%, #ff34d2 100%);*/
  background-image: linear-gradient(to right, #fc00ff, #00dbde);
  width: 100%;
  height: auto;
  text-align: center;
  text-transform: uppercase;
  animation: bg-animado 5s linear infinite alternate;
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
