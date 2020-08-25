<template>
      <div>
            <div class="game-comment-item" :key="index" v-for="(item,index) in commentList" align="left" v-cloak>
                  <div class="user_name">{{item.username}}
                        <div class="comment-score">
                              <span class="star">
                                    <span class="ystar" :style="{ width: item.score*23.2 + 'px' }"></span>
                              </span>
                        </div>
                  </div>
                  <div class="postedDate">发布于：{{ item.comment_time }}</div>
                  <div class="content">{{ item.comment }}</div>
                  <hr>
                  <div class="control_block">
                        <button type="button" class="btn btn-link">👍赞</button>
                        <button type="button" class="btn btn-link">👎踩</button>
                        <button type="button" class="btn btn-link">评论</button>
                  </div>
            </div>
      </div>
</template>

<script>
      export default {
            name: 'gameComments',
            props: ['game_id'],
            data() {
                  return {
                        isEmpty: true,
                        commentList: []
                  }
            },
            mounted() {
                  this.getComments()
            },
            methods: {
                  async getComments() {
                        let response = await this.$http.get("/comment/getComments", {
                              params: {
                                    game_id: this.game_id
                              }
                        })
                        this.commentList = response.data;
                        if (this.commentList == "" || this.commentList == null) {
                              this.isEmpty = true;
                        } else {
                              this.isEmpty = false;
                        }
                  }
            }
      }
</script>

<style lang="scss" scoped>
      .game-comment-item {
            width: 40%;
            height: auto;
            color: white;
            background-color: rgba(0, 0, 0, 0.2);
            margin-bottom: 10px;
      }

      .user_name {
            width: 100%;
            position: relative;
            margin-top: 0px;
            color: #c1dbf4;
            font-size: 20px;
            background-color: rgba(0, 0, 0, 0.3);
            padding: 5px 0 5px 12px;
            display: flex;
            justify-content: flex-start;


            .comment-score {
                  margin-top: 5px;
                  margin-left: 10px;
            }

            .ystar {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 116px;
                  height: 20px;
                  background: url(../../assets/img/star.png) no-repeat 0px 0px;
            }

            .star {
                  float: right;
                  display: block;
                  position: relative;
                  width: 116px;
                  height: 20px;
                  background: url(../../assets/img/star.png) no-repeat 0px -20px;
            }
      }

      .postedDate {
            color: #8091a2;
            font-size: 12px;
            padding: 3px 0 3px 10px;
      }

      .content {
            color: #acb2b8;
            font-size: 18px;
            padding: 3px 0 3px 10px;
      }

      .control_block {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-content: center;

            button.btn-link {
                  color: #3a6d9d;
                  text-decoration: none;
            }
      }

      @media (max-width: 768px) {
            .game-comment-item {
                  width: 100%;
            }
      }
</style>