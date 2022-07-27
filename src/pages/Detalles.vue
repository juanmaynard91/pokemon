<template>
  <div class="container">
    <div v-if="pokemon">
      <h1 class="titulo">{{ pokemon.name }}</h1>

      <img class="imgPokemon" :src="pokemon.sprites.front_default" :alt="pokemon.name" loading="lazy" />

      <div class="tipoPokemon" v-for="type in types" :key="type">
        <h5 :class="type">{{ type }}</h5>
      </div>
    </div>

    <div v-else>
      <h1>No hay datos</h1>
    </div>

    <GraficosBarras :stats="stats" />
  </div>
</template>

<script setup>
import GraficosBarras from "../components/GraficoBarras.vue";
import { useRoute } from "vue-router";
import { reactive, toRefs, ref, computed } from "vue";

const state = reactive({
  pokemon: null,
  stats: computed(() => mostrarEstadisticas()),
  types: computed(() => mostrarTipos()),
});

const mostrarEstadisticas = () => {
  if (state.pokemon) {
    return state.pokemon.stats.map((stat) => stat.base_stat);
  }
};

const mostrarTipos = () => {
  if (state.pokemon) {
    return state.pokemon.types.map((type) => type.type.name);
  }
};

const route = useRoute();

const { pokemon, types, stats } = toRefs(state);

const detallePokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
  const data = await res.json();
  state.pokemon = data;
  //console.log(data);
};

detallePokemon();
</script>

<style>
.titulo {margin-top: 1rem;}.imgPokemon {height: 30rem;object-fit: contain;filter: drop-shadow(0 0 1rem black);}@media screen and (max-width: 375px) {.imgPokemon {height: 10rem;object-fit: contain;}}.tipoPokemon {width: 10rem;margin: auto;}.normal {background-color: #a8a878;}.fire {background-color: #f08030;}.water {background-color: #6890f0;}.grass {background-color: #78c850;}.electric {background-color: #f8d030;}.ice {background-color: #98d8d8;}.fighting {background-color: #bf2f27;}.poison {background-color: #a040a0;}.ground {background-color: #e0c068;}.flying {background-color: #a890f0;}.psychic {background-color: #f85888;}.bug {background-color: #a8b820;}.rock {background-color: #b8a038;}.ghost {background-color: #705898;}.dark {background-color: #705848;}.dragon {background-color: #7038f8;}.steel {background-color: #b8b8d0;}.fairy {background-color: #f0b5bb;}.pokedex-red {background-color: #e5003d;}.pokedex-green {background-color: #40fa69;}.pokedex-blue {background-color: #280daf;}
</style>