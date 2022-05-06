<template>
  <div class="container">
    <input class="form-control mt-3" type="text" placeholder="buscar..." aria-label="Search" v-model.trim="buscar" @keyup="buscarPokemones()" />

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
import { reactive, toRefs, ref } from "vue";

export default {
  setup() {
    /*const state = reactive({
      pokemones: [],
    });*/

    const pokemones = ref([]);
    const pokemonesFiltrados = ref([]);
    const buscar = ref("");
    const pokeApi = "https://pokeapi.co/api/v2/pokemon";
    //const imagenesPokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

    //const { pokemones } = toRefs(state);

    const cargarPokemones = async () => {
      const res = await fetch(`${pokeApi}?limit=900`);
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

    /* const buscadorApi = async () => {
      const res = await fetch(`${pokeApi}/${nombrePokemon.value}`);
      const data = await res.json();
      console.log(data);
    };*/

    const buscarPokemones = () => {
      /*if (nombrePokemon.value === "") {
        console.log("vacio");
      } else {
        console.log(nombrePokemon.value);
        buscadorApi();
      }
      nombrePokemon.value = "";*/
      //return pokemones.value.filter((pokemon)=>pokemon.name.includes(nombrePokemon.value.toLowerCase()))

      pokemonesFiltrados.value = pokemones.value.filter((pokemon) => pokemon.name.includes(buscar.value.toLowerCase()) );
    };

    return { pokemones, buscar, buscarPokemones, pokemonesFiltrados };
  },
};
</script>

<style>
a {
  color: black;
  text-decoration: none;
}

</style>