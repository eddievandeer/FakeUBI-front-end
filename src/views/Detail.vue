<template>
      <div id="main" class="main-body">
            <game-info :game_id="game_id"></game-info>
            <div class="dividing" align="center">
                  <h2>评论区</h2>
            </div>
            <br>
            <div class="game-comments" align="center">
                  <add-comment :game_id="game_id"></add-comment>
                  <br>
                  <game-comments :game_id="game_id"></game-comments>
            </div>
      </div>
</template>

<script>
      export default {
            name: 'Detail',
            props: ['game_id'],
            components: {
                  gameInfo: () => import('@/components/detail/Info.vue'),
                  gameComments: () => import('@/components/detail/Comments.vue'),
                  addComment: () => import('@/components/detail/Add.vue'),
            }
      }
</script>

<style lang="scss" scoped>
      .dividing {
            width: 100%;
            height: 45px;
            background-color: #1d1d1d;
      }

      .dividing h2 {
            color: white;
      }
</style>