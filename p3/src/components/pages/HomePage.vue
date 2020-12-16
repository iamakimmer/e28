<template>
    <div>
        <show-featured :category="'TV'" :scripts="scripts"></show-featured>
        <show-featured :category="'Movie'" :scripts="scripts"></show-featured>
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