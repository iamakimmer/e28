<template>
    <div id="account-page">
        <div v-if="user">
            <h2 data-test="welcome-message">Welcome, {{ user.name }}!</h2>

            <div id="favorites">
                <strong>Your Favorite Lines</strong>
                <p v-if="favorites && favorites.length == 0">
                    No favorites yet.
                </p>
                <li v-for="(favorite, key) in favorites" v-bind:key="key">
                    {{ favorite.name }}
                </li>
            </div>

            <button @click="logout" data-test="logout-button">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>           
            <div>
                <label
                    >Email:
                    <input
                        type="text"
                        data-test="email-input"
                        v-model="data.email"
                        id="email"
                        required
                        v-on:blur="validate()"
                /></label>
                <error-field v-if="errors && 'email' in errors" :errors="errors.email"></error-field>
            </div>
            <div>
                <label
                    >Password :
                    <input
                        type="password"
                        data-test="password-input"
                        v-model="data.password"
                        required
                        v-on:blur="validate()"
                /></label>
                <error-field v-if="errors && 'password' in errors" :errors="errors.password"></error-field>
            </div> 

            <button @click="login" data-test="login-button">Login</button>

            <ul v-if="serverErrors">
                <li class="error" v-for="(error, index) in serverErrors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';
import ErrorField from '@/components/ErrorField.vue';
import Validator from 'validatorjs';


export default {
    components: {
        'error-field': ErrorField
    },        
    data() {
        return {
            data: {
                email: null,
                password: null
            },
            errors: null,
            serverErrors: null,
            favorites: [],
        };
    },
    computed: {
        // Get our user and products state from the Vuex store
        user() {
            return this.$store.state.user;
        },
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
        validate() {
            let validator = new Validator(this.data, {
                email: 'required',
                password: 'required|min:8',
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }
            return validator.passes();
        },        
        loadFavorites() {
            if (this.user) {
                // Because favorite is a auth-protected resource, this will
                // only return favorites belonging to the authenticated user
                axios.get('favorite').then((response) => {
                    this.favorites = response.data.favorite;
                });
            }
        },
        login() {
            if (this.validate()) {
                this.serverErrors = null;
                axios.post('login', this.data).then((response) => {                    
                    if (response.data.authenticated) {
                        console.log('user', response.data.user);
                        this.$store.commit('setUser', response.data.user);
                    } else {
                        this.serverErrors = response.data.errors;
                    }
                });
            }
        },
        logout() {
            axios.post('logout').then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        },
    },
    watch: {
        user() {
            this.loadFavorites();
        },
    },
    mounted() {
        this.loadFavorites();
    },
};
</script>