<template>
    <div class="featured">
        <h2>{{category}} Scenes</h2>
        <ul class="cleanList">
            <li v-for="script in featuredScripts" :key="script.id">
                <router-link v-bind:to="`/scripts/${script.id}`">
                    <span class="h3">{{ script.name }}</span> - {{script.scene}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'show-featured',
    props: ['category' ,'scripts'],
    computed: {
        featuredScripts() {            
            console.log('category', this.category);
            return this.scripts.filter((script) => {
                console.log('category', this.category);
                return script.category === this.category
            });
        },
    },
};
</script>


<style scoped>
    .featured h2 {
        text-transform: capitalize;
    }
    .h3 {
        font-weight: bold;
        font-size: 20px;
    }
</style>
