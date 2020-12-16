# scripter

# Project 3
+ By: Matthew Kim
+ Production URL: <https://e28p3.matthew.kim/>

## Pages summary
HomePage - List of Scripts
ScriptCreatePage - View Script Details and its lines
ScriptPage- Add a new Script with lines

## SFC summary
ScriptLines - Render a Script's lines and ability to record an audio clip of the line by holding down the mic icon
ShowFeatured - Render a list of Scripts Grouped by Category
ShowScript - Render a Script's details with its lines
EditLine - Edit a Line Modal
AddLine - Add a New Line Modal

## Server interaction
Ability to update the audio file of each individua line in a script by hovering over the line and holding down the microphone button - This uses cloudinary to actually store the audio file, but the end audio file url is saved on the server
Ability to update each line's contents (line, scene, action, character) in a script by hovering over the line and clicking the edit button
Ability to delete a line
Ability to add a new script
Ability to update script line or content to make adjustments

## Outside resources
Cloudinary <https://www.cloudinary.com> I needed a place to store the audio file. This site is typically used to upload images but I used this to store the audio files
Vue Record - <https://github.com/codekraft-studio/vue-record>
Modal - <https://vuejs.org/v2/examples/modal.html>

## Notes for instructor
I work in the performaing arts industry and I always wanted a way for people to record lines in a script remotely with different, random people. (I really wanted video too but didn't have time) And then have a way to play back each line. You can view a script, hover over the line, and you should see the microhphone. Hold down the microhpone to activate the record, and it will save the audio file to Cloudinary once you release. If there is a audio recording available, the text will be green. You can click to play the existing recording. I used an existing Vue component (vue-record) to manage the audio, but for performance, I figured how to just use 1 of these components and move it around using a mouseenter event and appendChild. You will need to allow the microphone to use this site.

# scripter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
