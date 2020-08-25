<template>
      <div class="game-item">
            <img :src="item.game_pic" alt="加载失败!">
            <div class="game-item-block">
                  <b>{{ item.game_name }}</b>
                  <p>购买时间：{{ item.purchase_time }}</p>
                  <button class="btn btn-link" @click="doRefund(item.game_id)">申请退款</button>
            </div>
      </div>
</template>


<script>
      export default {
            name: 'wareItem',
            props: ["item"],
            methods: {
                  async doRefund(game_id) {
                        var a = confirm("确认申请退款？");
                        if (a) {
                              let response = await this.$http.get("/warehouse/refund", {
                                    params: {
                                          game_id: game_id
                                    }
                              })
                              alert(response.data);
                              location.reload();
                        }
                  }
            }
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

            .btn-link {
                  width: 95%;
                  margin-top: 40px;
                  color: red;
                  display: flex;
                  justify-content: flex-end;

                  &:focus,
                  &:hover {
                        text-decoration: none;
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

                  .btn-link {
                        width: 100%;
                        font-size: 18px;
                        margin-top: 0;
                        margin-bottom: 10px;
                        display: flex;
                        justify-content: center;
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