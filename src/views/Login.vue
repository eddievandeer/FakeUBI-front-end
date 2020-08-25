<template>
      <div class="login-main">
            <div class="container">
                  <div class="do-login" align="center">
                        <div class="welcome">欢迎使用FakeUBI</div>
                        <form id="login">
                              <div class="input-group">
                                    <input type="text" id="username" name="username" class="form-control"
                                          placeholder="请输入用户名" aria-describedby="basic-addon1" />
                              </div>
                              <br />
                              <div class="input-group">
                                    <input type="password" id="password" name="password" class="form-control"
                                          placeholder="请输入密码" aria-describedby="basic-addon2" />
                              </div>
                              <br />
                              <p v-if="isFailed">用户名或密码错误！</p>
                              <br v-else />
                              <div>
                                    <router-link to="/regist">没有账号？免费注册</router-link>
                              </div>
                              <br />
                              <div class="text-center">
                                    <input type="reset" class="btn btn-default" value="         重置         " />
                                    <input type="button" class="btn btn-primary" @click="do_login()"
                                          value="         登录         " />
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
                        isFailed: false
                  }
            },
            methods: {
                  async do_login() {
                        let username = document.querySelector('#username').value
                        let password = document.querySelector('#password').value
                        let params = {
                              username: username,
                              password: password
                        }
                        if (username == null || username == "" || password == null || password == "") {
                              alert("用户名或密码不得为空！")
                              return
                        }
                        try {
                              const result = await this.$http.post('/user/login', params)
                              if (result.status == 200) {
                                    window.sessionStorage.setItem('token', result.data.token)
                                    document.cookie = 'user_id=' + result.data.user_id + '; path=/'
                                    this.$router.push('/home')
                                    window.location.reload()
                              } else {
                                    console.log(result.data.status);
                                    this.isFailed = true
                              }
                        } catch (err) {
                              console.error(err);
                              alert('登录超时！请检查当前网络状态！')
                        }
                  }
            }
      };
</script>

<style lang="scss" scoped>
      .login-main {
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
            height: 600px;
            display: flex;
            justify-content: center;
            align-content: center;
      }

      .do-login {
            position: relative;
            z-index: 1;
            width: 100%;
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

            .do-login {
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