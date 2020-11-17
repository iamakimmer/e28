<template>
    <section id="lines">
        <div v-if="!lines.length" class="error">No Lines Available, Add One Now!</div>
        <h3 v-if="lines.length">
            Start Scene            
        </h3>        
        <edit-line v-if="currentLineToEdit" @close="currentLineToEdit = null" :line="currentLineToEdit"></edit-line>
        <vue-record-audio v-show="showRecorder" id="recorder" ref="recorder" mode="hold" @stream="onStream" @result="onRecordingResult" />        
        <ul>
            <li v-for="(line, index) in lines" :key="line.id" class="line recordable" v-bind:class="{ active: line == currentLine, playable: !!line.audio_file }" @click="playLine(line)" @mouseenter="mouseoverLine($event, line, index)">
                <div class="line-grouping">
                    <div class="scene" v-if="line.scene">
                        <div>SCENE</div>
                        <i>{{line.scene}}</i>
                    </div>
                    <div class="character" v-if="line.character">{{line.character}}</div>
                    <div class="action" v-if="line.action">({{line.action}})</div>
                    <div  v-if="line.line">{{line.line}}</div>
                </div>
                <div class="line-options">
                    <!-- <button @click="deleteLine(line, index)"><span class="material-icons">delete</span></button> -->
                    <button @click="editLine(line, index)"><span class="material-icons">edit</span></button>
                </div>
            </li>

        </ul>
        <add-line :script_id="scriptId" v-on:add-line="updateLines()"></add-line>
        <h3 v-if="lines.length">End Scene</h3>
        <div class="audio-container" style="display: none;">
            <audio v-if="currentLine.audio_file" id="audio-player" :src="currentLine.audio_file" controls />
        </div>
    </section>
</template>

<script>
import { axios } from '@/app.js';
import EditLine from '@/components/EditLine.vue';
import AddLine from '@/components/AddLine.vue';


const blobToBase64 = blob => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};



export default {
    name: 'script-line',
    props: ['scriptId'],
    data: function () {
        return {
            lines: [],
            showRecorder: false,
            currentLine: {},
            currentLineIndex: 0,
            currentLineToEdit: null,
        };
    },
    computed: {        
    },
    components: {
        'edit-line': EditLine,
        'add-line': AddLine,
    },    
    mounted() {
        axios.get('line/query', {
            params: {
                script_id: this.scriptId,
            }
        }).then((response) => {
            this.lines = response.data.results;
        });        
    },
    methods: { 
        updateLines() {
            axios.get('line/query', {
                params: {
                    script_id: this.scriptId,
                }
            }).then((response) => {
                this.lines = response.data.results;
            }); 
        },        
        playEntireScene() {
            this.currentLine = this.lines[0];
        },
        playLine(line) {
            console.log('clicked line', line);
            if (line.audio_file) {
                var audio = new Audio(line.audio_file);
                audio.play();            
            }
        },
        onStream (stream) {
            console.log('Got a stream object:', stream);
        },
        deleteLine(line, index) {            
            axios.delete(`/line/${line.id}`).then((response) => {
                console.log('response', response);
                console.log('lines', this.lines);
                this.lines.splice(index, 1);
            });
        },
        editLine(line) {
            this.currentLineToEdit = line;
        },
        updateLine(line, url, currentLineIndex) {
            console.log('updating line', line, url);
            line.audio_file = url;
            console.log('line', line);
            axios.put(`/line/${line.id}`, line).then((response) => {
                console.log('response', response);       
                console.log('lines', this.lines);                         
                this.$set(this.lines, currentLineIndex, line);
            });            
            axios.get('line/query', {
                params: {
                    script_id: this.scriptId,
                }
            }).then((response) => {
                this.lines = response.data.results;
            });             
        },
        uploadFileToCloudinary(file, currentLine, currentLineIndex) {
            var vm = this;
            console.log('prepint file to upload')
            // *********** Upload file to Cloudinary ******************** //
            var url = `https://api.cloudinary.com/v1_1/mattkim/upload`;
            var xhr = new XMLHttpRequest();
            var fd = new FormData();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                var url = response.secure_url;
                console.log('updateLine');                
                vm.updateLine(currentLine, url, currentLineIndex);
                vm.playLine(currentLine);
                }
            };

            fd.append('upload_preset', 'e28-bklczr9c');
            fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
            fd.append('file', file);
            xhr.send(fd);
            console.log('sent file');
        },
        onRecordingResult (data) {
            console.log('onRecordingResult', data);            
            blobToBase64(data).then((base64Data) => {
                this.uploadFileToCloudinary(base64Data, this.currentLine, this.currentLineIndex);            
            })            
        },
        mouseoverLine (e, line, index) {            
            this.showRecorder = true;
            this.currentLine = line;
            this.currentLineIndex = index;
            e.target.appendChild(this.$refs.recorder.$el);
        }
    }
};
</script>


<style scoped lang="scss">
.error {
    color: red;
}
.scene {
    font-family: Arial;
    padding: 20px;
}

#lines {
    background-color: #fff;
    ul {
        list-style-type: none;
        padding-inline-start: 0;

        .line {
            display: flex;
            .line-grouping {
                padding-bottom: 20px;
                flex: 1;
            }       
            .line-options {
                opacity: 0;
            }
            &.active {
                background-color: #283c63;
                color: white;
            }
            &.recordable:hover {
                background-color: #283c63;
                color: white;
                cursor: pointer;
                .line-options {
                    opacity: 1;
                }
            }
            &.active {
                background-color: #283c63;
                color: white;                    
            }
            &.playable {
                color: green;
            }
        }

    }        

}
</style>
