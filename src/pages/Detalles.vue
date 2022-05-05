<template>
  <!--<router-link to="/">Home</router-link>-->

  <div class="container">
    <div v-if="pokemon">
      <h1 class="titulo">{{ pokemon.name }}</h1>

      <!--{{ stats }}-->
      <!--{{ types }}-->

      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" loading="lazy" />

      <div  v-for="type in types" :key="type">
        <h5>{{ type }}</h5>
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

//const pokemon = ref(null);

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

/*fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
  .then((res) => res.json()) //lo transforma a objeto
  .then((data) => {
    state.pokemon = data;
    //console.log(data);
  });*/

const detallePokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
  const data = await res.json();
  state.pokemon = data;
  //console.log(data);
};

detallePokemon();
</script>

<style>
.titulo {
  margin-top: 1rem;
}

img {
  height: 30rem;
  object-fit: contain;
  filter: drop-shadow(0 0 1rem black);
}

@media screen and (max-width: 375px) {
  img {
    height: 10rem;
    object-fit: contain;
  }
}
</style>