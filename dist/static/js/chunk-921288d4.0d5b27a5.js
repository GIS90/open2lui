(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-921288d4"],{4837:function(t,e,a){"use strict";a.d(e,"t",(function(){return i})),a.d(e,"v",(function(){return n})),a.d(e,"p",(function(){return o})),a.d(e,"q",(function(){return l})),a.d(e,"s",(function(){return s})),a.d(e,"r",(function(){return d})),a.d(e,"w",(function(){return c})),a.d(e,"o",(function(){return u})),a.d(e,"u",(function(){return f})),a.d(e,"e",(function(){return m})),a.d(e,"b",(function(){return p})),a.d(e,"c",(function(){return b})),a.d(e,"d",(function(){return h})),a.d(e,"g",(function(){return g})),a.d(e,"a",(function(){return x})),a.d(e,"f",(function(){return D})),a.d(e,"l",(function(){return A})),a.d(e,"i",(function(){return _})),a.d(e,"h",(function(){return v})),a.d(e,"m",(function(){return k})),a.d(e,"j",(function(){return y})),a.d(e,"n",(function(){return w})),a.d(e,"k",(function(){return z}));var r=a("b775");function i(t){return Object(r["a"])({url:"/info/dict_list",method:"post",data:t})}function n(t){return Object(r["a"])({url:"/info/dict_status",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/info/dict_delete",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/info/dict_deletes",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/info/dict_disables",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/info/dict_detail",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/info/dict_update",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/info/dict_add",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/info/dict_names",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/info/api_list",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/info/api_delete",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/info/api_deletes",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/info/api_detail",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/info/api_update",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/info/api_add",method:"post",data:t})}function D(t){return Object(r["a"])({url:"/info/api_types",method:"post",data:t})}function A(t){return Object(r["a"])({url:"/info/depart_list",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/info/depart_init",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/info/depart_add",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/info/depart_remove",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/info/depart_detail",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/info/depart_update",method:"post",data:t})}function z(t){return Object(r["a"])({url:"/info/depart_drag",method:"post",data:t})}},"9dd4":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("el-input",{attrs:{type:"text",placeholder:"输入关键字进行过滤",maxlength:t.inputAttrs.length,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.btnDisabled},model:{value:t.filterText,callback:function(e){t.filterText="string"===typeof e?e.trim():e},expression:"filterText"}})],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("span",{staticStyle:{float:"right"}},[a("el-tooltip",{attrs:{effect:"dark",content:"刷新",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-refresh",plain:t.btnIconAttrs.plain,size:t.btnIconAttrs.size,disabled:t.btnDisabled,circle:t.btnIconAttrs.circle},on:{click:t.refreshTree}})],1)],1)])],1),a("div",{staticClass:"table-sty",attrs:{id:"data-container"}},[a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("el-tree",{ref:"tree",attrs:{data:t.treeData,"show-checkbox":t.treeAttrs.checkbox,"node-key":t.treeAttrs.nodeKey,lazy:t.treeAttrs.load,"highlight-current":t.treeAttrs.hln,"expand-on-click-node":t.treeAttrs.encn,"check-on-click-node":t.treeAttrs.cncn,"auto-expand-parent":t.treeAttrs.aep,"check-strictly":t.treeAttrs.es,accordion:t.treeAttrs.accordion,indent:t.treeAttrs.indent,"icon-class":t.treeAttrs.icon,draggable:t.treeAttrs.drag,"default-expand-all":t.treeAttrs.defaultExpand,"default-expanded-keys":t.defaultExpandedKeys,"default-checked-keys":t.defaultCheckedKeys,props:t.treeAttrs.defaultProps,"allow-drag":t.allowDrag,"filter-node-method":t.filterTreeNode},on:{"node-click":t.nodeClick,"node-drag-start":t.dragStart,"node-drag-end":t.dragEnd},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.node,i=e.data;return a("span",{staticClass:"custom-tree-node"},[a("span",[t._v(t._s(r.label))]),a("span",[a("el-button",{staticClass:"handle-icon",attrs:{type:"text",size:"mini",disabled:i.lock},on:{click:function(e){return t.openAdd(r,i)}}},[t._v("新增")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1!==i.id,expression:"data.id !== 1"}],staticClass:"handle-icon-danger",attrs:{type:"text",size:"mini",disabled:i.lock},on:{click:function(e){return t.nodeRemove(r,i)}}},[t._v("删除")])],1)])}}])})],1),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.showEdit,expression:"showEdit"}],attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("depart-edit",{attrs:{"form-data":t.editNode,"user-list":t.userList},on:{"edit-after":t.editAfter}})],1)],1)],1),a("depart-add",{attrs:{show:t.addDialogStatus,"up-node":t.newNodeUp},on:{"close-add":t.closeAdd}})],1)},i=[],n=(a("4de4"),a("d3b7"),a("caad"),a("c740"),a("a434"),a("4360")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.show,width:t.dialogAttrs.width,fullscreen:t.fullScreenStatus,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:function(e){return t.openDialog()},close:function(e){return t.closeDialog()}},scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{on:{dblclick:t.handleFull}},[a("span",{staticClass:"dialog-title"},[a("span",{domProps:{textContent:t._s(t.dialogAttrs.title)}}),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"关闭",placement:"top"}},[a("i",{staticClass:"el-icon-close dialog-title-close",on:{click:t.closeDialog}})]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.fullScreenText,placement:"top"}},[a("i",{class:[t.fullScreenIcon,"dialog-title-full"],on:{click:t.handleFull}})])],1)])]},proxy:!0},{key:"footer",fn:function(){return[a("span",{staticClass:"dialog-footer"},[a("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),a("el-button",{attrs:{disabled:t.disabled,loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.submit()}}},[t._v("确定")])],1)]},proxy:!0}])},[a("el-form",{ref:"formData",staticStyle:{width:"100%"},attrs:{"label-position":t.labelPosition,model:t.formData,rules:t.formDataRules,"label-width":"auto"}},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("上级部门信息")]),a("el-form-item",{attrs:{label:"上级ID"}},[a("el-input",{attrs:{type:"text",maxlength:t.formDataLimit.name,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:""},model:{value:t.upNode.id,callback:function(e){t.$set(t.upNode,"id","string"===typeof e?e.trim():e)},expression:"upNode.id"}})],1),a("el-form-item",{attrs:{label:"上级名称"}},[a("el-input",{attrs:{type:"text",maxlength:t.formDataLimit.name,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:""},model:{value:t.upNode.name,callback:function(e){t.$set(t.upNode,"name","string"===typeof e?e.trim():e)},expression:"upNode.name"}})],1),a("el-form-item",{attrs:{label:"上级路径"}},[a("el-input",{attrs:{type:"text",maxlength:t.formDataLimit.name,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:""},model:{value:t.upNode.path,callback:function(e){t.$set(t.upNode,"path","string"===typeof e?e.trim():e)},expression:"upNode.path"}})],1),a("el-divider",{attrs:{"content-position":"left"}},[t._v("新部门信息")]),a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入部门名称",maxlength:t.formDataLimit.label,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.formData.label,callback:function(e){t.$set(t.formData,"label","string"===typeof e?e.trim():e)},expression:"formData.label"}})],1),a("el-form-item",{attrs:{label:"简述",prop:"description"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入部门简述",rows:t.textAreaAttrs.rows,maxlength:t.formDataLimit.description,clearable:t.textAreaAttrs.clear,"show-word-limit":t.textAreaAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1),a("el-form-item",{attrs:{label:"管理员",prop:"manage_rtx"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:t.selectAttrs.size,placeholder:"请选择部门管理员",disabled:t.disabled,filterable:t.selectAttrs.filterable,multiple:t.selectAttrs.multiple,clearable:t.selectAttrs.clearable,"no-data-text":t.selectAttrs.noDataText,"collapse-tags":t.selectAttrs.collapseTags},model:{value:t.formData.manage_rtx,callback:function(e){t.$set(t.formData,"manage_rtx","string"===typeof e?e.trim():e)},expression:"formData.manage_rtx"}},t._l(t.userList,(function(e,r){return a("el-option",{key:r,attrs:{label:e.value,value:e.key}},[a("span",{staticClass:"select-opt-left"},[t._v(t._s(e.value))]),a("span",{staticClass:"select-opt-right"},[t._v(t._s(e.key))])])})),1)],1),a("el-form-item",{attrs:{label:"状态",prop:"lock"}},[a("el-radio",{attrs:{label:t.radioValue.use},model:{value:t.formData.lock,callback:function(e){t.$set(t.formData,"lock",e)},expression:"formData.lock"}},[t._v("启用")]),a("el-radio",{attrs:{label:t.radioValue.ban},model:{value:t.formData.lock,callback:function(e){t.$set(t.formData,"lock",e)},expression:"formData.lock"}},[t._v("禁用")])],1),a("el-form-item",{attrs:{label:"排序ID",prop:"order_id"}},[a("el-input-number",{staticStyle:{width:"100%"},attrs:{controls:t.numberAttrs.controls,"controls-position":t.numberAttrs.controlsPosition,min:t.numberAttrs.min,max:t.numberAttrs.max,step:t.numberAttrs.step,size:t.numberAttrs.size,disabled:t.disabled},model:{value:t.formData.order_id,callback:function(e){t.$set(t.formData,"order_id",e)},expression:"formData.order_id"}})],1)],1)],1)],1)},l=[],s=(a("a4d3"),a("e01a"),a("4837")),d={name:"DepartAdd",emits:["close-add"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},upNode:{type:Object,require:!0,default:function(){return{}}}},data:function(){return{loading:!1,disabled:!1,labelPosition:"left",fullScreenStatus:!1,fullScreenIcon:"el-icon-full-screen",fullScreenText:"全屏",dialogAttrs:{title:"新增",width:"65%",fullScreen:!1,top:"5%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!1,draggable:!1,center:!1},inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},textAreaAttrs:{rows:4,autoSize:{minRows:4,maxRows:6},clear:!0,length:"255",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},selectAttrs:{size:"medium",multiple:!1,clearable:!0,filterable:!0,collapseTags:!1,limit:1,noDataText:"暂无数据",placeholder:"请选择管理员"},numberAttrs:{size:"",min:1,max:1e4,step:1,controls:!0,controlsPosition:"",placeholder:"请输入排序ID"},radioAttrs:{border:!1,size:"small"},radioValue:{use:!1,ban:!0},formData:{label:"",description:"",manage_rtx:"",lock:!1,order_id:1},formDataLimit:{label:"30",description:"300",manage_rtx:"25"},formDataRules:{label:[{required:!0,message:"请输入部门名称",trigger:["blur","change"]},{min:1,max:30,message:"部门名称最大长度为30",trigger:["blur","change"]}],description:[{required:!0,message:"请输入部门简述",trigger:["blur","change"]},{min:1,max:300,message:"部门简述最大长度为300",trigger:["blur","change"]}],manage_rtx:[{required:!0,message:"请选择部门管理员",trigger:["blur","change"]}]},userList:[]}},computed:{},watch:{fullScreenStatus:function(t,e){this.fullScreenIcon=t?"el-icon-copy-document":"el-icon-full-screen",this.fullScreenText=t?"缩小":"全屏"}},created:function(){},mounted:function(){},methods:{openDialog:function(){var t=this;this.fullScreenStatus=!1,this.formData.label="",this.formData.description="",this.formData.manage_rtx="",this.formData.lock=!1,this.formData.order_id=1,this.$nextTick((function(){t.initDepart(),t.$refs.formData.resetFields()}))},closeDialog:function(){this.$refs.formData.clearValidate(),this.$emit("close-add",!1)},handleFull:function(){this.fullScreenStatus=!this.fullScreenStatus},initDepart:function(){var t=this,e={rtx_id:n["a"].getters.rtx_id};return new Promise((function(a,r){Object(s["i"])(e).then((function(e){var r=e.status_id,i=e.data;100===r&&(t.userList=i.user),a(e)})).catch((function(t){r(t)}))}))},submit:function(){var t=this;this.$refs.formData.validate((function(e){if(e){t.disabled=!0,t.loading=!0;var a={rtx_id:n["a"].getters.rtx_id,name:t.formData.label,description:t.formData.description,manage_rtx:t.formData.manage_rtx,lock:t.formData.lock,order_id:t.formData.order_id||1,pid:t.upNode.id};return new Promise((function(e,r){Object(s["h"])(a).then((function(a){var r=a.status_id;a.message;100===r&&(t.$message({message:"新增成功",type:"success",duration:2e3}),t.$emit("close-add",!0)),e(a)})).catch((function(t){r(t)})).finally((function(){t.disabled=!1,t.loading=!1,t.$refs.formData.clearValidate()}))}))}}))}}},c=d,u=a("2877"),f=Object(u["a"])(c,o,l,!1,null,"011149c5",null),m=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"formData",staticStyle:{width:"100%"},attrs:{"label-position":t.labelPosition,model:t.formData,rules:t.formDataRules,"label-width":"auto"}},[a("el-form-item",{attrs:{label:"ID",prop:"id"}},[a("el-input",{attrs:{type:"text",size:t.inputAttrs.size,disabled:""},model:{value:t.formData.id,callback:function(e){t.$set(t.formData,"id","string"===typeof e?e.trim():e)},expression:"formData.id"}})],1),a("el-form-item",{attrs:{label:"名称",prop:"label"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入部门名称",maxlength:t.formDataLimit.label,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,size:t.inputAttrs.size,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.formData.label,callback:function(e){t.$set(t.formData,"label","string"===typeof e?e.trim():e)},expression:"formData.label"}})],1),a("el-form-item",{attrs:{label:"简述",prop:"description"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入部门简述",autosize:t.textAreaAttrs.autoSize,maxlength:t.formDataLimit.description,clearable:t.textAreaAttrs.clear,"show-word-limit":t.textAreaAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1),a("el-form-item",{attrs:{label:"路径",prop:"dept_path"}},[a("el-input",{attrs:{type:"text",size:t.inputAttrs.size,disabled:""},model:{value:t.formData.dept_path,callback:function(e){t.$set(t.formData,"dept_path","string"===typeof e?e.trim():e)},expression:"formData.dept_path"}})],1),a("el-form-item",{attrs:{label:"管理员",prop:"manage_rtx"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:t.selectAttrs.size,placeholder:"请选择部门管理员",disabled:t.disabled,filterable:t.selectAttrs.filterable,multiple:t.selectAttrs.multiple,clearable:t.selectAttrs.clearable,"no-data-text":t.selectAttrs.noDataText,"collapse-tags":t.selectAttrs.collapseTags},model:{value:t.formData.manage_rtx,callback:function(e){t.$set(t.formData,"manage_rtx","string"===typeof e?e.trim():e)},expression:"formData.manage_rtx"}},t._l(t.userList,(function(e,r){return a("el-option",{key:r,attrs:{label:e.value,value:e.key}},[a("span",{staticClass:"select-opt-left"},[t._v(t._s(e.value))]),a("span",{staticClass:"select-opt-right"},[t._v(t._s(e.key))])])})),1)],1),a("el-form-item",{attrs:{label:"状态",prop:"lock"}},[a("el-radio",{attrs:{label:t.radioValue.use},model:{value:t.formData.lock,callback:function(e){t.$set(t.formData,"lock",e)},expression:"formData.lock"}},[t._v("启用")]),a("el-radio",{attrs:{label:t.radioValue.ban},model:{value:t.formData.lock,callback:function(e){t.$set(t.formData,"lock",e)},expression:"formData.lock"}},[t._v("禁用")])],1),a("el-form-item",{attrs:{label:"排序ID",prop:"order_id"}},[a("el-input-number",{staticStyle:{width:"100%"},attrs:{controls:t.numberAttrs.controls,"controls-position":t.numberAttrs.controlsPosition,min:t.numberAttrs.min,max:t.numberAttrs.max,step:t.numberAttrs.step,size:t.numberAttrs.size,disabled:t.disabled},model:{value:t.formData.order_id,callback:function(e){t.$set(t.formData,"order_id",e)},expression:"formData.order_id"}})],1),a("el-form-item",[a("el-button",{attrs:{disabled:t.disabled,loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.submit()}}},[t._v("确定")])],1)],1)],1)},b=[],h={name:"DepartEdit",emits:["edit-after"],components:{},props:{formData:{type:Object,require:!0,default:function(){return{}}},userList:{type:Array,require:!0,default:function(){return[]}}},data:function(){return{loading:!1,disabled:!1,labelPosition:"left",inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},textAreaAttrs:{rows:8,autoSize:{minRows:6,maxRows:8},clear:!0,length:"255",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},selectAttrs:{size:"medium",multiple:!1,clearable:!0,filterable:!0,collapseTags:!1,limit:1,noDataText:"暂无数据",placeholder:"请选择管理员"},numberAttrs:{size:"",min:1,max:1e4,step:1,controls:!0,controlsPosition:"",placeholder:"请输入排序ID"},radioAttrs:{border:!1,size:"small"},radioValue:{use:!1,ban:!0},formDataLimit:{label:"30",description:"300",manage_rtx:"25"},formDataRules:{label:[{required:!0,message:"请输入部门名称",trigger:["blur","change"]},{min:1,max:30,message:"部门名称最大长度为30",trigger:["blur","change"]}],description:[{required:!0,message:"请输入部门简述",trigger:["blur","change"]},{min:1,max:300,message:"部门简述最大长度为300",trigger:["blur","change"]}],manage_rtx:[{required:!0,message:"请选择部门管理员",trigger:["blur","change"]}]}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{submit:function(){var t=this;this.$refs.formData.validate((function(e){if(e){t.disabled=!0,t.loading=!0;var a={rtx_id:n["a"].getters.rtx_id,md5:t.formData.md5_id,name:t.formData.label,description:t.formData.description,manage_rtx:t.formData.manage_rtx,lock:t.formData.lock,order_id:t.formData.order_id||1};return new Promise((function(e,r){Object(s["n"])(a).then((function(a){var r=a.status_id;a.message;100===r&&(t.$message({message:"更新成功",type:"success",duration:2e3}),t.$emit("edit-after",!0)),e(a)})).catch((function(t){r(t)})).finally((function(){t.disabled=!1,t.loading=!1,t.$refs.formData.clearValidate()}))}))}}))}}},g=h,x=Object(u["a"])(g,p,b,!1,null,"508acd4a",null),D=x.exports,A={name:"Department",emits:[],components:{"depart-add":m,"depart-edit":D},props:{},data:function(){return{btnDisabled:!1,defaultTreeNodeName:"新目录",defaultLeafNodeName:"新节点",defaultExpandedKeys:[],defaultCheckedKeys:[],treeData:[],treeAttrs:{nodeKey:"id",checkbox:!1,load:!1,es:!1,hln:!0,encn:!1,cncn:!1,aep:!0,defaultProps:{children:"children",label:"label"},accordion:!1,indent:16,icon:"",drag:!0,defaultExpand:!0,emptyText:"暂无数据"},btnBaseAttrs:{size:"medium",type:"primary",plain:!0,round:!1,circle:!1},btnIconAttrs:{size:"medium",type:"primary",plain:!0,round:!1,circle:!0},inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},newNodeUp:{},addDialogStatus:!1,userList:[],showEdit:!1,editNode:{},filterText:""}},computed:{},watch:{editNode:function(t,e){t.md5_id&&(this.showEdit=!0)},filterText:function(t,e){this.$refs.tree.filter(t)}},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){t.getData()}))},methods:{getData:function(t){var e=this,a={rtx_id:n["a"].getters.rtx_id};return new Promise((function(r,i){Object(s["l"])(a).then((function(a){var i=a.status_id,n=a.data;100===i&&(e.treeData=n.tree),[2,3].includes(t)&&100===i&&e.$notify({title:"消息",type:"success",message:"刷新成功",duration:1200,position:"top-right",showClose:!1}),r(a)})).catch((function(t){i(t)}))}))},refreshTree:function(){this.getData(2)},openAdd:function(t,e){if(!t||!e)return!1;this.addDialogStatus=!0,this.newNodeUp={id:e.id,name:e.label,path:e.dept_path}},closeAdd:function(t){this.addDialogStatus=!1,t&&this.getData()},nodeRemove:function(t,e){var a=this;if(!t||!e)return!1;if(1===e.id)return this.$message({message:"根节点不允许删除",type:"warning",duration:2e3}),!1;this.btnDisabled=!0;var r={rtx_id:n["a"].getters.rtx_id,md5:e.md5_id};return new Promise((function(i,n){Object(s["m"])(r).then((function(r){var n=r.status_id;r.message;if(100===n){var o=t.parent,l=o.data.children||o.data,s=l.findIndex((function(t){return t.id===e.id}));l.splice(s,1),a.$message({message:"删除成功",type:"success",duration:2e3})}i(r)})).catch((function(t){n(t)})).finally((function(){a.btnDisabled=!1}))}))},nodeClick:function(t,e,a){var r=this;if(!e||!t)return!1;var i={rtx_id:n["a"].getters.rtx_id,md5:t.md5_id};return new Promise((function(e,a){Object(s["j"])(i).then((function(a){var i=a.status_id;100===i?(r.editNode=a.data.depart,r.userList=a.data.user):r.editNode=t,e(a)})).catch((function(t){a(t)}))}))},editAfter:function(t){t&&this.getData()},allowDrag:function(t){if(t&&t.data)return!t.data.lock},dragStart:function(t,e){t&&t.data&&t.data.lock&&this.$message({message:"节点被禁用，不允许调整",type:"warning",duration:2e3})},dragEnd:function(t,e,a,r){var i=this;if(t&&t.data&&e&&e.data){if("none"===a)return!1;if(!["before","after","inner"].includes(a))return this.$message({message:"节点拖拽类型错误",type:"warning",duration:2e3}),!1;this.btnDisabled=!0;var o={rtx_id:n["a"].getters.rtx_id,md5:t.data.md5_id,pid:["before","after"].includes(a)?e.data.pid:e.data.id};return new Promise((function(t,e){Object(s["k"])(o).then((function(e){var a=e.status_id;e.message;100===a&&i.$message({message:"调整成功",type:"success",duration:2e3}),t(e)})).catch((function(t){e(t)})).finally((function(){i.btnDisabled=!1}))}))}},filterTreeNode:function(t,e){return!t||-1!==e.label.indexOf(t)}}},_=A,v=(a("a55f"),Object(u["a"])(_,r,i,!1,null,"662c807c",null));e["default"]=v.exports},a55f:function(t,e,a){"use strict";a("f9fe")},f9fe:function(t,e,a){}}]);