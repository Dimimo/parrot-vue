<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div v-if="article">
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
  import axios from 'axios'
  const URL = 'https://parrot.app/api/v1/'

  export default {
    name: 'ArticleView',
    data () {
      return {
        article: null,
      }
    },
    created () {
      axios.get(URL + `article/${this.$route.params.id}`).then((response) => {
        this.article = response.data.data
      }).catch((error) => {
        console.log(error)
      })
    },
  }
</script>
