<template>
  <div class="container">
    <input class="form-control mt-3" type="text" placeholder="buscar..." aria-label="Search" v-model.trim="buscar" @keyup="buscarPokemones" />

    <div class="mt-3">
      <ul>
        <li v-for="pokemon in pokemonesFiltrados" :key="pokemon.id">
          <h4>
            <router-link :to="`/detalles/${pokemon.id}`">{{ pokemon.name }}</router-link>
          </h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
import { ref } from "vue";

export default {
  setup() {
    const pokemones = ref([]);
    const pokemonesFiltrados = ref([]);
    const buscar = ref("");
    const pokeApi = "https://pokeapi.co/api/v2/pokemon";

    const cargarPokemones = async () => {
      const res = await fetch(`${pokeApi}?limit=898`);
      const data = await res.json();
      //console.log(data);

      data.results.forEach((element, id) => {
        const pokemon = {
          ...element,
          id: id + 1,
        };
        pokemones.value.push(pokemon);
        pokemonesFiltrados.value.push(pokemon);
      });
    };

    cargarPokemones();

    const buscarPokemones = () => {
      pokemonesFiltrados.value = 
        pokemones.value.filter((elem) => elem.name.includes(buscar.value.toLowerCase()));
    };

    return { pokeApi, buscarPokemones, buscar, pokemonesFiltrados };
  },
};
</script>

<style>
a {
  color: black;
  text-decoration: none;
}

</style>