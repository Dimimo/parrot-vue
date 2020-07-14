<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div>
    <app-header />
    <router-view />
  </div>
</template>

<script>
  //  import 'bootstrap/dist/css/bootstrap.min.css'
  import '@fortawesome/fontawesome-free/css/fontawesome.css'
  import '../public/app.css'
  import 'jquery/src/jquery.js'
  import 'bootstrap/dist/js/bootstrap.min.js'
  import AppHeader from './components/AppHeader'
  //  import Navbar from './components/Navbar';

  export default {
    name: 'App',
    components: { AppHeader },
    mounted () {
      console.log('Component mounted.')
    },
  }
</script>
