webpackJsonp([1],{NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("7+uW"),a={name:"App",data:function(){return{msg:"",links:[]}},methods:{initMenu:function(){var n=this;this.$axios.get("api/list.json").then(function(t){console.log(t),n.links=t.data.menus}).catch(function(n){console.log(n)}).then(function(){})}},mounted:function(){this.initMenu()}},o={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[n._v("路由")]),n._v(" "),e("ul",n._l(n.links,function(t){return e("li",{key:t.id},[e("router-link",{attrs:{to:t.path}},[n._v(n._s(t.title))])],1)}),0),n._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")(a,o,!1,function(n){e("mrHE")},null,null).exports,c=e("/ocq"),s={render:function(){var n=this.$createElement;return(this._self._c||n)("div",[this._v("\n  "+this._s(this.content)+"\n")])},staticRenderFns:[]};var u=e("VU/8")({name:"JavaScript",data:function(){return{content:"javascript"}}},s,!1,function(n){e("lobI")},"data-v-04990f72",null).exports,l={render:function(){var n=this.$createElement;return(this._self._c||n)("div",[this._v("\n  "+this._s(this.content)+"\n")])},staticRenderFns:[]};var p=e("VU/8")({name:"Golang",data:function(){return{content:"Golang"}}},l,!1,function(n){e("ODio")},"data-v-ddc99904",null).exports;i.a.use(c.a);var v=new c.a({routes:[{path:"/",redirect:"/JavaScript"},{path:"/JavaScript",name:"JavaScript",component:u},{path:"/Golang",name:"Golang",component:p}]}),d=e("mtWM"),f=e.n(d);i.a.prototype.$axios=f.a,i.a.config.productionTip=!1,new i.a({el:"#app",router:v,components:{App:r},template:"<App/>"})},ODio:function(n,t){},lobI:function(n,t){},mrHE:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.52e316dd28a2b3d3c95e.js.map