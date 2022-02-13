(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["viewCourse"],{5060:function(t,e,i){},"53b4":function(t,e,i){"use strict";i("5060")},"615b":function(t,e,i){},"6ece":function(t,e,i){},"942e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"hau hau-view-course-page"},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-card",{attrs:{elevation:"0"}},[i("v-card-text",[i("v-row",[t.activeVideo?i("v-col",{attrs:{cols:"12",md:"8",lg:"9"}},[i("youtube",{ref:"testYT",staticClass:"hau hau-yt-player",attrs:{"video-id":t.activeVideo.youtubeID,"player-vars":{autoplay:1}}}),i("h1",{staticClass:"hau hau-title mt-4 mb-4"},[t._v(" "+t._s(t.activeVideo.videoTitle)+" ")]),i("h2",{staticClass:"hau hau-subtitle mb-2"},[t._v(" "+t._s(t.activeCourseName)+" by "+t._s(t.activeCourse.author)+" ")]),i("p",{staticClass:"hau hau-desc"},[t._v(t._s(t.activeVideo.description))])],1):t._e(),i("v-col",{attrs:{cols:"12",md:"4",lg:"3"}},[i("v-list",{staticClass:"hau hau-video-list",attrs:{"three-line":""}},t._l(t.videos,(function(e){return i("v-list-item",{key:e.id,staticClass:"hau hau-video",on:{click:function(){return t.onClick(e.id)}}},[i("v-list-item-avatar",[i("v-icon",[t._v("mdi-play-circle-outline")])],1),i("v-tooltip",{attrs:{right:"","max-width":"320px","content-class":"hau hau-tooltip"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,a=n.attrs;return[i("v-list-item-content",t._g(t._b({},"v-list-item-content",a,!1),r),[i("v-list-item-title",{staticClass:"hau hau-video-title text-wrap",domProps:{innerHTML:t._s(e.videoTitle)}}),i("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.activeCourse.author)}})],1)]}}],null,!0)},[i("span",[t._v(t._s(e.description))])])],1)})),1)],1)],1)],1)],1)],1)],1)],1)},r=[],a=i("1da1");i("96cf"),i("ac1f"),i("5319"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("d3b7"),i("7db0");function s(t,e){var i=[];return i.push({action:t.play,queries:["play","clay","gray","resume"]}),i.push({action:t.pause,queries:["pause","pos","course","plus","pulse","horse","force"]}),i.push({action:t.next,queries:["next","nex","next video"]}),i.push({action:t.back,queries:["back","previous","return","black","beck","block"]}),i.push({action:t.stop,queries:["stop","stop","stop video"]}),i.find((function(t){return t.queries.some((function(t){return t===e||e.indexOf(t)>-1}))}))}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;t=t.replace(/[\\[\]]/g,"\\$&");var i=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),n=i.exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function c(){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:250,t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 2:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}var l={computed:{isCourseSelected:function(){return!!this.activeCourse},activeCourse:function(){return this.$store.getters.activeCourse},activeCourseName:function(){return this.activeCourse?this.activeCourse.courseTitle:"Loading..."},videos:function(){return this.activeCourse?this.activeCourse.videos:[]},activeVideo:function(){return this.$store.getters.activeVideo},player:function(){return this.$refs.testYT.player}},data:function(){return{id:null}},mounted:function(){var t=this;if(t.id=parseInt(o("id")),t.$store.dispatch("setActiveCourseID",this.id),window.annyang)try{var e={"John *anything":function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(i){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=i.toLowerCase(),r=s(t,n),console.log("Recognized ".concat(n)),console.log(r),!r){e.next=7;break}return e.next=7,r.action();case 7:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()};window.annyang.addCommands(e)}catch(i){console.log("Annyang is having troubles")}finally{window.annyang.setLanguage("en"),window.annyang.start()}},methods:{onClick:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$store.dispatch("setActiveVideoID",t);case 2:e.player&&e.player.playVideo();case 3:case"end":return i.stop()}}),i)})))()},next:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("playNextVideo");case 2:return e.next=4,c(250);case 4:t.player&&(t.player.playVideo(),t.player.unMute());case 5:case"end":return e.stop()}}),e)})))()},back:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("playPreviousVideo");case 2:return e.next=4,c(250);case 4:t.player&&(t.player.playVideo(),t.player.unMute());case 5:case"end":return e.stop()}}),e)})))()},pause:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.player&&t.player.pauseVideo();case 1:case"end":return e.stop()}}),e)})))()},play:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.player&&(t.player.playVideo(),t.player.unMute());case 1:case"end":return e.stop()}}),e)})))()},stop:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.player&&t.player.stopVideo();case 1:case"end":return e.stop()}}),e)})))()}}},h=l,d=(i("53b4"),i("2877")),p=i("6544"),v=i.n(p),f=i("b0af"),g=i("99d9"),m=i("62ad"),b=i("a523"),y=i("132d"),_=i("8860"),C=i("da13"),w=i("8270"),x=i("5d23"),k=i("0fd9"),O=i("ade3"),V=(i("a9e3"),i("9734"),i("4ad4")),B=i("a9ad"),j=i("16b7"),$=i("b848"),T=i("f573"),R=i("f2e7"),L=i("80d2"),S=i("d9bd"),z=i("58df"),I=Object(z["a"])(B["a"],j["a"],$["a"],T["a"],R["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,r=!1!==this.attach?e.offsetLeft:e.left,a=0;return this.top||this.bottom||n?a=r+e.width/2-i.width/2:(this.left||this.right)&&(a=r+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(a,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=n+e.height/2-i.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),!1===this.attach&&(r+=this.pageYOffset),"".concat(this.calcYOverflow(r),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(L["g"])(this.maxWidth),minWidth:Object(L["g"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(L["n"])(this,"activator",!0)&&Object(S["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=V["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===L["p"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(O["a"])(t,this.contentClass,!0),Object(O["a"])(t,"menuable__content__active",this.isActive),Object(O["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),A=Object(d["a"])(h,n,r,!1,null,null,null);e["default"]=A.exports;v()(A,{VCard:f["a"],VCardText:g["b"],VCol:m["a"],VContainer:b["a"],VIcon:y["a"],VList:_["a"],VListItem:C["a"],VListItemAvatar:w["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VRow:k["a"],VTooltip:I})},9734:function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}));var n=i("b0af"),r=i("80d2"),a=Object(r["h"])("v-card__actions"),s=Object(r["h"])("v-card__subtitle"),o=Object(r["h"])("v-card__text"),c=Object(r["h"])("v-card__title");n["a"]},b0af:function(t,e,i){"use strict";var n=i("5530"),r=(i("a9e3"),i("0481"),i("4069"),i("615b"),i("10d2")),a=i("2b0e"),s=i("ade3"),o=(i("c7cd"),i("6ece"),i("0789")),c=i("90a2"),u=i("a9ad"),l=i("fe6c"),h=i("a452"),d=i("7560"),p=i("80d2"),v=i("58df"),f=Object(v["a"])(u["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),h["a"],d["a"]),g=f.extend({name:"v-progress-linear",directives:{intersect:c["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(p["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(p["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(s["a"])(t,this.isReversed?"right":"left",Object(p["g"])(this.normalizedValue,"%")),Object(s["a"])(t,"width",Object(p["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(n["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["b"]:o["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(p["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(p["m"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},onObserve:function(t,e,i){this.isVisible=i},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(p["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),m=g,b=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),y=i("1c87");e["a"]=Object(v["a"])(b,y["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},y["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=b.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=viewCourse.11913de9.js.map