<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card card-default">
          <div class="card-header">
            Vue.JS SPA example
          </div>

          <div class="card-body">
            <h2>{{ welcome }}</h2>
            <img
              src="https://picsum.photos/200/300"
              alt="lorem picsum"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    computed: {
      welcome () {
        return this.$store.getters.welcome
      },
    },
  }
</script>
