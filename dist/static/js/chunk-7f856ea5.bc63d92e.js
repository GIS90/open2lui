(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f856ea5"],{"0fea":function(t,e,a){"use strict";a.d(e,"f",(function(){return l})),a.d(e,"i",(function(){return n})),a.d(e,"l",(function(){return s})),a.d(e,"k",(function(){return r})),a.d(e,"a",(function(){return i})),a.d(e,"j",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"m",(function(){return d})),a.d(e,"h",(function(){return p})),a.d(e,"g",(function(){return f})),a.d(e,"n",(function(){return b})),a.d(e,"b",(function(){return h})),a.d(e,"c",(function(){return w})),a.d(e,"o",(function(){return m})),a.d(e,"q",(function(){return g})),a.d(e,"p",(function(){return v})),a.d(e,"e",(function(){return A}));var o=a("b775");function l(t){return Object(o["a"])({url:"/auth/role",method:"post",data:t})}function n(t){return Object(o["a"])({url:"/auth/roleadd",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/auth/roleupdate",method:"post",data:t})}function r(t){return Object(o["a"])({url:"/auth/roleinfo",method:"get",params:t})}function i(t){return Object(o["a"])({url:"/auth/rolemdel",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/auth/roledel",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/auth/tree",method:"get",params:t})}function d(t){return Object(o["a"])({url:"/auth/rolesavetree",method:"post",data:t})}function p(){return Object(o["a"])({url:"/auth/roleselect",method:"get"})}function f(t){return Object(o["a"])({url:"/auth/user",method:"post",data:t})}function b(t){return Object(o["a"])({url:"/auth/useradd",method:"post",data:t})}function h(t){return Object(o["a"])({url:"/auth/usermdel",method:"post",data:t})}function w(t){return Object(o["a"])({url:"/auth/userstatus",method:"post",data:t})}function m(t){return Object(o["a"])({url:"/auth/userinfo",method:"get",params:t})}function g(t){return Object(o["a"])({url:"/auth/userupdate",method:"post",data:t})}function v(t){return Object(o["a"])({url:"/auth/userrp",method:"get",params:t})}function A(t){return Object(o["a"])({url:"/auth/menu",method:"post",data:t})}},"12dc":function(t,e,a){},"599b":function(t,e,a){},"6ec9":function(t,e,a){"use strict";a("599b")},a943:function(t,e,a){"use strict";a("12dc")},e211:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-button",{attrs:{id:"btn-create",size:t.btnBaseAttrs.size,plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,disabled:t.btnDisabled},on:{click:t.openAddMenu}},[a("svg-icon",{attrs:{"icon-class":"i_add"}}),t._v(" 新增 ")],1),a("el-button",{staticClass:"btn-margin",attrs:{id:"btn-tip",type:"success",plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,size:t.btnBaseAttrs.size,disabled:t.btnDisabled},on:{click:function(e){return t.openTip()}}},[a("svg-icon",{attrs:{"icon-class":"i_sm"}}),t._v(" 字段说明 ")],1),a("menu-expand",{attrs:{expand:t.expandStatus},on:{"menu-expand-status":t.menuExpandStatus}})],1),a("div",{staticClass:"table-sty",attrs:{id:"data-container"}},[a("el-table",{ref:"multipleSourceTableRef",staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{data:t.tableData,"row-key":t.tableAttrs.rowKey,size:t.tableAttrs.size,fit:t.tableAttrs.fit,"show-header":t.tableAttrs.showHeader,"highlight-current-row":t.tableAttrs.hcr,border:t.tableAttrs.border,"default-expand-all":t.tableAttrs.expand,"default-sort":{prop:"id",order:"asc"},"empty-text":t.tableAttrs.emptyText,"header-cell-style":t.setTableHeaderStyle,"tree-props":t.tableAttrs.treeProps,"expand-row-keys":t.tableOneKeys}},[a("el-table-column",{attrs:{fixed:"left",prop:"id",label:"菜单ID",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"name",label:"RTX名称",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"title",label:"中文名称",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"path",label:"请求地址",width:"180","header-align":t.tableRowAttrs.headerAlign,align:"left",sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"level",label:"级别",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"icon",label:"菜单图标",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"component",label:"组件",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"hidden",label:"隐藏属性",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"redirect",label:"重定向",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"noCache",label:"Cache属性",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"affix",label:"Affix属性",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"breadcrumb",label:"Breadcrumb属性",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{label:"创建时间","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,width:"240",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(e.row.create_time))])]}}])}),a("el-table-column",{attrs:{prop:"create_rtx",label:"创建者RTX",width:"180",align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:t.tableRowAttrs.align,width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:"详情",placement:"top"}},[a("i",{staticClass:"el-icon-document",on:{click:function(a){return t.rowHandleEdit(e.$index,e.row,"detail")}}})]),a("el-tooltip",{staticClass:"icon-item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[a("i",{staticClass:"el-icon-edit",on:{click:function(a){return t.rowHandleEdit(e.$index,e.row,"info")}}})])]}}])})],1)],1),a("menu-tip",{attrs:{show:t.tipDialogStatus},on:{"close-tip":t.closeTip}}),a("menu-detail",{attrs:{show:t.detailDialogStatus,"row-md5":t.oprSelectRtx},on:{"close-detail-menu":t.closeDetailMenu}}),a("menu-set",{attrs:{show:t.setDialogStatus,"row-md5":t.oprSelectRtx},on:{"close-set-menu":t.closeSetMenu}})],1)},l=[],n=(a("d3b7"),a("ddb0"),a("d81d"),a("4360")),s=a("0fea"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{disabled:t.switchAttrs.disabled,width:t.switchAttrs.width,"active-text":t.switchAttrs.activeText,"inactive-text":t.switchAttrs.inactiveText,"active-color":t.switchAttrs.activeColor,"inactive-color":t.switchAttrs.inactiveColor,"active-value":t.switchAttrs.activeValue,"inactive-value":t.switchAttrs.inactiveValue},on:{change:function(e){return t.changeStatus(e)}},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})},i=[],c=(a("caad"),{name:"MenuExpand",emits:["menu-expand-status"],components:{},props:{expand:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}}},data:function(){return{status:this.expand,switchAttrs:{disabled:!1,width:40,activeText:"展开",inactiveText:"关闭",activeValue:!0,inactiveValue:!1,activeColor:"#ff4949",inactiveColor:"#13ce66"}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{changeStatus:function(t){this.$emit("menu-expand-status",t)}}}),u=c,d=a("2877"),p=Object(d["a"])(u,r,i,!1,null,"8781fbf4",null),f=p.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-drawer",{attrs:{visible:t.show,title:"字段说明",modal:t.drawerAttrs.modal,direction:t.drawerAttrs.arrow,"show-close":t.drawerAttrs.closeButton,"close-on-click-modal":t.drawerAttrs.closeOnModal,"close-on-press-escape":t.drawerAttrs.closeOnEsc},on:{close:function(e){return t.close()}}},[a("div",{staticClass:"app-container tip"},[t._v(" 帮助快速了解菜单信息。 "),a("ol",[a("li",[t._v("菜单ID：ID")]),a("li",[t._v("RTX名称：唯一标识，子菜单基于父菜单（一级）RTX名称进行拓展，采用驼峰写法，不可更改信息")]),a("li",[t._v("中文名称：菜单中文名称，为系统左侧的菜单栏显示内容")]),a("li",[t._v("请求地址：访问菜单功能的URL地址信息")]),a("li",[t._v("级别：一级菜单、二级菜单")]),a("li",[t._v("菜单图标：显示左侧菜单栏的图标")]),a("li",[t._v("组件：配置菜单对应VUE前端开发组件名称（"),a("span",{staticClass:"info_red"},[t._v("开发者参数配置")]),t._v("）")]),a("li",[t._v("隐藏属性：是否在菜单栏显示，默认值为false，如果设置为true，项目将不会显示在菜单栏中（"),a("span",{staticClass:"info_red"},[t._v("开发者参数配置")]),t._v("）")]),a("li",[t._v("重定向：用于一级菜单配置，访问或者转发URL时进行的Redirect URL跳转（"),a("span",{staticClass:"info_red"},[t._v("开发者参数配置")]),t._v("）")]),a("li",[t._v("noCache属性：是否缓存菜单页码，默认为false（缓存），如果设置为true，则不会缓存页面（"),a("span",{staticClass:"info_red"},[t._v("开发者参数配置")]),t._v("）")]),a("li",[t._v("Affix属性：是否固定在TagView（标签视图）中，默认为false（不固定），如果设置为true，菜单标签将固定在TagView（"),a("span",{staticClass:"info_red"},[t._v("开发者参数配置")]),t._v("）")]),a("li",[t._v("Breadcrumb属性：是否在顶部菜单面包屑中进行显示，默认为true（显示），如果设置为false，则隐藏在面包屑中（"),a("span",{staticClass:"info_red"},[t._v("开发者参数配置")]),t._v("）")]),a("li",[t._v("创建时间：菜单创建时间")]),a("li",[t._v("创建者RTX：菜单创建用户的RTX-ID")])])])])],1)},h=[],w={name:"MenuTip",emits:["close-tip"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}}},data:function(){return{drawer:!0,drawerAttrs:{arrow:"rtl",modal:!1,closeButton:!0,closeOnModal:!0,closeOnEsc:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{close:function(){this.$emit("close-tip")}}},m=w,g=(a("6ec9"),Object(d["a"])(m,b,h,!1,null,"34d5eb58",null)),v=g.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:t.openDialog,close:t.closeDialog}},[t._v(" detail ")])],1)},x=[],_={name:"MenuDetail",emits:["close-detail-menu"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},rowMd5:{type:String,require:!0,default:""}},data:function(){return{dialogAttrs:{title:"菜单详情",width:"65%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{closeDialog:function(){this.$emit("close-detail-menu")},openDialog:function(){}}},S=_,R=Object(d["a"])(S,A,x,!1,null,"5315fe20",null),D=R.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:t.openDialog,close:t.closeDialog}},[t._v(" info ")])],1)},O=[],C={name:"MenuSet",emits:["close-set-menu"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},rowMd5:{type:String,require:!0,default:""}},data:function(){return{dialogAttrs:{title:"菜单信息",width:"65%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{closeDialog:function(){this.$emit("close-set-menu")},openDialog:function(){}}},k=C,T=Object(d["a"])(k,y,O,!1,null,"04c58cec",null),j=T.exports,M={name:"Menu",emits:[],components:{"menu-expand":f,"menu-tip":v,"menu-detail":D,"menu-set":j},props:{},data:function(){return{btnDisabled:!1,expandStatus:!1,btnBaseAttrs:{size:"medium",type:"primary",plain:!0,round:!1,circle:!1},switchAttrs:{disabled:!1,width:40,activeText:"展开",inactiveText:"关闭",activeValue:!0,inactiveValue:!1,activeColor:"#ff4949",inactiveColor:"#13ce66"},tableAttrs:{rowKey:"id",stripe:!0,border:!0,size:"medium",fit:!0,showHeader:!0,hcr:!0,height:450,maxHeight:450,expand:!1,treeProps:{children:"children"},showSum:!0,sumText:"统计",emptyText:"暂无数据"},tableRowAttrs:{type:"selection",index:1,fixed:!0,resizable:!0,align:"center",headerAlign:"center",sot:!0},tableData:[],tableOneKeys:[],tipDialogStatus:!1,oprSelectRtx:"",deleteConfirm:!1,detailDialogStatus:!1,setDialogStatus:!1,addDialogStatus:!1}},computed:{},watch:{},created:function(){this.getMenuList()},mounted:function(){},methods:{getMenuList:function(){var t=this;this.oprSelectRtx="";var e={rtx_id:n["a"].getters.rtx_id};return new Promise((function(a,o){Object(s["e"])(e).then((function(e){var o=e.status_id,l=e.data;100!==o&&101!==o||(t.tableData=l.list,t.tableOneKeys=l.keys),a(e)})).catch((function(e){t.loading=!1,o(e)}))}))},setTableHeaderStyle:function(){return{background:"#eee",color:"#606266"}},rowHandleEdit:function(t,e,a){if(console.log(t),console.log(e),console.log(a),!e||!a)return!1;this.oprSelectRtx=e.rtx_id,"detail"===a?this.detailDialogStatus=!0:"info"===a&&(this.setDialogStatus=!0)},closeDetailMenu:function(){this.detailDialogStatus=!1},closeSetMenu:function(t){this.setDialogStatus=!1,t&&this.getMenuList()},openAddMenu:function(){this.addDialogStatus=!0},closeAddMenu:function(t){this.addDialogStatus=!1,t&&this.getMenuList()},menuExpandStatus:function(t){var e=this;this.expandStatus=t,this.tableOneKeys.map((function(a){return e.$refs.multipleSourceTableRef.toggleRowExpansion(a,t)}))},openTip:function(){this.tipDialogStatus=!0},closeTip:function(){this.tipDialogStatus=!1}}},E=M,B=(a("a943"),Object(d["a"])(E,o,l,!1,null,"aabdc42c",null));e["default"]=B.exports}}]);