<template>
  <div class="mt-3">
    <ul>
      <li v-for="pokemon in pokemones" :key="pokemon.id">
        <h5><router-link :to="`/detalles/${pokemon.id}`">{{ pokemon.name }}</router-link> - {{ pokemon.id }}</h5>
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
      //console.log(data);

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
a {
  color: black;
  text-decoration: none;
}
</style>