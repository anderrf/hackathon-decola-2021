<template>
    <div class="SobreDuoflix">
        <p class="texto"> 
            Em tempos de isolamento, junte-se a nós com muito entretenimento e diversão para compartilhar com quem você ama.
        </p>
        <div class="tracinho">

        </div>
    </div>
</template>

<script>
export default {
    name: 'SobreDuoflix'
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&display=swap');

.texto{
    font-family: Poppins;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    text-align: center;
    color: #232020;
    padding: 10px 5px 0;
}

.tracinho{
    height: 0.5vh;
    background-color: #FF7315;
}

</style>