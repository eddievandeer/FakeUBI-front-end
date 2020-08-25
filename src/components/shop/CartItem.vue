<template>
      <div class="game-item">
            <img :src="item.game_pic" alt="加载失败!">
            <div class="game-item-block">
                  <b>{{ item.game_name }}</b>
                  <p>添加时间：{{ item.add_time }}</p>
                  <div class="buttons">
                        <button class="btn btn-success" @click="doPurchase(item.game_id)">购买</button>
                        <button class="btn btn-danger" @click="outofCart(item.game_id)">移出购物车</button>
                  </div>
            </div>
      </div>
</template>

<script>
      export default {
            name: 'cartItem',
            props: ["item"],

            methods: {
                  async outofCart(game_id) {
                        var a = confirm("确认移出");
                        if (a) {
                              let response = await this.$http.get("/cart/outofCart", {
                                    params: {
                                          game_id: game_id
                                    }
                              })
                              alert(response.data)
                              location.reload()
                        }
                  },
                  async doPurchase(game_id) {
                        var a = confirm("确认购买");
                        if (a) {
                              let response = await this.$http.get("/warehouse/doPurchase", {
                                    params: {
                                          game_id: game_id
                                    }
                              })
                              alert(response.data)
                              location.reload()
                        }
                  }
            },
      }
</script>

<style lang="scss" scoped>
      .game-item {
            width: 100%;
            height: 158px;
            margin-right: 20px;
            margin-bottom: 30px;
            border: 2px solid #ffffff;
            border-radius: 5px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            display: flex;
            justify-content: center;
            align-content: center;

            >img {
                  width: 30%;
            }
      }

      .game-item-block {
            width: 70%;
            height: 155px;
            padding: 8px 20px 0 20px;
            text-align: left;
            background-color: white;

            >b {
                  font-size: 20px;
            }

            .buttons {
                  width: 95%;
                  margin-top: 40px;
                  display: flex;
                  justify-content: flex-end;

                  button {
                        margin: 0 5px;
                  }
            }
      }

      @media (max-width: 768px) {
            .game-item {
                  height: auto;
                  flex-direction: column;

                  >img {
                        height: auto;
                        width: 100%;
                  }
            }

            .game-item-block {
                  width: 100%;
                  height: auto;

                  .buttons {
                        width: 100%;
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-around;

                        button {
                              width: 42%;
                              height: 50px;
                              margin: 0 5px;
                        }
                  }
            }

            .buttons {
                  position: relative;
                  top: 0;
                  left: 0;
                  padding: 0 0 10px 0;
            }
      }
</style>