<template>
  <v-app>
    <v-main>
      <barraInicial />
      <menuJogos />
      <router-view />
      <BarraSelecao />
    </v-main>
  </v-app>
</template>

<script>
import barraInicial from "./components/shared/barraInicial";
import BarraSelecao from "./components/shared/BarraSelecao";
//import menuAnimes from "./components/menuAnimes.vue";
import menuJogos from "./components/menuJogos.vue"

export default {
  name: "App",
  components: {
    barraInicial,
    BarraSelecao,
    //menuAnimes,
    menuJogos
  },
};
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }
</style>
