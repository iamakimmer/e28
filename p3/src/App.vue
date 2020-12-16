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

        <p class="instructions">Instructions: Use a real computer (chrome, pref) Go to a script and hover over any line. Hold down the microphone button (you'll have to allow microphone settings when asked) and start speaking. Let go of the button and it will save your audio file. Click on each line to play the line! It will be green if there's an audio file available.</p>

        <nav>
            <ul>
                <li>
                    <router-link
                        v-for="link in links"
                        v-bind:key="link"
                        :data-test="link + '-link'"
                        v-bind:to="paths[link]"
                        exact
                        >{{ link }}</router-link>
                </li>
            </ul>
        </nav>

        <router-view
            v-bind:scripts="scripts"
        ></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            /* Store links in an array to maintain order */
            links: ['home', 'add a script', 'account', 'register'],

            /* Map links to the appropriate component */
            paths: {
                home: '/',
                account: '/account',
                scripts: '/scripts',
                categories: '/categories',
                'add a script': '/scripts/new',
                'register': '/register',
            },
        };
    },
    mounted() {
        this.$store.dispatch('fetchScripts');
        this.$store.dispatch('authUser');
    },
    computed: {
        scripts() {
            return this.$store.state.scripts;
        }
    }
};
</script>

<style lang='scss'>
    @import '@/assets/scss/scripter.scss';
    .instructions {
        background-color: white;
        color: $primaryColor;
    }
</style>
