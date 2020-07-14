<!--
  -
  -  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
  -  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
  -
  -->

<template>
    <div class="login row">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-primary">
                <div class="panel-heading">Login</div>
                <div class="panel-body">
                    <form @submit.prevent="authenticate">
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email" id="email" v-model="form.email" class="form-control" placeholder="Your email">
                        </div>
                        <div class="form-group row">
                            <label for="password">password:</label>
                            <input type="password" id="password" v-model="form.password" class="form-control" placeholder="Your password">
                        </div>
                        <div class="form-group row">
                            <input type="submit" value="login">
                        </div>
                        <div class="form-group row" v-if="authError">
                            <p class="error" v-if="authError.length !== 0">
                                {{ authError.response.data.error }}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '../../helpers/auth';

    export default {
        name: "login",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                error: null
            };
        },
        methods: {
            authenticate() {
                this.$store.dispatch('login');
                login(this.$data.form)
                    .then((res) => {
                        this.$store.commit("loginSuccess", res);
                        this.$router.push('/m')
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$store.commit("loginFailed", {error});
                    });
            }
        },
        computed: {
            authError() {
                return this.$store.getters.authError;
            }
        }
    }
</script>

<style scoped>
    .error {
        text-align: center;
        color: red;
    }

</style>
