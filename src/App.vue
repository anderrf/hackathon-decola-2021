<template>
  <v-app>
    <v-main>
      <router-view/>
      <BarraSelecao/>
    </v-main>
  </v-app>
</template>

<script>
  import BarraSelecao from './components/shared/BarraSelecao'
  export default {
    name: 'App',
    components: {
      BarraSelecao
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
