<template>
  <v-app>
    <v-main>
      <barraInicial/>
      <router-view/>
      <BarraSelecao/>
    </v-main>
  </v-app>
</template>

<script>
  import barraInicial from './components/shared/barraInicial';
  import BarraSelecao from './components/shared/BarraSelecao';
  export default {
    name: 'App',
    components: {
      barraInicial,
      BarraSelecao
    }
  }
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
