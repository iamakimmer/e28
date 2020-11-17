<template>
    <div id="product-page">
        <div v-if="script">
            <show-script
                :script="script"
            ></show-script>
        </div>

        <div v-if="scriptNotFound">
            <p>Script {{ id }} not found.</p>

            <router-link v-bind:to="'/products'"
                >Go to all scripts
            </router-link>
        </div>
    </div>
</template>

<script>
import ShowScript from '@/components/ShowScript.vue';

export default {
    name: '',
    props: ['id', 'scripts'],
    components: {
        'show-script': ShowScript,
    },
    data() {
        return {};
    },
    computed: {
        script() {
            return this.scripts.filter((script) => {
                return script.id == this.id;
            }, this.id)[0];
        },
        scriptNotFound() {
            return this.script == null;
        },
    },
};
</script>
