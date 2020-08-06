<template>
  <div>
    <v-row
      class="ml-auto mb-5"
    >
      <v-col
        sm="6"
        md="3"
        class="ml-auto xm"
      >
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          outlined
          clearable
          @input="getSearchResults"
        />
      </v-col>
    </v-row>
    <v-spacer />
    <services-table :headers="headers" />
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="total"
        :total-visible="7"
        :circle="true"
        @input="getResults"
      />
    </div>
  </div>
</template>

<script>
  //  import {mapGetters} from 'vuex'
  import ServicesTable from '../../components/ServicesTable'
  export default {
    name: 'ServiceDataTable',
    components: {
      ServicesTable,
    },
    data: function () {
      return {
        page: 1,
        options: {},
        headers: [
          {
            text: 'City',
            align: 'start',
            sortable: true,
            value: 'city.name',
            class: 'text-h5',
          },
          {
            text: 'Name/Title',
            align: 'start',
            sortable: true,
            value: 'title',
            class: 'text-h5',
          },
          {
            text: 'Phone number',
            align: 'start',
            sortable: false,
            value: 'phone',
            class: 'text-h5',
          },
          {
            text: 'View',
            align: 'start',
            sortable: false,
            value: null,
            class: 'text-h5',
          },
        ],
      }
    },
    computed: {
      itemsPerPage () {
        return this.$store.getters.pagination.per_page
      },
      loading () {
        return this.$store.getters.isLoading
      },
      search: {
        get: function () {
          return this.$store.getters.search
        },
        set: function (search) {
          return this.$store.dispatch('setSearch', search)
        },
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
      services () {
        return this.$store.getters.services
      },
      total () {
        return this.$store.getters.pagination.last_page
      },
    },
    /* watch: {
      options: {
        handler () {
          this.$store.dispatch('setOptions', this.options)
          //  this.getResults(this.page).then(data => { return data }),
          this.getResults().then(() => {
            this.options = this.$store.getters.options
          },
          )
        },
      },
    }, */
    mounted () {
      let page = sessionStorage.getItem('services-page')
      if (page !== null) {
        this.page = page = JSON.parse(page)
      } else {
        this.page = page = 1
      }
      sessionStorage.setItem('services-page', JSON.stringify(page))
      this.$store.commit('updateOptions', this.options)
      return this.$store.dispatch('getServices', this.page)
    },
    methods: {
      getResults (page = 1) {
        if (page === null) {
          page = 1
        }
        sessionStorage.setItem('services-page', JSON.stringify(page))
        this.$store.dispatch('setOptions', this.options)
        return this.$store.dispatch('getServices', page)
      },
      getSearchResults (search = '') {
        if (search !== '') {
          return this.$store.dispatch('setSearch', search)
        }
      },
    },
  }
</script>
