<template>
      <div class="game-item">
            <div align="left">
                  <router-link :to="{ name: 'Detail', params: { game_id: item.game_id } }">
                        <button class="game-item-button">查看详情</button>
                  </router-link>
                  <img :src="item.game_pic" alt="加载失败!">
                  <div class="game-item-block">
                        <b>{{ item.game_name }}</b>
                        <div class="release_time">发售日期：{{ item.release_time }}</div>
                        <div class="price">￥{{ item.price }}</div>
                  </div>
            </div>
      </div>

</template>

<script>
      export default {
            name: 'gameItem',
            props: ['item']
      }
</script>

<style lang="scss" scoped>
      .game-item {
            display: flex;
            float: left;
            width: 286px;
            height: 242px;
            margin: 15px 10px 15px 10px;
            text-align: center;
            justify-content: center;
            align-items: center;
            position: relative;
            transition: all 0.2s;

            >div {
                  border: 2px solid #ffffff;
                  border-radius: 5px;
                  -webkit-border-radius: 5px;
                  -moz-border-radius: 5px;
                  animation: myfirst 0.8s;
            }

            img {
                  width: 100%;
                  overflow: hidden;
            }

            .game-item-button {
                  width: 150px;
                  height: 40px;
                  padding-left: 18px;
                  padding-right: 18px;
                  border-radius: 25px;
                  border: 1px solid white;
                  color: white;
                  opacity: 0;
                  background: rgba(0, 0, 0, 0.1);
                  position: absolute;
                  transform: translate(65px, 130px);
                  transition: all 0.35s;
            }

            &:hover {
                  transform: translate(0, -10px);

                  img {
                        filter: brightness(75%);
                  }

                  .game-item-button {
                        opacity: 1;
                        z-index: 1;
                        transform: translate(65px, 70px);

                        &:hover {
                              background: rgba(0, 0, 0, 0.35);
                        }

                        &:focus {
                              outline: none;
                        }
                  }
            }
      }

      @keyframes myfirst {
            from {
                  width: 110px;
            }

            to {
                  width: 286px;
            }
      }

      @keyframes mobile {
            from {
                  width: 80px;
            }

            to {
                  width: 100%;
            }
      }

      .game-item-block {
            height: 80px;
            padding: 8px;
            background-color: white;
            overflow: hidden;
      }

      .release_time {
            font-size: 14px;
            color: #4a5059;
      }

      .price {
            width: 120px;
            font-size: 28px;
            color: #ff8300;
            font-family: Ubisoft Sans Regular, Arial, sans-serif;
            position: relative;
            top: -32px;
            left: 185px;
      }

      @media (max-width: 768px) {
            .game-item {
                  width: 100%;
                  height: auto;
                  float: none;
                  margin: 0 0 30px 0;

                  >div {
                        animation: mobile 0.8s;
                  }

                  .game-item-button {
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        z-index: 10;
                        transform: translate(-2px, -2px);

                        &:hover {
                              background: none;
                        }
                  }

                  .game-item-block>b {
                        font-size: 22px;
                  }

                  .price {
                        position: relative;
                        left: 210px;
                  }

                  &:hover {
                        img {
                              filter: none;
                        }

                        .game-item-button {
                              opacity: 0;
                              z-index: 10;
                              transform: translate(-2px, -2px);
                        }
                  }
            }
      }
</style>