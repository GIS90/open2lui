(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6639f225"],{"076b":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{visible:e.dialog,title:e.dialogAttrs.title,width:e.dialogAttrs.width,fullscreen:e.dialogAttrs.fullScreen,top:e.dialogAttrs.top,modal:e.dialogAttrs.modal,"lock-scroll":e.dialogAttrs.lockScroll,"open-delay":e.dialogAttrs.openDelay,"close-delay":e.dialogAttrs.closeDelay,"close-on-click-modal":e.dialogAttrs.closeOnClickModal,"close-on-press-escape":e.dialogAttrs.closeOnPressEscape,"show-close":e.dialogAttrs.showClose,draggable:e.dialogAttrs.draggable,center:e.dialogAttrs.center},on:{close:e.handleClose,open:e.handleOpen},scopedSlots:e._u([{key:"footer",fn:function(){return[a("span",{staticClass:"dialog-footer"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.fileList.length>0,expression:"fileList.length>0"}],attrs:{disabled:e.uploadBtnAttrs.disabled},on:{click:e.handleClear}},[e._v(" 清空 ")]),a("el-button",{attrs:{disabled:e.uploadBtnAttrs.disabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleClose(t)}}},[e._v(" 取消 ")]),a("el-button",{attrs:{type:"primary",disabled:e.uploadBtnAttrs.disabled,loading:e.uploadBtnAttrs.loading},on:{click:e.submitUpload}},[e._v(" 确定 ")])],1)]},proxy:!0}])},[a("div",{staticStyle:{"text-align":"center"}},[a("el-upload",{ref:"uploadRef",attrs:{action:e.getUploadUrl(),accept:e.uploadApis.accept,"file-list":e.fileList,headers:e.uploadApis.headers,method:e.uploadApis.method,data:e.uploadApis.data,name:e.uploadApis.name,"with-credentials":e.uploadApis.cookie,"show-file-list":e.uploadAttrs.showFileList,"list-type":e.uploadAttrs.listType,"auto-upload":e.uploadAttrs.autoUpload,limit:e.uploadAttrs.limit,drag:e.uploadAttrs.drag,multiple:e.uploadAttrs.multiple,disabled:e.uploadAttrs.disabled,"on-success":e.uploadSuccess,"on-remove":e.uploadRemove,"on-change":e.uploadChange,"on-exceed":e.uploadExceed,"before-upload":e.beforeUpload},scopedSlots:e._u([{key:"tip",fn:function(){return[a("div",{staticClass:"el-upload__tip"},[a("p",{domProps:{innerHTML:e._s(e.tips)}}),a("p",[e._v("上传文件数量： "),a("strong",[e._v(e._s(e.fileList.length))]),e._v("（"+e._s(e.uploadAttrs.limit>0?"单次上传限制"+e.uploadAttrs.limit:"无限制")+"）")])])]},proxy:!0}])},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("拖拽或者 "),a("em",[e._v("点击上传")])])])],1)])],1)},o=[],i=(a("caad"),a("b0c0"),a("d3b7"),a("159b"),a("b157")),l=a("4360"),n=a("5f87"),r=a("61f7"),d={name:"Upload",emits:["close-file-upload"],components:{},props:{dialog:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}},fileType:{type:String,require:!0,default:"1"},excelSubType:{type:String,require:!1,default:"1"}},data:function(){return{tips:this.getUploadTip(),fileList:[],isManualUpload:!0,uploadApis:{url:"http://121.4.56.169:9999/office/upload",accept:this.getUploadAccept(),headers:{"Access-Control-Allow-Origin":"*","X-Token":Object(n["a"])(),"X-Rtx-Id":l["a"].getters.rtx_id},method:"POST",data:{rtx_id:l["a"].getters.rtx_id,file_type:this.fileType,excel_sub_type:this.excelSubType},name:"files",cookie:!0},uploadAttrs:{multiple:!0,showFileList:!0,drag:!0,listType:"text",autoUpload:!1,limit:10,disabled:!1},dialogAttrs:{title:"文件上传",width:"55%",fullScreen:!1,top:"5%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!1,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},uploadBtnAttrs:{disabled:!1,loading:!1},isUpload:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{getUploadTip:function(){return"1"===this.fileType?".doc,.docx":"2"===this.fileType?'<strong>提示</strong>：支持<span class="info_red">.xls</span>、<span class="info_red">.xlsx</span>格式文件上传，.xls格式文件条数最大支持为<strong>65535</strong>行，超出请上传.xlxs格式数据。':"3"===this.fileType?".ppt,.pptx":"4"===this.fileType?".txt":"5"===this.fileType?'<strong>提示</strong>：仅支持<span class="info_red">.pdf</span>格式文件上传。':""},getUploadAccept:function(){return"1"===this.fileType?".doc,.docx":"2"===this.fileType?".xls,.xlsx":"3"===this.fileType?".ppt,.pptx":"4"===this.fileType?".txt":"5"===this.fileType?".pdf":""},handleClose:function(){this.$refs.uploadRef.clearFiles(),this.$emit("close-file-upload",this.isUpload)},handleOpen:function(){this.fileList=[]},handleClear:function(){this.$refs.uploadRef.clearFiles(),this.fileList=[]},cancelUpload:function(){this.$refs.uploadRef.abort()},submitUpload:function(){this.isManualUpload?this.manualUpload():this.$refs.uploadRef.submit()},getUploadUrl:function(){return this.isManualUpload?"":this.uploadApis.url},uploadSuccess:function(e,t){var a=e.status_id,s=e.message;this.$message({message:100===a?null!==t&&void 0!==t&&t.name?t.name+"上传成功":"文件上传成功":s,type:100===a?"success":"warning",duration:2e3})},uploadExceed:function(e,t){this.$message({message:"文件个数超过上传限制",type:"warning",duration:2e3})},uploadRemove:function(e,t){this.fileList=t,this.$message({message:null!==e&&void 0!==e&&e.name?e.name+"移除列表成功":"文件移除列表成功",type:"success",duration:2e3})},uploadChange:function(e,t){this.fileList=t},beforeUpload:function(e){return null===e||void 0===e||!e.name||Object(r["e"])(e.name)},manualUpload:function(){var e=this;if(this.fileList.length<1)return this.$message({message:"请选择上传文件",type:"warning",duration:2e3}),!1;if(this.uploadAttrs.limit>0&&this.fileList.length>this.uploadAttrs.limit)return this.$message({message:"文件个数超过上传限制",type:"warning",duration:2e3}),!1;this.isUpload=!0,this.uploadAttrs.disabled=!0,this.uploadBtnAttrs.disabled=!0,this.uploadBtnAttrs.loading=!0;var t=new FormData;return t.append("rtx_id",this.$store.getters.rtx_id),t.append("file_type",this.fileType),t.append("excel_sub_type",this.excelSubType),this.fileList.forEach((function(e){t.append(e.name,e.raw)})),new Promise((function(a,s){Object(i["s"])(t).then((function(t){e.uploadAttrs.disabled=!1,e.uploadBtnAttrs.disabled=!1,e.uploadBtnAttrs.loading=!1;var s=t.status_id;t.message;100===s&&(e.$message({message:"文件上传成功",type:"success",duration:2e3}),e.handleClear()),a(t)})).catch((function(t){e.uploadAttrs.disabled=!1,e.uploadBtnAttrs.disabled=!1,e.uploadBtnAttrs.loading=!1,e.$message({message:"服务端发异常，请稍后尝试",type:"warning",duration:2e3}),s(t)}))}))}}},c=d,u=a("2877"),p=Object(u["a"])(c,s,o,!1,null,"33fe03c1",null);t["a"]=p.exports},2983:function(e,t,a){},"333d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"block page-div"},[a("el-pagination",{attrs:{background:e.pagAttrs.background,"current-page":e.page,total:e.total,"page-size":e.size,layout:e.pagAttrs.layout,"page-sizes":e.pagAttrs.pageSizes,"pager-count":e.pagAttrs.pagerCount,small:e.pagAttrs.small,disabled:e.pagAttrs.disabled,"prev-text":e.pagAttrs.prevText,"next-text":e.pagAttrs.nextText,"hide-on-single-page":e.pagAttrs.hosp},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},o=[],i=(a("a9e3"),{name:"Pagination",emits:["pagin-size-change","pagin-current-change"],components:{},props:{page:{type:Number,require:!0,default:1},size:{type:Number,require:!0,default:15},total:{type:Number,require:!0,default:0}},data:function(){return{pagAttrs:{layout:"total, sizes, prev, pager, next, jumper",background:!0,pageSizes:[15,30,50,100],pagerCount:5,hosp:!1,small:!1,prevText:"<",nextText:">",disabled:!1}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handleSizeChange:function(e){this.$emit("pagin-size-change",e)},handleCurrentChange:function(e){this.$emit("pagin-current-change",e)}}}),l=i,n=(a("c43c"),a("2877")),r=Object(n["a"])(l,s,o,!1,null,"bb08e570",null);t["a"]=r.exports},"39ed":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.show,title:e.dialogAttrs.title,width:e.dialogAttrs.width,fullscreen:e.dialogAttrs.fullScreen,top:e.dialogAttrs.top,modal:e.dialogAttrs.modal,"lock-scroll":e.dialogAttrs.lockScroll,"open-delay":e.dialogAttrs.openDelay,"close-delay":e.dialogAttrs.closeDelay,"close-on-click-modal":e.dialogAttrs.closeOnClickModal,"close-on-press-escape":e.dialogAttrs.closeOnPressEscape,"show-close":e.dialogAttrs.showClose,draggable:e.dialogAttrs.draggable,center:e.dialogAttrs.center},on:{close:e.cancelDelete}},[a("span",[e._v("确认删除选择的数据吗？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{disabled:e.btnDisabled},on:{click:e.cancelDelete}},[e._v("取 消")]),a("el-button",{attrs:{disabled:e.btnDisabled,loading:e.btnLoading,type:"primary"},on:{click:e.confirmDelete}},[e._v("确 定")])],1)])},o=[],i=(a("caad"),a("d3b7"),a("4360")),l=a("b157"),n={name:"OfficeBatchDelete",emits:["close-delete-dialog"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}},list:{type:Array,require:!0,default:function(){}},source:{type:String,require:!0,default:""}},data:function(){return{dialogAttrs:{title:"文件删除",width:"30%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},btnDisabled:!1,btnLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{cancelDelete:function(){this.$emit("close-delete-dialog",!1)},confirmDelete:function(){if(0===this.list.length)return this.$message({message:"请选择删除的文件",type:"warning",duration:2e3}),!1;if(!this.source)return!1;var e={rtx_id:i["a"].getters.rtx_id,list:this.list};if(this.btnDisabled=!0,this.btnLoading=!0,"excel-source"===this.source)this.deleteExcelSource(e);else if("excel-result"===this.source)this.deleteExcelResult(e);else{if("office-pdf"!==this.source)return!1;this.deleteOfficePDF(e)}},deleteOfficePDF:function(e){var t=this;return new Promise((function(a,s){Object(l["f"])(e).then((function(e){var s=e.status_id;e.message;100===s&&t.$message({message:"删除成功",type:"success",duration:2e3}),t.$emit("close-delete-dialog",!0),a(e)})).catch((function(e){t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),s(e)}))}))},deleteExcelSource:function(e){var t=this;return new Promise((function(a,s){Object(l["d"])(e).then((function(e){var s=e.status_id;e.message;100===s&&t.$message({message:"删除成功",type:"success",duration:2e3}),t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),a(e)})).catch((function(e){t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),s(e)}))}))},deleteExcelResult:function(e){var t=this;return new Promise((function(a,s){Object(l["b"])(e).then((function(e){var s=e.status_id;e.message;100===s&&t.$message({message:"删除成功",type:"success",duration:2e3}),t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),a(e)})).catch((function(e){t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),s(e)}))}))}}},r=n,d=a("2877"),c=Object(d["a"])(r,s,o,!1,null,"754c814a",null);t["a"]=c.exports},b157:function(e,t,a){"use strict";a.d(t,"s",(function(){return o})),a.d(t,"l",(function(){return i})),a.d(t,"q",(function(){return l})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"h",(function(){return d})),a.d(t,"j",(function(){return c})),a.d(t,"p",(function(){return u})),a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f})),a.d(t,"i",(function(){return g})),a.d(t,"n",(function(){return h})),a.d(t,"k",(function(){return m})),a.d(t,"m",(function(){return b})),a.d(t,"g",(function(){return _})),a.d(t,"r",(function(){return A})),a.d(t,"e",(function(){return y})),a.d(t,"f",(function(){return x})),a.d(t,"o",(function(){return v}));var s=a("b775");function o(e){return Object(s["a"])({url:"/office/uploads",method:"post",data:e})}function i(e){return Object(s["a"])({url:"/office/excel_source_list",method:"post",data:e})}function l(e){return Object(s["a"])({url:"/office/excel_source_update",method:"post",data:e})}function n(e){return Object(s["a"])({url:"/office/excel_source_delete",method:"post",data:e})}function r(e){return Object(s["a"])({url:"/office/excel_source_deletes",method:"post",data:e})}function d(e){return Object(s["a"])({url:"/office/excel_merge",method:"post",data:e})}function c(e){return Object(s["a"])({url:"/office/excel_history_list",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/office/excel_result_update",method:"post",data:e})}function p(e){return Object(s["a"])({url:"/office/excel_result_delete",method:"post",data:e})}function f(e){return Object(s["a"])({url:"/office/excel_result_deletes",method:"post",data:e})}function g(e){return Object(s["a"])({url:"/office/excel_split",method:"post",data:e})}function h(e){return Object(s["a"])({url:"/office/excel_init_split",method:"post",data:e})}function m(e){return Object(s["a"])({url:"/office/excel_sheet_header",method:"post",data:e})}function b(e){return Object(s["a"])({url:"/office/pdf2word_list",method:"post",data:e})}function _(e){return Object(s["a"])({url:"/office/office_pdf_detail",method:"post",data:e})}function A(e){return Object(s["a"])({url:"/office/office_pdf_update",method:"post",data:e})}function y(e){return Object(s["a"])({url:"/office/office_pdf_delete",method:"post",data:e})}function x(e){return Object(s["a"])({url:"/office/office_pdf_deletes",method:"post",data:e})}function v(e){return Object(s["a"])({url:"/office/office_pdf_to",method:"post",data:e})}},c43c:function(e,t,a){"use strict";a("2983")}}]);