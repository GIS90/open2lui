(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce28146c"],{2502:function(t,e,a){"use strict";a("2fe1")},"284d":function(t,e,a){"use strict";a("cbd0")},2983:function(t,e,a){},"2fe1":function(t,e,a){},"333d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block page-div"},[a("el-pagination",{attrs:{background:t.pagAttrs.background,"current-page":t.page,total:t.total,"page-size":t.size,layout:t.pagAttrs.layout,"page-sizes":t.pagAttrs.pageSizes,"pager-count":t.pagAttrs.pagerCount,small:t.pagAttrs.small,disabled:t.pagAttrs.disabled,"prev-text":t.pagAttrs.prevText,"next-text":t.pagAttrs.nextText,"hide-on-single-page":t.pagAttrs.hosp},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},s=[],l=(a("a9e3"),{name:"Pagination",emits:["pagin-size-change","pagin-current-change"],components:{},props:{page:{type:Number,require:!0,default:1},size:{type:Number,require:!0,default:15},total:{type:Number,require:!0,default:0}},data:function(){return{pagAttrs:{layout:"total, sizes, prev, pager, next, jumper",background:!0,pageSizes:[15,30,50,100],pagerCount:5,hosp:!1,small:!1,prevText:"<",nextText:">",disabled:!1}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handleSizeChange:function(t){this.$emit("pagin-size-change",t)},handleCurrentChange:function(t){this.$emit("pagin-current-change",t)}}}),o=l,n=(a("c43c"),a("2877")),r=Object(n["a"])(o,i,s,!1,null,"bb08e570",null);e["a"]=r.exports},"6e90":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-button",{attrs:{id:"btn-upload",size:t.btnBaseAttrs.size,plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,disabled:t.btnDisabled},on:{click:t.openFileUpload}},[a("svg-icon",{attrs:{"icon-class":"i_upload"}}),t._v(" 上传 ")],1),a("el-button",{staticClass:"btn-margin",attrs:{id:"btn-select",plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,size:t.btnBaseAttrs.size,disabled:t.btnDisabled},on:{click:t.manualSelectALL}},[a("svg-icon",{attrs:{"icon-class":"i_select"}}),t._v(" "+t._s(t.selBtnText)+" ")],1),a("el-button",{staticClass:"btn-margin",attrs:{id:"btn-delete",plain:t.btnBaseAttrs.plain,round:t.btnBaseAttrs.round,size:t.btnBaseAttrs.size,disabled:t.btnDisabled},on:{click:t.openDeleteDialog}},[a("svg-icon",{attrs:{"icon-class":"i_delete"}}),t._v(" 删除 ")],1)],1),a("public-upload-file",{attrs:{dialog:t.uploadDialogStatus,"file-type":t.fileType},on:{"close-file-upload":t.closeFileUpload}}),a("div",{staticClass:"table-sty",attrs:{id:"data-container"}},[a("el-table",{ref:"multipleTableRef",staticStyle:{width:"100%"},attrs:{data:t.tableData,size:t.tableAttrs.size,fit:t.tableAttrs.fit,"show-header":t.tableAttrs.showHeader,"highlight-current-row":t.tableAttrs.hcr,border:t.tableAttrs.border,"default-sort":{prop:"create_time",order:"descending"},"empty-text":t.tableAttrs.emptyText,"header-cell-style":t.setTableHeaderStyle},on:{select:t.selectRow,"selection-change":t.selectChange,"select-all":t.selectAll}},[a("el-table-column",{attrs:{fixed:"left",type:"selection","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,width:"60"}}),a("el-table-column",{attrs:{fixed:"left",label:"上传时间","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,width:"220",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(e.row.create_time))])]}}])}),a("el-table-column",{attrs:{prop:"name",label:"文件名称",width:"370",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:"left","show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"transfer",label:"转换状态",width:"180",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"mode",label:"转换模式",width:"240",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"transfer_time",label:"转换时间",width:"240",sortable:"","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"start",label:"开始页",width:"180","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"end",label:"结束页",width:"180","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"pages",label:"指标页列表",width:"270","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,"show-overflow-tooltip":t.tableRowAttrs.sot}}),a("el-table-column",{attrs:{prop:"rtx_id",label:"上传人RTX","header-align":t.tableRowAttrs.headerAlign,align:t.tableRowAttrs.align,width:"200"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:t.tableRowAttrs.align,width:"360"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:"设置",placement:"top"}},[a("i",{staticClass:"el-icon-setting",on:{click:function(a){return t.rowHandleEdit(e.$index,e.row)}}})]),a("el-tooltip",{staticClass:"icon-item",attrs:{effect:"light",content:"转换",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-refresh",type:"primary",size:"mini",round:"",plain:""},on:{click:function(a){return t.rowHandleTo(e.$index,e.row)}}})],1),e.row.transfer_url?a("el-tooltip",{staticClass:"icon-item",attrs:{effect:"dark",content:"下载",placement:"top"}},[a("a",{attrs:{href:e.row.transfer_url}},[a("i",{staticClass:"el-icon-download"})])]):t._e(),a("el-tooltip",{staticClass:"icon-item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("i",{staticClass:"el-icon-delete",on:{click:function(a){return t.rowHandleDelete(e.$index,e.row)}}})])]}}])})],1)],1),a("public-pagination",{attrs:{page:t.pageCur,size:t.pageSize,total:t.pageTotal},on:{"pagin-size-change":t.paginSizeChange,"pagin-current-change":t.paginCurrentChange}}),a("office-batch-delete",{attrs:{show:t.deleteConfirm,list:t.selectList,source:t.deleteSource},on:{"close-delete-dialog":t.closeDeleteDialog}}),a("office-pdf-set",{attrs:{show:t.setDialogStatus,"row-md5":t.oprSelectRowMd5},on:{"close-set-dg":t.closeSetDialog}}),a("office-pdf-to-word",{attrs:{show:t.toDialogStatus,"row-md5":t.oprSelectRowMd5},on:{"close-to-dg":t.closeToDialog}})],1)},s=[],l=(a("caad"),a("2532"),a("a434"),a("d81d"),a("d3b7"),a("4360")),o=a("a2ce"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:function(e){return t.openDialog()},close:function(e){return t.closeDialog()}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",{staticClass:"dialog-footer"},[a("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),a("el-button",{attrs:{disabled:t.disabled,loading:t.loading,type:"primary"},on:{click:function(e){return t.submitSet()}}},[t._v("确定")])],1)]},proxy:!0}])},[a("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"auto"}},[a("el-form-item",[a("el-switch",{staticClass:"sw-sty",staticStyle:{display:"block"},attrs:{disabled:t.disabled,width:t.switchAttrs.width,"active-text":t.switchAttrs.activeText,"inactive-text":t.switchAttrs.inactiveText,"active-color":t.switchAttrs.activeColor,"inactive-color":t.switchAttrs.inactiveColor,"active-value":t.switchAttrs.activeValue,"inactive-value":t.switchAttrs.inactiveValue},on:{change:function(e){return t.changeStatus(e)}},model:{value:t.formData.mode,callback:function(e){t.$set(t.formData,"mode",e)},expression:"formData.mode"}})],1),a("el-form-item",{attrs:{label:"起始页码"}},[a("el-input",{attrs:{placeholder:"文档转换的起始页码，默认首页开始",size:t.inputAttrs.size,maxlength:t.formDataLimit.start,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:!t.formData.mode,oninput:"this.value=this.value.replace(/[^\\d]/g,'');"},model:{value:t.formData.start,callback:function(e){t.$set(t.formData,"start","string"===typeof e?e.trim():e)},expression:"formData.start"}})],1),a("el-form-item",{attrs:{label:"结束页码"}},[a("el-input",{attrs:{placeholder:"文档转换的结束页码，默认最后一页结束",size:t.inputAttrs.size,maxlength:t.formDataLimit.end,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:!t.formData.mode,oninput:"this.value=this.value.replace(/[^\\d]/g,'');"},model:{value:t.formData.end,callback:function(e){t.$set(t.formData,"end","string"===typeof e?e.trim():e)},expression:"formData.end"}})],1),a("el-form-item",{attrs:{label:"指定页码"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入指定转换的指定页码，以,（英文逗号）分割",size:t.inputAttrs.size,maxlength:t.formDataLimit.pages,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.formData.mode},model:{value:t.formData.pages,callback:function(e){t.$set(t.formData,"pages","string"===typeof e?e.trim():e)},expression:"formData.pages"}})],1)],1)],1)],1)},r=[],c=a("b157"),d={name:"OfficePDFSet",emits:["close-set-dg"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},rowMd5:{type:String,require:!0,default:""}},data:function(){return{loading:!1,disabled:!1,labelPosition:"left",dialogAttrs:{title:"文件设置",width:"45%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},switchAttrs:{disabled:!1,width:35,activeText:"通用页码",inactiveText:"指定页码",activeValue:!0,inactiveValue:!1,activeColor:"#ff4949",inactiveColor:"#13ce66"},formDataLimit:{start:4,end:4,pages:85},formData:{start:"",end:"",pages:"",mode:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{changeStatus:function(t){this.formData.mode=t},openDialog:function(){if(!this.rowMd5)return this.$emit("close-set-dg",!0),!1;this.getDNewInfo()},closeDialog:function(){this.$emit("close-set-dg",!1)},getDNewInfo:function(){var t=this,e={md5:this.rowMd5};return new Promise((function(a,i){Object(c["o"])(e).then((function(e){var i=e.status_id,s=e.data;100===i?(t.formData.start=s.start,t.formData.end=s.end,t.formData.pages=s.pages,t.formData.mode=s.mode):t.$emit("close-set-dg"),a(e)})).catch((function(t){i(t)}))}))},submitSet:function(){var t=this;if(this.formData.start&&this.formData.end&&this.formData.start>this.formData.end)return this.$message({message:"起始页码不允许小于结束页码",type:"warning",duration:2e3}),!1;this.disabled=!0,this.loading=!0;var e={rtx_id:l["a"].getters.rtx_id,start:this.formData.start,end:this.formData.end,pages:this.formData.pages,mode:this.formData.mode,md5:this.rowMd5};return new Promise((function(a,i){Object(c["q"])(e).then((function(e){t.disabled=!1,t.loading=!1;var i=e.status_id;e.message;100===i&&(t.$message({message:"文件设置成功",type:"success",duration:2e3}),t.$emit("close-set-dg",!0)),a(e)})).catch((function(e){t.disabled=!1,t.loading=!1,i(e)}))}))}}},u=d,p=(a("284d"),a("2877")),f=Object(p["a"])(u,n,r,!1,null,"6217ef79",null),g=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{open:function(e){return t.openDialog()},close:function(e){return t.closeDialog()}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",{staticClass:"dialog-footer"},[a("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),a("el-button",{attrs:{disabled:t.disabled,type:"primary"},on:{click:function(e){return t.submitConvert()}}},[t._v("确定")])],1)]},proxy:!0}])},[a("div",{staticStyle:{"text-align":"center"},attrs:{id:"main-opr-div"}},[a("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"auto"}},[a("el-form-item",[a("el-switch",{staticClass:"sw-sty",staticStyle:{display:"block"},attrs:{disabled:t.disabled,width:t.switchAttrs.width,"active-text":t.switchAttrs.activeText,"inactive-text":t.switchAttrs.inactiveText,"active-color":t.switchAttrs.activeColor,"inactive-color":t.switchAttrs.inactiveColor,"active-value":t.switchAttrs.activeValue,"inactive-value":t.switchAttrs.inactiveValue},on:{change:function(e){return t.changeStatus(e)}},model:{value:t.formData.mode,callback:function(e){t.$set(t.formData,"mode",e)},expression:"formData.mode"}})],1),a("el-form-item",{attrs:{label:"文件名称"}},[a("el-input",{attrs:{type:"text",placeholder:"新文件docx文档名称，不填写则默认以当前PDF文件名称命名",size:t.inputAttrs.size,maxlength:t.formDataLimit.name,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.disabled},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name","string"===typeof e?e.trim():e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"起始页码"}},[a("el-input",{attrs:{placeholder:"文档转换的起始页码，默认首页开始",size:t.inputAttrs.size,maxlength:t.formDataLimit.start,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:!t.formData.mode,oninput:"this.value=this.value.replace(/[^\\d]/g,'');"},model:{value:t.formData.start,callback:function(e){t.$set(t.formData,"start","string"===typeof e?e.trim():e)},expression:"formData.start"}})],1),a("el-form-item",{attrs:{label:"结束页码"}},[a("el-input",{attrs:{placeholder:"文档转换的结束页码，默认最后一页结束",size:t.inputAttrs.size,maxlength:t.formDataLimit.end,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:!t.formData.mode,oninput:"this.value=this.value.replace(/[^\\d]/g,'');"},model:{value:t.formData.end,callback:function(e){t.$set(t.formData,"end","string"===typeof e?e.trim():e)},expression:"formData.end"}})],1),a("el-form-item",{attrs:{label:"指定页码"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入指定转换的指定页码，以,（英文逗号）分割",size:t.inputAttrs.size,maxlength:t.formDataLimit.pages,clearable:t.inputAttrs.clear,"show-word-limit":t.inputAttrs.limit,"prefix-icon":t.inputAttrs.prefixIcon,disabled:t.formData.mode},model:{value:t.formData.pages,callback:function(e){t.$set(t.formData,"pages","string"===typeof e?e.trim():e)},expression:"formData.pages"}})],1)],1)],1)])],1)},h=[],b=(a("b0c0"),{name:"OfficePDFToWord",emits:["close-to-dg"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},rowMd5:{type:String,require:!0,default:""}},data:function(){return{disabled:!1,labelPosition:"left",dialogAttrs:{title:"文档转换",width:"50%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!1,closeOnPressEscape:!1,showClose:!1,draggable:!1,center:!1},inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},switchAttrs:{disabled:!1,width:35,activeText:"通用页码",inactiveText:"指定页码",activeValue:!0,inactiveValue:!1,activeColor:"#ff4949",inactiveColor:"#13ce66"},formDataLimit:{name:85,start:4,end:4,pages:85},formData:{name:"",start:"",end:"",pages:"",mode:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{changeStatus:function(t){this.formData.mode=t},openDialog:function(){if(!this.rowMd5)return this.$emit("close-to-dg",!0),!1;this.formData.name="",this.getDNewInfo()},closeDialog:function(){this.$emit("close-to-dg",!1)},getDNewInfo:function(){var t=this,e={md5:this.rowMd5};return new Promise((function(a,i){Object(c["o"])(e).then((function(e){var i=e.status_id,s=e.data;100===i?(t.formData.start=s.start,t.formData.end=s.end,t.formData.pages=s.pages,t.formData.mode=s.mode):t.$emit("close-to-dg"),a(e)})).catch((function(t){i(t)}))}))},submitConvert:function(){var t=this;if("0"===this.formData.start)return this.$message({message:"起始页码不允许设置0",type:"warning",duration:2e3}),!1;if("0"===this.formData.end)return this.$message({message:"结束页码不允许设置0",type:"warning",duration:2e3}),!1;if(this.formData.start&&this.formData.end&&this.formData.start>this.formData.end)return this.$message({message:"起始页码不允许小于结束页码",type:"warning",duration:2e3}),!1;this.disabled=!0;var e=this.$loading({target:document.querySelector("#main-opr-div"),body:!1,fullscreen:!0,lock:!0,text:"努力工作中......",spinner:"el-icon-loading",background:"",class:""}),a={rtx_id:l["a"].getters.rtx_id,name:this.formData.name,start:this.formData.start,end:this.formData.end,pages:this.formData.pages,mode:this.formData.mode,md5:this.rowMd5};return new Promise((function(i,s){Object(c["p"])(a).then((function(a){t.disabled=!1,e.close();var s=a.status_id;a.message;100===s&&(t.$message({message:"文件转换成功",type:"success",duration:2e3}),t.$emit("close-to-dg",!0)),i(a)})).catch((function(a){t.disabled=!1,e.close(),s(a)}))}))}}}),A=b,w=(a("2502"),Object(p["a"])(A,m,h,!1,null,"dc58dea4",null)),v=w.exports,D=a("b418"),x=a("333d"),_={name:"Pdf2word",emits:[],components:{"office-batch-delete":o["a"],"office-pdf-set":g,"office-pdf-to-word":v,"public-upload-file":D["a"],"public-pagination":x["a"]},props:{},data:function(){return{fileType:"6",selBtnText:"全选",btnDisabled:!1,btnBaseAttrs:{size:"medium",type:"primary",plain:!0,round:!1,circle:!1},uploadDialogStatus:!1,tableAttrs:{stripe:!0,border:!0,size:"medium",fit:!0,showHeader:!0,hcr:!0,height:450,maxHeight:450,showSum:!0,sumText:"统计",emptyText:"暂无数据"},tableRowAttrs:{type:"selection",index:1,fixed:!0,resizable:!0,align:"center",headerAlign:"center",sot:!0},pageCur:1,pageSize:15,pageTotal:0,selectAllStatus:!1,selectList:[],tableData:[],oprSelectRowMd5:"",setDialogStatus:!1,toDialogStatus:!1,deleteSource:"office-pdf",deleteConfirm:!1}},computed:{},watch:{selectAllStatus:function(t,e){this.selBtnText=t?"取消":"全选"}},created:function(){this.getTableList()},mounted:function(){},methods:{openFileUpload:function(){this.uploadDialogStatus=!0},closeFileUpload:function(t){this.uploadDialogStatus=!1,t&&this.getTableList()},selectRow:function(t,e){if(e){if(null!==e&&void 0!==e&&e.md5_id&&!this.selectList.includes(e.md5_id))this.selectList.push(e.md5_id);else if(null!==e&&void 0!==e&&e.md5_id&&this.selectList.includes(e.md5_id)){var a=this.selectList.indexOf(e.md5_id);a>-1&&this.selectList.splice(a,1)}else console.log("Add data is not have md5-id");this.selectAllStatus=this.tableData.length===this.selectList.length}},selectChange:function(t){},selectAll:function(t){t&&(this.selectAllStatus=!this.selectAllStatus,this.selectList=this.selectAllStatus?t.map((function(t){return(null===t||void 0===t?void 0:t.md5_id)||""})):[])},manualSelectALL:function(){this.$refs.multipleTableRef.toggleAllSelection()},setTableHeaderStyle:function(){return{background:"#eee",color:"#606266"}},getTableList:function(){var t=this;this.selectAllStatus=!1,this.selectList=[];var e={rtx_id:l["a"].getters.rtx_id,limit:this.pageSize||15,offset:(this.pageCur-1)*this.pageSize||0};return new Promise((function(a,i){Object(c["r"])(e).then((function(e){var i=e.status_id,s=e.data;100!==i&&101!==i||(t.tableData=s.list,t.pageTotal=s.total),a(e)})).catch((function(t){i(t)}))}))},paginSizeChange:function(t){this.pageSize=t,this.getTableList()},paginCurrentChange:function(t){this.pageCur=t,this.getTableList()},closeDeleteDialog:function(t){this.deleteConfirm=!1,t&&this.getTableList()},openDeleteDialog:function(){if(0===this.selectList.length)return this.$message({message:"请选择删除的文件",type:"warning",duration:2e3}),!1;this.deleteConfirm=!0},rowHandleDetail:function(t,e){if(!e||!e.md5_id)return!1;this.oprSelectRowMd5=e.md5_id,this.detailDialogStatus=!0},rowHandleEdit:function(t,e){if(!e||!e.md5_id)return!1;this.oprSelectRowMd5=e.md5_id,this.setDialogStatus=!0},rowHandleTo:function(t,e){if(!e||!e.md5_id)return!1;this.oprSelectRowMd5=e.md5_id,this.toDialogStatus=!0},rowHandleDelete:function(t,e){var a=this;if(!e||null===e||void 0===e||!e.md5_id)return!1;var i={rtx_id:l["a"].getters.rtx_id,md5:e.md5_id};return this.btnDisabled=!0,new Promise((function(t,e){Object(c["m"])(i).then((function(e){var i=e.status_id;e.message;100===i&&(a.$message({message:"删除成功",type:"success",duration:2e3}),a.getTableList()),a.btnDisabled=!1,t(e)})).catch((function(t){a.btnDisabled=!1,e(t)}))}))},closeSetDialog:function(t){this.setDialogStatus=!1,t&&this.getTableList()},closeToDialog:function(t){this.toDialogStatus=!1,t&&this.getTableList()}}},y=_,S=Object(p["a"])(y,i,s,!1,null,"30c55821",null);e["default"]=S.exports},a2ce:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.show,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{close:t.cancelDelete}},[a("span",[t._v("确认删除选择的数据吗？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{disabled:t.btnDisabled},on:{click:t.cancelDelete}},[t._v("取 消")]),a("el-button",{attrs:{disabled:t.btnDisabled,loading:t.btnLoading,type:"primary"},on:{click:t.confirmDelete}},[t._v("确 定")])],1)])},s=[],l=(a("caad"),a("d3b7"),a("4360")),o=a("b157"),n={name:"OfficeBatchDelete",emits:["close-delete-dialog"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},list:{type:Array,require:!0,default:function(){}},source:{type:String,require:!0,default:""}},data:function(){return{dialogAttrs:{title:"提示",width:"30%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},btnDisabled:!1,btnLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{cancelDelete:function(){this.$emit("close-delete-dialog",!1)},confirmDelete:function(){if(0===this.list.length)return this.$message({message:"请选择删除的文件",type:"warning",duration:2e3}),!1;if(!this.source)return!1;var t={rtx_id:l["a"].getters.rtx_id,list:this.list};if(this.btnDisabled=!0,this.btnLoading=!0,"excel-source"===this.source)this.deleteExcelSource(t);else if("excel-result"===this.source)this.deleteExcelResult(t);else{if("office-pdf"!==this.source)return!1;this.deleteOfficePDF(t)}},deleteOfficePDF:function(t){var e=this;return new Promise((function(a,i){Object(o["n"])(t).then((function(t){var i=t.status_id;t.message;100===i&&e.$message({message:"删除成功",type:"success",duration:2e3}),e.btnDisabled=!1,e.btnLoading=!1,e.$emit("close-delete-dialog",!0),a(t)})).catch((function(t){e.btnDisabled=!1,e.btnLoading=!1,e.$emit("close-delete-dialog",!0),i(t)}))}))},deleteExcelSource:function(t){var e=this;return new Promise((function(a,i){Object(o["h"])(t).then((function(t){var i=t.status_id;t.message;100===i&&e.$message({message:"删除成功",type:"success",duration:2e3}),e.btnDisabled=!1,e.btnLoading=!1,e.$emit("close-delete-dialog",!0),a(t)})).catch((function(t){e.btnDisabled=!1,e.btnLoading=!1,e.$emit("close-delete-dialog",!0),i(t)}))}))},deleteExcelResult:function(t){var e=this;return new Promise((function(a,i){Object(o["c"])(t).then((function(t){var i=t.status_id;t.message;100===i&&e.$message({message:"删除成功",type:"success",duration:2e3}),e.btnDisabled=!1,e.btnLoading=!1,e.$emit("close-delete-dialog",!0),a(t)})).catch((function(t){e.btnDisabled=!1,e.btnLoading=!1,e.$emit("close-delete-dialog",!0),i(t)}))}))}}},r=n,c=a("2877"),d=Object(c["a"])(r,i,s,!1,null,"d6628748",null);e["a"]=d.exports},b157:function(t,e,a){"use strict";a.d(e,"i",(function(){return s})),a.d(e,"j",(function(){return l})),a.d(e,"g",(function(){return o})),a.d(e,"h",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return c})),a.d(e,"e",(function(){return d})),a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return p})),a.d(e,"k",(function(){return f})),a.d(e,"l",(function(){return g})),a.d(e,"f",(function(){return m})),a.d(e,"r",(function(){return h})),a.d(e,"o",(function(){return b})),a.d(e,"q",(function(){return A})),a.d(e,"m",(function(){return w})),a.d(e,"n",(function(){return v})),a.d(e,"p",(function(){return D}));var i=a("b775");function s(t){return Object(i["a"])({url:"/office/excel_source_list",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/office/excel_source_update",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/office/excel_source_delete",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/office/excel_source_deletes",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/office/excel_merge",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/office/excel_history_list",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/office/excel_result_update",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/office/excel_result_delete",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/office/excel_result_deletes",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/office/excel_split",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/office/excel_init_split",method:"post",data:t})}function m(t){return Object(i["a"])({url:"/office/excel_sheet_header",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/office/pdf2word_list",method:"post",data:t})}function b(t){return Object(i["a"])({url:"/office/office_pdf_detail",method:"post",data:t})}function A(t){return Object(i["a"])({url:"/office/office_pdf_update",method:"post",data:t})}function w(t){return Object(i["a"])({url:"/office/office_pdf_delete",method:"post",data:t})}function v(t){return Object(i["a"])({url:"/office/office_pdf_deletes",method:"post",data:t})}function D(t){return Object(i["a"])({url:"/office/office_pdf_to",method:"post",data:t})}},b418:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.dialog,title:t.dialogAttrs.title,width:t.dialogAttrs.width,fullscreen:t.dialogAttrs.fullScreen,top:t.dialogAttrs.top,modal:t.dialogAttrs.modal,"lock-scroll":t.dialogAttrs.lockScroll,"open-delay":t.dialogAttrs.openDelay,"close-delay":t.dialogAttrs.closeDelay,"close-on-click-modal":t.dialogAttrs.closeOnClickModal,"close-on-press-escape":t.dialogAttrs.closeOnPressEscape,"show-close":t.dialogAttrs.showClose,draggable:t.dialogAttrs.draggable,center:t.dialogAttrs.center},on:{close:t.handleClose,open:t.handleOpen},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",{staticClass:"dialog-footer"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.fileList.length>0,expression:"fileList.length>0"}],attrs:{disabled:t.uploadBtnAttrs.disabled},on:{click:t.handleClear}},[t._v(" 清空 ")]),a("el-button",{attrs:{disabled:t.uploadBtnAttrs.disabled},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleClose(e)}}},[t._v(" 取消 ")]),a("el-button",{attrs:{type:"primary",disabled:t.uploadBtnAttrs.disabled,loading:t.uploadBtnAttrs.loading},on:{click:t.submitUpload}},[t._v(" 上传 ")])],1)]},proxy:!0}])},[a("div",{staticStyle:{"text-align":"center"}},[a("el-upload",{ref:"uploadRef",attrs:{action:t.getUploadUrl(),accept:t.uploadApis.accept,"file-list":t.fileList,headers:t.uploadApis.headers,method:t.uploadApis.method,data:t.uploadApis.data,name:t.uploadApis.name,"with-credentials":t.uploadApis.cookie,"show-file-list":t.uploadAttrs.showFileList,"list-type":t.uploadAttrs.listType,"auto-upload":t.uploadAttrs.autoUpload,limit:t.uploadAttrs.limit,drag:t.uploadAttrs.drag,multiple:t.uploadAttrs.multiple,disabled:t.uploadAttrs.disabled,"on-success":t.uploadSuccess,"on-remove":t.uploadRemove,"on-change":t.uploadChange,"on-exceed":t.uploadExceed,"before-upload":t.beforeUpload},scopedSlots:t._u([{key:"tip",fn:function(){return[a("div",{staticClass:"el-upload__tip"},[a("p",{domProps:{innerHTML:t._s(t.tips)}}),a("p",[t._v("上传文件数量： "),a("strong",[t._v(t._s(t.fileList.length))]),t._v("（"+t._s(t.uploadAttrs.limit>0?"单次上传限制"+t.uploadAttrs.limit:"无限制")+"）")])])]},proxy:!0}])},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("拖拽或者 "),a("em",[t._v("点击上传")])])])],1)])],1)},s=[],l=(a("caad"),a("b0c0"),a("d3b7"),a("159b"),a("b775"));function o(t){return Object(l["a"])({url:"/common/uploads",method:"post",data:t})}var n=a("4360"),r=a("5f87"),c=a("61f7"),d={name:"UploadFile",emits:["close-file-upload"],components:{},props:{dialog:{type:Boolean,require:!0,default:!1,validator:function(t){return[!0,!1].includes(t)}},fileType:{type:String,require:!0,default:"1"}},data:function(){return{tips:this.getUploadTip(),fileList:[],isManualUpload:!0,uploadApis:{url:"http://121.4.56.169:9999/common/upload",accept:this.getUploadAccept(),headers:{"Access-Control-Allow-Origin":"*","X-Token":Object(r["a"])(),"X-Rtx-Id":n["a"].getters.rtx_id},method:"POST",data:{rtx_id:n["a"].getters.rtx_id,file_type:this.fileType},name:"files",cookie:!0},uploadAttrs:{multiple:!0,showFileList:!0,drag:!0,listType:"text",autoUpload:!1,limit:10,disabled:!1},dialogAttrs:{title:"文件上传",width:"55%",fullScreen:!1,top:"5%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!1,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},uploadBtnAttrs:{disabled:!1,loading:!1},isUpload:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{getUploadTip:function(){return"1"===this.fileType||"2"===this.fileType?'<strong>提示</strong>：支持<span class="info_red">.xls</span>、<span class="info_red">.xlsx</span>格式文件上传，.xls格式文件条数最大支持为<strong>65535</strong>行，超出请上传.xlxs格式数据。':"3"===this.fileType?".doc,.docx":"4"===this.fileType?".ppt,.pptx":"5"===this.fileType?".txt":"6"===this.fileType?'<strong>提示</strong>：仅支持<span class="info_red">.pdf</span>格式文件上传。':"7"===this.fileType?'<strong>提示</strong>：支持<span class="info_red">.xls</span>、<span class="info_red">.xlsx</span>格式文件上传，.xls格式文件条数最大支持为<strong>65535</strong>行，超出请上传.xlxs格式数据。':""},getUploadAccept:function(){return["1","2","7"].includes(this.fileType)?".xls,.xlsx":"3"===this.fileType?".doc,.docx":"4"===this.fileType?".ppt,.pptx":"5"===this.fileType?".txt":"6"===this.fileType?".pdf":""},handleClose:function(){this.$refs.uploadRef.clearFiles(),this.$emit("close-file-upload",this.isUpload)},handleOpen:function(){this.fileList=[]},handleClear:function(){this.$refs.uploadRef.clearFiles(),this.fileList=[]},cancelUpload:function(){this.$refs.uploadRef.abort()},submitUpload:function(){this.isManualUpload?this.manualUpload():this.$refs.uploadRef.submit()},getUploadUrl:function(){return this.isManualUpload?"":this.uploadApis.url},uploadSuccess:function(t,e){var a=t.status_id,i=t.message;this.$message({message:100===a?null!==e&&void 0!==e&&e.name?e.name+"上传成功":"文件上传成功":i,type:100===a?"success":"warning",duration:2e3})},uploadExceed:function(t,e){this.$message({message:"文件个数超过上传限制",type:"warning",duration:2e3})},uploadRemove:function(t,e){this.fileList=e,this.$message({message:null!==t&&void 0!==t&&t.name?t.name+"移除列表成功":"文件移除列表成功",type:"success",duration:2e3})},uploadChange:function(t,e){this.fileList=e},beforeUpload:function(t){return null===t||void 0===t||!t.name||Object(c["e"])(t.name)},manualUpload:function(){var t=this;if(this.fileList.length<1)return this.$message({message:"请选择上传文件",type:"warning",duration:2e3}),!1;if(this.uploadAttrs.limit>0&&this.fileList.length>this.uploadAttrs.limit)return this.$message({message:"文件个数超过上传限制",type:"warning",duration:2e3}),!1;this.isUpload=!0,this.uploadAttrs.disabled=!0,this.uploadBtnAttrs.disabled=!0,this.uploadBtnAttrs.loading=!0;var e=new FormData;return e.append("rtx_id",this.$store.getters.rtx_id),e.append("file_type",this.fileType),this.fileList.forEach((function(t){e.append(t.name,t.raw)})),new Promise((function(a,i){o(e).then((function(e){t.uploadAttrs.disabled=!1,t.uploadBtnAttrs.disabled=!1,t.uploadBtnAttrs.loading=!1;var i=e.status_id;e.message;100===i&&(t.$message({message:"文件上传成功",type:"success",duration:2e3}),t.handleClear()),a(e)})).catch((function(e){t.uploadAttrs.disabled=!1,t.uploadBtnAttrs.disabled=!1,t.uploadBtnAttrs.loading=!1,t.$message({message:"服务端发异常，请稍后尝试",type:"warning",duration:2e3}),i(e)}))}))}}},u=d,p=a("2877"),f=Object(p["a"])(u,i,s,!1,null,"16cd7e1a",null);e["a"]=f.exports},c43c:function(t,e,a){"use strict";a("2983")},cbd0:function(t,e,a){}}]);