<template>
  <div class="container">
    <input class="form-control mt-3" type="text" placeholder="Buscar.." aria-label="Search" v-model.trim="buscar" @keyup="buscarPokemones" />

    <div class="mt-3 tracking-in-contract">
      <ul>
        <li v-for="pokemon in pokemonesFiltrados" :key="pokemon.id">
          <h4>
            <router-link :to="`/detalles/${pokemon.id}`">{{ pokemon.name }}</router-link>
          </h4>
        </li>
      </ul>
    </div>

    <button class="button" v-show="showButton" @click="scrollToTop">
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const pokemones = ref([]);
const pokemonesFiltrados = ref([]);
const buscar = ref("");
const pokeApi = "https://pokeapi.co/api/v2/pokemon";
const showButton = ref(false);

const cargarPokemones = async () => {
  const res = await fetch(`${pokeApi}?limit=150`);
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
  pokemonesFiltrados.value = pokemones.value.filter((elem) =>
    elem.name.includes(buscar.value.toLowerCase())
  );
};

//boton para subir al inicio de la pagina
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
  position: relative;
}
a:hover {
  color: #fff; /* color al pasar el cursor sobre el enlace */
}
a::before {
  background-color: #fff; /* color de la línea */
  bottom: 0;
  content: '';
  height: 1px;
  left: 0;
  position: absolute;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  width: 100%;
}
a:hover::before {
  transform: scaleX(1);
  visibility: visible;
}

.button {
  background-color: #232526;
  border-radius: 5px;
  border: none;
  bottom: 10px;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  position: fixed;
  right: 10px;
  transition: opacity 0.3s;
}
.button.hidden {
  opacity: 0;
}

.tracking-in-contract {
	animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
@keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
</style>
