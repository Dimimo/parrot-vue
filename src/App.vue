<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div>
    <v-app>
      <v-content>
        <the-header />
        <v-skeleton-loader
          class="mx-auto"
          :loading="this.$store.getters.isLoading"
          :transition="transition"
          :max-height="400"
          type="table"
        >
          <router-view />
        </v-skeleton-loader>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  //  import '@fortawesome/fontawesome-free/css/fontawesome.css'
  //  import '../public/app.css'
  //  import 'jquery/src/jquery.js'
  //  import 'bootstrap/dist/js/bootstrap.min.js'
  //  import 'https://static.puertoparrot.com/css/app.css'
  //  import AppHeader from './components/AppHeader'
  import TheHeader from './views/TheHeader'

  export default {
    name: 'App',
    components: {
      TheHeader,
    },
    data: () => ({
      transition: 'scale-transition',
    }),
    mounted () {
      console.log('Component mounted.')
    },
  }
</script>
