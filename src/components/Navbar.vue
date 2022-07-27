<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="nav-link" aria-current="page" to="/">
      <img class="logoPokemon" src="../assets/pokeapi.png" alt="logo pokemon" />
      </router-link>
    </div>
  </nav>
</template>

<script>
</script>

<style>
.container-fluid {display: flex;justify-content: center !important;align-items: center;}.logoPokemon {height: 4rem;}@media screen and (max-width: 375px) {.logoPokemon {height: 3rem;}}
</style>