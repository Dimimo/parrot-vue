<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div>
    <h2>City</h2>
    <template v-if="this.$store.getters.isLoading">
      <div class="loader" />
    </template>
    <v-pagination
      v-model="page"
      :circle="true"
      :length="total"
      :light="true"
      :total-visible="7"
      @input="getResults"
    />
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="!services.length">
          <tr>
            <td colspan="3">
              ...loading...
            </td>
          </tr>
        </template>
        <template v-else>
          <tr
            v-for="service in services"
            :key="service.id"
          >
            <td>{{ service.title }}</td>
            <td>{{ service.phone }}</td>
            <td>
              <router-link :to="`/m/service/${service.id}`">
                View
              </router-link>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <v-pagination
      v-model="page"
      :circle="true"
      :length="total"
      :light="true"
      :total-visible="7"
      @input="getResults"
    />
  </div>
</template>

<script>
  export default {
    name: 'List',
    data: function () {
      return { page: 1 }
    },
    computed: {
      services () {
        return this.$store.getters.services
      },
      pagination () {
        return this.$store.getters.pagination
      },
      current: {
        get: function () {
          return this.$store.getters.pagination.current
        },
        set: function (page) {
          return this.$store.dispatch('getServicesCity', page)
        },
      },
      total () {
        return this.$store.getters.pagination.last_page
      },
    },
    mounted () {
      const city = this.$route.params.id
      let page = sessionStorage.getItem('services-page-' + city)
      if (page) {
        this.page = page = JSON.parse(page)
      } else {
        page = 1
      }
      sessionStorage.setItem('services-page', JSON.stringify(page))
      return this.$store.dispatch('getServicesCity', city, page)
    },
    methods: {
      getResults (page = 1) {
        const city = this.$route.params.id
        if (!page) {
          page = 1
        }
        sessionStorage.setItem('services-page-' + city, JSON.stringify(page))
        return this.$store.dispatch('getServicesCity', city, page)
      },
    },
  }
</script>
