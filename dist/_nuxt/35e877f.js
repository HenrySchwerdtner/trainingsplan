(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{378:function(t,e,r){"use strict";r.r(e);var n={props:{abbreviation:{type:String,required:!0},area:{type:String,required:!0},description:{type:String,required:!0},display_name:{type:String,required:!0},duration:{type:String,required:!0},provider:{type:String,required:!0},seniority:{type:String,required:!0},tags:{type:String,required:!0},training:{type:String,required:!0},type:{type:String,required:!0},url:{type:String,required:!0}}},o=r(71),d=r(88),l=r.n(d),c=r(382),v=r(376),_=r(393),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v(t._s(t.training))]),t._v(" "),r("v-card-subtitle",[t.abbreviation.length>0?r("b",[t._v(t._s(t.abbreviation)+":")]):t._e(),t._v("\n    "+t._s(t.display_name)+"\n  ")]),t._v(" "),r("v-divider",{staticClass:"primary"}),t._v(" "),r("br"),t._v(" "),r("v-card-text",[r("div",[t._v(t._s(t.description))]),t._v(" "),r("br"),t._v(" "),r("v-divider",{staticClass:"primary"}),t._v(" "),r("div",{staticClass:"text-caption"},[r("b",[t._v("Duration:")]),t._v(" "+t._s(t.duration)+"h")]),t._v(" "),r("div",{staticClass:"text-caption"},[r("b",[t._v("Provider:")]),t._v(" "+t._s(t.provider))]),t._v(" "),r("div",{staticClass:"text-caption"},[r("b",[t._v("Senority:")]),t._v(" "+t._s(t.seniority))]),t._v(" "),r("div",{staticClass:"text-caption"},[r("b",[t._v("Type:")]),t._v(" "+t._s(t.type))]),t._v(" "),r("div",{staticClass:"text-caption"},[r("b",[t._v("Url:")]),t._v(" "+t._s(t.url))])],1),t._v(" "),r("v-card-actions")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:c.a,VCardActions:v.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VDivider:_.a})},384:function(t,e,r){"use strict";r(28);var n=r(0),o=r(385);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},385:function(t,e,r){"use strict";var n=r(379);e.a=n.a},392:function(t,e,r){"use strict";r.r(e);r(28);var n=r(378),o={name:"TrainingDraggable",props:{id:{type:String,required:!0},title:{type:String,required:!0},training:{type:Object,required:!0},type:{type:String,required:!0},width:{type:Number,default:100},height:{type:Number,default:100},rounded:{type:Boolean,default:!1}},data:function(){return{isShowing:!1,colorCodes:{Certificate:"#E31937",Course:"#D6A5B1",Knowledge:"#5236AB","Soft Skills":"#991F3D"}}},components:{CertificatePopup:n.default}},d=r(71),l=r(88),c=r.n(l),v=r(512),_=r(49),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"text-center",staticStyle:{cursor:"pointer"},style:"width: "+t.width+"px; height:"+t.height+"px; font-weight: bold; background:"+t.colorCodes[t.type]+"; color: white;margin:0;padding:0;white-space: wrap;display:block;word-wrap: break-word; white-space:normal;",attrs:{width:t.width,height:t.height,rounded:t.rounded,elevation:"2"},on:{click:function(e){t.isShowing=!t.isShowing}}},[r("v-dialog",{attrs:{width:"500"},model:{value:t.isShowing,callback:function(e){t.isShowing=e},expression:"isShowing"}},[r("CertificatePopup",t._b({},"CertificatePopup",t.training,!1))],1),t._v(" "),r("div",{staticStyle:{position:"relative",top:"50%",transform:"translateY(-50%)"}},[t._v("\n    "+t._s(t.title)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{CertificatePopup:r(378).default}),c()(component,{VDialog:v.a,VSheet:_.a})},522:function(t,e,r){"use strict";r.r(e);r(190),r(35),r(72),r(59);var n=r(392),o={props:{id:{type:String,required:!0}},methods:{getCertificatebyId:function(t){var e=this.certificatesID.indexOf(t);return this.certificates[e]},validURL:function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},computed:{certificates:{get:function(){return this.$store.getters["certificates/get"]}},certificatesID:{get:function(){return this.$store.getters["certificates/get"].map((function(t){return t.id}))}},training:function(){return this.getCertificatebyId(this.id)}},components:{TrainingDraggable:n.default}},d=r(71),l=r(88),c=r.n(l),v=r(382),_=r(510),h=r(115),f=r(511),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[t.training?r("v-list-item",{attrs:{"three-line":""}},[t.training.provider?r("div",{staticClass:"text-overline mb-4"},[t._v("\n      "+t._s(t.training.provider)+"\n    ")]):t._e(),t._v(" "),r("v-row",[r("v-col",[r("v-row",[r("v-col",[r("TrainingDraggable",{attrs:{width:100,height:100,id:t.id,title:t.training.abbreviation,type:t.training.type}})],1),t._v(" "),r("v-col",[r("div",{staticClass:"text-overline mb-4"},[t._v("\n              Description:\n            ")]),t._v(" "),r("div",[t._v(t._s(t.training.description))]),t._v(" "),r("v-row",[r("v-col"),t._v(" "),r("v-col")],1)],1)],1)],1),t._v(" "),r("v-col",[t.validURL(t.training.URL)?r("div",[r("a",{attrs:{href:t.training.URL}},[t._v("Check on the Provider Page")])]):r("div",[t._v(t._s(t.training.URL))])])],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:v.a,VCol:_.a,VListItem:h.a,VRow:f.a})}}]);