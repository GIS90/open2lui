(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4c9436c"],{"40f6":function(t,e,i){"use strict";i("bd18")},9346:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{attrs:{id:"guide-opr-container"}},[i("el-button",{attrs:{icon:"el-icon-position",type:"primary",plain:!0},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.guide(e)}}},[t._v(" 开启向导 ")])],1),i("div",{staticClass:"guide-data-container",attrs:{id:"guide-data-container"}},[i("aside",[i("p",[t._v("系统向导页面是对本系统对初次使用人员的一个引导，方便用户了解系统的基础信息、菜单简介、功能介绍、团队等信息。使用者也可以跳过此引导直接进行使用，每个功能会有相应的功能使用简介。")]),i("p",[t._v("更多系统详情请参考下列《"+t._s(t.title)+"系统说明》。")])])])])},n=[],s=i("c24c"),r=i.n(s),a=(i("01d7"),[{element:"#sidebar-container",popover:{title:"系统菜单",description:"系统功能菜单列表，分为一级菜单、二级菜单",position:"right",offset:20},padding:0},{element:"#hamburger-container",popover:{title:"导航菜单",description:"打开&&关闭导航菜单",position:"bottom",offset:20},padding:0},{element:"#breadcrumb-container",popover:{title:"菜单栏",description:"指示当前页面菜单位置",position:"right",offset:20},padding:0},{element:"#header-search",popover:{title:"菜单查询",description:"页面搜索，快速导航",position:"left",offset:20},padding:0},{element:"#screenfull",popover:{title:"全屏",description:"将页面设置为全屏",position:"left",offset:20},padding:0},{element:"#size-select",popover:{title:"页面大小",description:"切换系统大小",position:"left",offset:20},padding:0},{element:"#user-avatar",popover:{title:"个人中心",description:"用户个人中心与设置",position:"left",offset:20},padding:0},{element:"#tags-view-container",popover:{title:"TagsViews",description:"您访问的页面的历史记录",position:"bottom",offset:20},padding:0},{element:"#guide-opr-container",popover:{title:"操作域",description:"系统定制功能的交互操作域",position:"bottom",offset:0},padding:0},{element:"#guide-data-container",popover:{title:"数据域",description:"系统定制功能的数据展示域",position:"bottom",offset:0},padding:0}]),p=a,d=i("83d6"),c={name:"Guide",data:function(){return{driver:null,info:d["baseInfo"]||{name:"OpenTool-Z",version:"V1.2.1",author:"PyGo²",furl:"https://github.com/GIS90",burl:"https://github.com/GIS90/open2lisapi.git"},title:"OPENTOOL-Z智行工具箱",motto:"践行践远，智慧前行"}},mounted:function(){this.driver=new r.a({className:"scoped-class",animate:!0,opacity:.6,padding:0,allowClose:!0,overlayClickNext:!1,stageBackground:"#20dfff",showButtons:!0,keyboardControl:!0,doneBtnText:"完成",closeBtnText:"关闭",nextBtnText:"下一步",prevBtnText:"上一步",onHighlightStarted:function(t){},onHighlighted:function(t){},onDeselected:function(t){},onReset:function(t){},onNext:function(t){},onPrevious:function(t){}})},methods:{guide:function(){this.driver.defineSteps(p),this.driver.start()}}},l=c,f=(i("40f6"),i("2877")),u=Object(f["a"])(l,o,n,!1,null,"0970a2fe",null);e["default"]=u.exports},bd18:function(t,e,i){}}]);