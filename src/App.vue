<template>
  <Navbar @accion="buscarPokemon"/>
  <router-view />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

#app {
  text-align: center;
  font-family: "Oswald", sans-serif;
}

ul {
  list-style: none;
}
</style>
