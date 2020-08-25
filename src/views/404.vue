<template>
      <div class="mainbody">
            <div class="container">
                  <h1>404</h1>
                  <p>您所访问的页面不存在！</p>
                  <router-link to="/home">
                        <button>返回首页</button>
                  </router-link>
            </div>
      </div>
</template>

<script>
      export default {
            name: '404'
      }
</script>

<style lang="scss" scoped>
      .main-body {
            widows: 100%;
            height: 100vh;
      }

      h1 {
            font-size: 30px;
            ;
            color: #c2c2c2;
      }
</style>