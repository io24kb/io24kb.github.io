(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{300:function(t,e,i){},306:function(t,e,i){"use strict";i(300)},310:function(t,e,i){"use strict";i.r(e);i(59),i(86);var a={name:"article-list",props:{catalogues:{default:function(){},type:Object}},data:function(){return{level:1}},methods:{getRoutePath:function(t){return t.replace(".md",".html")},getFilename:function(t){return t.replace(".md","")}}},l=(i(306),i(38)),n=Object(l.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article-list"},t._l(t.catalogues,(function(e,a){return i("div",{key:e.id,class:1===e.level?"dir":"dir first-dir"},[i("p",{class:1===e.level?"dir-name":"dir-name first-dir-name"},[t._v(t._s(a))]),t._v(" "),t._l(e.childFiles,(function(e,a){return i("div",{key:a,staticClass:"file"},[i("a",{staticClass:"file-name",attrs:{href:t.getRoutePath(e.routePath)}},[t._v(t._s(t.getFilename(e.articleName)))])])})),t._v(" "),i("article-list",{attrs:{catalogues:e.childDir}})],2)})),0)}),[],!1,null,"d4f6ffe6",null);e.default=n.exports}}]);