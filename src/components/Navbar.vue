<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="nav-link" aria-current="page" to="/">
        <img class="logoPokemon" src="../assets/pokeapi.webp" alt="logo pokemon" loading="lazy"/>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
</script>

<style>
.container-fluid {
  align-items: center;
  display: flex;
  justify-content: center !important;
}
.logoPokemon {
  height: 4rem;
}
@media screen and (max-width: 375px) {
  .logoPokemon {
    height: 3rem;
  }
}
</style>
