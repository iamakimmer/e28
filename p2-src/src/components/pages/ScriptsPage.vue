<template>
    <div id="scripts">
        <h1>Scripts</h1>

        <router-link
            v-for="script in scripts"
            :key="script.id"
            v-bind:to="'/scripts/' + script.id"
            exact
        >
            <show-script :script="script"></show-script>
        </router-link>
    </div>
</template>

<script>
import ShowScript from '@/components/ShowScript.vue';

export default {
    name: '',
    components: {
        'show-script': ShowScript,
    },
    props: ['scripts'],
    data: function () {
        return {};
    },
};
</script>

<style scoped>
</style>