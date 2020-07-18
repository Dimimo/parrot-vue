<template>
  <div>
    <v-card class="mb-8">
      <v-card-text>
        <v-app-bar>
          <v-app-bar-nav-icon />
          <v-toolbar-title>
            <router-link
              to="/m"
            >
              Home
            </router-link>
          </v-toolbar-title>
          <v-spacer />
          <v-btn text>
            <router-link
              to="/m/articles"
            >
              Articles
            </router-link>
          </v-btn>
          <v-btn text>
            <router-link
              to="/m/sites"
            >
              Businesses
            </router-link>
          </v-btn>
          <v-btn text>
            <router-link
              to="/m/services"
            >
              City Services
            </router-link>
          </v-btn>
          <v-spacer />
          <v-menu
            offset-y
            light
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="blue-grey lighten-4"
                class="text-dark"
                v-bind="attrs"
                v-on="on"
              >
                <div v-if="!currentUser">
                  Members
                </div>
                <div v-else>
                  {{ currentUser.name }}
                </div>
              </v-btn>
            </template>
            <v-list>
              <div v-if="!currentUser">
                <v-list-item class="text-center">
                  <v-list-item-title>
                    <router-link
                      to="/m/login"
                    >
                      <v-btn
                        text
                      >
                        Login
                      </v-btn>
                    </router-link>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="text-center">
                  <v-list-item-title>
                    <router-link
                      to="/m/register"
                    >
                      <v-btn text>
                        Register
                      </v-btn>
                    </router-link>
                  </v-list-item-title>
                </v-list-item>
              </div>
              <div v-else>
                <v-list-item>
                  <v-list-item-title>
                    <router-link
                      to="/m/logout"
                      @click.prevent="logout"
                    >
                      <v-btn text>
                        Logout
                      </v-btn>
                    </router-link>
                  </v-list-item-title>
                </v-list-item>
              </div>
            </v-list>
          </v-menu>
          <v-progress-linear
            :active="this.$store.getters.isLoading"
            :indeterminate="this.$store.getters.isLoading"
            :height="2"
            absolute
            bottom
            color="deep-purple accent-4"
          />
        </v-app-bar>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'TheHeader',
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
