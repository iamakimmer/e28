<template>
    <div id="app">
        <img
            alt="Scripter logo"
            id="logo"
            src="@/assets/images/scripterlogo.png"
        />

        <p>
            Record script readings with anyone in the world!
        </p>

        <nav>
            <ul>
                <li>
                    <router-link
                        v-for="link in links"
                        v-bind:key="link"
                        v-bind:to="paths[link]"
                        exact
                        >{{ link }}</router-link
                    >
                </li>
            </ul>
        </nav>

        <router-view
            v-bind:scripts="scripts"
            v-on:update-scripts="updateScripts()"
        ></router-view>
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    name: 'App',
    data() {
        return {
            scripts: [],
            /* Store links in an array to maintain order */
            links: ['home', 'add a script'],

            /* Map links to the appropriate component */
            paths: {
                home: '/',
                scripts: '/scripts',
                categories: '/categories',
                'add a script': '/scripts/new',
            },
        };
    },
    methods: {
        updateScripts() {
            axios.get('script').then((response) => {
                this.scripts = response.data.script;
            });
        },
    },
    mounted() {
        this.updateScripts();
    },
};
</script>

<style lang='scss'>
    @import '@/assets/scss/scripter.scss';
</style>
