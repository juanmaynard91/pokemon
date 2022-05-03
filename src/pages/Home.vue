<template>
  <div>


    <ul>
      <li v-for="pokemon in pokemones" :key="pokemon.id">
        <router-link :to="`/detalles/${pokemon.id}`">{{ pokemon.name }}</router-link>
        {{ pokemon.id }}
      </li>
    </ul>
  </div>
</template>

<script >
import { reactive, toRefs, ref } from "vue";

export default {
  setup() {
    /*const state = reactive({
      pokemones: [],
    });*/

    const pokemones = ref([]);

    //const { pokemones } = toRefs(state);

    const cargarPokemones = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
      const data = await res.json();
      //console.log(data.results);

      data.results.forEach((element, id) => {
        const pokemon = {
          ...element,
          id: id + 1,
        };
        pokemones.value.push(pokemon);
      });
    };

    cargarPokemones();

    /*fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results);

        data.results.forEach((element, id) => {
          const pokemon = {
            ...element,
            id: id + 1,
          };
          pokemones.value.push(pokemon);
        });
      });*/

    return { pokemones };
  },
};
</script>

<style>
</style>