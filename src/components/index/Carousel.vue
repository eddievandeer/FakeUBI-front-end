<template>
      <div id="home-games" class="carousel_images">
            <div id="demo" class="carousel slide" data-ride="carousel">
                  <!-- 指示符 -->
                  <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                  </ul>
                  <!-- 轮播图片 -->
                  <div class="carousel-inner">
                        <div class="carousel-item active">
                              <div class="item">
                                    <picture>
                                          <source srcset="https://cdn.hommk.com/pcgame/ubi2015/img/u2019/acv_mobile.jpg"
                                                media="(max-width: 768px)">
                                          <img srcset="https://cdn.hommk.com/pcgame/ubi2015/img/u2019/acv_pc.jpg">
                                    </picture>
                                    <div class="gamebreif" style="display: block;">
                                          <p class="bh1" style="color:#3dbaa6">刺客信条：英灵殿</p>
                                          <p class="bh2">踏上荣耀之路，成为维京传奇</p>
                                          <p class="bh3">2020年底推出</p>
                                    </div>
                                    <div class="buttons">
                                          <button class="gocart" @click="addtoCart(28)">加入购物车</button>
                                          <router-link to="/detail/28">
                                                <button class="gostorek">了解更多</button>
                                          </router-link>
                                    </div>
                              </div>
                        </div>
                        <div class="carousel-item">
                              <div class="item">
                                    <picture>
                                          <source
                                                srcset="https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/GRB_ep2_mobile.jpg"
                                                media="(max-width: 768px)">
                                          <img
                                                srcset="https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/GRB_ep2_pc.jpg">
                                    </picture>
                                    <div class="gamebreif" style="display: block;">
                                          <p class="bh1" style="color:#8a8e46">幽灵行动：断点</p>
                                          <p class="bh2">最大规模更新，第二章3月25日上线</p>
                                          <p class="bh3">全新的“幽灵体验”以及多项新增功能</p>
                                    </div>
                                    <div class="buttons">
                                          <button class="gocart" @click="addtoCart(27)">加入购物车</button>
                                          <router-link to="/detail/27">
                                                <button class="gostorek">了解更多</button>
                                          </router-link>
                                    </div>
                              </div>
                        </div>
                        <div class="carousel-item">
                              <div class="item">
                                    <picture>
                                          <source
                                                srcset="https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/ANNO1800_s2_mobile.jpg"
                                                media="(max-width: 768px)">
                                          <img
                                                srcset="https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/ANNO1800_s2_pc.jpg">
                                    </picture>
                                    <div class="gamebreif" style="display: block;">
                                          <p class="bh1" style="color:#c30000">纪元1800</p>
                                          <p class="bh2">第二季度公布 铸就权力之座</p>
                                          <p class="bh3">包含"权力之座","丰收之光","群狮之地"三个扩展包</p>
                                    </div>
                                    <div class="buttons">
                                          <button class="gocart" @click="addtoCart(25)">加入购物车</button>
                                          <router-link to="/detail/20">
                                                <button class="gostorek">了解更多</button>
                                          </router-link>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <!-- 左右切换按钮 -->
                  <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                  </a>
            </div>
      </div>
</template>

<script>
      import 'bootstrap/dist/css/bootstrap.min.css'
      import 'bootstrap/dist/js/bootstrap.min.js'
      export default {
            name: 'fubiCarousel',
            methods: {
                  async addtoCart() {
                        if (window.sessionStorage.getItem('token')) {
                              let a = confirm("确认添加");
                              if (a) {
                                    let response = await this.$http.get("/cart/addtoCart", {
                                          params: {
                                                game_id: this.game_id
                                          }
                                    })
                                    alert(response.data)
                              }
                        } else {
                              alert('请先登录！')
                              this.$router.push('/login')
                        }
                  },
            }
      }
</script>

<style lang="scss" scoped>
      .item>img {
            margin: 0px auto;
            width: 100%;
      }

      .item>picture>img,
      .item>picture>source {
            margin: 0px auto;
            width: 100%;
      }

      .gamebreif {
            position: absolute;
            width: 100%;
            top: 8vw;
            display: none;

            p {
                  text-align: center;
                  margin: 0;
                  color: white;
                  line-height: 1.2;
                  -webkit-font-smoothing: antialiased;
                  text-shadow: 0 4px 18px rgba(0, 0, 0, .6);

                  &.bh1 {
                        font-size: 2.6vw;
                        font-weight: bold;
                  }

                  &.bh2 {
                        font-size: 5.6vw;
                        font-weight: bold;
                        line-height: 1.5;
                  }

                  &.bh3 {
                        font-size: 1.52vw;
                        padding: 0 10%;
                  }
            }
      }

      .buttons {
            position: absolute;
            width: 100%;
            top: 65%;
            left: 0;
            text-align: center;

            button {
                  outline: none;
            }
      }

      .gocart {
            width: 180px;
            height: 50px;
            background: rgb(55, 213, 94);
            display: inline-block;
            color: #fff;
            font-size: 18px;
            margin: 0px 5px;
            border-radius: 25px;
            border: 1px solid transparent;

            &:focus {
                  border: 1px solid white;
            }
      }

      .gostorek {
            width: 180px;
            height: 50px;
            display: inline-block;
            background: rgba(0, 0, 0, 0.3);
            color: #fff;
            font-size: 18px;
            margin: 0px 5px;
            border-radius: 25px;
            border: 1px solid #fff;
      }

      @media(max-width: 768px) {
            .gamebreif p {
                  &.bh1 {
                        font-size: 8vw;
                        font-weight: bold;
                  }

                  &.bh2 {
                        font-size: 10vw;
                        padding: 0 5%;
                        line-height: 1.5;
                  }

                  &.bh3 {
                        font-size: 5vw;
                        padding: 0 15%;
                  }
            }

            .gocart {
                  margin-bottom: 10px;
            }
      }
</style>