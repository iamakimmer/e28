<template>
    <div>
        <show-featured :category="'TV'" :scripts="scripts"></show-featured>
        <show-featured :category="'Movie'" :scripts="scripts"></show-featured>

        <p class="instructions">
            Other Stuff I want to add
            <ul>
                <li>Authentication - have only registerd users add and edit line</li>
                <li>Authentication - save the user to the line</li>
                <li>UI - play through the entire script without clicking on each line</li>
            </ul>
        </p>
    </div>
</template>

<script>
import ShowFeatured from '@/components/ShowFeatured.vue';


export default {
    name: '',
    props: ['scripts'],
    components: {
        'show-featured': ShowFeatured,
    },
    data: function () {
        return {};
    },
};
</script>

<style scoped>
</style>