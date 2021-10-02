<template>
    <div class="botao-compartilhar">
        <v-btn icon color="#FF7315" @click="copy()">
            <v-icon>mdi-share</v-icon>
        </v-btn>
        <p><small v-if="!shared">Compartilhe amizade</small><small v-else>Envie para seus amigos!</small></p>
    </div>
</template>
<script>
    export default {
        name: 'BotaoCompartilhar',
        data(){
            return{
                shared: false
            }
        },
        methods: {
            copy(){
                navigator.clipboard.writeText(window.location.href);
                this.shared = true;
                setTimeout(() => {this.shared = false}, 2000);
            }
        }
    }
</script>
<style scoped>
    .botao-compartilhar{
        display: flex;
        flex-direction: column;
        align-content: center;
        position: fixed;
        bottom: 1px;
        left: 4px;
    }
</style>