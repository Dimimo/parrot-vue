<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div v-if="!site">
    <img
      src="/loading.gif"
      alt=""
    >
  </div>
  <div v-else>
    <div
      v-if="site.picture"
      class="site-img"
    >
      <img
        :src="'https://parrot.app/storage/sites/' + site.picture.location"
        alt=""
      >
    </div>
    <div class="site-info">
      <table class="table">
        <tr>
          <td class="bigger-200">
            {{ site.name }}
          </td>
        </tr>
        <tr>
          <td class="bigger-140">
            {{ site.description }}
          </td>
        </tr>
        <tr>
          <td><span v-html="site.body" /></td>
        </tr>
      </table>
      <router-link to="/m/sites">
        Back to sites
      </router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  const URL = 'https://parrot.app/api/v1/'

  export default {
    name: 'SitesView',
    data () {
      return {
        site: null,
      }
    },
    created () {
      axios.get(URL + `site/${this.$route.params.id}`).then((response) => {
        this.site = response.data.data
      }).catch((error) => {
        console.log(error)
      })
    },
  }
</script>
