(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33c22054"],{"0fea":function(t,e,r){"use strict";r.d(e,"k",(function(){return l})),r.d(e,"b",(function(){return a})),r.d(e,"o",(function(){return s})),r.d(e,"h",(function(){return o})),r.d(e,"d",(function(){return n})),r.d(e,"g",(function(){return c})),r.d(e,"j",(function(){return d})),r.d(e,"n",(function(){return u})),r.d(e,"m",(function(){return p})),r.d(e,"l",(function(){return m})),r.d(e,"c",(function(){return f})),r.d(e,"e",(function(){return h})),r.d(e,"f",(function(){return g})),r.d(e,"i",(function(){return b})),r.d(e,"p",(function(){return w})),r.d(e,"a",(function(){return A}));var i=r("b775");function l(t){return Object(i["a"])({url:"/auth/role",method:"post",data:t})}function a(t){return Object(i["a"])({url:"/auth/addrole",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/auth/updaterole",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/auth/roleinfo",method:"get",params:t})}function n(t){return Object(i["a"])({url:"/auth/mdelrole",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/auth/delrole",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/auth/tree",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/auth/savetree",method:"post",data:t})}function p(){return Object(i["a"])({url:"/auth/roleselect",method:"get"})}function m(t){return Object(i["a"])({url:"/auth/user",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/auth/adduser",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/auth/mdeluser",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/auth/userstatus",method:"post",data:t})}function b(t){return Object(i["a"])({url:"/auth/userinfo",method:"get",params:t})}function w(t){return Object(i["a"])({url:"/auth/updateuser",method:"post",data:t})}function A(t){return Object(i["a"])({url:"/auth/userrp",method:"get",params:t})}},1747:function(t,e,r){},"1ec4":function(t,e,r){"use strict";r("bbeb")},2983:function(t,e,r){},"333d":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"block page-div"},[r("el-pagination",{attrs:{background:t.pagAttrs.background,"current-page":t.page,total:t.total,"page-size":t.size,layout:t.pagAttrs.layout,"page-sizes":t.pagAttrs.pageSizes,"pager-count":t.pagAttrs.pagerCount,small:t.pagAttrs.small,disabled:t.pagAttrs.disabled,"prev-text":t.pagAttrs.prevText,"next-text":t.pagAttrs.nextText,"hide-on-single-page":t.pagAttrs.hosp},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},l=[],a=(r("a9e3"),{name:"Pagination",emits:["pagin-size-change","pagin-current-change"],components:{},props:{page:{type:Number,require:!0,default:1},size:{type:Number,require:!0,default:15},total:{type:Number,require:!0,default:0}},data:function(){return{pagAttrs:{layout:"total, sizes, prev, pager, next, jumper",background:!0,pageSizes:[15,30,50,100],pagerCount:5,hosp:!1,small:!1,prevText:"<",nextText:">",disabled:!1}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handleSizeChange:function(t){this.$emit("pagin-size-change",t)},handleCurrentChange:function(t){this.$emit("pagin-current-change",t)}}}),s=a,o=(r("c43c"),r("2877")),n=Object(o["a"])(s,i,l,!1,null,"bb08e570",null);e["a"]=n.exports},"512e":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-row",[r("el-button",{attrs:{id:"btn-create",size:t.btnBaseAttrs.size,plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,disabled:t.btnDisabled},on:{click:t.openAddUser}},[r("svg-icon",{attrs:{"icon-class":"i_add"}}),t._v(" 新增 ")],1),r("el-button",{staticClass:"btn-margin",attrs:{id:"btn-select",plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,size:t.btnBaseAttrs.size,disabled:t.btnDisabled},on:{click:t.manualSelectALL}},[r("svg-icon",{attrs:{"icon-class":"i_select"}}),t._v(" "+t._s(t.selBtnText)+" ")],1),r("el-button",{staticClass:"btn-margin",attrs:{id:"btn-delete",plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,size:t.btnBaseAttrs.size,disabled:t.btnDisabled},on:{click:t.openDeleteDialog}},[r("svg-icon",{attrs:{"icon-class":"i_delete"}}),t._v(" 注销 ")],1)],1),r("div",{staticClass:"table-sty",attrs:{id:"data-container"}},[r("el-table",{ref:"multipleSourceTableRef",staticStyle:{width:"100%"},attrs:{data:t.tableData,size:t.tableAttrs.size,fit:t.tableAttrs.fit,"show-header":t.tableAttrs.showHeader,"highlight-current-row":t.tableAttrs.hcr,border:t.tableAttrs.border,"default-sort":{prop:"create_time",order:"descending"},"empty-text":t.tableAttrs.emptyText,"header-cell-style":t.setTableHeaderStyle},on:{select:t.selectRow,"selection-change":t.selectChange,"select-all":t.selectAll}},[r("el-table-column",{attrs:{fixed:"left",type:"selection",align:t.tableRowAttrs.align,width:"60"}}),r("el-table-column",{attrs:{fixed:"left",label:"创建时间","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,width:"240",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("i",{staticClass:"el-icon-time"}),r("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(e.row.create_time))])]}}])}),r("el-table-column",{attrs:{prop:"rtx_id",label:"RTX名称",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),r("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180",align:t.tableRowAttrs.align,sortable:"","show-overflow-tooltip":t.tableRowAttrs.sot}}),r("el-table-column",{attrs:{prop:"phone",label:"电话",width:"180",align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"270",align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),r("el-table-column",{attrs:{prop:"department",label:"部门",width:"270",align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),r("el-table-column",{attrs:{prop:"introduction",label:"描述",width:"320",align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),r("el-table-column",{attrs:{prop:"create_rtx",label:"创建者RTX",width:"180",align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),r("el-table-column",{attrs:{prop:"delete_time",label:"注销时间",width:"220",align:t.tableRowAttrs.align}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",align:t.tableRowAttrs.align,width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tooltip",{attrs:{effect:"dark",content:"编辑",placement:"top"}},[r("i",{staticClass:"el-icon-edit",on:{click:function(r){return t.rowHandleEdit(e.$index,e.row)}}})]),r("el-tooltip",{staticClass:"icon-item",attrs:{effect:"dark",content:"重置密码",placement:"top"}},[r("i",{staticClass:"el-icon-setting",on:{click:function(r){return t.rowHandlePw(e.$index,e.row)}}})])]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"状态管理",align:t.tableRowAttrs.align,width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("user-status",{attrs:{row:t.row}})]}}])})],1)],1),r("pagination",{attrs:{page:t.pageCur,size:t.pageSize,total:t.pageTotal},on:{"pagin-size-change":t.paginSizeChange,"pagin-current-change":t.paginCurrentChange}}),r("user-add",{attrs:{show:t.addDialogStatus},on:{"close-add-user":t.closeAddUser}}),r("user-detail",{attrs:{show:t.setDialogStatus,"rtx-id":t.oprSelectRtx},on:{"close-detail-user":t.closeDetailUser}}),r("user-batch-delete",{attrs:{show:t.deleteConfirm,list:t.selectList},on:{"close-delete-dialog":t.closeDeleteDialog}}),r("user-reset-pw",{attrs:{show:t.pwDialogStatus,"rtx-id":t.oprSelectRtx},on:{"close-pw-user":t.closePwUser}})],1)},l=[],a=(r("d3b7"),r("caad"),r("2532"),r("a434"),r("d81d"),r("4360")),s=r("0fea"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:function(e){return t.openDialog()},close:function(e){return t.closeDialog()}},scopedSlots:t._u([{key:"footer",fn:function(){return[r("span",{staticClass:"dialog-footer"},[r("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),r("el-button",{attrs:{disabled:t.disabled,loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.submitAddUser()}}},[t._v("确定")])],1)]},proxy:!0}])},[r("el-form",{ref:"addUserForm",attrs:{"label-position":t.labelPosition,model:t.addUserForm,rules:t.addUserRules,"label-width":"auto"}},[r("el-form-item",{attrs:{label:"RTX名称",prop:"rtx"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入RTX名称（建议使用英文）",maxlength:t.addUserLimit.rtx,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.addUserForm.rtx,callback:function(e){t.$set(t.addUserForm,"rtx","string"===typeof e?e.trim():e)},expression:"addUserForm.rtx"}})],1),r("el-form-item",{attrs:{label:"昵称",prop:"name"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入昵称",maxlength:t.addUserLimit.name,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.addUserForm.name,callback:function(e){t.$set(t.addUserForm,"name","string"===typeof e?e.trim():e)},expression:"addUserForm.name"}})],1),r("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入联系电话，暂不支持国外电话",maxlength:t.addUserLimit.phone,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.addUserForm.phone,callback:function(e){t.$set(t.addUserForm,"phone","string"===typeof e?e.trim():e)},expression:"addUserForm.phone"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入邮箱",maxlength:t.addUserLimit.email,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.addUserForm.email,callback:function(e){t.$set(t.addUserForm,"email","string"===typeof e?e.trim():e)},expression:"addUserForm.email"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入密码，默认为abc1234","show-password":"",clearable:t.inputAttrs.clear,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.addUserForm.password,callback:function(e){t.$set(t.addUserForm,"password","string"===typeof e?e.trim():e)},expression:"addUserForm.password"}})],1),r("el-form-item",{attrs:{label:"角色",prop:"role"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.selectAttrs.placeholder,disabled:t.disabled,filterable:t.selectAttrs.filterable,multiple:t.selectAttrs.multiple,"multiple-limit":t.addUserLimit.limit,clearable:t.selectAttrs.clearable,"no-data-text":t.selectAttrs.noDataText,"collapse-tags":t.selectAttrs.collapseTags},model:{value:t.addUserForm.role,callback:function(e){t.$set(t.addUserForm,"role","string"===typeof e?e.trim():e)},expression:"addUserForm.role"}},t._l(t.roles,(function(e,i){return r("el-option",{key:i,attrs:{label:e.value,value:e.key}},[r("span",{staticStyle:{float:"left"}},[t._v(t._s(e.value))]),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"14px"}},[t._v(t._s(e.key))])])})),1)],1),r("el-form-item",{attrs:{label:"自我介绍",prop:"introduction"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入自我介绍",rows:t.textAreaAttrs.rows,autosize:{minRows:4,maxRows:6},maxlength:t.addUserLimit.introduction,clearable:t.textAreaAttrs.clear,"show-word-limit":t.textAreaAttrs.limit,"prefix-icon":t.textAreaAttrs.prefixIcon,disabled:t.disabled},model:{value:t.addUserForm.introduction,callback:function(e){t.$set(t.addUserForm,"introduction","string"===typeof e?e.trim():e)},expression:"addUserForm.introduction"}})],1)],1)],1)],1)},n=[],c=(r("b0c0"),r("61f7")),d=r("83d6"),u=function(t,e,r){e?e.length>25?r(new Error("RTX名称最大长度为25")):r():r(new Error("请输入RTX名称"))},p=function(t,e,r){e?e.length>30?r(new Error("昵称最大长度为30")):r():r(new Error("请输入昵称"))},m=function(t,e,r){e.length>35?r(new Error("邮箱最大长度为35")):e&&!Object(c["d"])(e)?r(new Error("请输入正确的邮箱")):r()},f=function(t,e,r){e?Object(c["f"])(e)?11!==e.length?r(new Error("联系电话最大长度为11")):r():r(new Error("请输入正确的联系电话")):r(new Error("请输入联系电话"))},h=function(t,e,r){e.length<1?r(new Error("请选择用户角色")):r()},g={name:"RoleAdd",emits:["close-add-user"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}}},data:function(){return{loading:!1,disabled:!1,labelPosition:"left",dialogAttrs:{title:"新增用户",width:"40%",fullScreen:!1,top:"3%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},selectAttrs:{multiple:!0,clearable:!0,filterable:!1,collapseTags:!1,limit:0,noDataText:"暂无数据",placeholder:"请选择用户角色，可多选"},textAreaAttrs:{rows:2,autoSize:!1,clear:!0,length:"255",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},roles:[],addUserForm:{rtx:"",name:"",phone:"",password:d["defaultUserPassword"]||"abc1234",email:"",introduction:"",role:[]},addUserLimit:{rtx:"25",name:"30",phone:"11",password:"",email:"35",introduction:"255",role:"0"},addUserRules:{rtx:[{required:!0,trigger:"blur",validator:u}],name:[{required:!0,trigger:"blur",validator:p}],phone:[{required:!0,trigger:"blur",validator:f}],email:[{required:!1,trigger:"blur",validator:m}],role:[{required:!0,trigger:"blur",validator:h}]}}},computed:{},watch:{},created:function(){this.initRoles()},mounted:function(){},methods:{openDialog:function(){this.addUserForm.rtx="",this.addUserForm.name="",this.addUserForm.phone="",this.addUserForm.password="",this.addUserForm.email="",this.addUserForm.introduction="",this.addUserForm.role=[]},closeDialog:function(){this.$emit("close-add-user",!1)},initRoles:function(){var t=this;return new Promise((function(e,r){Object(s["m"])().then((function(r){var i=r.status_id,l=r.data;t.roles=100===i?l.list:[{key:"admin",value:"admin"}],e(r)})).catch((function(t){r(t)}))}))},submitAddUser:function(){var t=this;this.$refs.addUserForm.validate((function(e){if(e){t.disabled=!0,t.loading=!0;var r={add_rtx_id:a["a"].getters.rtx_id,rtx_id:t.addUserForm.rtx,name:t.addUserForm.name,phone:t.addUserForm.phone,password:t.addUserForm.password,email:t.addUserForm.email,role:t.addUserForm.role,introduction:t.addUserForm.introduction};return new Promise((function(e,i){Object(s["c"])(r).then((function(r){t.disabled=!1,t.loading=!1;var i=r.status_id;r.message;100===i&&(t.$message({message:"用户新增成功",type:"success",duration:2e3}),t.$emit("close-add-user",!0)),e(r)})).catch((function(e){t.disabled=!1,t.loading=!1,i(e)}))}))}}))}}},b=g,w=r("2877"),A=Object(w["a"])(b,o,n,!1,null,"5848d3c9",null),x=A.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{close:t.cancelDelete}},[r("span",[t._v("确认删除选择的数据吗？")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{disabled:t.btnDisabled},on:{click:t.cancelDelete}},[t._v("取 消")]),r("el-button",{attrs:{disabled:t.btnDisabled,loading:t.btnLoading,type:"primary"},on:{click:t.confirmDelete}},[t._v("确 定")])],1)])},y=[],_={name:"UserBatchDelete",emits:["close-delete-dialog"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},list:{type:Array,require:!0,default:function(){}}},data:function(){return{dialogAttrs:{title:"用户删除",width:"30%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},btnDisabled:!1,btnLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{cancelDelete:function(){this.$emit("close-delete-dialog",!1)},confirmDelete:function(){var t=this;if(0===this.list.length)return this.$message({message:"请选择注销的用户",type:"warning",duration:2e3}),!1;var e={rtx_id:a["a"].getters.rtx_id,list:this.list};return this.btnDisabled=!0,this.btnLoading=!0,new Promise((function(r,i){Object(s["e"])(e).then((function(e){var i=e.status_id;e.message;100===i&&t.$message({message:"用户注销成功",type:"success",duration:2e3}),t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),r(e)})).catch((function(e){t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),i(e)}))}))}}},S=_,k=Object(w["a"])(S,v,y,!1,null,"6b303385",null),D=k.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-switch",{staticStyle:{display:"block"},attrs:{disabled:t.switchAttrs.disabled,width:t.switchAttrs.width,"active-text":t.switchAttrs.activeText,"inactive-text":t.switchAttrs.inactiveText,"active-color":t.switchAttrs.activeColor,"inactive-color":t.switchAttrs.inactiveColor,"active-value":t.switchAttrs.activeValue,"inactive-value":t.switchAttrs.inactiveValue},on:{change:function(e){return t.changeStatus(e)}},model:{value:t.row.is_del,callback:function(e){t.$set(t.row,"is_del",e)},expression:"row.is_del"}})},F=[],C={name:"UserStatus",emits:[],components:{},props:{row:{type:Object,require:!0,default:function(){return{}}}},data:function(){return{switchAttrs:{disabled:!1,width:35,activeText:"注销",inactiveText:"启用",activeValue:!0,inactiveValue:!1,activeColor:"#ff4949",inactiveColor:"#13ce66"}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{changeStatus:function(t){var e,r=this;if(!this.row||null===(e=this.row)||void 0===e||!e.rtx_id)return!1;var i={rtx_id:a["a"].getters.rtx_id,c_rtx_id:this.row.rtx_id,status:t};return new Promise((function(t,e){Object(s["f"])(i).then((function(e){var i=e.status_id,l=e.message;100===i&&r.$message({message:l,type:"success",duration:2e3}),t(e)})).catch((function(t){r.loading=!1,e(t)}))}))}}},z=C,O=Object(w["a"])(z,U,F,!1,null,"7783a25d",null),R=O.exports,$=r("333d"),L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:function(e){return t.openDialog()},close:function(e){return t.closeDialog()}},scopedSlots:t._u([{key:"footer",fn:function(){return[r("span",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}],staticClass:"dialog-footer"},[r("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),r("el-button",{attrs:{disabled:t.disabled,loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.submitUpdateUser()}}},[t._v("确定")])],1)]},proxy:!0}])},[r("el-form",{ref:"userForm",attrs:{"label-position":t.labelPosition,model:t.userForm,rules:t.userRules,"label-width":"auto"}},[r("el-form-item",[r("el-switch",{staticClass:"sw-sty",staticStyle:{display:"block"},attrs:{disabled:t.switchAttrs.disabled,width:t.switchAttrs.width,"active-text":t.switchAttrs.activeText,"inactive-text":t.switchAttrs.inactiveText,"active-color":t.switchAttrs.activeColor,"inactive-color":t.switchAttrs.inactiveColor,"active-value":t.switchAttrs.activeValue,"inactive-value":t.switchAttrs.inactiveValue},on:{change:function(e){return t.changeStatus(e)}},model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}})],1),r("el-form-item",{attrs:{label:"RTX名称"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入RTX名称（建议使用英文）",maxlength:t.userLimit.rtx,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:""},model:{value:t.rtxId,callback:function(e){t.rtxId="string"===typeof e?e.trim():e},expression:"rtxId"}})],1),r("el-form-item",{attrs:{label:"昵称",prop:"name"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入昵称",maxlength:t.userLimit.name,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.edit?"el-icon-edit":t.inputAttrs.prefixIcon,disabled:!t.edit},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name","string"===typeof e?e.trim():e)},expression:"userForm.name"}})],1),r("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入联系电话，暂不支持国外电话",maxlength:t.userLimit.phone,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.edit?"el-icon-edit":t.inputAttrs.prefixIcon,disabled:!t.edit},model:{value:t.userForm.phone,callback:function(e){t.$set(t.userForm,"phone","string"===typeof e?e.trim():e)},expression:"userForm.phone"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入邮箱",maxlength:t.userLimit.email,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.edit?"el-icon-edit":t.inputAttrs.prefixIcon,disabled:!t.edit},model:{value:t.userForm.email,callback:function(e){t.$set(t.userForm,"email","string"===typeof e?e.trim():e)},expression:"userForm.email"}})],1),r("el-form-item",{attrs:{label:"角色",prop:"role"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.selectAttrs.placeholder,filterable:t.selectAttrs.filterable,multiple:t.selectAttrs.multiple,"multiple-limit":t.userLimit.limit,clearable:t.selectAttrs.clearable,"no-data-text":t.selectAttrs.noDataText,"collapse-tags":t.selectAttrs.collapseTags,"prefix-icon":t.edit?"el-icon-edit":t.inputAttrs.prefixIcon,disabled:!t.edit},model:{value:t.userForm.role,callback:function(e){t.$set(t.userForm,"role","string"===typeof e?e.trim():e)},expression:"userForm.role"}},t._l(t.roles,(function(e,i){return r("el-option",{key:i,attrs:{label:e.value,value:e.key}},[r("span",{staticStyle:{float:"left"}},[t._v(t._s(e.value))]),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"14px"}},[t._v(t._s(e.key))])])})),1)],1),r("el-form-item",{attrs:{label:"自我介绍",prop:"introduction"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入自我介绍",rows:t.textAreaAttrs.rows,autosize:{minRows:4,maxRows:6},maxlength:t.userLimit.introduction,clearable:t.textAreaAttrs.clear,"show-word-limit":t.textAreaAttrs.limit,"prefix-icon":t.edit?"el-icon-edit":t.inputAttrs.prefixIcon,disabled:!t.edit},model:{value:t.userForm.introduction,callback:function(e){t.$set(t.userForm,"introduction","string"===typeof e?e.trim():e)},expression:"userForm.introduction"}})],1)],1)],1)],1)},T=[],j=function(t,e,r){e?e.length>30?r(new Error("昵称最大长度为30")):r():r(new Error("请输入昵称"))},E=function(t,e,r){e.length>35?r(new Error("邮箱最大长度为35")):e&&!Object(c["d"])(e)?r(new Error("请输入正确的邮箱")):r()},I=function(t,e,r){e?Object(c["f"])(e)?11!==e.length?r(new Error("联系电话最大长度为11")):r():r(new Error("请输入正确的联系电话")):r(new Error("请输入联系电话"))},P=function(t,e,r){e.length<1?r(new Error("请选择用户角色")):r()},q={name:"RoleAdd",emits:["close-detail-user"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},rtxId:{type:String,require:!0,default:""}},data:function(){return{edit:!1,loading:!1,disabled:!1,labelPosition:"left",dialogAttrs:{title:"用户详情",width:"40%",fullScreen:!1,top:"3%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"",suffixIcon:""},selectAttrs:{multiple:!0,clearable:!0,filterable:!1,collapseTags:!1,limit:0,noDataText:"暂无数据",placeholder:"请选择用户角色，可多选"},textAreaAttrs:{rows:2,autoSize:!1,clear:!0,length:"255",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},switchAttrs:{disabled:!1,width:35,activeText:"编辑模式",inactiveText:"视图模式",activeValue:!0,inactiveValue:!1,activeColor:"#ff4949",inactiveColor:"#13ce66"},roles:[],userForm:{name:"",phone:"",email:"",introduction:"",role:[]},userLimit:{name:"30",phone:"11",email:"35",introduction:"255",role:"0"},userRules:{name:[{required:!0,trigger:"blur",validator:j}],phone:[{required:!0,trigger:"blur",validator:I}],email:[{required:!1,trigger:"blur",validator:E}],role:[{required:!0,trigger:"blur",validator:P}]}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{openDialog:function(){this.edit=!1,this.getUserInfo()},closeDialog:function(){this.$emit("close-detail-user",!1)},getUserInfo:function(){var t=this;this.rtxId||this.$emit("close-detail-user",!1);var e={rtx_id:this.rtxId};return new Promise((function(r,i){Object(s["i"])(e).then((function(e){var i=e.status_id,l=e.data;100===i?(t.userForm.name=l.name,t.userForm.phone=l.phone,t.userForm.email=l.email,t.userForm.introduction=l.introduction,t.userForm.role=l.role,t.roles=l.roles):t.$emit("close-detail-user",!1),r(e)})).catch((function(t){i(t)}))}))},submitUpdateUser:function(){var t=this;this.$refs.userForm.validate((function(e){if(e){t.edit=!1,t.disabled=!0,t.loading=!0;var r={rtx_id:a["a"].getters.rtx_id,to_rtx_id:t.rtxId,name:t.userForm.name,phone:t.userForm.phone,email:t.userForm.email,role:t.userForm.role,introduction:t.userForm.introduction};return new Promise((function(e,i){Object(s["p"])(r).then((function(r){t.edit=!0,t.disabled=!1,t.loading=!1;var i=r.status_id;r.message;100===i&&(t.$message({message:"用户更新成功",type:"success",duration:2e3}),t.$emit("close-detail-user",!0)),e(r)})).catch((function(e){t.edit=!0,t.disabled=!1,t.loading=!1,i(e)}))}))}}))},changeStatus:function(t){this.edit=t}}},B=q,H=(r("95a6"),Object(w["a"])(B,L,T,!1,null,"509f5d64",null)),X=H.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{close:t.cancel}},[r("p",{staticStyle:{"font-size":"1.5rem"}},[t._v("用户RTX："+t._s(t.rtxId))]),r("p",{staticStyle:{"font-size":"1rem"}},[t._v("初始密码为abc1234，确认重置吗？")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{disabled:t.btnDisabled},on:{click:t.cancel}},[t._v("取 消")]),r("el-button",{attrs:{disabled:t.btnDisabled,loading:t.btnLoading,type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)])},V=[],N={name:"UserResetPw",emits:["close-pw-user"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},rtxId:{type:String,require:!0,default:""}},data:function(){return{dialogAttrs:{title:"重置密码",width:"30%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},btnDisabled:!1,btnLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{cancel:function(){this.$emit("close-pw-user")},confirm:function(){var t=this;this.rtxId||this.$emit("close-pw-user");var e={rtx_id:this.rtxId};return new Promise((function(r,i){Object(s["a"])(e).then((function(e){var i=e.status_id;e.message;100===i&&(t.$message({message:"重置密码成功",type:"success",duration:2e3}),t.$emit("close-pw-user")),r(e)})).catch((function(t){i(t)}))}))}}},J=N,G=Object(w["a"])(J,M,V,!1,null,"1265ee74",null),K=G.exports,Q={name:"User",emits:[],components:{"user-add":x,"user-batch-delete":D,"user-status":R,"user-detail":X,"user-reset-pw":K,pagination:$["a"]},props:{},data:function(){return{btnDisabled:!1,selBtnText:"全选",btnBaseAttrs:{size:"medium",type:"primary",plain:!0,round:!1,circle:!1},tableAttrs:{stripe:!0,border:!0,size:"medium",fit:!0,showHeader:!0,hcr:!0,height:450,maxHeight:450,showSum:!0,sumText:"统计",emptyText:"暂无数据"},tableRowAttrs:{type:"selection",index:1,fixed:!0,resizable:!0,align:"center",headerAlign:"center",sot:!0},pageCur:1,pageSize:15,pageTotal:0,selectAllStatus:!1,selectList:[],tableData:[],oprSelectRtx:"",deleteConfirm:!1,pwDialogStatus:!1,setDialogStatus:!1,addDialogStatus:!1,userStatus:!0}},computed:{},watch:{selectAllStatus:function(t,e){this.selBtnText=t?"取消":"全选"}},created:function(){this.getUserList()},mounted:function(){},methods:{getUserList:function(){var t=this;this.selectAllStatus=!1,this.selectList=[],this.oprSelectRtx="";var e={rtx_id:a["a"].getters.rtx_id,limit:this.pageSize||15,offset:(this.pageCur-1)*this.pageSize||0};return new Promise((function(r,i){Object(s["l"])(e).then((function(e){var i=e.status_id,l=e.data;100!==i&&101!==i||(t.tableData=l.list,t.pageTotal=l.total),r(e)})).catch((function(e){t.loading=!1,i(e)}))}))},selectRow:function(t,e){if(e){if(null!==e&&void 0!==e&&e.md5_id&&!this.selectList.includes(e.md5_id))this.selectList.push(e.md5_id);else if(null!==e&&void 0!==e&&e.md5_id&&this.selectList.includes(e.md5_id)){var r=this.selectList.indexOf(e.md5_id);r>-1&&this.selectList.splice(r,1)}else console.log("Add data is not have md5-id");this.selectAllStatus=this.tableData.length===this.selectList.length}},selectChange:function(t){},selectAll:function(t){t&&(this.selectAllStatus=!this.selectAllStatus,this.selectList=this.selectAllStatus?t.map((function(t){return(null===t||void 0===t?void 0:t.md5_id)||""})):[])},manualSelectALL:function(){this.$refs.multipleSourceTableRef.toggleAllSelection()},setTableHeaderStyle:function(){return{background:"#eee",color:"#606266"}},rowHandlePw:function(t,e){if(!e)return!1;this.oprSelectRtx=e.rtx_id,this.pwDialogStatus=!0},rowHandleEdit:function(t,e){if(!e)return!1;this.oprSelectRtx=e.rtx_id,this.setDialogStatus=!0},openAddUser:function(){this.addDialogStatus=!0},closeAddUser:function(t){this.addDialogStatus=!1,t&&this.getUserList()},closeDetailUser:function(t){this.setDialogStatus=!1,t&&this.getUserList()},closePwUser:function(){this.pwDialogStatus=!1},closeDeleteDialog:function(t){this.deleteConfirm=!1,t&&this.getUserList()},openDeleteDialog:function(){if(0===this.selectList.length)return this.$message({message:"请选择注销的用户",type:"warning",duration:2e3}),!1;this.deleteConfirm=!0},paginSizeChange:function(t){this.pageSize=t,this.getUserList()},paginCurrentChange:function(t){this.pageCur=t,this.getUserList()}}},W=Q,Y=(r("1ec4"),Object(w["a"])(W,i,l,!1,null,"1a4c0348",null));e["default"]=Y.exports},"95a6":function(t,e,r){"use strict";r("1747")},bbeb:function(t,e,r){},c43c:function(t,e,r){"use strict";r("2983")}}]);