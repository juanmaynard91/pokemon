<script setup>
import Navbar from "./components/Navbar.vue";
import { reactive, onMounted } from "vue";

const pokemones = reactive([]);

onMounted(async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
    const data = await res.json();
    //console.log(data.results);

    data.results.forEach((element, index) => {
      const pokemon = {
        ...element,
        index: index++,
      };

      pokemones.push(pokemon);
    });
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <Navbar />

  <ul>
    <li v-for="pokemon in pokemones" :key="pokemon.index">
      {{ pokemon.name }}
    </li>
  </ul>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul{
  list-style: none;
}
</style>
