<template>
    <div class="add-line">
        <div id="inputs">
            <label for="name">Character</label>
            <input type="text" v-model="line.character" id="character" />

            <label for="name">Action</label>
            <input type="text" v-model="line.action" id="action" />

            <label for="name">Scene</label>
            <input type="text" v-model="line.scene" id="scene" />

            <label for="name">Order</label>
            <input type="number" v-model="line.order" id="order" />
                        
            <label for="characters">Line</label>
            <textarea v-model="line.line" id="line"></textarea>
        </div>

        <button @click="addLine">Add Line</button>
        <div>
            {{ errors }}
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    data: function() {
        return {
            line: {},
            errors: '',
        }
    },
    props: ['script_id'],
    methods: {
        addLine() {
            axios.post(`/line`, this.line).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    //get lines again and emit it out
                    this.$emit('add-line');
                }
            });
        },
    },
    mounted() {
        this.line.script_id = this.script_id;
    }
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}

.add-line {
    max-width: 400px;
    margin: 0 auto;
}
</style>