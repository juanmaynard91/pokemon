<template>
  <!--<router-link to="/">Home</router-link>-->

  <div v-if="pokemon">
    <h1>{{ pokemon.name }}</h1>

    {{ estadisticas }}
    {{ tipos }}
    <img :src="pokemon.sprites.front_default" :alt="` el nombre del pokemon es ${pokemon.name}`" loading="lazy" />
  </div>

  <div v-else>
    <h1>No hay datos</h1>
  </div>

  <GraficosBarras/>
</template>

<script setup>
import GraficosBarras from "../components/GraficoBarras.vue";
import { useRoute } from "vue-router";
import { reactive, toRefs, ref, computed } from "vue";

//const pokemon = ref(null);

const state = reactive({
  pokemon: null,
  estadisticas: computed(() => mostrarEstadisticas()),
  tipos: computed(() => mostrarTipos()),
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

const { pokemon, tipos, estadisticas } = toRefs(state);

/*fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
  .then((res) => res.json()) //lo transforma a objeto
  .then((data) => {
    state.pokemon = data;
    //console.log(data);
  });*/

const detallePokemon = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${route.params.id}`
  );
  const data = await res.json();
  state.pokemon = data;
  console.log(data);
};

detallePokemon();
</script>

<style>
img {
  object-fit: contain;
  filter: drop-shadow(0 0 0.2rem white);
}
</style>