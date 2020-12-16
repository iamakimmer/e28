<template>
    <div>
        <h2>Add a Script</h2>



        <div id="inputs">
            <label for="name">Name</label>
            <input type="text" data-test="script-name-input" v-model="script.name" id="name" required />
            <error-field v-if="errors && 'name' in errors" :errors="errors.name"></error-field>

            <label for="category">Category:</label>
            <select data-test="script-category-input" v-model="script.category" id="category" required>
                <option value="TV">TV</option>
                <option value="Movie">Movie</option>
            </select>

            <label for="scene">Scene:</label>
            <input data-test="script-scene-input" type="text" v-model="script.scene" id="scene" />
            <error-field v-if="errors && 'scene' in errors" :errors="errors.scene"></error-field>

            <label for="video_url">Youtube Embed URL:</label>
            <input data-test="script-video_url-input" type="text" v-model="script.video_url" id="video_url" />
            <error-field v-if="errors && 'video_url' in errors" :errors="errors.video_url"></error-field>

            <label for="screenplay_author">Screenplay Author:</label>
            <input data-test="script-author-input" type="text" v-model="script.screenplay_author" id="screenplay_author" />

            <label for="attribution">Attribution</label>
            <input data-test="script-attribution-input" type="text" v-model="script.attribution" id="attribution" />

            <label for="attribution">Directed By</label>
            <input data-test="script-director-input" type="directed_by" v-model="script.directed_by" id="directed_by" />

            <label for="characters">Characters</label>
            <textarea data-test="script-characters-input" v-model="script.characters" id="characters"></textarea>
            <error-field v-if="errors && 'characters' in errors" :errors="errors.characters"></error-field>
        </div>

        <button @click="addScript" data-test="add-script-button">Add Script</button>

        {{ serverErrors }}
    </div>
</template>

<script>
import { axios } from '@/app.js';
import ErrorField from '@/components/ErrorField.vue';
import Validator from 'validatorjs';

export default {
    components: {
        'error-field': ErrorField
    },          
    data() {
        return {
            errors: null,
            serverErrors: null,
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
        validate() {
            let validator = new Validator(this.script, {
                name: 'required',
                category: 'required',
                scene: 'required',
                video_url: 'required',
                characters: 'required',
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
                console.log('errors', this.errors);
            } else {
                this.errors = null;
            }

            return validator.passes();
        },             
        addScript() {
            if (this.validate()) {
                axios.post('/script', this.script).then((response) => {
                    if (response.data.errors) {
                        this.serverErrors = response.data.errors;
                    } else {
                        this.$router.push(`/scripts/${response.data.script.id}`);
                    }
                });

            }
        },
    },
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>