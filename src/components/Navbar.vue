<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div
    id="slide-nav"
    class="navbar navbar-inverse navbar-fixed-top"
    role="navigation"
  >
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-toggle">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </a>
        <router-link
          class="navbar-brand"
          to="/m"
        >
          Puerto Parrot
        </router-link>
      </div>
      <div
        id="slidemenu"
        class="navbar-toggle-link"
      >
        <!--<form class="navbar-form navbar-right" role="form">
                    <div class="form-group">
                        <input type="search" placeholder="search" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>-->

        <ul class="nav navbar-nav">
          <li>
            <router-link to="/m">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/m/articles">
              Articles
            </router-link>
          </li>
          <li>
            <router-link to="/m/sites">
              Businesses
            </router-link>
          </li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
            >Dropdown <b class="caret" /></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider" />
              <li class="dropdown-header">
                Nav header
              </li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider" />
              <li class="dropdown-header">
                Nav header
              </li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider" />
              <li class="dropdown-header">
                Nav header
              </li>
              <li><a href="#">Separated link test long title goes here</a></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  require('./navbar-js')

  export default {
    name: 'Navbar',
    computed: {
      currentUser () {
        return this.$store.getters.currentUser
      },
    },
    methods: {
      logout () {
        this.$store.commit('logout')
        this.$router.push('/m/login')
      },
    },
  }
</script>
