(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02b169f9"],{"134a":function(t,e,a){},1925:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"g",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return c})),a.d(e,"h",(function(){return d})),a.d(e,"a",(function(){return u}));var o=a("b775");function n(t){return Object(o["a"])({url:"/search/sqlbase_add",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/search/sqlbase_add_init",method:"post",data:t})}function r(t){return Object(o["a"])({url:"/search/sqlbase_list",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/search/sqlbase_delete",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/search/sqlbase_deletes",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/search/sqlbase_detail",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/search/sqlbase_update",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/search/share_list",method:"post",data:t})}},2934:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a("b775");function n(t){return Object(o["a"])({url:"/common/file_uploads",method:"post",data:t})}},4837:function(t,e,a){"use strict";a.d(e,"t",(function(){return n})),a.d(e,"v",(function(){return i})),a.d(e,"p",(function(){return r})),a.d(e,"q",(function(){return l})),a.d(e,"s",(function(){return s})),a.d(e,"r",(function(){return c})),a.d(e,"w",(function(){return d})),a.d(e,"o",(function(){return u})),a.d(e,"u",(function(){return f})),a.d(e,"e",(function(){return p})),a.d(e,"b",(function(){return m})),a.d(e,"c",(function(){return h})),a.d(e,"d",(function(){return b})),a.d(e,"g",(function(){return g})),a.d(e,"a",(function(){return w})),a.d(e,"f",(function(){return _})),a.d(e,"l",(function(){return A})),a.d(e,"i",(function(){return D})),a.d(e,"h",(function(){return y})),a.d(e,"m",(function(){return v})),a.d(e,"j",(function(){return x})),a.d(e,"n",(function(){return O})),a.d(e,"k",(function(){return j}));var o=a("b775");function n(t){return Object(o["a"])({url:"/info/dict_list",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/info/dict_status",method:"post",data:t})}function r(t){return Object(o["a"])({url:"/info/dict_delete",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/info/dict_deletes",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/info/dict_disables",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/info/dict_detail",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/info/dict_update",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/info/dict_add",method:"post",data:t})}function f(t){return Object(o["a"])({url:"/info/dict_names",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/info/api_list",method:"post",data:t})}function m(t){return Object(o["a"])({url:"/info/api_delete",method:"post",data:t})}function h(t){return Object(o["a"])({url:"/info/api_deletes",method:"post",data:t})}function b(t){return Object(o["a"])({url:"/info/api_detail",method:"post",data:t})}function g(t){return Object(o["a"])({url:"/info/api_update",method:"post",data:t})}function w(t){return Object(o["a"])({url:"/info/api_add",method:"post",data:t})}function _(t){return Object(o["a"])({url:"/info/api_types",method:"post",data:t})}function A(t){return Object(o["a"])({url:"/info/depart_list",method:"post",data:t})}function D(t){return Object(o["a"])({url:"/info/depart_init",method:"post",data:t})}function y(t){return Object(o["a"])({url:"/info/depart_add",method:"post",data:t})}function v(t){return Object(o["a"])({url:"/info/depart_remove",method:"post",data:t})}function x(t){return Object(o["a"])({url:"/info/depart_detail",method:"post",data:t})}function O(t){return Object(o["a"])({url:"/info/depart_update",method:"post",data:t})}function j(t){return Object(o["a"])({url:"/info/depart_drag",method:"post",data:t})}},"66ae":function(t,e,a){"use strict";a("134a")},"6e90":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-button",{attrs:{id:"btn-upload",size:t.btnBaseAttrs.size,plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,disabled:t.btnDisabled},on:{click:t.openFileUpload}},[a("svg-icon",{attrs:{"icon-class":"i_upload"}}),t._v(" 上传 ")],1),a("el-button",{staticClass:"btn-margin",attrs:{id:"btn-select",plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,size:t.btnBaseAttrs.size,disabled:t.btnDisabled},on:{click:t.manualSelectALL}},[a("svg-icon",{attrs:{"icon-class":"i_select"}}),t._v(" "+t._s(t.selBtnText)+" ")],1),a("el-button",{staticClass:"btn-margin",attrs:{id:"btn-delete",plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,size:t.btnBaseAttrs.size,disabled:t.btnDisabled},on:{click:t.openDeleteDialog}},[a("svg-icon",{attrs:{"icon-class":"i_delete"}}),t._v(" 删除 ")],1),a("span",{staticStyle:{float:"right"}},[a("el-tooltip",{attrs:{effect:"dark",content:"刷新",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-refresh",plain:t.btnIconAttrs.plain,size:t.btnIconAttrs.size,disabled:t.btnDisabled,circle:t.btnIconAttrs.circle},on:{click:function(e){return t.getTableList(2)}}})],1)],1)],1),a("public-upload-file",{attrs:{dialog:t.uploadDialogStatus,"file-type":t.fileType},on:{"close-file-upload":t.closeFileUpload}}),a("div",{staticClass:"table-sty",attrs:{id:"data-container"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"multipleTableRef",staticStyle:{width:"100%"},attrs:{data:t.tableData,size:t.tableAttrs.size,fit:t.tableAttrs.fit,"show-header":t.tableAttrs.showHeader,"highlight-current-row":t.tableAttrs.hcr,border:t.tableAttrs.border,"default-sort":{prop:"create_time",order:"descending"},"empty-text":t.tableAttrs.emptyText,"header-cell-style":t.setTableHeaderStyle,"row-style":t.setTableRowStyle},on:{select:t.selectRow,"selection-change":t.selectChange,"select-all":t.selectAll}},[a("el-table-column",{attrs:{fixed:"left",type:"selection",width:"70","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align}}),a("el-table-column",{attrs:{fixed:"left",prop:"id",label:"序号",width:"100",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{fixed:"left",label:"创建时间",width:"240",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(e.row.create_time))])]}}])}),a("el-table-column",{attrs:{prop:"name",label:"文件名称",width:"370",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:"left","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"transfer",label:"转换状态",width:"180",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"mode",label:"转换模式",width:"240",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"transfer_time",label:"转换时间",width:"240",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"start",label:"开始页",width:"180","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"end",label:"结束页",width:"180","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"pages",label:"指标页列表",width:"270","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"rtx_id",label:"上传人RTX",width:"200",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:t.tableRowAttrs.align,"min-width":"420"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"table-handle-icon",attrs:{effect:"dark",content:"设置",placement:"top"}},[a("i",{staticClass:"el-icon-setting",on:{click:function(a){return t.rowHandleEdit(e.$index,e.row)}}})]),a("el-tooltip",{staticClass:"icon-item",attrs:{effect:"light",content:"转换",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-refresh",type:"primary",size:"mini",round:"",plain:"",disabled:t.btnDisabled},on:{click:function(a){return t.rowHandleTo(e.$index,e.row)}}})],1),e.row.store_url?a("el-tooltip",{staticClass:"table-handle-icon icon-item",attrs:{effect:"dark",content:"PDF下载",placement:"top"}},[a("a",{attrs:{href:e.row.store_url}},[a("i",{staticClass:"el-icon-upload2"})])]):t._e(),e.row.transfer_url?a("el-tooltip",{staticClass:"table-handle-icon icon-item",attrs:{effect:"dark",content:"WORD下载",placement:"top"}},[a("a",{attrs:{href:e.row.transfer_url}},[a("i",{staticClass:"el-icon-download"})])]):t._e(),a("el-tooltip",{staticClass:"table-handle-icon icon-item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("i",{staticClass:"el-icon-delete",on:{click:function(a){return t.rowHandleDelete(e.$index,e.row)}}})])]}}])})],1)],1),a("public-pagination",{attrs:{page:t.pageCur,size:t.pageSize,total:t.pageTotal},on:{"pagin-size-change":t.paginSizeChange,"pagin-current-change":t.paginCurrentChange}}),a("batch-delete",{attrs:{show:t.deleteConfirm,list:t.selectList,source:t.deleteSource},on:{"close-delete-dialog":t.closeDeleteDialog}}),a("office-pdf-set",{attrs:{show:t.setDialogStatus,"row-md5":t.oprSelectRowMd5},on:{"close-set-dg":t.closeSetDialog}}),a("office-pdf-to-word",{attrs:{show:t.toDialogStatus,"row-md5":t.oprSelectRowMd5},on:{"close-to-dg":t.closeToDialog}})],1)},n=[],i=(a("caad"),a("2532"),a("a434"),a("d81d"),a("d3b7"),a("4360")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:function(e){return t.openDialog()},close:function(e){return t.closeDialog()}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",{staticClass:"dialog-footer"},[a("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),a("el-button",{attrs:{disabled:t.disabled,loading:t.loading,type:"primary"},on:{click:function(e){return t.submitSet()}}},[t._v("确定")])],1)]},proxy:!0}])},[a("el-form",{staticStyle:{width:"100%"},attrs:{"label-position":t.labelPosition,"label-width":"auto"}},[a("el-form-item",[a("el-switch",{staticClass:"sw-sty",staticStyle:{display:"block"},attrs:{disabled:t.disabled,width:t.switchAttrs.width,"active-text":t.switchAttrs.activeText,"inactive-text":t.switchAttrs.inactiveText,"active-color":t.switchAttrs.activeColor,"inactive-color":t.switchAttrs.inactiveColor,"active-value":t.switchAttrs.activeValue,"inactive-value":t.switchAttrs.inactiveValue},on:{change:function(e){return t.changeStatus(e)}},model:{value:t.formData.mode,callback:function(e){t.$set(t.formData,"mode",e)},expression:"formData.mode"}})],1),a("el-form-item",{attrs:{label:"起始页码"}},[a("el-input",{attrs:{placeholder:"文档转换的起始页码，默认首页开始",size:t.inputAttrs.size,maxlength:t.formDataLimit.start,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:!t.formData.mode,oninput:"this.value=this.value.replace(/[^\\d]/g,'');"},model:{value:t.formData.start,callback:function(e){t.$set(t.formData,"start","string"===typeof e?e.trim():e)},expression:"formData.start"}})],1),a("el-form-item",{attrs:{label:"结束页码"}},[a("el-input",{attrs:{placeholder:"文档转换的结束页码，默认最后一页结束",size:t.inputAttrs.size,maxlength:t.formDataLimit.end,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:!t.formData.mode,oninput:"this.value=this.value.replace(/[^\\d]/g,'');"},model:{value:t.formData.end,callback:function(e){t.$set(t.formData,"end","string"===typeof e?e.trim():e)},expression:"formData.end"}})],1),a("el-form-item",{attrs:{label:"指定页码"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入指定转换的指定页码，以,（英文逗号）分割",size:t.inputAttrs.size,maxlength:t.formDataLimit.pages,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.formData.mode},model:{value:t.formData.pages,callback:function(e){t.$set(t.formData,"pages","string"===typeof e?e.trim():e)},expression:"formData.pages"}})],1)],1)],1)],1)},l=[],s=a("b157"),c={name:"OfficePDFSet",emits:["close-set-dg"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},rowMd5:{type:String,require:!0,default:""}},data:function(){return{loading:!1,disabled:!1,labelPosition:"left",dialogAttrs:{title:"设置",width:"55%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},switchAttrs:{disabled:!1,width:35,activeText:"通用页码",inactiveText:"指定页码",activeValue:!0,inactiveValue:!1,activeColor:"#ff4949",inactiveColor:"#13ce66"},formDataLimit:{start:6,end:6,pages:120},formData:{start:"",end:"",pages:"",mode:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{changeStatus:function(t){this.formData.mode=t},openDialog:function(){if(!this.rowMd5)return this.$emit("close-set-dg",!0),!1;this.getDNewInfo()},closeDialog:function(){this.$emit("close-set-dg",!1)},getDNewInfo:function(){var t=this,e={rtx_id:i["a"].getters.rtx_id,md5:this.rowMd5};return new Promise((function(a,o){Object(s["o"])(e).then((function(e){var o=e.status_id,n=e.data;100===o?(t.formData.start=n.start,t.formData.end=n.end,t.formData.pages=n.pages,t.formData.mode=n.mode):t.$emit("close-set-dg"),a(e)})).catch((function(t){o(t)}))}))},submitSet:function(){var t=this;if("0"===this.formData.end)return this.$message({message:"结束页码不允许设置0",type:"warning",duration:2e3}),!1;if(this.formData.start&&this.formData.end&&parseInt(this.formData.start)>=parseInt(this.formData.end))return this.$message({message:"起始页码不允许小于结束页码",type:"warning",duration:2e3}),!1;this.disabled=!0,this.loading=!0;var e={rtx_id:i["a"].getters.rtx_id,start:this.formData.start,end:this.formData.end,pages:this.formData.pages,mode:this.formData.mode,md5:this.rowMd5};return new Promise((function(a,o){Object(s["q"])(e).then((function(e){var o=e.status_id;e.message;100===o&&(t.$message({message:"文件设置成功",type:"success",duration:2e3}),t.$emit("close-set-dg",!0)),a(e)})).catch((function(t){o(t)})).finally((function(){t.disabled=!1,t.loading=!1}))}))}}},d=c,u=(a("87de"),a("2877")),f=Object(u["a"])(d,r,l,!1,null,"54929616",null),p=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:function(e){return t.openDialog()},close:function(e){return t.closeDialog()}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",{staticClass:"dialog-footer"},[a("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),a("el-button",{attrs:{disabled:t.disabled,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("确定")])],1)]},proxy:!0}])},[a("div",{staticStyle:{"text-align":"center"},attrs:{id:"main-opr-div"}},[a("el-form",{staticStyle:{width:"100%"},attrs:{"label-position":t.labelPosition,"label-width":"auto"}},[a("el-form-item",[a("el-switch",{staticClass:"sw-sty",staticStyle:{display:"block"},attrs:{disabled:t.disabled,width:t.switchAttrs.width,"active-text":t.switchAttrs.activeText,"inactive-text":t.switchAttrs.inactiveText,"active-color":t.switchAttrs.activeColor,"inactive-color":t.switchAttrs.inactiveColor,"active-value":t.switchAttrs.activeValue,"inactive-value":t.switchAttrs.inactiveValue},on:{change:function(e){return t.changeStatus(e)}},model:{value:t.formData.mode,callback:function(e){t.$set(t.formData,"mode",e)},expression:"formData.mode"}})],1),a("el-form-item",{attrs:{label:"文件名称"}},[a("el-input",{attrs:{type:"text",placeholder:"新文件docx文档名称，不填写则默认以当前PDF文件名称命名",size:t.inputAttrs.size,maxlength:t.formDataLimit.name,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name","string"===typeof e?e.trim():e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"起始页码"}},[a("el-input",{attrs:{placeholder:"文档转换的起始页码，默认首页开始",size:t.inputAttrs.size,maxlength:t.formDataLimit.start,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:!t.formData.mode,oninput:"this.value=this.value.replace(/[^\\d]/g,'');"},model:{value:t.formData.start,callback:function(e){t.$set(t.formData,"start","string"===typeof e?e.trim():e)},expression:"formData.start"}})],1),a("el-form-item",{attrs:{label:"结束页码"}},[a("el-input",{attrs:{placeholder:"文档转换的结束页码，默认最后一页结束",size:t.inputAttrs.size,maxlength:t.formDataLimit.end,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:!t.formData.mode,oninput:"this.value=this.value.replace(/[^\\d]/g,'');"},model:{value:t.formData.end,callback:function(e){t.$set(t.formData,"end","string"===typeof e?e.trim():e)},expression:"formData.end"}})],1),a("el-form-item",{attrs:{label:"指定页码"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入指定转换的指定页码，以,（英文逗号）分割",size:t.inputAttrs.size,maxlength:t.formDataLimit.pages,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.formData.mode},model:{value:t.formData.pages,callback:function(e){t.$set(t.formData,"pages","string"===typeof e?e.trim():e)},expression:"formData.pages"}})],1)],1)],1)])],1)},h=[],b=(a("b0c0"),{name:"OfficePDFToWord",emits:["close-to-dg"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},rowMd5:{type:String,require:!0,default:""}},data:function(){return{disabled:!1,labelPosition:"left",dialogAttrs:{title:"转换",width:"55%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!1,closeOnPressEscape:!1,showClose:!1,draggable:!1,center:!1},inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},switchAttrs:{disabled:!1,width:35,activeText:"通用页码",inactiveText:"指定页码",activeValue:!0,inactiveValue:!1,activeColor:"#ff4949",inactiveColor:"#13ce66"},formDataLimit:{name:80,start:6,end:6,pages:120},formData:{name:"",start:"",end:"",pages:"",mode:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{changeStatus:function(t){this.formData.mode=t},openDialog:function(){if(!this.rowMd5)return this.$emit("close-to-dg",!0),!1;this.formData.name="",this.getDNewInfo()},closeDialog:function(){this.$emit("close-to-dg",!1)},getDNewInfo:function(){var t=this,e={rtx_id:i["a"].getters.rtx_id,md5:this.rowMd5};return new Promise((function(a,o){Object(s["o"])(e).then((function(e){var o=e.status_id,n=e.data;100===o?(t.formData.start=n.start,t.formData.end=n.end,t.formData.pages=n.pages,t.formData.mode=n.mode):t.$emit("close-to-dg"),a(e)})).catch((function(t){o(t)}))}))},submit:function(){var t=this;if("0"===this.formData.end)return this.$message({message:"结束页码不允许设置0",type:"warning",duration:2e3}),!1;if(this.formData.start&&this.formData.end&&parseInt(this.formData.start)>=parseInt(this.formData.end))return this.$message({message:"起始页码不允许小于结束页码",type:"warning",duration:2e3}),!1;this.disabled=!0;var e=this.$loading({target:document.querySelector("#main-opr-div"),body:!1,fullscreen:!0,lock:!0,text:"努力工作中......",spinner:"el-icon-loading",background:"",class:""}),a={rtx_id:i["a"].getters.rtx_id,name:this.formData.name,start:this.formData.start,end:this.formData.end,pages:this.formData.pages,mode:this.formData.mode,md5:this.rowMd5};return new Promise((function(o,n){Object(s["p"])(a).then((function(a){t.disabled=!1,e.close();var n=a.status_id;a.message;100===n&&(t.$message({message:"文件转换成功",type:"success",duration:2e3}),t.$emit("close-to-dg",!0)),o(a)})).catch((function(a){t.disabled=!1,e.close(),n(a)}))}))}}}),g=b,w=(a("66ae"),Object(u["a"])(g,m,h,!1,null,"7e94628c",null)),_=w.exports,A=a("b418"),D=a("333d"),y=a("3035"),v={name:"OfficePdf2word",emits:[],components:{"batch-delete":y["a"],"office-pdf-set":p,"office-pdf-to-word":_,"public-upload-file":A["a"],"public-pagination":D["a"]},props:{},data:function(){return{fileType:"6",selBtnText:"全选",btnDisabled:!1,btnBaseAttrs:{size:"medium",type:"primary",plain:!0,round:!1,circle:!1},btnIconAttrs:{size:"medium",type:"primary",plain:!0,round:!1,circle:!0},uploadDialogStatus:!1,tableLoading:!1,tableAttrs:{stripe:!0,border:!0,size:"medium",fit:!0,showHeader:!0,hcr:!0,height:450,maxHeight:450,showSum:!0,sumText:"统计",emptyText:"暂无数据"},tableRowAttrs:{type:"selection",index:1,fixed:!0,resizable:!0,align:"center",headerAlign:"center",sot:!0},pageCur:1,pageSize:15,pageTotal:0,selectAllStatus:!1,selectList:[],tableData:[],oprSelectRowMd5:"",setDialogStatus:!1,toDialogStatus:!1,deleteSource:"office-pdf",deleteConfirm:!1}},computed:{},watch:{selectAllStatus:function(t,e){this.selBtnText=t?"取消":"全选"}},created:function(){var t=this;this.$nextTick((function(){t.getTableList(1)}))},mounted:function(){},methods:{openFileUpload:function(){this.uploadDialogStatus=!0},closeFileUpload:function(t){this.uploadDialogStatus=!1,t&&this.getTableList()},selectRow:function(t,e){if(e){if(null!==e&&void 0!==e&&e.md5_id&&!this.selectList.includes(e.md5_id))this.selectList.push(e.md5_id);else if(null!==e&&void 0!==e&&e.md5_id&&this.selectList.includes(e.md5_id)){var a=this.selectList.indexOf(e.md5_id);a>-1&&this.selectList.splice(a,1)}else console.log("Add data is not have md5-id");this.selectAllStatus=this.tableData.length===this.selectList.length}},selectChange:function(t){},selectAll:function(t){t&&(this.selectAllStatus=!this.selectAllStatus,this.selectList=this.selectAllStatus?t.map((function(t){return(null===t||void 0===t?void 0:t.md5_id)||""})):[])},manualSelectALL:function(){this.$refs.multipleTableRef.toggleAllSelection()},setTableHeaderStyle:function(){return{background:"#eee",color:"#606266"}},setTableRowStyle:function(){},getTableList:function(t){var e=this;t&&(this.tableLoading=!0,this.btnDisabled=!0),this.selectAllStatus=!1,this.selectList=[],this.oprSelectRowMd5="";var a={rtx_id:i["a"].getters.rtx_id,limit:this.pageSize||15,offset:(this.pageCur-1)*this.pageSize||0};return new Promise((function(o,n){Object(s["r"])(a).then((function(a){var n=a.status_id,i=a.data;100!==n&&101!==n||(e.tableData=i.list,e.pageTotal=i.total),2===t&&100===n&&e.$notify({title:"消息",type:"success",message:"刷新成功",duration:1200,position:"top-right",showClose:!1}),o(a)})).catch((function(t){n(t)})).finally((function(){e.btnDisabled=!1,e.tableLoading=!1}))}))},paginSizeChange:function(t){this.pageSize=t,this.getTableList()},paginCurrentChange:function(t){this.pageCur=t,this.getTableList()},closeDeleteDialog:function(t){this.deleteConfirm=!1,t&&this.getTableList()},openDeleteDialog:function(){if(0===this.selectList.length)return this.$message({message:"请选择删除的文件",type:"warning",duration:2e3}),!1;this.deleteConfirm=!0},rowHandleEdit:function(t,e){null!==e&&void 0!==e&&e.md5_id&&(this.oprSelectRowMd5=e.md5_id,this.setDialogStatus=!0)},rowHandleTo:function(t,e){null!==e&&void 0!==e&&e.md5_id&&(this.oprSelectRowMd5=e.md5_id,this.toDialogStatus=!0)},rowHandleDelete:function(t,e){var a=this;if(null!==e&&void 0!==e&&e.md5_id){var o={rtx_id:i["a"].getters.rtx_id,md5:e.md5_id};return this.btnDisabled=!0,new Promise((function(t,e){Object(s["m"])(o).then((function(e){var o=e.status_id;e.message;100===o&&(a.$message({message:"删除成功",type:"success",duration:2e3}),a.getTableList()),t(e)})).catch((function(t){e(t)})).finally((function(){a.btnDisabled=!1}))}))}},closeSetDialog:function(t){this.setDialogStatus=!1,t&&this.getTableList()},closeToDialog:function(t){this.toDialogStatus=!1,t&&this.getTableList()}}},x=v,O=Object(u["a"])(x,o,n,!1,null,"aa53d6ca",null);e["default"]=O.exports},"81c6":function(t,e,a){},"87de":function(t,e,a){"use strict";a("81c6")},b157:function(t,e,a){"use strict";a.d(e,"i",(function(){return n})),a.d(e,"j",(function(){return i})),a.d(e,"g",(function(){return r})),a.d(e,"h",(function(){return l})),a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return c})),a.d(e,"e",(function(){return d})),a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return f})),a.d(e,"k",(function(){return p})),a.d(e,"l",(function(){return m})),a.d(e,"f",(function(){return h})),a.d(e,"r",(function(){return b})),a.d(e,"o",(function(){return g})),a.d(e,"q",(function(){return w})),a.d(e,"m",(function(){return _})),a.d(e,"n",(function(){return A})),a.d(e,"p",(function(){return D}));var o=a("b775");function n(t){return Object(o["a"])({url:"/office/excel_source_list",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/office/excel_source_update",method:"post",data:t})}function r(t){return Object(o["a"])({url:"/office/excel_source_delete",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/office/excel_source_deletes",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/office/excel_merge",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/office/excel_history_list",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/office/excel_result_update",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/office/excel_result_delete",method:"post",data:t})}function f(t){return Object(o["a"])({url:"/office/excel_result_deletes",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/office/excel_split",method:"post",data:t})}function m(t){return Object(o["a"])({url:"/office/excel_init_split",method:"post",data:t})}function h(t){return Object(o["a"])({url:"/office/excel_sheet_header",method:"post",data:t})}function b(t){return Object(o["a"])({url:"/office/pdf2word_list",method:"post",data:t})}function g(t){return Object(o["a"])({url:"/office/office_pdf_detail",method:"post",data:t})}function w(t){return Object(o["a"])({url:"/office/office_pdf_update",method:"post",data:t})}function _(t){return Object(o["a"])({url:"/office/office_pdf_delete",method:"post",data:t})}function A(t){return Object(o["a"])({url:"/office/office_pdf_deletes",method:"post",data:t})}function D(t){return Object(o["a"])({url:"/office/office_pdf_to",method:"post",data:t})}},cd4b:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"p",(function(){return s})),a.d(e,"a",(function(){return c})),a.d(e,"j",(function(){return d})),a.d(e,"f",(function(){return u})),a.d(e,"g",(function(){return f})),a.d(e,"h",(function(){return p})),a.d(e,"i",(function(){return m})),a.d(e,"m",(function(){return h})),a.d(e,"l",(function(){return b})),a.d(e,"k",(function(){return g})),a.d(e,"o",(function(){return w})),a.d(e,"n",(function(){return _})),a.d(e,"A",(function(){return A})),a.d(e,"w",(function(){return D})),a.d(e,"x",(function(){return y})),a.d(e,"y",(function(){return v})),a.d(e,"z",(function(){return x})),a.d(e,"D",(function(){return O})),a.d(e,"C",(function(){return j})),a.d(e,"B",(function(){return S})),a.d(e,"v",(function(){return k})),a.d(e,"s",(function(){return C})),a.d(e,"t",(function(){return R})),a.d(e,"q",(function(){return T})),a.d(e,"r",(function(){return z})),a.d(e,"u",(function(){return L})),a.d(e,"H",(function(){return q})),a.d(e,"G",(function(){return $})),a.d(e,"E",(function(){return I})),a.d(e,"F",(function(){return P})),a.d(e,"I",(function(){return M}));var o=a("b775");function n(t){return Object(o["a"])({url:"/notify/dtalk_list",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/notify/dtalk_delete",method:"post",data:t})}function r(t){return Object(o["a"])({url:"/notify/dtalk_deletes",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/notify/dtalk_detail",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/notify/dtalk_update",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/notify/dtalk_change_sheet",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/notify/dtalk_robot_list",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/notify/dtalk_robot_add",method:"post",data:t})}function f(t){return Object(o["a"])({url:"/notify/dtalk_robot_delete",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/notify/dtalk_robot_deletes",method:"post",data:t})}function m(t){return Object(o["a"])({url:"/notify/dtalk_robot_detail",method:"post",data:t})}function h(t){return Object(o["a"])({url:"/notify/dtalk_robot_update",method:"post",data:t})}function b(t){return Object(o["a"])({url:"/notify/dtalk_robot_select",method:"post",data:t})}function g(t){return Object(o["a"])({url:"/notify/dtalk_robot_ping",method:"post",data:t})}function w(t){return Object(o["a"])({url:"/notify/dtalk_send_init",method:"post",data:t})}function _(t){return Object(o["a"])({url:"/notify/dtalk_send",method:"post",data:t})}function A(t){return Object(o["a"])({url:"/notify/qywx_robot_list",method:"post",data:t})}function D(t){return Object(o["a"])({url:"/notify/qywx_robot_add",method:"post",data:t})}function y(t){return Object(o["a"])({url:"/notify/qywx_robot_delete",method:"post",data:t})}function v(t){return Object(o["a"])({url:"/notify/qywx_robot_deletes",method:"post",data:t})}function x(t){return Object(o["a"])({url:"/notify/qywx_robot_detail",method:"post",data:t})}function O(t){return Object(o["a"])({url:"/notify/qywx_robot_update",method:"post",data:t})}function j(t){return Object(o["a"])({url:"/notify/qywx_robot_select",method:"post",data:t})}function S(t){return Object(o["a"])({url:"/notify/qywx_robot_ping",method:"post",data:t})}function k(t){return Object(o["a"])({url:"/notify/qywx_list",method:"post",data:t})}function C(t){return Object(o["a"])({url:"/notify/qywx_delete",method:"post",data:t})}function R(t){return Object(o["a"])({url:"/notify/qywx_deletes",method:"post",data:t})}function T(t){return Object(o["a"])({url:"/notify/qywx_add",method:"post",data:t})}function z(t){return Object(o["a"])({url:"/notify/qywx_add_init",method:"get",params:t})}function L(t){return Object(o["a"])({url:"/notify/qywx_detail",method:"post",data:t})}function q(t){return Object(o["a"])({url:"/notify/qywx_update",method:"post",data:t})}function $(t){return Object(o["a"])({url:"/notify/qywx_send_init",method:"post",data:t})}function I(t){return Object(o["a"])({url:"/notify/qywx_send",method:"post",data:t})}function P(t){return Object(o["a"])({url:"/notify/qywx_sendback",method:"post",data:t})}function M(t){return Object(o["a"])({url:"/notify/qywx_temp_upload",method:"post",data:t})}}}]);