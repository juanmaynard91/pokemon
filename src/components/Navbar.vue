<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="nav-link" aria-current="page" to="/">Pokemones con Vue Vite</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" @submit.prevent="buscarPokemon">
          <input class="form-control me-2" type="text" placeholder="Ingrese nombre..." aria-label="Search" v-model.trim="buscar" />
          <button class="btn btn-success" type="submit">Buscar</button>
        </form>
      </div>

    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, { emit }) {
    const buscar = ref("");

    const buscarPokemon = () => {
      if (buscar.value == "") {
        console.log("vacio pa");
      } else {
        emit("accion", buscar.value);
        console.log(buscar.value);
      }
      buscar.value = "";
    };

    return { buscar, buscarPokemon };
  },
};
</script>

<style>
@media screen and (min-width: 375px) {
  .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
    margin-top: 1rem;
  }
}
</style>