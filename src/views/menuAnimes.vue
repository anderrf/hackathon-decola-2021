<template>
  <div class="menuAnimes">
    <div v-for="item of animes" :key="item.id" class="content-wrapper" @click="openDrawer(item)">
      <div class="circular"><img :src="item.photo" :alt="item.name" /></div>
      <p>{{ item.name }}</p>
    </div>
    <v-navigation-drawer v-model="drawer" absolute temporary class="detalhe-lateral" color="#F4F4F4">
      <v-list dense>
        <v-list-item-group v-model="group">
            <v-list-item>
              <h3>{{anime.name}}</h3>
            </v-list-item>
            <v-list-item>
              <img :src="anime.photo" :alt="anime.name" class="anime-detalhe">
            </v-list-item>
            <v-list-item>
              <p class="anime-descricao">{{anime.description}}</p>
            </v-list-item>
            <v-list-item>
              <p>{{anime.genre}}</p>
            </v-list-item>
            <v-list-item>
              <p>{{anime.status}}</p>
            </v-list-item>
        </v-list-item-group>
      </v-list>
      <BotaoCompartilhar/>
    </v-navigation-drawer>
  </div>
</template>

<script>
import BotaoCompartilhar from '../components/shared/BotaoCompartilhar';
export default {
  name: 'menuAnimes',
  data() {
    return {
      animes: [],
      anime: {},
      drawer: false,
      group: null
    };
  },
  components: {
    BotaoCompartilhar
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
      .then((conteudo) => conteudo.json())
      .then((json) => {
        this.animes = json;
      });
  },
  methods: {
    openDrawer(item){
      this.drawer = true;
      this.anime = item;
    }
  }
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

.detalhe-lateral{
  position: fixed;
}

.anime-detalhe{
  max-height: 20vh;
  max-width: 80%;
  margin: 10px auto;
}

.anime-descricao{
  text-align: justify;
}

</style>
