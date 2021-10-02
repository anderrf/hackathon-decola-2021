<template>
  <div class="menuJogos">
    <div v-for="item of jogos" :key="item.id" class="content-wrapper">
      <div class="circular"><img :src="item.photo" :alt="item.name" /></div>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuJogos",

  data() {
    return {
      jogos: [],
    };
  },

  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json")
      .then((conteudo) => conteudo.json())
      .then((json) => {
        this.jogos = json;
      });
  },
};
</script>

<style scoped>

template{
    margin-bottom: 10px;
}

.menuJogos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}

.menuJogos > * {
  flex: 1 2 10px;
}

.content-wrapper {
  align-content: center;
  text-align: center;
  margin: 15px;
  cursor: pointer;
}

.content-wrapper:hover {
  text-decoration: underline;
}


.content-wrapper .circular {
  display: inline-block;
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
}

.content-wrapper .circular img {
  width: auto;
  height: 100%;
  margin-left: -90px;
}

.content-wrapper p{
    font-family: Roboto;
    font-size: 15px;
    font-weight: 700;
}

</style>
