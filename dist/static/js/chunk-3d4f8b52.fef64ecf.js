(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d4f8b52"],{"133c":function(t,e,a){"use strict";a("7c25")},3716:function(t,e,a){},"3cbc":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pan-item",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[a("div",{staticClass:"pan-info"},[a("div",{staticClass:"pan-info-roles-container"},[t._t("default")],2)]),a("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+t.image+")"}})])},n=[],s=(a("a9e3"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),r=s,o=(a("133c"),a("2877")),c=Object(o["a"])(r,i,n,!1,null,"799537af",null);e["a"]=c.exports},5237:function(t,e,a){},"53f0":function(t,e,a){"use strict";a("8e57")},"7a00":function(t,e,a){"use strict";a("3716")},"7c25":function(t,e,a){},8050:function(t,e,a){"use strict";a("5237")},"8e57":function(t,e,a){},9350:function(t,e,a){},9406:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a(t.currentRole,{tag:"component"})],1)},n=[],s=a("b192"),r=(a("caad"),a("2532"),a("2f62")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container",attrs:{id:"dashboard-container"}},[t.shortCut?a("div",{attrs:{id:"dashboard-container-short-cut-group"}},[a("el-divider",[a("i",{staticClass:"el-icon-menu"},[t._v(" 快捷入口")])]),a("short-cut-group")],1):t._e(),a("div",{attrs:{id:"dashboard-container-dynamic-pan"}},[a("el-divider",[a("i",{staticClass:"el-icon-pie-chart"},[t._v(" 动态面板")])]),a("panel-group",{on:{"handle-dynamic-pan-chart-type":t.handleDynamicPanChartType}}),a("el-row",{staticClass:"dynamic-pan-chart"},[a("panel-group-chart",{attrs:{"chart-type":t.panChartType,width:t.panChartWidth,height:t.panChartHeight}})],1)],1),a("div",{attrs:{id:"dashboard-container-real-time-index"}},[a("el-divider",[a("i",{staticClass:"el-icon-time"},[t._v(" 实时指标")])]),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:8}},[a("div",{staticClass:"chart-wrapper"},[a("real-time-index-one",{attrs:{width:t.indexChartWidth,height:t.indexChartHeight}})],1)]),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:16,xl:16}},[a("div",{staticClass:"chart-wrapper"},[a("real-time-index-two",{attrs:{width:t.indexChartWidth,height:t.indexChartHeight}})],1)])],1)],1)])},c=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"row-group"},[t._l(t.shortCutData,(function(t,e){return a("el-col",{key:e,staticClass:"card-box",attrs:{xs:8,sm:6,md:6,lg:3,xl:2}},[a("el-tooltip",{attrs:{content:t.name,placement:"top",effect:"dark"}},[a("div",{staticClass:"card-box-icon-wrapper card-box-icon-div"},[a("router-link",{attrs:{to:{path:t.path}}},[a("svg-icon",{attrs:{"icon-class":t.icon,"class-name":"card-box-icon"}})],1)],1)])],1)})),a("el-col",{staticClass:"card-box",attrs:{xs:8,sm:6,md:6,lg:3,xl:2}},[a("el-tooltip",{attrs:{content:"快捷功能编辑",placement:"top",effect:"dark"}},[a("div",{staticClass:"card-box-icon-wrapper card-box-icon-div-edit",on:{click:t.openEdit}},[a("svg-icon",{attrs:{"icon-class":"c_edit","class-name":"card-box-icon"}})],1)])],1)],2),a("short-cut-edit",{attrs:{show:t.showEdit},on:{"close-edit":t.closeEdit}})],1)},d=[],u=(a("d3b7"),a("4360")),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:function(e){return t.openDialog()},close:function(e){return t.closeDialog()}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",{staticClass:"dialog-footer"},[a("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),a("el-button",{attrs:{disabled:t.disabled,loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("确定")])],1)]},proxy:!0}])},[a("el-row",{directives:[{name:"show",rawName:"v-show",value:t.selectCount>=15,expression:"selectCount >= 15"}]},[a("el-alert",{staticStyle:{"margin-bottom":"25px"},attrs:{title:"菜单快捷入口最多选择15个，已达上限",type:"error",effect:"light"}})],1),a("el-row",{staticClass:"board",attrs:{gutter:24}},[a("el-col",{staticClass:"board-column board-column-left",attrs:{span:12}},[a("div",{staticClass:"board-column-header board-column-header-left"},[t._v(" 未选 "+t._s(t.unselectList.length)+" ")]),a("draggable",{staticClass:"board-column-content",attrs:{tag:"div",group:t.dragGroupUnSelect,animation:t.dragAnimation},on:{start:function(e){return t.start(e,"unselect")},change:t.change},model:{value:t.unselectList,callback:function(e){t.unselectList=e},expression:"unselectList"}},t._l(t.unselectList,(function(e){return a("div",{key:e.id,staticClass:"board-column-content-item"},[t._v(" "+t._s(e.name)+" ")])})),0)],1),a("el-col",{staticClass:"board-column",attrs:{span:12}},[a("div",{staticClass:"board-column-header board-column-header-right"},[t._v(" 已选 "+t._s(t.selectList.length)+" ")]),a("draggable",{staticClass:"board-column-content",attrs:{tag:"div",group:t.dragGroupSelect,animation:t.dragAnimation},on:{start:function(e){return t.start(e,"select")},change:t.change},model:{value:t.selectList,callback:function(e){t.selectList=e},expression:"selectList"}},t._l(t.selectList,(function(e){return a("div",{key:e.id,staticClass:"board-column-content-item"},[t._v(" "+t._s(e.name)+" ")])})),0)],1)],1)],1)},p=[],m=(a("d81d"),a("25f0"),a("1980")),f=a.n(m),g=a("b775");function b(t){return Object(g["a"])({url:"/dashboard/pan",method:"post",data:t})}function y(t){return Object(g["a"])({url:"/dashboard/pan_chart",method:"post",data:t})}function v(t){return Object(g["a"])({url:"/dashboard/index",method:"post",data:t})}function x(t){return Object(g["a"])({url:"/dashboard/shortcut",method:"post",data:t})}function C(t){return Object(g["a"])({url:"/dashboard/shortcut_edit",method:"post",data:t})}function _(t){return Object(g["a"])({url:"/dashboard/shortcut_save",method:"post",data:t})}var w={name:"ShortCutEditByDrag",emits:["close-edit"],components:{draggable:f.a},props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}}},data:function(){return{loading:!1,disabled:!1,dialogAttrs:{title:"编辑",width:"55%",fullScreen:!1,top:"5%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},dragGroupUnSelect:{name:"menu",put:!0},dragGroupSelect:{name:"menu",put:!0},dragSort:!0,dragAnimation:1500,unselectList:[],selectList:[],selectCount:0,banDrag:!1}},computed:{},watch:{selectCount:function(t,e){this.dragGroupSelect.put=!(t>=15)}},created:function(){},mounted:function(){},methods:{openDialog:function(){this.initData()},closeDialog:function(){this.$emit("close-edit",!1)},initData:function(){var t=this,e={rtx_id:u["a"].getters.rtx_id};return new Promise((function(a,i){C(e).then((function(e){var i=e.status_id,n=e.data;100===i&&(t.unselectList=n.unselect,t.selectList=n.select),a(e)})).catch((function(t){i(t)}))}))},start:function(t,e){return this.selectCount>=15&&"unselect"===e&&(this.dragGroupSelect.put=!1),!0},change:function(t){this.selectCount=this.selectList.length},submit:function(){var t=this,e=this.selectList.map((function(t,e){return t.id.toString()})),a={rtx_id:u["a"].getters.rtx_id,select:e};return this.disabled=!0,this.loading=!0,new Promise((function(e,i){_(a).then((function(a){t.disabled=!1,t.loading=!1;var i=a.status_id;a.message;100===i&&(t.$message({message:"设置成功",type:"success",duration:2e3}),t.$emit("close-edit",!0)),e(a)})).catch((function(e){t.disabled=!1,t.loading=!1,i(e)}))}))}}},S=w,D=(a("9a39"),a("2877")),T=Object(D["a"])(S,h,p,!1,null,"c3cfc68c",null),k=T.exports,E={name:"ShortCutGroup",emits:[],components:{"short-cut-edit":k},props:{},data:function(){return{shortCutData:[],showEdit:!1}},computed:{},watch:{},created:function(){var t=this;this.$nextTick((function(){t.initData()}))},mounted:function(){},methods:{initData:function(){var t=this,e={rtx_id:u["a"].getters.rtx_id};return new Promise((function(a,i){x(e).then((function(e){var i=e.status_id,n=e.data;100===i&&(t.shortCutData=n),a(e)})).catch((function(t){i(t)}))}))},openEdit:function(){this.showEdit=!0},closeEdit:function(t){this.showEdit=!1,t&&this.initData()}}},$=E,O=(a("53f0"),Object(D["a"])($,l,d,!1,null,"ea8106a0",null)),L=O.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetPanChartType("user")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" 用户数 ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.panCounts.user,duration:t.countToDurs.user}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetPanChartType("click")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-click"},[a("svg-icon",{attrs:{"icon-class":"click","class-name":"card-panel-icon"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" 点击数 ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.panCounts.click,duration:t.countToDurs.click}})],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetPanChartType("operate")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-operate"},[a("svg-icon",{attrs:{"icon-class":"i_dashboard","class-name":"card-panel-icon"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" 使用率 ")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.panCounts.operate,duration:t.countToDurs.operate,decimals:t.countDecimals.operate,suffix:"%"}})],1)])])],1)},z=[],P=a("ec1b"),R=a.n(P),I={name:"PanelGroup",emits:["handle-dynamic-pan-chart-type"],components:{"count-to":R.a},props:{},data:function(){return{panChartType:"user",countToDurs:{user:2800,click:3e3,operate:3500},panCounts:{user:0,click:0,operate:0},countDecimals:{operate:2}}},computed:{},watch:{},created:function(){var t=this;this.$nextTick((function(){t.initData()}))},mounted:function(){},methods:{initData:function(){var t=this,e={rtx_id:u["a"].getters.rtx_id};return new Promise((function(a,i){b(e).then((function(e){var i=e.status_id,n=e.data;100===i&&(t.panCounts.user=n.user,t.panCounts.click=n.click,t.panCounts.operate=n.operate),a(e)})).catch((function(t){i(t)}))}))},handleSetPanChartType:function(t){this.panChartType=t||this.panChartType,this.$emit("handle-dynamic-pan-chart-type",this.panChartType)}}},j=I,G=(a("a24d"),Object(D["a"])(j,A,z,!1,null,"5510acc6",null)),F=G.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:"dynamic-pan-chart"}})},q=[],N=a("313e"),B=a.n(N),W=a("ed08"),J={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(W["b"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var M={name:"PanelGroupChart",mixins:[J],props:{className:{type:String,require:!0,default:"chart"},chartType:{type:String,require:!0,default:"user"},width:{type:String,require:!1,default:"100%"},height:{type:String,require:!1,default:"350px"},autoResize:{type:Boolean,require:!1,default:!0}},data:function(){return{chart:null,chartTitle:"",chartSubTitle:"",chartData:[]}},watch:{chartType:function(t,e){this.updateChartData()}},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){t.chartInit(),t.updateChartData()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{updateChartData:function(){var t=this;if(this.chartType){var e={rtx_id:u["a"].getters.rtx_id,type:this.chartType};return new Promise((function(a,i){y(e).then((function(e){var i=e.status_id,n=e.data;100===i&&(t.chartData=n.data,t.chartTitle=n.title,t.chartSubTitle=n.subtitle,t.chartOptions(t.chartData)),a(e)})).catch((function(t){i(t)}))}))}},chartInit:function(){this.chart=B.a.init(this.$el,"macarons")},title:function(){return"user"===this.chartType?"本周用户登录情况":"click"===this.chartType?"本周功能点击数情况":"operate"===this.chartType?"本周功能使用率情况":""},chartOptions:function(t){this.chart.setOption({title:{show:!0,text:this.chartTitle||this.title(),x:"center",textAlign:"left",textStyle:{fontSize:20,color:"#333",fontStyle:"normal"},subtext:this.chartSubTitle||"本周活跃数据",subtextStyle:{fontSize:13}},xAxis:{data:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],boundaryGap:!1},yAxis:{axisTick:{show:!1}},grid:{left:"3%",right:"4%",bottom:15,top:65,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},legend:{show:!0,left:20,data:["数据量"]},toolbox:{show:!0,feature:{magicType:{type:["line","bar"]},saveAsImage:{}}},series:[{name:"数据量",smooth:!0,type:"line",data:t,itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:1.5}}},areaStyle:{opacity:.8,color:new B.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(0, 221, 255)"},{offset:1,color:"rgb(77, 119, 255)"}])},emphasis:{focus:"series"},animationDuration:3200,animationEasing:"cubicInOut"}]})}}},U=M,K=Object(D["a"])(U,H,q,!1,null,null,null),Q=K.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:"real-time-index-one"}})},X=[];a("817d");var Y=3200,Z={name:"RealTimeIndexOne",emits:[],components:{},mixins:[J],props:{className:{type:String,require:!1,default:"chart"},width:{type:String,require:!1,default:"100%"},height:{type:String,require:!1,default:"350px"}},data:function(){return{chart:null,chartTitle:"工具累积使用排名",chartLegend:["表格合并","表格拆分","PDF转WORD","钉钉绩效"]}},computed:{},watch:{},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){t.chartInit()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{chartInit:function(){this.chart=B.a.init(document.getElementById("real-time-index-one"),"macarons"),this.getChartData()},getChartData:function(){var t=this,e={rtx_id:u["a"].getters.rtx_id,type:"1"};return new Promise((function(a,i){v(e).then((function(e){var i=e.status_id,n=e.data;100===i&&(t.chartLegend=n.legend,t.chartTitle=n.title,t.chartOptions(n.data)),a(e)})).catch((function(t){i(t)}))}))},chartOptions:function(t){this.chart.setOption({title:{show:!0,text:this.chartTitle||"工具累积使用排名",x:"center",textAlign:"left",textStyle:{fontSize:18,color:"#333",fontStyle:"normal"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"15",data:this.chartLegend},toolbox:{show:!1,feature:{saveAsImage:{}}},series:[{name:"统计详情：",type:"pie",roseType:"radius",radius:[20,95],center:["50%","42%"],data:t,animationType:"expansion",animationEasing:"cubicInOut",animationDuration:Y}]})}}},tt=Z,et=Object(D["a"])(tt,V,X,!1,null,"454cf1b3",null),at=et.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:"real-time-index-two"}})},nt=[];a("817d");var st=5e3,rt=4750,ot=4500,ct=4250,lt=4e3,dt={name:"RealTimeIndexTwo",emits:[],components:{},mixins:[J],props:{className:{type:String,require:!1,default:"chart"},width:{type:String,require:!1,default:"100%"},height:{type:String,require:!1,default:"350px"}},data:function(){return{chart:null,chartLegend:[],chartTitle:"本周API请求次数排名TOP5",chartSubTitle:"本周累计"}},computed:{},watch:{},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){t.chartInit()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{chartInit:function(){this.chart=B.a.init(document.getElementById("real-time-index-two"),"macarons"),this.getChartData()},getChartData:function(){var t=this,e={rtx_id:u["a"].getters.rtx_id,type:"3"};return new Promise((function(a,i){v(e).then((function(e){var i=e.status_id,n=e.data;100===i&&(t.chartLegend=n.legend,t.chartTitle=n.title,t.chartSubTitle=n.subtitle,t.chartOptions(n.data)),a(e)})).catch((function(t){i(t)}))}))},chartOptions:function(t){this.chart.setOption({color:["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"],title:{text:this.chartTitle||"本周API请求次数排名TOP5",left:"center",textStyle:{fontSize:18,color:"#333",fontStyle:"normal"},show:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{left:"center",bottom:"15",data:this.chartLegend},toolbox:{show:!1,feature:{saveAsImage:{},magicType:{type:["line","bar","stack"]}}},grid:{left:"3%",right:"4%",bottom:"65",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]}],yAxis:[{type:"value"}],series:[{name:this.chartLegend[0]||"",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},animationDuration1:st,showSymbol:!1,areaStyle:{opacity:.8,color:new B.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])},emphasis:{focus:"series"},data:t[0]||[0,0,0,0,0,0,0]},{name:this.chartLegend[1]||"",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},animationDuration2:rt,showSymbol:!1,areaStyle:{opacity:.8,color:new B.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(0, 221, 255)"},{offset:1,color:"rgb(77, 119, 255)"}])},emphasis:{focus:"series"},data:t[1]||[0,0,0,0,0,0,0]},{name:this.chartLegend[2]||"",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},animationDuration3:ot,showSymbol:!1,areaStyle:{opacity:.8,color:new B.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(55, 162, 255)"},{offset:1,color:"rgb(116, 21, 219)"}])},emphasis:{focus:"series"},data:t[2]||[0,0,0,0,0,0,0]},{name:this.chartLegend[3]||"",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},animationDuration4:ct,showSymbol:!1,areaStyle:{opacity:.8,color:new B.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(255, 0, 135)"},{offset:1,color:"rgb(135, 0, 157)"}])},emphasis:{focus:"series"},data:t[3]||[0,0,0,0,0,0,0]},{name:this.chartLegend[4]||"",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},animationDuration5:lt,showSymbol:!1,label:{show:!0,position:"top"},areaStyle:{opacity:.8,color:new B.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(255, 191, 0)"},{offset:1,color:"rgb(224, 62, 76)"}])},emphasis:{focus:"series"},data:t[4]||[0,0,0,0,0,0,0]}]})}}},ut=dt,ht=Object(D["a"])(ut,it,nt,!1,null,"1c54b3c0",null),pt=ht.exports,mt={name:"DashboardAdmin",components:{"short-cut-group":L,"panel-group":F,"panel-group-chart":Q,"real-time-index-one":at,"real-time-index-two":pt},data:function(){return{shortCut:!0,panChartType:"user",panChartWidth:"100%",panChartHeight:"400px",indexChartWidth:"100%",indexChartHeight:"400px"}},methods:{handleDynamicPanChartType:function(t){t&&(this.panChartType=t)}}},ft=mt,gt=(a("8050"),Object(D["a"])(ft,o,c,!1,null,"7212aa53",null)),bt=gt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-no-container"},[a("div",{staticClass:"clearfix"},[a("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[a("div",{staticStyle:{"margin-top":"15px"}},[t._v("Hello")]),a("div",{staticClass:"user-name text-center",staticStyle:{"margin-top":"20px",color:"red"}},[t._v(t._s(t.rtx_id))])]),a("div",{staticClass:"info-container"},[a("span",{staticClass:"display_name"},[t._v(t._s(t.rtx_id))]),a("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("践行践远，智慧前行")])])],1),a("div",[a("img",{staticClass:"emptyGif",attrs:{src:t.gif}})])])},vt=[],xt=a("3cbc"),Ct={name:"DashboardNo",components:{"pan-thumb":xt["a"]},data:function(){return{gif:"http://2lstore.pygo2.top/avatars/sun-lit.gif",github:"https://github.com/GIS90/open2lisapi.git",image:{height:"150px",width:"150px"}}},computed:Object(s["a"])({},Object(r["b"])({rtx_id:"rtx_id",avatar:"avatar"}))},_t=Ct,wt=(a("7a00"),Object(D["a"])(_t,yt,vt,!1,null,"4e143559",null)),St=wt.exports,Dt=a("83d6"),Tt={name:"Dashboard",components:{DashboardAdmin:bt,DashboardNo:St},data:function(){return{currentRole:"DashboardAdmin"}},computed:Object(s["a"])({},Object(r["b"])(["roles"])),created:function(){this.roles.includes(Dt["adminRoleRtx"]),this.currentRole="DashboardAdmin"}},kt=Tt,Et=Object(D["a"])(kt,i,n,!1,null,null,null);e["default"]=Et.exports},"9a39":function(t,e,a){"use strict";a("9350")},a24d:function(t,e,a){"use strict";a("c365")},c365:function(t,e,a){}}]);