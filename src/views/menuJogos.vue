<template>
  <div class="menuJogos">
    <div v-for="item of jogos" :key="item.id" class="content-wrapper" @click="openDrawer(item)">
      <div class="circular"><img :src="item.photo" :alt="item.name" /></div>
      <p>{{ item.name }}</p>
    </div>
    <v-navigation-drawer v-model="drawer" absolute temporary class="detalhe-lateral" color="#F4F4F4">
      <v-list dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <h3>{{game.name}}</h3>
          </v-list-item>
          <v-list-item>
            <img :src="game.photo" :alt="game.name" class="game-detalhe">
          </v-list-item>
          <v-list-item>
            <ul id="lista-plataforma"></ul>
          </v-list-item>
          <v-list-item>
            <p>Categoria: {{game.genre}}</p>
          </v-list-item>
          <v-list-item>
            <p>Lançamento: {{game.year}}</p>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <BotaoCompartilhar/>
    </v-navigation-drawer>
  </div>
</template>

<script>
import BotaoCompartilhar from '../components/shared/BotaoCompartilhar'
export default {
  name: "menuJogos",

  data() {
    return {
      jogos: [],
      game: {
        platform: []
      },
      drawer: false,
      group: null
    };
  },
  components: {
    BotaoCompartilhar
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json")
      .then((conteudo) => conteudo.json())
      .then((json) => {
        this.jogos = json;
      });
  },
  methods: {
    openDrawer(item){
      this.drawer = true;
      this.game = item;
      let listaPlat = document.getElementById('lista-plataforma');
      let plats = "";
      for(let plat of this.game.platform){
        plats += `<li>${plat}</li>`;
      }
      listaPlat.innerHTML = plats;
    }
  }
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

.detalhe-lateral{
  position: fixed;
}

.game-detalhe{
  max-height: 20vh;
  max-width: 80%;
  margin: 10px auto;
}

.game-descricao{
  text-align: justify;
}

</style>
