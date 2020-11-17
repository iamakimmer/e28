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

        <p class="instructions">Instructions: Go to a script and hover over any line. Hold down the microphone button (you'll have to allow microphone settings when asked) and start speaking. Let go of the button and it will save your audio file. Click on each line to play the line! It will be green if there's an audio file available.</p>

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
    .instructions {
        background-color: white;
        color: $primaryColor;
    }
</style>
