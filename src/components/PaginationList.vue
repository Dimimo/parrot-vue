<template>
  <div>
    <v-pagination
      v-model="page"
      v-on[click]="getResults"
      :length="total"
      :total-visible="7"
      :circle="true"
    />
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    data: function () {
      return {
        dispatchTo: 'getSites',
        sessionPage: 'sites-page',
      }
    },
    computed: {
      page: {
        get: function () {
          return this.$store.getters.pagination.current
        },
        set: function (page) {
          return this.$store.dispatch('getSites', page)
        },
      },
      total () {
        return this.$store.getters.pagination.last_page
      },
    },
    methods: {
      getResults (page = 1) {
        if (page === null) {
          page = 1
        }
        sessionStorage.setItem(this.sessionPage, JSON.stringify(page))
        return this.$store.dispatch(this.dispatchTo, page)
      },
    },
  }
</script>
