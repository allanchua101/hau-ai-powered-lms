(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["viewCourse"],{5060:function(t,e,i){},"53b4":function(t,e,i){"use strict";i("5060")},"615b":function(t,e,i){},"6ece":function(t,e,i){},"942e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"hau hau-view-course-page"},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-card",{attrs:{elevation:"0"}},[i("v-card-text",[i("v-row",[t.activeVideo?i("v-col",{attrs:{cols:"12",md:"8",lg:"9"}},[i("youtube",{staticClass:"hau hau-yt-player",attrs:{"video-id":t.activeVideo.youtubeID},on:{ready:t.ready}}),i("h1",{staticClass:"hau hau-title mt-4 mb-4"},[t._v(" "+t._s(t.activeVideo.videoTitle)+" ")]),i("h2",{staticClass:"hau hau-subtitle mb-2"},[t._v(" "+t._s(t.activeCourseName)+" by "+t._s(t.activeCourse.author)+" ")]),i("p",{staticClass:"hau hau-desc"},[t._v(t._s(t.activeVideo.description))])],1):t._e(),i("v-col",{attrs:{cols:"12",md:"4",lg:"3"}},[i("v-list",{staticClass:"hau hau-video-list",attrs:{"three-line":""}},t._l(t.videos,(function(e){return i("v-list-item",{key:e.id,staticClass:"hau hau-video",on:{click:function(){return t.onClick(e.id)}}},[i("v-list-item-avatar",[i("v-icon",[t._v("mdi-play-circle-outline")])],1),i("v-tooltip",{attrs:{right:"","max-width":"320px","content-class":"hau hau-tooltip"},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,n=s.attrs;return[i("v-list-item-content",t._g(t._b({},"v-list-item-content",n,!1),a),[i("v-list-item-title",{staticClass:"hau hau-video-title text-wrap",domProps:{innerHTML:t._s(e.videoTitle)}}),i("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.activeCourse.author)}})],1)]}}],null,!0)},[i("span",[t._v(t._s(e.description))])])],1)})),1)],1)],1)],1)],1)],1)],1)],1)},a=[];i("ac1f"),i("5319"),i("4d63"),i("c607"),i("2c3e"),i("25f0");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;t=t.replace(/[\\[\]]/g,"\\$&");var i=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),s=i.exec(e);return s?s[2]?decodeURIComponent(s[2].replace(/\+/g," ")):"":null}var r={computed:{isCourseSelected:function(){return!!this.activeCourse},activeCourse:function(){return this.$store.getters.activeCourse},activeCourseName:function(){return this.activeCourse?this.activeCourse.courseTitle:"Loading..."},videos:function(){return this.activeCourse?this.activeCourse.videos:[]},activeVideo:function(){return this.$store.getters.activeVideo}},data:function(){return{id:null}},mounted:function(){this.id=parseInt(n("id")),this.$store.dispatch("setActiveCourseID",this.id)},methods:{onClick:function(t){this.$store.dispatch("setActiveVideoID",t)},ready:function(t){this.player=t.target}}},o=r,c=(i("53b4"),i("2877")),l=i("6544"),h=i.n(l),u=i("b0af"),d=i("99d9"),v=i("62ad"),f=i("a523"),p=i("132d"),g=i("8860"),m=i("da13"),b=i("8270"),_=i("5d23"),y=i("0fd9"),C=i("ade3"),B=(i("a9e3"),i("9734"),i("4ad4")),O=i("a9ad"),k=i("16b7"),V=i("b848"),w=i("f573"),x=i("f2e7"),j=i("80d2"),$=i("d9bd"),T=i("58df"),S=Object(T["a"])(O["a"],k["a"],V["a"],w["a"],x["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,n=0;return this.top||this.bottom||s?n=a+e.width/2-i.width/2:(this.left||this.right)&&(n=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=s+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=s+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),!1===this.attach&&(a+=this.pageYOffset),"".concat(this.calcYOverflow(a),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(j["g"])(this.maxWidth),minWidth:Object(j["g"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(j["n"])(this,"activator",!0)&&Object($["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=B["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===j["p"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(C["a"])(t,this.contentClass,!0),Object(C["a"])(t,"menuable__content__active",this.isActive),Object(C["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),L=Object(c["a"])(o,s,a,!1,null,null,null);e["default"]=L.exports;h()(L,{VCard:u["a"],VCardText:d["b"],VCol:v["a"],VContainer:f["a"],VIcon:p["a"],VList:g["a"],VListItem:m["a"],VListItemAvatar:b["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:y["a"],VTooltip:S})},9734:function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));var s=i("b0af"),a=i("80d2"),n=Object(a["h"])("v-card__actions"),r=Object(a["h"])("v-card__subtitle"),o=Object(a["h"])("v-card__text"),c=Object(a["h"])("v-card__title");s["a"]},b0af:function(t,e,i){"use strict";var s=i("5530"),a=(i("a9e3"),i("0481"),i("4069"),i("615b"),i("10d2")),n=i("2b0e"),r=i("ade3"),o=(i("c7cd"),i("6ece"),i("0789")),c=i("90a2"),l=i("a9ad"),h=i("fe6c"),u=i("a452"),d=i("7560"),v=i("80d2"),f=i("58df"),p=Object(f["a"])(l["a"],Object(h["b"])(["absolute","fixed","top","bottom"]),u["a"],d["a"]),g=p.extend({name:"v-progress-linear",directives:{intersect:c["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(r["a"])(t,this.isReversed?"right":"left",Object(v["g"])(this.normalizedValue,"%")),Object(r["a"])(t,"width",Object(v["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(s["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["b"]:o["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(v["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(v["m"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(r["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},onObserve:function(t,e,i){this.isVisible=i},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(v["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),m=g,b=n["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),_=i("1c87");e["a"]=Object(f["a"])(b,_["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},_["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=b.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=viewCourse.d30ae5d0.js.map