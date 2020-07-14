<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light navbar-laravel">
      <div class="container">
        <router-link
          class="navbar-brand"
          to="/m"
        >
          Home
        </router-link>
        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/m/articles"
              >
                Articles
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/m/sites"
              >
                Businesses
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                id="actionsDropdown"
                href="#"
                class="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Actions <span class="caret" />
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="actionsDropdown"
              >
                <template v-if="!currentUser">
                  <router-link
                    class="dropdown-item"
                    to="/m/login"
                  >
                    Login
                  </router-link>
                  <router-link
                    class="dropdown-item"
                    to="/m/register"
                  >
                    Register
                  </router-link>
                </template>
                <template v-else>
                  <div class="dropdown-item-text">
                    {{ currentUser.name }}
                  </div>
                  <a
                    href="#"
                    class="dropdown-item"
                    @click.prevent="logout"
                  >Logout</a>
                </template>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  //  require('./navbar-js')
  export default {
    name: 'AppHeader',
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
