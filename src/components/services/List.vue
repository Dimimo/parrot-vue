<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div>
    <template v-if="loading">
      <div class="loader" />
    </template>
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
          <th>Title</th>
          <th>Phone number</th>
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
            <td>
              <router-link :to="`/m/services/city/${service.city.id}`">
                {{ service.city.name }}
              </router-link>
            </td>
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
    name: 'Services',
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
          return this.$store.dispatch('getServices', page)
        },
      },
      total () {
        return this.$store.getters.pagination.last_page
      },
      loading () {
        return this.$store.getters.isLoading
      },
    },
    mounted () {
      let page = sessionStorage.getItem('services-page')
      if (page !== null) {
        this.page = page = JSON.parse(page)
      } else {
        this.page = page = 1
      }
      sessionStorage.setItem('services-page', JSON.stringify(page))
      return this.$store.dispatch('getServices', this.page)
    },
    methods: {
      getResults (page = 1) {
        if (page === null) {
          page = 1
        }
        sessionStorage.setItem('services-page', JSON.stringify(page))
        return this.$store.dispatch('getServices', page)
      },
    },
  }
</script>
