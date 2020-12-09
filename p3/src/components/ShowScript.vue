<template>
    <div class="script">
        <div class="script-name">
            {{ script.name }}
        </div>

        <div class="script-scene">
            {{ script.scene }}
        </div>

        <iframe width="400" height="280" v-if="script.video_url" :src="script.video_url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p class="author">
            <b>Screenplay Author:</b> {{ script.screenplay_author }}
        </p>

        <p class="directed_by">
            <b>Directed By:</b> {{ script.directed_by }}
        </p>        

        <p class="characters">
            <b>Characters:</b> {{ script.characters }}
        </p>        
        <script-lines :scriptId="script.id"></script-lines>
    </div>
</template>

<script>

import ScriptLines from '@/components/ScriptLines.vue';


export default {
    name: 'show-script',
    props: ['script'],
    components: {
        'script-lines': ScriptLines,
    },    
    data: function () {
        return {      
        };
    },
    computed: {
        imageSource() {
            try {
                return require('@/assets/images/scripts/' +
                    this.script.id +
                    '.jpg');
            } catch (e) {
                return require('@/assets/images/scripts/image-not-available.jpg');
            }
        },
    }
};
</script>

<style lang="scss">

</style>