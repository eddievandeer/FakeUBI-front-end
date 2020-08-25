<template>
      <div class="header">
            <div class="fubi-navbar-header">
                  <h2>FakeUBI</h2>
            </div>
            <div class="fubi-menu">
                  <div class="dropdown">
                        <button type="button" class="menu-btn dropdown-toggle" data-toggle="dropdown">
                              <span>菜单</span>
                        </button>
                        <div class="dropdown-menu">
                              <router-link class="dropdown-item" to="/home">首页</router-link>
                              <router-link class="dropdown-item" to="/shop">商城</router-link>
                              <router-link class="dropdown-item" to="/cart">购物车</router-link>
                              <router-link class="dropdown-item" to="/warehouse">仓库</router-link>
                              <router-link class="dropdown-item" to="/login" v-if="!if_login">点此登录</router-link>
                              <a class="dropdown-item" href="javascript:;" title="点击注销" v-else @click="logout()">
                                    当前用户：{{ now_user }}
                              </a>
                              <a class="dropdown-item" href="javascript:;" data-toggle="modal" data-target="#myModal"
                                    v-if="if_login">
                                    查看账户信息
                              </a>
                        </div>
                  </div>
            </div>
            <div class="fubi-navbar">
                  <ul class="fubi-nav">
                        <li>
                              <router-link to="/home">首页</router-link>
                        </li>
                        <li>
                              <router-link to="/shop">商城</router-link>
                        </li>
                        <li>
                              <router-link to="/cart">购物车</router-link>
                        </li>
                        <li>
                              <router-link to="/warehouse">仓库</router-link>
                        </li>
                  </ul>
                  <div class="user">
                        <span class="svg-wrapper" style="width:40px; height:40px;">
                              <a href="javascript:;" data-toggle="modal" data-target="#myModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="100%"
                                          viewBox="0 0 500 500">
                                          <path d="M250.008 0C111.92 0 0 111.933 0 250c0 68.4 27.518 130.333 72.036 175.467l-.017.133h.117A249.225 249.217 0 0 0 250.008 500C388.08 500 500 388.067 500 250S388.08 0 250.008 0m0 21.667C375.93 21.667 478.35 124.1 478.35 250c0 57.167-21.267 109.35-56.102 149.433C393.18 335.6 326.594 294.55 251.058 294.55c-76.502 0-143.888 42.083-171.905 106.417C43.5 360.667 21.667 307.9 21.667 250c0-125.9 102.437-228.333 228.341-228.333M95.437 417.583a44.168 44.167 0 0 1 2.4-5.533c24.217-57.3 85.802-95.817 153.205-95.817 67.402 0 128.97 38.517 152.938 95.1.05.1.983 2.8 1.633 5.284-40.8 38.15-95.453 61.733-155.605 61.733-59.652 0-113.853-23.183-154.571-60.767M250.008 274.05a95.303 95.3 0 0 1-95.186-95.183 95.32 95.317 0 0 1 95.186-95.184 95.303 95.3 0 0 1 95.17 95.184 95.303 95.3 0 0 1-95.17 95.183m0-168.683a73.586 73.583 0 0 0-73.502 73.5 73.586 73.583 0 0 0 73.502 73.5 73.586 73.583 0 0 0 73.503-73.5 73.602 73.6 0 0 0-73.503-73.5"
                                                fill="#0089a3"></path>
                                    </svg>
                              </a>
                        </span>
                        <router-link to="/login" v-if="!if_login">点此登录</router-link>
                        <a href="javascript:;" title="点击注销" v-else @click="logout()">
                              当前用户：{{ now_user }}
                        </a>
                  </div>
                  <div class="fakeubi">
                        <a href="javascript:alert('暂未推出,敬请期待!')">
                              <h4>下载APP</h4>
                        </a>
                  </div>
            </div>
            <!-- 模态框 -->
            <div class="modal fade" id="myModal" data-backdrop="static" data-keyboard="false" tabindex="-1"
                  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                              <div class="modal-header">
                                    <h4 class="modal-title">账号信息</h4> <button type="button" data-dismiss="modal"
                                          class="close">×</button>
                              </div>
                              <div class="modal-body">
                                    <div class="user-detail">
                                          <div style="width: 49%;float: left;padding: 0 0 0 60px;">
                                                <p>用户名：{{ now_user }}</p>
                                                <p>邮箱地址：{{ email }}</p>
                                          </div>
                                          <div style="width: 49%;float: left;padding: 0 0 0 100px;">
                                                <p>电话号码：{{ tel }}</p>
                                                <p>拥有游戏数：{{ quantity }}</p>
                                          </div>
                                          <div class="funds" align="center">
                                                <span>账户余额：￥{{ funds }}</span>
                                                <router-link to="/recharge">
                                                      <button class="btn btn-warning btn-sm"
                                                            data-dismiss="modal">充值</button>
                                                </router-link>
                                          </div>
                                    </div>
                              </div>
                              <div class="modal-footer"><button type="button" data-dismiss="modal"
                                          class="btn btn-secondary">关闭</button></div>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
      export default {
            name: 'fubiHeader',
            data() {
                  return {
                        if_login: false,
                        now_user: "",
                        tel: "",
                        email: "",
                        quantity: 0,
                        funds: 0
                  }
            },
            mounted() {
                  this.getUsername()
            },
            methods: {
                  async getUsername() {
                        try {
                              let result = await this.$http.get("/user/getUserDetail")

                              if (result.data == "" || result.data == null) {
                                    this.if_login = false
                              } else {
                                    this.if_login = true
                                    this.now_user = result.data.user.username
                                    this.tel = result.data.user.tel
                                    this.email = result.data.user.email
                                    this.quantity = result.data.quantity
                                    this.funds = result.data.user.funds
                              }
                        } catch (err) {
                              console.log(err);
                        }

                  },
                  logout: function () {
                        let a = confirm("确认注销？")
                        if (a) {
                              this.$http.get("/user/logout")
                              this.if_login = false
                              this.now_user = ""
                              window.sessionStorage.clear()
                              this.$router.push('/login')
                        }
                  }
            }
      }
</script>

<style lang="scss" scoped>

</style>