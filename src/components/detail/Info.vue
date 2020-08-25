<template>
      <div class="game-cover" v-cloak>
            <img :src="require(`../../assets/img/${game_id}.jpg`)" alt="">
            <div class="pic">
                  <img :src="game_detail.game_pic" class="img-thumbnail" alt="">
            </div>
            <h1>{{ game_detail.game_name }}</h1>
            <h3>标准版</h3>
            <p>发售时间：{{ game_detail.release_time }}</p>
            <div class="sell">
                  <div class="purchase" align="center">
                        <span>¥{{ game_detail.price }}.00</span>
                        <div class="buttons">
                              <button type="button" class="addcart" @click="addtoCart()">加入购物车</button>
                              <button type="button" class="buy" v-if="!warehouseExist"
                                    @click="doPurchase()">立即购买</button>
                              <button type="button" class="buyed" v-else>已购买</button>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
      export default {
            name: 'gameInfo',
            props: ['game_id'],
            data() {
                  return {
                        user_id: -1,
                        cartExist: false,
                        warehouseExist: false,
                        game_detail: {}
                  }
            },
            mounted() {
                  this.ifExist()
                  this.getDetail()
            },
            methods: {
                  async getDetail() {
                        try {
                              let response = await this.$http.get("/game/getDetail", {
                                    params: {
                                          game_id: this.game_id
                                    }
                              })
                              this.game_detail = response.data;
                        } catch (err) {
                              console.error(err);
                              alert('加载失败！请检查当前网络状态！')
                        }
                  },
                  async addtoCart() {
                        let a = confirm("确认添加");
                        if (a) {
                              let response = await this.$http.get("/cart/addtoCart", {
                                    params: {
                                          game_id: this.game_id
                                    }
                              })
                              alert(response.data);
                        }
                  },
                  async doPurchase() {
                        let a = confirm("确认购买？");
                        if (a) {
                              let response = await this.$http.get("/warehouse/doPurchase", {
                                    params: {
                                          game_id: this.game_id
                                    }
                              })
                              alert(response.data);
                              location.reload();
                        }
                  },
                  async ifExist() {
                        let response = await this.$http.get("/warehouse/ifinWarehouse", {
                              params: {
                                    game_id: this.game_id
                              }
                        })
                        this.warehouseExist = (response.data == "exist");
                  }
            }
      }
</script>

<style lang="scss" scoped>
      .game-cover {
            width: 100%;
            height: 650px;
            color: white;
      }

      .pic {
            width: 360px;
            height: 207px;
            position: absolute;
            top: 386px;
            left: 120px;
      }

      .game-cover>img {
            -webkit-filter: brightness(80%);
            filter: brightness(80%);
            width: 100%;
      }

      .game-cover>h1 {
            font-size: 50px;
            position: absolute;
            top: 425px;
            left: 500px;
      }

      .game-cover>h3 {
            position: absolute;
            top: 500px;
            left: 500px;
      }

      .game-cover>p {
            position: absolute;
            top: 550px;
            left: 500px;
      }

      .sell {
            width: 88%;
            height: auto;
            padding: 10px;
            display: flex;
            justify-content: flex-end;
            align-content: center;
      }

      .purchase {
            height: 150px;
            width: 300px;
            background-color: white;
            // position: absolute;
            // top: 500px;
            // left: 1050px;
            padding: 20px 10px 0 10px;
            border-radius: 8px;
            border: 1px solid transparent;
      }

      .purchase>span {
            font-family: Ubisoft Sans Regular, Arial, sans-serif;
            font-size: 38px;
            color: #ff8300;
      }

      .buttons {
            margin-top: 10px;
            display: flex;
      }

      .buttons>button {
            width: 150px;
            height: 50px;
            outline: none;
      }

      .addcart {
            width: 110px;
            height: 40px;
            display: inline-block;
            background: rgb(255, 172, 76);
            color: #fff;
            font-size: 16px;
            margin: 0px auto;
            border-radius: 25px;
            border: 1px solid transparent;
      }

      .buy {
            width: 110px;
            height: 40px;
            background: rgb(55, 213, 94);
            display: inline-block;
            color: #fff;
            font-size: 16px;
            margin: 0px auto;
            border-radius: 25px;
            border: 1px solid transparent;
      }

      .buyed {
            width: 110px;
            height: 40px;
            background: rgb(182, 186, 186);
            display: inline-block;
            color: #fff;
            font-size: 16px;
            margin: 0px auto;
            border-radius: 25px;
            border: 1px solid transparent;
      }


      @media (max-width: 768px) {
            .game-cover {
                  height: 420px;
            }

            .game-cover>h1 {
                  font-size: 30px;
                  top: 160px;
                  left: 0px;
            }

            .game-cover>h3 {
                  position: absolute;
                  top: 205px;
                  left: 0px;
            }

            .game-cover>p {
                  position: absolute;
                  top: 240px;
                  left: 0px;
            }

            .sell {
                  padding: 0;
            }

            .purchase {
                  height: 150px;
                  width: 98%;
                  position: absolute;
                  top: 280px;
                  left: 3px;
            }

            .pic {
                  display: none;
            }
      }
</style>