<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div>
    <div class="article-img">
      <img
        :src="article.picture"
        alt=""
      >
    </div>
    <div class="article-info">
      <table class="table">
        <tr>
          <td class="bigger-200">
            {{ article.title }}
          </td>
        </tr>
        <tr>
          <td class="bigger-140">
            {{ article.description }}
          </td>
        </tr>
        <tr>
          <td><span v-html="article.body" /></td>
        </tr>
      </table>
      <router-link to="/m/articles">
        Back to articles
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArticleView',
    computed: {
      article () {
        return this.$store.getters.articles
      },
    },
    mounted () {
      this.$store.dispatch('getArticle', this.$route.params.id)
    },
  }
</script>
