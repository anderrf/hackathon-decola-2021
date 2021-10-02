<template>
    <v-toolbar color="#FF7315" class="barra-selecao">
        <router-link to="/animes">
            <v-btn fab color="#F4F4f4" class="my-3">
                <v-icon color="#232020">mdi-television-classic</v-icon>
            </v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/games">
            <v-btn fab color="#F4F4f4" class="my-3">
                <v-icon color="#232020">mdi-controller-classic-outline</v-icon>
            </v-btn>
        </router-link>
    </v-toolbar>
</template>
<script>
    export default {
        name: 'BarraSelecao'
    }
</script>
<style scoped>
    .my-3 {
        width: 35px;
        height: 35px;
    }
</style>