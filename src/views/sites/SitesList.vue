<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div>
    <v-pagination
      v-model="page"
      :length="total"
      :total-visible="7"
      :circle="true"
      :light="true"
      @input="getResults"
    />
    <table class="table">
      <thead>
        <tr>
          <th>City</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="!sites.length">
          <tr>
            <td colspan="3">
              ...loading...
            </td>
          </tr>
        </template>
        <template v-else>
          <tr
            v-for="site in sites"
            :key="site.id"
          >
            <td>
              <router-link :to="`/m/sites/city/${site.city.id}`">
                {{ site.city.name }}
              </router-link>
            </td>
            <td>{{ site.name }}</td>
            <td>{{ site.description }}</td>
            <td>
              <router-link :to="`/m/site/${site.id}`">
                View
              </router-link>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <v-pagination
      v-model="page"
      :length="total"
      :total-visible="7"
      :circle="true"
      :light="true"
      @input="getResults"
    />
  </div>
</template>

<script>
  export default {
    name: 'SitesList',
    data: function () {
      return { page: 1 }
    },
    computed: {
      sites () {
        return this.$store.getters.sites
      },
      total () {
        return this.$store.getters.pagination.last_page
      },
      loading () {
        return this.$store.getters.isLoading
      },
    },
    mounted () {
      let page = sessionStorage.getItem('sites-page')
      if (page !== null) {
        this.page = page = JSON.parse(page)
      } else {
        this.page = page = 1
      }
      sessionStorage.setItem('sites-page', JSON.stringify(page))
      return this.$store.dispatch('getSites', this.page)
    },
    methods: {
      getResults (page = 1) {
        if (page === null) {
          page = 1
        }
        sessionStorage.setItem('sites-page', JSON.stringify(page))
        return this.$store.dispatch('getSites', page)
      },
    },
  }
</script>
