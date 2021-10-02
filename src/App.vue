<template>
  <v-app>
    <v-main>
      <barraInicial/>
      <SobreDuoflix/>
      <router-view/>
      <BarraSelecao/>
    </v-main>
  </v-app>
</template>

<script>
  import barraInicial from './components/shared/barraInicial';
  import BarraSelecao from './components/shared/BarraSelecao';
  import SobreDuoflix from './components/shared/SobreDuoflix';

  export default {
    name: 'App',
    components: {
      barraInicial,
      BarraSelecao,
      SobreDuoflix
    }
  }
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
