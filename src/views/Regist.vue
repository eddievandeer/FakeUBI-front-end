<template>
      <div class="regist-main">
            <div class="container">
                  <div class="do-regist" align="center">
                        <div class="welcome">注册FakeUBI</div>
                        <form id="regist">
                              <div class="input-group">
                                    <input type="text" id="username" name="username" class="form-control"
                                          placeholder="请输入用户名" aria-describedby="basic-addon1">
                              </div>
                              <br>
                              <div class="input-group">
                                    <input type="password" id="password" name="password" class="form-control"
                                          placeholder="请输入密码" aria-describedby="basic-addon2">
                              </div>
                              <br>
                              <div class="input-group">
                                    <input type="password" id="rewrite" name="rewrite" class="form-control"
                                          placeholder="请重复密码" aria-describedby="basic-addon2">
                              </div>
                              <br>
                              <div class="input-group">
                                    <input type="text" id="tel" name="tel" class="form-control" placeholder="手机号码"
                                          aria-describedby="basic-addon1">
                              </div>
                              <br>
                              <div class="input-group">
                                    <input type="text" id="email" name="email" class="form-control" placeholder="注册邮箱"
                                          aria-describedby="basic-addon1">
                              </div>
                              <p v-if="if_exist"> 用户名或邮箱已被注册！</p>
                              <br v-else>
                              <div>
                                    <router-link to="/login">已账号？点此登录</router-link>
                              </div>
                              <br>
                              <div class="text-center">
                                    <input type="reset" class="btn btn-default" value="         重置         " />
                                    <input type="button" class="btn btn-primary" @click="do_regist()"
                                          value="         注册         " />
                              </div>
                        </form>
                  </div>
            </div>
      </div>
</template>

<script>
      export default {
            data() {
                  return {
                        if_exist: false
                  }
            },
            methods: {
                  async do_regist() {
                        var username = document.querySelector('#username').value
                        var password = document.querySelector('#password').value
                        var rewrite = document.querySelector('#rewrite').value
                        var tel = document.querySelector('#tel').value
                        var email = document.querySelector('#email').value

                        if (username == null || username == "" || password == null || password == "") {
                              alert("用户名或密码不得为空！")
                        } else if (rewrite == null || rewrite == "") {
                              alert("请重复输入密码！")
                        } else if (password.length > 16) {
                              alert("密码长度不能超过16位！")
                        } else if (tel == null || tel == "") {
                              alert("手机号不得为空！")
                        } else if (email == null || email == "") {
                              alert("邮箱不得为空！")
                        } else {
                              if (rewrite != password) {
                                    alert("两次输入的密码不一致！")
                              } else {
                                    this.if_exist = false
                                    try {
                                          const result = await this.$http.post("/user/regist", {
                                                username: username,
                                                password: password,
                                                tel: tel,
                                                email: email
                                          })
                                          this.$router.push('/home')
                                    } catch (err) {
                                          console.error(err);
                                          alert('注册超时！请检查当前网络状态！')
                                    }
                              }
                        }
                  }
            }
      }
</script>

<style lang="scss" scoped>
      .regist-main {
            width: 100%;
            height: 750px;
            background-image: url(../assets/img/Account_back.jpg);
            background-size: cover;
            display: flex;
            justify-content: center;
            align-content: center;
      }

      .container {
            width: 38%;
            height: 650px;
            display: flex;
            justify-content: center;
            align-content: center;
      }

      .do-regist {
            width: 100%;
            z-index: 1;
            border-radius: 5px;
            margin-top: 80px;
            padding: 70px 60px 25px 60px;
            background-color: rgba(16, 16, 16, 0.5);

            a {
                  color: white;
                  text-decoration: none;

                  &:hover {
                        text-decoration: underline;
                  }
            }

            p {
                  width: 200px;
                  font-family: '宋体';
                  font-size: 16px;
                  background-color: #000000;
                  color: #ff3c1a;
            }

            .welcome {
                  font-size: 22px;
                  color: white;
                  padding: 0 0 40px 0;
            }

            .btn {
                  padding: .5rem 1rem;
                  font-size: 1.25rem;
                  line-height: 1.5;
                  border-radius: .3rem;
                  cursor: pointer;
            }

            .btn-default {
                  border: 1px solid white;
                  color: rgb(224, 224, 224);
                  background-color: transparent;
                  margin-right: 20px;

                  &:hover {
                        color: #fff;
                        background-color: rgba($color: #000000, $alpha: .1);
                        border-color: white;
                  }
            }
      }

      @media (max-width: 786px) {
            .container {
                  width: 100%;
            }

            .do-regist {
                  width: 100%;
                  margin-top: 60px;
                  padding: 40px 10px 25px 10px;
            }

            .text-center {
                  span {
                        display: none;
                  }

                  .btn-default {
                        margin-bottom: 10px;
                        margin-right: 0;
                  }
            }
      }
</style>