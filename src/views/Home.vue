<template>
  <div class="main-body">
    <fubi-carousel></fubi-carousel>
    <div class="activity">
      <br>
      <div class="fubi-title">
        <h2>最新活动</h2>
      </div>
      <ul class="activity-item">
        <li>
          <a href="https://www.ubisoft.com.cn/events/po2020" target="_blank">
            <img src="//cdn.hommk.com/pcgame/upload/attachments/uploads/000/006/214/original_1587699985.jpg?1587699985"
              alt="源计划2020">
          </a>
        </li>
        <li>
          <a href="http://www.ubisoft.com.cn/clicks/58" target="_blank">
            <img src="//cdn.hommk.com/pcgame/upload/attachments/uploads/000/006/202/original_1585718123.jpg?1585718123"
              alt="在线扭蛋机">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import fubiCarousel from '@/components/index/Carousel.vue'

  export default {
    name: 'Home',
    components: {
      fubiCarousel
    }
  }
</script>

<style lang="scss" scoped>
  .activity {
    height: 500px;
    background-color: #121212;
  }

  .activity-item {
    padding: 0 0 0 1%;
  }

  .activity-item>li {
    width: 48%;
    display: inline-block;
    margin: 0 0.5%;
  }

  .activity-item>li>a>img {
    width: 100%;
  }

  .fubi-title {
    color: white;
    width: 100%;
    height: 80px;
    line-height: 150px;
    text-align: center;
    position: relative;
    padding: 20px 0 0 0;
  }

  .fubi-title h2:before {
    content: " ";
    display: block;
    width: 10px;
    height: 40px;
    position: absolute;
    left: 680px;
    top: 20px;
    background-color: #666;
    transform: skew(-15deg) translateZ(0);
  }

  .fubi-title h2:after {
    content: " ";
    display: block;
    width: 10px;
    height: 40px;
    position: absolute;
    right: 680px;
    top: 20px;
    background-color: #666;
    transform: skew(-15deg) translateZ(0);
  }

  @media (max-width: 768px) {
    .fubi-title h2::before {
      position: absolute;
      left: 26%;
      top: 20px;
    }

    .fubi-title h2::after {
      position: absolute;
      right: 26%;
      top: 20px;
    }

    .activity-item>li {
      width: 99%;
      display: inline-block;
      padding: 0 0 10px 0;
      margin: 0 0.5%;
    }
  }
</style>