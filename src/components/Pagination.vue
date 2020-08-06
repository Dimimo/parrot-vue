<template>
  <div>
    <v-pagination
      v-model="page"
      v-on[click]="$emit('get-results')"
      :length="total"
      :total-visible="7"
      :circle="true"
    />
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      page: {
        type: Number,
      },
    },
    data: function () {
      return {
        //  page: 1,
      }
    },
    /* data: function () {
      return {
        dispatchTo: 'getSites',
        sessionPage: 'sites-page',
      }
    }, */
    computed: {
      total () {
        return this.$store.getters.pagination.last_page
      },
    },
    /* methods: {
      getResults (page = 1) {
        if (page === null) {
          page = 1
        }
        sessionStorage.setItem(this.sessionPage, JSON.stringify(page))
        return this.$store.dispatch(this.dispatchTo, page)
      },
    }, */
  }
</script>
