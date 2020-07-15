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
  import '@fortawesome/fontawesome-free/css/fontawesome.css'
  import '../public/app.css'
  import 'jquery/src/jquery.js'
  import 'bootstrap/dist/js/bootstrap.min.js'
  import AppHeader from './components/AppHeader'

  export default {
    name: 'App',
    components: { AppHeader },
    mounted () {
      console.log('Component mounted.')
    },
  }
</script>
<style>
  .loader {
    position: fixed;
    top: 80px;
    left: 50%;
    width: 124px;
    height: 124px;
    z-index: 99999;
    transform: translate(-50%, -50%);
    color: black;
    background: url('/loading.gif') no-repeat rgb(255, 255, 255);
    background-size: contain;
  }
</style>
