(function(e){function t(t){for(var i,n,s=t[0],u=t[1],c=t[2],d=0,l=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&l.push(a[n][0]),a[n]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);h&&h(t);while(l.length)l.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],i=!0,n=1;n<o.length;n++){var s=o[n];0!==a[s]&&(i=!1)}i&&(r.splice(t--,1),e=u(u.s=o[0]))}return e}var i={},n={app:0},a={app:0},r=[];function s(e){return u.p+"js/"+({about:"about",team:"team",viewCourse:"viewCourse"}[e]||e)+"."+{about:"b345610d",team:"4420bf53",viewCourse:"c5cc3234"}[e]+".js"}function u(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var t=[],o={about:1,team:1,viewCourse:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var i="css/"+({about:"about",team:"team",viewCourse:"viewCourse"}[e]||e)+"."+{about:"5fd2e905",team:"0815f7cc",viewCourse:"447486b0"}[e]+".css",a=u.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===i||d===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],d=c.getAttribute("data-href");if(d===i||d===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var i=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[e],h.parentNode.removeChild(h),o(r)},h.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){n[e]=0})));var i=a[e];if(0!==i)if(i)t.push(i[2]);else{var r=new Promise((function(t,o){i=a[e]=[t,o]}));t.push(i[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(h);var o=a[e];if(0!==o){if(o){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,o[1](l)}a[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=i,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(o,i,function(t){return e[t]}.bind(null,i));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/hau-ai-powered-lms/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var h=d;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"3a60":function(e,t,o){"use strict";o("4a47")},"4a47":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{staticClass:"hau hau--app"},[o("v-app-bar",{attrs:{app:"",color:"#272727",dark:"",elevation:"0",dense:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2 hau hau-logo",attrs:{contain:"",src:"imgs/logo.svg",transition:"scale-transition",width:"32"},on:{click:e.onLogoClick}}),e._v(" HAU AI - Collator ")],1),o("v-spacer"),e.isMobile?o("v-menu",{attrs:{bottom:"",left:"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[o("v-btn",e._g(e._b({attrs:{dark:"",icon:""}},"v-btn",n,!1),i),[o("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,1510716892)},[o("v-list",e._l(e.items,(function(t,i){return o("v-list-item",{key:i,attrs:{to:t.route}},[o("v-list-item-icon",[o("v-icon",[e._v(e._s(t.icon))])],1),o("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1):e._e()],1),e.isMobile?e._e():o("v-navigation-drawer",{attrs:{permanent:"",absolute:"","mini-variant":e.mini},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("v-divider"),o("v-list",{attrs:{dense:""}},e._l(e.items,(function(t){return o("v-list-item",{key:t.title,attrs:{link:"",to:t.route}},[o("v-list-item-icon",[o("v-icon",[e._v(e._s(t.icon))])],1),o("v-list-item-content",[o("v-list-item-title",[e._v(" "+e._s(t.title)+" ")])],1)],1)})),1)],1),o("v-main",{staticClass:"hau hau-main-view"},[o("router-view")],1)],1)},a=[],r=(o("b0c0"),{name:"App",components:{},data:function(){return{items:[{title:"Courses",icon:"mdi-home",route:"/"},{title:"Our Team",icon:"mdi-account-group-outline",route:"/team"},{title:"About our Project",icon:"mdi-information-outline",route:"/about"}],drawer:!0,mini:!0}},computed:{fullName:function(){return this.$store?this.$store.getters.fullName:""},isMobile:function(){var e=this.$vuetify.breakpoint.name;return"xs"===e||"sm"===e}},methods:{onLogoClick:function(){this.$router.push({path:"/"})}}}),s=r,u=(o("5c0b"),o("2877")),c=o("6544"),d=o.n(c),l=o("7496"),h=o("40dc"),m=o("8336"),p=o("ce7e"),v=o("132d"),w=o("adda"),f=o("8860"),b=o("da13"),g=o("5d23"),C=o("34c3"),y=o("f6c4"),k=o("e449"),I=o("f774"),T=o("2fa4"),x=Object(u["a"])(s,n,a,!1,null,null,null),A=x.exports;d()(x,{VApp:l["a"],VAppBar:h["a"],VBtn:m["a"],VDivider:p["a"],VIcon:v["a"],VImg:w["a"],VList:f["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemIcon:C["a"],VListItemTitle:g["c"],VMain:y["a"],VMenu:k["a"],VNavigationDrawer:I["a"],VSpacer:T["a"]});var N=o("f309");i["a"].use(N["a"]);var P=new N["a"]({}),V=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{staticClass:"hau hau-courses"},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h1",[e._v("Courses")])]),e._l(e.courseList,(function(t){return o("v-col",{key:t.id,attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{attrs:{elevation:"0",outlined:""}},[o("v-img",{attrs:{src:t.courseBanner,height:"200px"}}),o("v-card-text",[o("h5",{staticClass:"hau hau-course-title"},[e._v(e._s(t.courseTitle))]),o("p",{staticClass:"hau hau-course-author"},[e._v(e._s(t.author))])]),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"#202024"},on:{click:function(){return e.onClick(t.id)}}},[o("v-icon",{staticClass:"mr-1"},[e._v("mdi-monitor-eye")]),e._v(" View ")],1)],1)],1)],1)}))],2)],1)},_=[],U={computed:{courseList:function(){return this.$store.getters.courseList}},methods:{onClick:function(e){this.$router.push({path:"/course/view/?id="+e})}}},D=U,Z=(o("3a60"),o("b0af")),j=o("99d9"),F=o("62ad"),M=o("a523"),S=o("0fd9"),J=Object(u["a"])(D,L,_,!1,null,null,null),q=J.exports;d()(J,{VBtn:m["a"],VCard:Z["a"],VCardActions:j["a"],VCardText:j["b"],VCol:F["a"],VContainer:M["a"],VIcon:v["a"],VImg:w["a"],VRow:S["a"],VSpacer:T["a"]}),i["a"].use(V["a"]);var G=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/team",name:"Team",component:function(){return o.e("team").then(o.bind(null,"0767"))}},{path:"/course/view/",name:"View Course",component:function(){return o.e("viewCourse").then(o.bind(null,"942e"))}}],B=new V["a"]({routes:G}),E=B,O=o("1da1"),R=o("2909"),W=(o("7db0"),o("96cf"),o("2f62")),H=o("c25a");i["a"].use(W["a"]);var K=new W["a"].Store({state:{firstName:"John",lastName:"Doe",courses:Object(R["a"])(H["a"]),activeCourseID:null,activeVideoID:1},mutations:{setActiveCourse:function(e,t){e.activeCourseID=t,e.activeVideoID=1},setActiveVideo:function(e,t){e.activeVideoID=t}},actions:{setActiveCourseID:function(e,t){var o=e.commit;o("setActiveCourse",t)},setActiveVideoID:function(e,t){var o=e.commit;o("setActiveVideo",t)},playNextVideo:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var o,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e.commit,i=e.state,n=i.courses[i.activeCourseID-1].videos.length,i.activeVideoID!==n){t.next=4;break}return t.abrupt("return");case 4:o("setActiveVideo",i.activeVideoID+1);case 5:case"end":return t.stop()}}),t)})))()},playPreviousVideo:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e.commit,i=e.state,1!==i.activeVideoID){t.next=3;break}return t.abrupt("return");case 3:o("setActiveVideo",i.activeVideoID-1);case 4:case"end":return t.stop()}}),t)})))()}},modules:{},getters:{fullName:function(e){return e.firstName+" "+e.lastName},courseList:function(e){return e.courses},activeCourse:function(e){return e.courses.find((function(t){return t.id===e.activeCourseID}))},activeVideo:function(e){var t=e.courses.find((function(t){return t.id===e.activeCourseID}));return t?t.videos.find((function(t){return t.id===e.activeVideoID})):null}}}),Y=o("f6dd");i["a"].config.productionTip=!1,i["a"].use(Y["a"]),new i["a"]({vuetify:P,router:E,store:K,render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"9c0c":function(e,t,o){},c25a:function(e){e.exports=JSON.parse('{"a":[{"id":1,"courseTitle":"Computer Vision","author":"AWS Machine Learning University","courseBanner":"https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","videos":[{"id":1,"videoTitle":"Accelerated Computer Vision 1.1 - Intro","link":"https://www.youtube.com/watch?v=_6CFi2CO2AI&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta","description":"In this video, we go over this course overview, learning outcomes and machine learning resources that we will use in this class.","youtubeID":"_6CFi2CO2AI"},{"id":2,"videoTitle":"Accelerated Computer Vision 1.2 - Introduction to Machine Learning","link":"https://www.youtube.com/watch?v=mwNtbKh39SA&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=3","description":"In this video, we make an introduction to Machine Learning (ML). We learn machine learning lifecycle that gives us a high level view of some important ML processes and cover some useful ML terminology.","youtubeID":"mwNtbKh39SA"},{"id":3,"videoTitle":"Accelerated Computer Vision 1.3 - ML Applications","link":"https://www.youtube.com/watch?v=UM4a1quelGk&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=3","description":"In this video, we give some commonly seen ML application examples. We go over ranking, recommendation, classification, regression, clustering and anomaly detection applications and see some examples.","youtubeID":"UM4a1quelGk"},{"id":4,"videoTitle":"Accelerated Computer Vision 1.4 - Supervised and Unsupervised Learning","link":"https://www.youtube.com/watch?v=yCm5NmBADD0&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=4","description":"In this video, we learn supervised and unsupervised learning. We then dive into more details of supervised learning with regression and classification problems, and a clustering example for unsupervised learning.","youtubeID":"yCm5NmBADD0"},{"id":5,"videoTitle":"Accelerated Computer Vision 1.5 - Data Processing - Imbalanced Data","link":"https://www.youtube.com/watch?v=lKN076dleoA&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=5","description":"In this video, we learn some data processing methods. We first start with the data imbalance problem and go over some methods to solve it. We then dive into the details about image augmentation methods to produce some altered images. At the end, we learn how to split our dataset into training, validation and test subsets which is a critical process in ML.","youtubeID":"lKN076dleoA"},{"id":6,"videoTitle":"Accelerated Computer Vision 1.6 - Underfitting, Overfitting and Model Evaluation","link":"https://www.youtube.com/watch?v=VRdDB3J1_2k&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=6","description":"In this video, we learn how to find out whether our ML models might be underfitting or overfitting. We also go over important model evaluation metrics for regression and classification problems. For regression, we have Mean Square Error (MSE), Rooted Mean Square Error (RMSE), Mean Absolute Error (MAE) and R Squared (R2) metrics. For classification, we introduce confusion matrix and learn Accuracy, Precision & Recall and F1 score metrics.","youtubeID":"VRdDB3J1_2k"},{"id":7,"videoTitle":"Accelerated Computer Vision 1.7 - Computer Vision Applications","link":"https://www.youtube.com/watch?v=HmiB0RbdwTk&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=7","description":"In this video, we get familiar with some main computer vision applications. We learn image classification, object detection and semantic segmentation tasks.","youtubeID":"HmiB0RbdwTk"},{"id":8,"videoTitle":"Accelerated Computer Vision 1.8 - Image Representation","link":"https://www.youtube.com/watch?v=o6xH2kmBda0&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=8","description":"In this video, we learn how images are represented in our machine learning programs. We then see dive into two types of images: Gray scale images and color images.","youtubeID":"o6xH2kmBda0"},{"id":9,"videoTitle":"Accelerated Computer Vision 1.9 - Neuron & Activation Functions","link":"https://www.youtube.com/watch?v=k-1rohIhR1A&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=9","description":"In this video, we learn an important part of neural networks: Artificial neurons and their activation functions. We learn how artificial neurons work and cover some well-known activation functions: Sigmoid, Hyperbolic Tangent (tanh) and Rectified Linear Unit (ReLU).","youtubeID":"k-1rohIhR1A"},{"id":10,"videoTitle":"Accelerated Computer Vision 1.10 - Neural Networks: Components and Training","link":"https://www.youtube.com/watch?v=tbKCR1v93ok&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=10","description":"In this video, we dive into deep learning (or often called Neural Networks). We learn the layered structure of neural networks, how data is passed with forward propagation and how training (backpropagation) works. We then see more details on training with the gradient descent method and how to pick up a learning rate.","youtubeID":"tbKCR1v93ok"},{"id":11,"videoTitle":"Accelerated Computer Vision 1.11 - Convolutions (Filters)","link":"https://www.youtube.com/watch?v=JEEUbAzwmuI&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=11","description":"In this video, we learn what convolutions (often called filters or kernels) are and how we can derive them by translation invariance and locality of human vision system. We then see how to integrate convolutions in to neural networks.","youtubeID":"JEEUbAzwmuI"},{"id":12,"videoTitle":"Accelerated Computer Vision 1.12 - Padding, Stride and Pooling","link":"https://www.youtube.com/watch?v=8gybwqgB_L8&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=12","description":"In this video, we dive into more details about convolution operations with padding and stride. We then learn pooling layer that allows us to downsample our feature maps. At the end, we see a simple CNN made of convolution, pooling and dense layers.","youtubeID":"8gybwqgB_L8"},{"id":13,"videoTitle":"Using Jupyter Notebooks on Sagemaker","link":"https://www.youtube.com/watch?v=-DKydfPFqBM&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=13","description":"In this video, we learn how to run Jupyter notebooks on Sagemaker. GitHub repositories: Accelarated NLP ,  Accelarated CV, Accelarated TAB","youtubeID":"-DKydfPFqBM"},{"id":14,"videoTitle":"Accelerated Computer Vision 2.1 - Computer Vision Datasets","link":"https://www.youtube.com/watch?v=6ACoEFKKd3g&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=14","description":"We get familiar with some well-known computer vision datasets in this video. We go over MNIST, Fashion-MNIST, CIFAR-10, ImageNet, Places and Open Images datasets and how we can utilize these datasets for a various of compute vision applications.","youtubeID":"6ACoEFKKd3g"},{"id":15,"videoTitle":"Accelerated Computer Vision 2.2 - LeNet","link":"https://www.youtube.com/watch?v=EjYsirSi0No&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=15","description":"In this video, we learn one of the earliest successful CNN architectures: LeNet. We explain its architectural details and visualize how it applies on the real-world MNIST dataset.","youtubeID":"EjYsirSi0No"},{"id":16,"videoTitle":"Accelerated Computer Vision 2.3 - AlexNet","link":"https://www.youtube.com/watch?v=Kti3fRE5IHs&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=16","description":"In this video, we learn one of the most important CNN models: AlexNet. We go over the architecture design of AlexNet, and understand which architecture components boost its performance by comparing with LeNet which we learned in the previous video.","youtubeID":"Kti3fRE5IHs"},{"id":17,"videoTitle":"Accelerated Computer Vision 2.4 - Transfer Learning","link":"https://www.youtube.com/watch?v=4ZLMsbYe6QQ&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=17","description":"In this video, we learn the transfer learning concept that enables us to save time and computational cost. By using some pretrained models instead of training from scratch, transfer learning allows us utilizing knowledge gained from other ML models. We understand a various of methods to apply transfer learning and a popular pretrained model zoo - GluonCV.","youtubeID":"4ZLMsbYe6QQ"},{"id":18,"videoTitle":"Accelerated Computer Vision 3.1 - VGG and Batch Normalization","link":"https://www.youtube.com/watch?v=IhMW2agL4Js&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=18","description":"In this video, we dive into the VGG model. First, we understand its architecture and point out differences from the previously learned model AlexNet. We then learn batch normalization that normalizes inputs of each layers of neural networks and improves speed and training convergence of networks.","youtubeID":"IhMW2agL4Js"},{"id":19,"videoTitle":"Accelerated Computer Vision 3.2 - ResNet","link":"https://www.youtube.com/watch?v=4FFXCH7eSS4&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=19","description":"In this video, we first talk about the degradation problem resulted from adding more layers to neural networks. Then, we learn the ResNet model through the residual connection concept and understand how it solves the degradation problem.","youtubeID":"4FFXCH7eSS4"},{"id":20,"videoTitle":"Accelerated Computer Vision 3.3 - Object Detection Applications","link":"https://www.youtube.com/watch?v=Xf-5r9MghYg&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=20","description":"In this video, we see some example applications of object detection.","youtubeID":"Xf-5r9MghYg"},{"id":21,"videoTitle":"Accelerated Computer Vision 3.4 - Bounding Box and Anchor Bo","link":"https://www.youtube.com/watch?v=_7s0IRD7OQs&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=21","description":"In this video, we introduce bounding box which is important for object detection problems. We then go over Intersection over Union (IoU) concept to quantify goodness of our proposed bounding boxes. Besides, we talk about the issues of bounding box (such as occlusion) and the solution - anchor box.","youtubeID":"_7s0IRD7OQs"},{"id":22,"videoTitle":"Accelerated Computer Vision 3.5 - Sliding Window Method and Non-max Suppression","link":"https://www.youtube.com/watch?v=ehs7plKpfE8&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=22","description":"In this video, we learn how to best utilize bounding box: the sliding window method and Non-Max Suppression (NMS). With NMS, we refine the proposed bounding boxes by removing some of them using overlap and confidence scores.","youtubeID":"ehs7plKpfE8"},{"id":23,"videoTitle":"Accelerated Computer Vision 3.6 - Region Based Convolutional Neural Networks (R-CNNs)","link":"https://www.youtube.com/watch?v=Z9nCBtaEb_g&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=23","description":"In this video, we introduce an object detection method: Region Based Convolutional Neural Networks (R-CNNs) and explain its selective search, feature extraction and prediction steps. We then go over two other models that improved upon the R-CNN model: Fast R-CNN and Faster R-CNN.","youtubeID":"Z9nCBtaEb_g"},{"id":24,"videoTitle":"Accelerated Computer Vision 3.7 - You Only Look Once (YOLO) model","link":"https://www.youtube.com/watch?v=NfLycjxyEww&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=25","description":"In this video, we cover another object detection model: You Only Look Once (YOLO). We see that this model introduces a grid-like structure and uses an object detection network that can be easily trained end-to-end. We also go over the output shape of the network that depends on how many bounding boxes produced and the number of classes.","youtubeID":"NfLycjxyEww"},{"id":25,"videoTitle":"Accelerated Computer Vision 3.8 - Semantic Segmentation","link":"https://www.youtube.com/watch?v=yHVfQWNrLQo&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=26","description":"In this video, we learn the semantic segmentation concept and go over some example datasets.","youtubeID":"yHVfQWNrLQo"},{"id":26,"videoTitle":"Accelerated Computer Vision 3.9 - Fully Convolutional Networks","link":"https://www.youtube.com/watch?v=nph6SI8KxTM&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=24","description":"In this video, we go over our first semantic segmentation network - Fully Convolutional Networks (FCNs). We learn the important components of FCNs, such as transposed convolution and skip connections.","youtubeID":"nph6SI8KxTM"},{"id":27,"videoTitle":"Accelerated Computer Vision 3.10 - U-Net","link":"https://www.youtube.com/watch?v=PXJI6JcQB34&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&index=27","description":"In this video, we learn our last network of this course: U-Net, and compare it with the Fully Convolutional Networks (FCNs).","youtubeID":"PXJI6JcQB34"}]},{"id":2,"courseTitle":"Natural Language Processing (NLP)","author":"AWS Machine Learning University","courseBanner":"https://images.unsplash.com/photo-1592431913823-7af6b323da9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","videos":[{"id":1,"videoTitle":"Accelerated Natural Language Processing 1.1 - Course Introduction","link":"https://www.youtube.com/watch?v=0FXKbEgz-uU&list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw","description":"In this video, we go over the course overview, learning outcomes and machine learning resources that we will use in this class.","youtubeID":"0FXKbEgz-uU"}]}]}')}});
//# sourceMappingURL=app.3eed301e.js.map