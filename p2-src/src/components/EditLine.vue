<template>

      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  Edit Line
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">

                    <div>
                        <div id="inputs">
                            <label for="name">Character</label>
                            <input type="text" v-model="line.character" id="character" />

                            <label for="name">Action</label>
                            <input type="text" v-model="line.action" id="action" />

                            <label for="name">Scene</label>
                            <input type="text" v-model="line.scene" id="scene" />

                            <label for="name">Order</label>
                            <input type="text" v-model="line.order" id="order" />
                                        
                            <label for="characters">Line</label>
                            <textarea v-model="line.line" id="line"></textarea>
                        </div>

                        <button @click="updateLine">Update Line</button>

                        <button class="modal-default-button" @click="$emit('close')">Cancel</button>

                        {{ errors }}
                    </div>
                    

                </slot>
              </div>

            </div>
          </div>
        </div>
      </transition>

</template>

<script>
import { axios } from '@/app.js';

export default {
    data: function() {
        return {
            errors: '',
        }
    },
    props: ['line', 'method'],
    methods: {
        updateLine() {
            axios.put(`/line/${this.line.id}`, this.line).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('close');
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>