webpackJsonp([9],{cNRo:function(t,e,o){(t.exports=o("UTlt")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:""}])},ciCU:function(t,e,o){var n=o("cNRo");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("FIqI")("570950c3",n,!0,{})},ovbP:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("lC5x"),a=o.n(n),s=o("J0Oq"),i=o.n(s),r=o("teIl"),u=o("TVmP"),c=o("wHgX"),l=o("YcJa"),d=o("0jG4"),f={data:function(){return{blog:{},status:200}},computed:{isNoBlog:function(){return 404===this.status}},created:function(){this.getBlogDetail()},methods:{getBlogDetail:function(){var t=this;return i()(a.a.mark(function e(){var o,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$route.params.id,e.next=3,d.a.getBlogDetail(o);case 3:n=e.sent,t.status=n.status,t.blog=n.data,404!==t.status&&(document.title=t.blog.title+" - "+document.title);case 7:case"end":return e.stop()}},e,t)}))()}},watch:{$route:function(t,e){this.getBlogDetail()}},components:{Header:r.a,Footer:u.a,NotFound:l.default,Detail:c.a}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return this.isNoBlog?e("NotFound"):e("main",[e("Header"),this._v(" "),e("Detail",{attrs:{blog:this.blog}}),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var p=o("C7Lr")(f,g,!1,function(t){o("ciCU")},"data-v-675816ed",null);e.default=p.exports}});
//# sourceMappingURL=9.963e28e91d380348b5c7.js.map