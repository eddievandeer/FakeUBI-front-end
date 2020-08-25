<template>
  <div class="shop-main">
    <div class="main-header">
      <b>所有游戏</b>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <br>
          <game-item :item="item" :key="item.game_id" v-for="item in game_list" align="center"></game-item>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        game_list: []
      }
    },
    mounted() {
      this.getGameList()
    },
    methods: {
      async getGameList() {
        try {
          let response = await this.$http.get("/game/getAll")
          this.game_list = response.data;
        } catch (err) {
          console.error(err);
          alert('加载失败！请检查当前网络状态！')
        }
      }
    },
    components: {
      gameItem: () => import('@/components/shop/GameItem.vue')
    }
  }
</script>

<style lang="scss" scoped>
  .main-header {
    height: 200px;
    width: 100%;
    color: white;
    background-color: #000000;

    >b {
      font-size: 40px;
      position: absolute;
      top: 150px;
      left: 100px;
    }
  }
</style>