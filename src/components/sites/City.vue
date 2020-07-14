<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
    <div>
        <h2>City</h2>
        <template v-if="this.$store.getters.isLoading">
            <div class="loader"></div>
        </template>
        <pagination :data="pagination" :limit="7" @pagination-change-page="getResults"></pagination>
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <template v-if="!sites.length">
                <tr>
                    <td colspan="3">...loading...</td>
                </tr>
            </template>
            <template v-else>
                <tr v-for="site in sites" :key="site.id">
                    <td>{{ site.name }}</td>
                    <td>{{ site.description }}</td>
                    <td>
                        <router-link :to="`/m/sites/${site.id}`">View</router-link>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
        <pagination :data="pagination" :limit="7" @pagination-change-page="getResults">
            <span slot="prev-nav">&lt; Previous</span>
            <span slot="next-nav">Next &gt;</span>
        </pagination>
    </div>
</template>

<script>
    export default {
        name: 'list',
        data: function () {
            return {page: null}
        },
        mounted() {
            const city = this.$route.params.id;
            let page = sessionStorage.getItem('sites-page-' + city);
            if (page !== null) {
                this.page = page = JSON.parse(page);
            }
            else if (page === null) {
                this.page = page = 1;
            }
            sessionStorage.setItem('sites-page', JSON.stringify(page));
            return this.$store.dispatch('getSitesCity', city);
        },
        computed: {
            sites() {
                return this.$store.getters.sites;
            },
            pagination() {
                return this.$store.getters.pagination;
            }
        },
        methods: {
            getResults(page = 1) {
                const city = this.$route.params.id;
                if (page === null) {
                    page = 1;
                }
                sessionStorage.setItem('sites-page-' + city, JSON.stringify(page));
                return this.$store.dispatch('getSitesCity', city, page);
            }
        }
    }
</script>
