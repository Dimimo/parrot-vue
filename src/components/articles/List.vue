<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
    <div>
        <template v-if="loading">
            <div class="loader"></div>
        </template>
        <pagination :data="pagination" :limit="7" @pagination-change-page="getResults"></pagination>
        <template v-if="!articles.length">
            <p class="list-item">...loading...</p>
        </template>
        <template v-else>
            <div class="media box-rounded-white" v-for="article in articles" :key="article.id">
                <div class="pull-left">
                    <router-link :to="`/m/article/${article.id}`" class="thumbnail">
                        <img :src="article.picture" width="128px" alt="">
                    </router-link>
                </div>
                <div class="media-body">
                    <div class="media-heading">
                        <div class="row">
                            <div class="col-md-11 bigger-120">
                                <router-link :to="`/m/article/${article.id}`">{{ article.title }}</router-link>
                            </div>
                            <template v-if="currentUser">
                                <div class="col-md-1 pull-right">
                                    <a href="#" class="bookmark btn btn-primary btn-xs" title="bookmark for further reference">
                                    <span class="fa-fw bigger-140">
                                        <i class="far fa-bookmark"></i>
                                    </span>
                                    </a>
                                </div>
                            </template>
                        </div>
                    </div>
                    <p>{{ article.description }}<br/>
                        <router-link :to="`/m/article/${article.id}`"><span
                            class="glyphicon glyphicon-file"></span> Continue reading
                        </router-link>
                        <span class="smaller-90 darkgrey">({{ article.wordCount }} words, {{ article.picCount }})</span>
                    </p>
                    <div>
                        <strong>Categories: </strong> <span v-for="category in article.categories" :key="category.id"><u>{{ category.name }}</u>&nbsp;</span>
                    </div>
                </div>
            </div>
        </template>
        <pagination :data="pagination" :limit="7" @pagination-change-page="getResults">
            <span slot="prev-nav">&lt; Previous</span>
            <span slot="next-nav">Next &gt;</span>
        </pagination>
    </div>
</template>

<script>
    export default {
        name: 'articles',
        data: function () {
            return {page: 1, category: []}
        },
        mounted() {
            let page = sessionStorage.getItem('articles-page');
            if (page !== null) {
                this.page = page = JSON.parse(page);
            }
            else {
                this.page = page = 1;
            }
            sessionStorage.setItem('articles-page', JSON.stringify(page));
            return this.$store.dispatch('getArticles', this.page);
        },
        computed: {
            articles() {
                return this.$store.getters.articles;
            },
            pagination() {
                return this.$store.getters.pagination;
            },
            loading() {
                return this.$store.getters.isLoading;
            },
            currentUser() {
                return this.$store.getters.currentUser;
            }
        },
        methods: {
            getResults(page = 1) {
                sessionStorage.setItem('articles-page', JSON.stringify(page));
                return this.$store.dispatch('getArticles', page);
            }
        }
    }
</script>
