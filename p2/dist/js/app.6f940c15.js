(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1b0a":function(e,t,r){},"1c49":function(e,t,r){e.exports=r.p+"img/image-not-available.549b729b.jpg"},2624:function(e,t,r){},"379d":function(e,t,r){},"41ca":function(e,t,r){"use strict";var n=r("1b0a"),i=r.n(n);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,i=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Scripter logo",id:"logo",src:r("d09e")}}),n("p",[e._v(" Record script readings with anyone in the world! ")]),n("p",{staticClass:"instructions"},[e._v("Instructions: Go to a script and hover over any line. Hold down the microphone button (you'll have to allow microphone settings when asked) and start speaking. Let go of the button and it will save your audio file. Click on each line to play the line! It will be green if there's an audio file available.")]),n("nav",[n("ul",[n("li",e._l(e.links,(function(t){return n("router-link",{key:t,attrs:{to:e.paths[t],exact:""}},[e._v(e._s(t))])})),1)])]),n("router-view",{attrs:{scripts:e.scripts},on:{"update-scripts":function(t){return e.updateScripts()}}})],1)},o=[],s=r("bc3a").create({baseURL:null!==(n="https://e28-api.matthew.kim")&&void 0!==n?n:"http://e28-api.loc:8888",responseType:"json"}),c={name:"App",data:function(){return{scripts:[],links:["home","add a script"],paths:{home:"/",scripts:"/scripts",categories:"/categories","add a script":"/scripts/new"}}},methods:{updateScripts:function(){var e=this;s.get("script").then((function(t){e.scripts=t.data.script}))}},mounted:function(){this.updateScripts()}},l=c,u=(r("5c0b"),r("2877")),d=Object(u["a"])(l,a,o,!1,null,null,null),p=d.exports,v=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("show-featured",{attrs:{category:"TV",scripts:e.scripts}}),r("show-featured",{attrs:{category:"Movie",scripts:e.scripts}}),e._m(0)],1)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"instructions"},[e._v(" Other Stuff I want to add "),r("ul",[r("li",[e._v("Authentication - have only registerd users add and edit line")]),r("li",[e._v("Authentication - save the user to the line")]),r("li",[e._v("UI - play through the entire script without clicking on each line")])])])}],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"featured"}},[r("h2",[e._v(e._s(e.category)+" Scenes")]),r("ul",{staticClass:"cleanList"},e._l(e.featuredScripts,(function(t){return r("li",{key:t.id},[r("router-link",{attrs:{to:"/scripts/"+t.id}},[r("span",{staticClass:"h3"},[e._v(e._s(t.name))]),e._v(" - "+e._s(t.scene)+" ")])],1)})),0)])},_=[],g=(r("4de4"),{name:"show-featured",props:["category","scripts"],computed:{featuredScripts:function(){var e=this;return console.log("category",this.category),this.scripts.filter((function(t){return console.log("category",e.category),t.category===e.category}))}}}),b=g,y=(r("6f41"),Object(u["a"])(b,h,_,!1,null,"a731ca06",null)),w=y.exports,x={name:"",props:["scripts"],components:{"show-featured":w},data:function(){return{}}},L=x,C=Object(u["a"])(L,m,f,!1,null,"2a3809c0",null),$=C.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"product-page"}},[e.script?r("div",[r("show-script",{attrs:{script:e.script}})],1):e._e(),e.scriptNotFound?r("div",[r("p",[e._v("Script "+e._s(e.id)+" not found.")]),r("router-link",{attrs:{to:"/products"}},[e._v("Go to all scripts ")])],1):e._e()])},O=[],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"script"},[r("div",{staticClass:"script-name"},[e._v(" "+e._s(e.script.name)+" ")]),r("div",{staticClass:"script-scene"},[e._v(" "+e._s(e.script.scene)+" ")]),e.script.video_url?r("iframe",{attrs:{width:"400",height:"280",src:e.script.video_url,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):e._e(),r("p",{staticClass:"author"},[r("b",[e._v("Screenplay Author:")]),e._v(" "+e._s(e.script.screenplay_author)+" ")]),r("p",{staticClass:"directed_by"},[r("b",[e._v("Directed By:")]),e._v(" "+e._s(e.script.directed_by)+" ")]),r("p",{staticClass:"characters"},[r("b",[e._v("Characters:")]),e._v(" "+e._s(e.script.characters)+" ")]),r("script-lines",{attrs:{scriptId:e.script.id}})],1)},E=[],P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"lines"}},[e.lines.length?e._e():r("div",{staticClass:"error"},[e._v("No Lines Available, Add One Now!")]),e.lines.length?r("h3",[e._v(" Start Scene ")]):e._e(),e.currentLineToEdit?r("edit-line",{attrs:{line:e.currentLineToEdit},on:{close:function(t){e.currentLineToEdit=null}}}):e._e(),r("vue-record-audio",{directives:[{name:"show",rawName:"v-show",value:e.showRecorder,expression:"showRecorder"}],ref:"recorder",attrs:{id:"recorder",mode:"hold"},on:{stream:e.onStream,result:e.onRecordingResult}}),r("ul",e._l(e.lines,(function(t,n){return r("li",{key:t.id,staticClass:"line recordable",class:{active:t==e.currentLine,playable:!!t.audio_file},on:{click:function(r){return e.playLine(t,r)},mouseenter:function(r){return e.mouseoverLine(r,t,n)}}},[r("div",{staticClass:"line-grouping"},[t.scene?r("div",{staticClass:"scene"},[r("div",[e._v("SCENE")]),r("i",[e._v(e._s(t.scene))])]):e._e(),t.character?r("div",{staticClass:"character"},[e._v(e._s(t.character))]):e._e(),t.action?r("div",{staticClass:"action"},[e._v("("+e._s(t.action)+")")]):e._e(),t.line?r("div",[e._v(e._s(t.line))]):e._e()]),r("div",{staticClass:"line-options"},[r("button",{on:{click:function(r){return e.editLine(t,n)}}},[r("span",{staticClass:"material-icons"},[e._v("edit")])])])])})),0),r("add-line",{attrs:{script_id:e.scriptId},on:{"add-line":function(t){return e.updateLines()}}}),e.lines.length?r("h3",[e._v("End Scene")]):e._e(),r("div",{staticClass:"audio-container",staticStyle:{display:"none"}},[e.currentLine.audio_file?r("audio",{attrs:{id:"audio-player",src:e.currentLine.audio_file,controls:""}}):e._e()])],1)},k=[],j=(r("a434"),r("d3b7"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"modal"}},[r("div",{staticClass:"modal-mask"},[r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal-container"},[r("div",{staticClass:"modal-header"},[e._t("header",[e._v(" Edit Line ")])],2),r("div",{staticClass:"modal-body"},[e._t("body",[r("div",[r("div",{attrs:{id:"inputs"}},[r("label",{attrs:{for:"name"}},[e._v("Character")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.line.character,expression:"line.character"}],attrs:{type:"text",id:"character"},domProps:{value:e.line.character},on:{input:function(t){t.target.composing||e.$set(e.line,"character",t.target.value)}}}),r("label",{attrs:{for:"name"}},[e._v("Action")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.line.action,expression:"line.action"}],attrs:{type:"text",id:"action"},domProps:{value:e.line.action},on:{input:function(t){t.target.composing||e.$set(e.line,"action",t.target.value)}}}),r("label",{attrs:{for:"name"}},[e._v("Scene")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.line.scene,expression:"line.scene"}],attrs:{type:"text",id:"scene"},domProps:{value:e.line.scene},on:{input:function(t){t.target.composing||e.$set(e.line,"scene",t.target.value)}}}),r("label",{attrs:{for:"name"}},[e._v("Order")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.line.order,expression:"line.order"}],attrs:{type:"text",id:"order"},domProps:{value:e.line.order},on:{input:function(t){t.target.composing||e.$set(e.line,"order",t.target.value)}}}),r("label",{attrs:{for:"characters"}},[e._v("Line")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.line.line,expression:"line.line"}],attrs:{id:"line"},domProps:{value:e.line.line},on:{input:function(t){t.target.composing||e.$set(e.line,"line",t.target.value)}}})]),r("button",{on:{click:e.updateLine}},[e._v("Update Line")]),r("button",{staticClass:"modal-default-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Cancel")]),e._v(" "+e._s(e.errors)+" ")])])],2)])])])])}),R=[],T={data:function(){return{errors:""}},props:["line","method"],methods:{updateLine:function(){var e=this;s.put("/line/".concat(this.line.id),this.line).then((function(t){t.data.errors?e.errors=t.data.errors:e.$emit("close")}))}}},A=T,M=(r("f9eb"),Object(u["a"])(A,j,R,!1,null,"ed93c540",null)),I=M.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-line"},[r("div",{attrs:{id:"inputs"}},[r("label",{attrs:{for:"name"}},[e._v("Character")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.line.character,expression:"line.character"}],attrs:{type:"text",id:"character"},domProps:{value:e.line.character},on:{input:function(t){t.target.composing||e.$set(e.line,"character",t.target.value)}}}),r("label",{attrs:{for:"name"}},[e._v("Action")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.line.action,expression:"line.action"}],attrs:{type:"text",id:"action"},domProps:{value:e.line.action},on:{input:function(t){t.target.composing||e.$set(e.line,"action",t.target.value)}}}),r("label",{attrs:{for:"name"}},[e._v("Scene")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.line.scene,expression:"line.scene"}],attrs:{type:"text",id:"scene"},domProps:{value:e.line.scene},on:{input:function(t){t.target.composing||e.$set(e.line,"scene",t.target.value)}}}),r("label",{attrs:{for:"name"}},[e._v("Order")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.line.order,expression:"line.order"}],attrs:{type:"number",id:"order"},domProps:{value:e.line.order},on:{input:function(t){t.target.composing||e.$set(e.line,"order",t.target.value)}}}),r("label",{attrs:{for:"characters"}},[e._v("Line")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.line.line,expression:"line.line"}],attrs:{id:"line"},domProps:{value:e.line.line},on:{input:function(t){t.target.composing||e.$set(e.line,"line",t.target.value)}}})]),r("button",{on:{click:e.addLine}},[e._v("Add Line")]),r("div",[e._v(" "+e._s(e.errors)+" ")])])},q=[],U={data:function(){return{line:{},errors:""}},props:["script_id"],methods:{addLine:function(){var e=this;s.post("/line",this.line).then((function(t){t.data.errors?e.errors=t.data.errors:e.$emit("add-line")}))}},mounted:function(){this.line.script_id=this.script_id}},D=U,G=(r("b8c2"),Object(u["a"])(D,F,q,!1,null,"5cb48d5c",null)),H=G.exports,z=function(e){var t=new FileReader;return t.readAsDataURL(e),new Promise((function(e){t.onloadend=function(){e(t.result)}}))},B={name:"script-line",props:["scriptId"],data:function(){return{lines:[],showRecorder:!1,currentLine:{},currentLineIndex:0,currentLineToEdit:null}},computed:{},components:{"edit-line":I,"add-line":H},mounted:function(){var e=this;s.get("line/query",{params:{script_id:this.scriptId}}).then((function(t){e.lines=t.data.results}))},methods:{updateLines:function(){var e=this;s.get("line/query",{params:{script_id:this.scriptId}}).then((function(t){e.lines=t.data.results}))},playEntireScene:function(){this.currentLine=this.lines[0]},playLine:function(e,t){if(console.log("$event",t),(!t||"recorder"!==t.srcElement.id)&&e.audio_file){var r=new Audio(e.audio_file);r.play()}},onStream:function(e){console.log("Got a stream object:",e)},deleteLine:function(e,t){var r=this;s.delete("/line/".concat(e.id)).then((function(e){console.log("response",e),console.log("lines",r.lines),r.lines.splice(t,1)}))},editLine:function(e){this.currentLineToEdit=e},updateLine:function(e,t,r){var n=this;console.log("updating line",e,t),e.audio_file=t,console.log("line",e),s.put("/line/".concat(e.id),e).then((function(t){console.log("response",t),console.log("lines",n.lines),console.log("currentLineIndex",r),n.$set(n.lines,r,e)})),s.get("line/query",{params:{script_id:this.scriptId}}).then((function(e){n.lines=e.data.results}))},uploadFileToCloudinary:function(e,t,r){var n=this;console.log("prepint file to upload");var i="https://api.cloudinary.com/v1_1/mattkim/upload",a=new XMLHttpRequest,o=new FormData;a.open("POST",i,!0),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.onreadystatechange=function(){if(4==a.readyState&&200==a.status){var e=JSON.parse(a.responseText),i=e.secure_url;console.log("updateLine"),n.updateLine(t,i,r),n.playLine(t)}},o.append("upload_preset","e28-bklczr9c"),o.append("tags","browser_upload"),o.append("file",e),a.send(o),console.log("sent file")},onRecordingResult:function(e){var t=this;console.log("onRecordingResult",e),z(e).then((function(e){t.uploadFileToCloudinary(e,t.currentLine,t.currentLineIndex)}))},mouseoverLine:function(e,t,r){this.showRecorder=!0,this.currentLine=t,this.currentLineIndex=r,e.target.appendChild(this.$refs.recorder.$el)}}},J=B,V=(r("41ca"),Object(u["a"])(J,P,k,!1,null,"39803662",null)),X=V.exports,Z={name:"show-script",props:["script"],components:{"script-lines":X},data:function(){return{}},computed:{imageSource:function(){try{return r("c2f8")("./"+this.script.id+".jpg")}catch(e){return r("1c49")}}}},K=Z,W=Object(u["a"])(K,N,E,!1,null,null,null),Y=W.exports,Q={name:"",props:["id","scripts"],components:{"show-script":Y},data:function(){return{}},computed:{script:function(){var e=this;return this.scripts.filter((function(t){return t.id==e.id}),this.id)[0]},scriptNotFound:function(){return null==this.script}}},ee=Q,te=Object(u["a"])(ee,S,O,!1,null,null,null),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Add a Script")]),r("div",{attrs:{id:"inputs"}},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.script.name,expression:"script.name"}],attrs:{type:"text",id:"name",required:""},domProps:{value:e.script.name},on:{input:function(t){t.target.composing||e.$set(e.script,"name",t.target.value)}}}),r("label",{attrs:{for:"category"}},[e._v("Category:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.script.category,expression:"script.category"}],attrs:{id:"category",required:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.script,"category",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"TV"}},[e._v("TV")]),r("option",{attrs:{value:"Movie"}},[e._v("Movie")])]),r("label",{attrs:{for:"scene"}},[e._v("Scene:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.script.scene,expression:"script.scene"}],attrs:{type:"text",id:"scene"},domProps:{value:e.script.scene},on:{input:function(t){t.target.composing||e.$set(e.script,"scene",t.target.value)}}}),r("label",{attrs:{for:"video_url"}},[e._v("Youtube Embed URL:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.script.video_url,expression:"script.video_url"}],attrs:{type:"text",id:"video_url"},domProps:{value:e.script.video_url},on:{input:function(t){t.target.composing||e.$set(e.script,"video_url",t.target.value)}}}),r("label",{attrs:{for:"screenplay_author"}},[e._v("Screenplay Author:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.script.screenplay_author,expression:"script.screenplay_author"}],attrs:{type:"text",id:"screenplay_author"},domProps:{value:e.script.screenplay_author},on:{input:function(t){t.target.composing||e.$set(e.script,"screenplay_author",t.target.value)}}}),r("label",{attrs:{for:"attribution"}},[e._v("Attribution")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.script.attribution,expression:"script.attribution"}],attrs:{type:"text",id:"attribution"},domProps:{value:e.script.attribution},on:{input:function(t){t.target.composing||e.$set(e.script,"attribution",t.target.value)}}}),r("label",{attrs:{for:"attribution"}},[e._v("Directed By")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.script.directed_by,expression:"script.directed_by"}],attrs:{type:"directed_by",id:"directed_by"},domProps:{value:e.script.directed_by},on:{input:function(t){t.target.composing||e.$set(e.script,"directed_by",t.target.value)}}}),r("label",{attrs:{for:"characters"}},[e._v("Characters")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.script.characters,expression:"script.characters"}],attrs:{id:"characters"},domProps:{value:e.script.characters},on:{input:function(t){t.target.composing||e.$set(e.script,"characters",t.target.value)}}})]),r("button",{on:{click:e.addScript}},[e._v("Add Script")]),e._v(" "+e._s(e.errors)+" ")])},ie=[],ae={data:function(){return{errors:null,showConfirmationMessage:!1,script:{name:"The Godfather",category:"Movie",scene:"Leave The Gun - Take the Cannoli",video_url:"https://www.youtube.com/embed/35fLKn2Tq3o",screenplay_author:"Mario Puzo, Francis Ford Coppola",attribution:"Based on a Novel by Mario Puzo",directed_by:"Francis Ford Coppola",characters:"MRS. CLEMENZA, CLEMENZA, PAULIE, ROCCO"}}},methods:{addScript:function(){var e=this;s.post("/script",this.script).then((function(t){t.data.errors?e.errors=t.data.errors:e.$router.push("/")}))}}},oe=ae,se=(r("6f30"),Object(u["a"])(oe,ne,ie,!1,null,"6810bfd8",null)),ce=se.exports,le=r("c9d0"),ue=r.n(le);i["a"].config.productionTip=!1,i["a"].use(ue.a),i["a"].use(v["a"]);var de=new v["a"]({mode:"history",routes:[{path:"/",component:$},{path:"/scripts/new",component:ce},{path:"/scripts/:id",component:re,props:!0}]});new i["a"]({router:de,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),i=r.n(n);i.a},"6f30":function(e,t,r){"use strict";var n=r("7b06"),i=r.n(n);i.a},"6f41":function(e,t,r){"use strict";var n=r("2624"),i=r.n(n);i.a},"7b06":function(e,t,r){},"9c0c":function(e,t,r){},b8c2:function(e,t,r){"use strict";var n=r("379d"),i=r.n(n);i.a},c2f8:function(e,t,r){var n={"./image-not-available.jpg":"1c49"};function i(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id="c2f8"},d09e:function(e,t,r){e.exports=r.p+"img/scripterlogo.7bd4e4bb.png"},e451:function(e,t,r){},f9eb:function(e,t,r){"use strict";var n=r("e451"),i=r.n(n);i.a}});
//# sourceMappingURL=app.6f940c15.js.map