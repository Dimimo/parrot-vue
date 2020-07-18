<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div>
    <h2 v-if="services.length > 0">
      {{ services[0].city.name }}
    </h2>
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
    <v-simple-table
      class="elevation-5 my-6"
      :fixed-header="true"
    >
      <template>
        <thead>
          <tr>
            <th class="text-left text-h5 text-dark">
              Title
            </th>
            <th class="text-left text-h5 text-dark">
              Phone
            </th>
            <th class="text-right text-h5 text-dark">
              Actions
            </th>
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
              <td>
                <router-link :to="`/m/service/${service.id}`">
                  {{ service.title }}
                </router-link>
              </td>
              <td>{{ service.phone }}</td>
              <td class="text-right">
                <router-link :to="`/m/service/${service.id}`">
                  View
                </router-link>
              </td>
            </tr>
          </template>
        </tbody>
      </template>
    </v-simple-table>
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
    name: 'ServicesCity',
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
      city: {
        get: function () {
          return this.$store.getters.city
        },
        set: function (city) {
          return this.$store.dispatch('getCity', city)
        },
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
      this.$store.dispatch('getCity', city)
      let page = sessionStorage.getItem('services-page-' + city)
      if (page) {
        this.page = page = JSON.parse(page)
      } else {
        page = 1
      }
      sessionStorage.setItem('services-page', JSON.stringify(page))
      return this.$store.dispatch('getServicesCity', page)
    },
    methods: {
      getResults (page = 1) {
        const city = this.$route.params.id
        this.$store.dispatch('getCity', city)
        if (!page) {
          page = 1
        }
        sessionStorage.setItem('services-page-' + city, JSON.stringify(page))
        return this.$store.dispatch('getServicesCity', page)
      },
    },
  }
</script>

<style scoped>
  td { }
</style>
