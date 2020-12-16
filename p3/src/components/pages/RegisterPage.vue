<template>
    <div id="register-page">

        <div v-if="user">
            You are already logged in, {{user.name}}! If you want to create a new account, please log out first. 
            <button @click="logout" data-test="logout-button">Logout</button>
        </div>

        <div v-else id="registerForm">
            <h2>Register</h2>    
            <div>
                <label
                    >Name:
                    <input
                        type="text"
                        data-test="name-input"
                        v-model="data.name"
                        id="name"
                        required
                        v-on:blur="validate()"
                /></label>
                <error-field v-if="errors && 'name' in errors" :errors="errors.name"></error-field>
            </div>               
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
                    >Password:
                    <input
                        type="password"
                        data-test="password-input"
                        v-model="data.password"
                        id="price"
                        required
                        v-on:blur="validate()"
                /></label>
                <small class="form-help">Minimum Characters 8</small>
                <error-field v-if="errors && 'password' in errors" :errors="errors.password"></error-field>

            </div>

            <button @click="register" data-test="register-button">Login</button>

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
                name: null,
                password: null
            },
            errors: null,
            serverErrors: null,
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }        
    },
    methods: {
        validate() {
            let validator = new Validator(this.data, {
                name: 'required',
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
        register() {
            if (this.validate()) {
                this.serverErrors = null;
                axios.post('register', this.data).then((response) => {
                    console.log('response', response);                
                    if (response.data.success) {
                        console.log('user', response.data.user);
                        this.$store.commit('setUser', response.data.user);
                        this.$router.push('/account')
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
    },
    mounted() {
    },
};
</script>


<style lang="scss">
    .error {
        color: red;
    }
    ul {
        list-style: none;
    }
</style>