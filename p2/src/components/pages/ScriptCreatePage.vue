<template>
    <div>
        <h2>Add a Script</h2>



        <div id="inputs">
            <label for="name">Name</label>
            <input type="text" v-model="script.name" id="name" required />

            <label for="category">Category:</label>
            <select v-model="script.category" id="category" required>
                <option value="TV">TV</option>
                <option value="Movie">Movie</option>
            </select>

            <label for="scene">Scene:</label>
            <input type="text" v-model="script.scene" id="scene" />

            <label for="video_url">Youtube Embed URL:</label>
            <input type="text" v-model="script.video_url" id="video_url" />

            <label for="screenplay_author">Screenplay Author:</label>
            <input type="text" v-model="script.screenplay_author" id="screenplay_author" />

            <label for="attribution">Attribution</label>
            <input type="text" v-model="script.attribution" id="attribution" />

            <label for="attribution">Directed By</label>
            <input type="directed_by" v-model="script.directed_by" id="directed_by" />

            <label for="characters">Characters</label>
            <textarea v-model="script.characters" id="characters"></textarea>
        </div>

        <button @click="addScript">Add Script</button>

        {{ errors }}
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            script: {
                "name": "The Godfather",
                "category": "Movie",
                "scene": "Leave The Gun - Take the Cannoli",
                "video_url": "https://www.youtube.com/embed/35fLKn2Tq3o",
                "screenplay_author": "Mario Puzo, Francis Ford Coppola",
                "attribution": "Based on a Novel by Mario Puzo",
                "directed_by": "Francis Ford Coppola",
                "characters": "MRS. CLEMENZA, CLEMENZA, PAULIE, ROCCO"
            },
        };
    },
    methods: {
        addScript() {
            axios.post('/script', this.script).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$router.push('/')
                }
            });
        },
    },
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>