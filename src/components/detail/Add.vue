<template>
      <div class="addComment">
            <div id="scoremark" class="scoremark scores">
                  <div class="text">评分：</div>
                  <span class="star">
                        <span class="ystar" :style="{ width: score*23.2 + 'px' }"></span>
                        <ul>
                              <li><a href="javascript:void(0)" title="很差" class="one-star" @click="setRate(1)">1</a>
                              </li>
                              <li><a href="javascript:void(0)" title="较差" class="two-stars" @click="setRate(2)">2</a>
                              </li>
                              <li><a href="javascript:void(0)" title="一般" class="three-stars" @click="setRate(3)">3</a>
                              </li>
                              <li><a href="javascript:void(0)" title="较好" class="four-stars" @click="setRate(4)">4</a>
                              </li>
                              <li><a href="javascript:void(0)" title="很好" class="five-stars" @click="setRate(5)">5</a>
                              </li>
                        </ul>
                  </span>
            </div>
            <br>
            <form class="addForm">
                  <textarea name="comment" id="comment" placeholder="请自觉遵守互联网相关政策法规，严禁发布色情、暴力、反动的言论。"></textarea>
                  <button type="button" class="c-add" @click="addComment()">发布评论</button>
            </form>
      </div>
</template>

<script>
      export default {
            name: 'addComment',
            props: ['game_id'],
            data() {
                  return {
                        score: 0.0,
                  }
            },
            methods: {
                  addComment() {
                        let comment = document.querySelector('#comment').value;
                        let score = this.score;
                        if (score == 0.0) {
                              alert("评分不能为0！");
                        } else if (comment == "" || comment == null) {
                              alert("评论内容不能为空！");
                        } else {
                              let a = confirm("确认发布？");
                              if (a) {
                                    this.$http.get("/comment/addComment", {
                                          params: {
                                                game_id: this.game_id,
                                                comment: comment,
                                                score: score
                                          }
                                    })
                                    location.reload();
                                    title
                              }
                        }
                  },
                  setRate(score) {
                        this.score = score;
                  }
            }
      }
</script>

<style lang="scss" scoped>
      .addForm {
            height: 80px;
            margin-top: 15px;
            display: flex;
            justify-content: space-around;
      }

      textarea {
            font-size: 13px;
            display: inline-block;
            box-sizing: border-box;
            background-color: #f4f5f7;
            border: 1px solid #e5e9ef;
            overflow: auto;
            border-radius: 4px;
            color: #555;
            width: 80% !important;
            height: 65px;
            transition: 0s;
            padding: 5px 10px;
            line-height: normal;
            resize: none;

            &:hover {
                  background-color: white;
                  border: 1px solid #337ab7;
            }

            &:focus {
                  background-color: white;
                  border: 1px solid #337ab7;
                  outline: none;
            }
      }

      .c-add {
            height: 64px;
            width: 70px;
            padding: 4px 15px;
            font-size: 14px;
            color: #fff;
            border-radius: 4px;
            text-align: center;
            min-width: 60px;
            cursor: pointer;
            background-color: #00a1d6;
            border: 1px solid #00a1d6;
            transition: .1s;
            user-select: none;
            outline: none;
      }

      .c-add:hover {
            background-color: #00b4ea;
            border: 1px solid #00b4ea;
      }

      .addComment {
            width: 40%;
            padding: 0 0 20px 0;
            background-color: rgba(0, 0, 0, 0.2);

            ul {
                  padding: 0;
                  margin: 0;
            }

            li {
                  list-style: none;
            }
      }

      .text {
            color: white;
            font-size: 18px;
            position: relative;
            top: 24px;
            left: -60px;
      }

      /*星星评分*/
      .scoremark {
            width: 154px;
            position: relative;

            .score {
                  float: right;
                  display: block;
                  margin: 0 0 0 10px;
                  font-size: 18px;
                  line-height: 22px;
                  font-weight: bold;
                  color: #f70;
            }

            .star {
                  float: right;
                  display: block;
                  position: relative;
                  width: 116px;
                  height: 20px;
                  background: url(../../assets/img/star.png) no-repeat 0px -20px;

                  ul {
                        width: 120px;
                        height: 20px;
                        position: absolute;
                        top: 0;
                        left: 0;

                        &:hover {
                              background: url(../../assets/img/star.png) no-repeat 0px -20px;
                        }
                  }
            }

            .ystar {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 116px;
                  height: 20px;
                  background: url(../../assets/img/star.png) no-repeat 0px 0px;
            }
      }

      .scoremark .star li {
            float: left;
            width: 24px;
            height: 20px;
      }

      .scoremark .star li a {
            display: block;
            width: 24px;
            height: 20px;
            overflow: hidden;
            text-indent: -9999px;
            position: absolute;
            z-index: 5;
      }

      .scoremark .star li a:hover {
            background: url(../../assets/img/star.png) no-repeat 0px 0px;
            z-index: 3;
            left: 0
      }

      .scoremark .star a.one-star {
            left: 0;
      }

      .scoremark .star a.one-star:hover {
            width: 24px
      }

      .scoremark .star a.two-stars {
            left: 24px;
      }

      .scoremark .star a.two-stars:hover {
            width: 48px
      }

      .scoremark .star a.three-stars {
            left: 48px;
      }

      .scoremark .star a.three-stars:hover {
            width: 72px
      }

      .scoremark .star a.four-stars {
            left: 72px;
      }

      .scoremark .star a.four-stars:hover {
            width: 96px
      }

      .scoremark .star a.five-stars {
            left: 96px;
      }

      .scoremark .star a.five-stars:hover {
            width: 120px;
      }

      @media (max-width: 768px) {
            .addComment {
                  width: 100%;
            }

            .c-add {
                  width: 18%;
            }
      }
</style>