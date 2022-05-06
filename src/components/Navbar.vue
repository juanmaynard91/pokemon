<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <h4><router-link class="nav-link" aria-current="page" to="/">PokeDex</router-link></h4>
    <!--<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex">
         <input class="form-control me-2" type="text" placeholder="Ingresar nombre..." aria-label="Search" v-model.trim="input" />
         <button class="btn btn-primary" type="button" @click="mandarEmit">Buscar</button> 
      </form>
    </div>-->
  </div>
</nav>
</template>

<script>

</script>

<style>
/*@media screen and (min-width: 375px) {
  .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
    margin-top: 1rem;
  }
}*/

.nav-link{
  padding: 1rem 0 0 0;
}
</style>