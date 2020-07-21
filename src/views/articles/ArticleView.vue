<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div>
    <div class="text-h4 mb-10">
      {{ article.title }}
    </div>
    <span v-html="article.body" />
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
