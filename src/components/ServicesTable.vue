<template>
  <v-data-table
    :headers="headers"
    :search="this.$store.getters.search"
    :items="services"
    :items-per-page="itemsPerPage"
    :loading="loading"
    class="elevation-3"
    hide-default-footer
  />
</template>

<script>
  export default {
    name: 'ServicesTable',
    props: {
      headers: {
        type: Array,
        required: true,
      },
      /* page: {
        type: Number,
        required: true,
      }, */
    },
    computed: {
      itemsPerPage () {
        return this.$store.getters.pagination.per_page
      },
      loading () {
        return this.$store.getters.isLoading
      },
      services () {
        return this.$store.getters.services
      },
      /* options: {
        get: () => {
          return this.$store.getters.options
        },
        set: function (options) {
          console.log(options)
          return this.$store.dispatch('setOptions', options)
        },
      }, */
    },
  }
</script>

<style scoped>

</style>
