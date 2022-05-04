<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

html,body {
  background-size: 200% 200%;
  background-image: linear-gradient( to bottom right, #4affde 0%, #5b9dff 40%, #d06bff 60%, #ff34d2 100%);
  /*width: auto;*/
  height: auto;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  animation: moving 5s linear infinite alternate;
}

@keyframes moving {
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
