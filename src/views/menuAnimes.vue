<template>
  <div class="menuAnimes">
    <div v-for="item of animes" :key="item.id" class="content-wrapper">
      <div class="circular"><img :src="item.photo" :alt="item.name" /></div>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuAnimes',
  data() {
    return {
      animes: [],
    };
  },

  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
      .then((conteudo) => conteudo.json())
      .then((json) => {
        this.animes = json;
      });
  },
};
</script>

<style scoped>

template{
    margin-bottom: 20px;
}

.menuAnimes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.menuAnimes > * {
  flex: 1px;
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
  margin-left: -52px;
}

.content-wrapper p{
    font-family: Roboto;
    font-size: 15px;
    font-weight: 700;
}

</style>
