(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea8dd7e2"],{"2fc2":function(e,t,l){"use strict";l("9809")},"8b1f":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-row",[l("el-button",{attrs:{id:"btn-upload",size:e.btnBaseAttrs.size,plain:e.btnBaseAttrs.plain,round:e.btnBaseAttrs.round,disabled:e.btnDisabled},on:{click:e.openFileUpload}},[l("svg-icon",{attrs:{"icon-class":"i_upload"}}),e._v(" 上传 ")],1),l("el-button",{staticClass:"btn-margin",attrs:{id:"btn-select",plain:e.btnBaseAttrs.plain,round:e.btnBaseAttrs.round,size:e.btnBaseAttrs.size,disabled:e.btnDisabled},on:{click:e.manualSelectALL}},[l("svg-icon",{attrs:{"icon-class":"i_select"}}),e._v(" "+e._s(e.selBtnText)+" ")],1),l("el-button",{staticClass:"btn-margin",attrs:{id:"btn-merge",plain:e.btnBaseAttrs.plain,round:e.btnBaseAttrs.round,size:e.btnBaseAttrs.size,disabled:e.btnDisabled},on:{click:e.openFileMerge}},[l("svg-icon",{attrs:{"icon-class":"i_start"}}),e._v(" 合并 ")],1),l("el-button",{staticClass:"btn-margin",attrs:{id:"btn-delete",plain:e.btnBaseAttrs.plain,round:e.btnBaseAttrs.round,size:e.btnBaseAttrs.size,disabled:e.btnDisabled},on:{click:e.openDeleteDialog}},[l("svg-icon",{attrs:{"icon-class":"i_delete"}}),e._v(" 删除 ")],1),l("el-button",{staticClass:"btn-margin",attrs:{id:"btn-tip",type:"success",plain:e.btnBaseAttrs.plain,round:e.btnBaseAttrs.round,size:e.btnBaseAttrs.size,disabled:e.btnDisabled},on:{click:function(t){return e.openTip()}}},[l("svg-icon",{attrs:{"icon-class":"i_sm"}}),e._v(" 操作说明 ")],1)],1),l("excel-merge-tip",{attrs:{show:e.tipDialogStatus},on:{"close-tip":e.closeTip}}),l("office-upload",{attrs:{dialog:e.uploadDialogStatus,"file-type":e.fileType,"excel-sub-type":e.excelType},on:{"close-file-upload":e.closeFileUpload}}),l("div",{staticClass:"table-sty",attrs:{id:"data-container"}},[l("el-table",{ref:"multipleTableRef",staticStyle:{width:"100%"},attrs:{data:e.tableData,size:e.tableAttrs.size,fit:e.tableAttrs.fit,"show-header":e.tableAttrs.showHeader,"highlight-current-row":e.tableAttrs.hcr,border:e.tableAttrs.border,"default-sort":{prop:"create_time",order:"descending"},"empty-text":e.tableAttrs.emptyText,"header-cell-style":e.setTableHeaderStyle},on:{select:e.selectRow,"selection-change":e.selectChange,"select-all":e.selectAll}},[l("el-table-column",{attrs:{fixed:"left",type:"selection","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"60"}}),l("el-table-column",{attrs:{fixed:"left",label:"上传时间","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"220",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("i",{staticClass:"el-icon-time"}),l("span",{staticStyle:{"margin-left":"20px"}},[e._v(e._s(t.row.create_time))])]}}])}),l("el-table-column",{attrs:{prop:"name",label:"文件名称",width:"320",sortable:"","header-align":e.tableRowAttrs.headerAlign,align:"left","show-overflow-tooltip":e.tableRowAttrs.sot}}),l("el-table-column",{attrs:{prop:"set_sheet_name",label:"合并Sheet","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"280","show-overflow-tooltip":e.tableRowAttrs.sot}}),l("el-table-column",{attrs:{prop:"ftypev",label:"类别","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"130"}}),l("el-table-column",{attrs:{label:"Sheet数",align:e.tableRowAttrs.align,width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.sheet_names.length>0?l("el-popover",{attrs:{trigger:"hover",placement:"top",width:"220"}},[e._l(t.row.sheet_names,(function(t,a){return l("div",{key:a},[l("p",[e._v(e._s(t.key)+": "+e._s(t.value))])])})),l("div",{attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{effect:"plain"}},[e._v(e._s(t.row.nsheet))])],1)],2):e._e()]}}])}),l("el-table-column",{attrs:{prop:"numopr",label:"操作次数","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"130"}}),l("el-table-column",{attrs:{prop:"rtx_id",label:"上传人RTX","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"180"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tooltip",{attrs:{effect:"dark",content:"设置",placement:"top"}},[l("i",{staticClass:"el-icon-setting",on:{click:function(l){return e.rowHandleEdit(t.$index,t.row)}}})]),l("el-tooltip",{staticClass:"icon-item",attrs:{effect:"dark",content:"下载",placement:"top"}},[l("a",{attrs:{href:t.row.url}},[l("i",{staticClass:"el-icon-download"})])]),l("el-tooltip",{staticClass:"icon-item",attrs:{effect:"dark",content:"删除",placement:"top"}},[l("i",{staticClass:"el-icon-delete",on:{click:function(l){return e.rowHandleDelete(t.$index,t.row)}}})])]}}])})],1)],1),l("pagination",{attrs:{page:e.pageCur,size:e.pageSize,total:e.pageTotal},on:{"pagin-size-change":e.paginSizeChange,"pagin-current-change":e.paginCurrentChange}}),l("excel-merge-set",{attrs:{show:e.setDialogStatus,"table-row":e.oprSelectData},on:{"close-file-set":e.closeFileSet}}),l("excel-merge-opr",{attrs:{show:e.mergeDialogStatus,list:e.selectList},on:{"close-file-merge":e.closeFileMerge}}),l("office-batch-delete",{attrs:{show:e.deleteConfirm,list:e.selectList,source:e.deleteSource},on:{"close-delete-dialog":e.closeDeleteDialog}})],1)},s=[],i=(l("caad"),l("2532"),l("a434"),l("d81d"),l("b0c0"),l("d3b7"),l("b157")),n=l("4360"),o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-drawer",{attrs:{visible:e.show,title:"操作说明",modal:e.drawerAttrs.modal,direction:e.drawerAttrs.arrow,"show-close":e.drawerAttrs.closeButton,"close-on-click-modal":e.drawerAttrs.closeOnModal,"close-on-press-escape":e.drawerAttrs.closeOnEsc},on:{close:function(t){return e.close()}}},[l("div",{staticClass:"app-container tip"},[l("div",[l("h3",[e._v("操作流程")]),l("ol",[l("li",[e._v("上传需要合并的Excel子文件，平台目前只支持"),l("span",{staticClass:"info_red"},[e._v(".xls")]),e._v("、"),l("span",{staticClass:"info_red"},[e._v(".xlsx")]),e._v("格式的Excel文件。")]),l("li",[e._v("点击文件列表最后列的设置按钮，配置需要合并的Sheet（单文件可以多选Sheet）。")]),l("li",[e._v("平台运行过程中需要等待，如果合并的子文件过多，建议去Github上逛逛（"),l("el-link",{attrs:{type:"primary",href:"https://element.eleme.io",target:"_blank"}},[e._v("点击我")]),e._v("）或者喝杯水。")],1),l("li",[e._v("合并完成后，下载合并文件： "),l("router-link",{attrs:{to:{path:"/office/history"}}},[l("a",{staticClass:"history_a"},[e._v("我的历史")])])],1)])]),l("div",[l("h3",[e._v("注意要点")]),l("ol",[l("li",[e._v(".xls格式文件最大支持为"),l("strong",[e._v("65535")]),e._v("行数，如果超出最大行数请转换为.xlsx格式文件，再进行上传。")]),l("li",[e._v("合并的Excel数据默认为文件的第一个Sheet，如需文件设置多个Sheet合并，请点击配置，设置需要合并的Sheet选项。")]),l("li",[e._v("平台处理过程中请勿做其他操作，合并完成后的文件请到 "),l("router-link",{attrs:{to:{path:"/excel/history"}}},[l("a",{staticClass:"history_a"},[e._v("我的历史")])]),e._v(" 进行下载。 ")],1)])])])])],1)},r=[],c={name:"ExcelMergeTip",emits:["close-tip"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}}},data:function(){return{drawer:!0,drawerAttrs:{arrow:"rtl",modal:!1,closeButton:!0,closeOnModal:!0,closeOnEsc:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{close:function(){this.$emit("close-tip")}}},d=c,u=(l("2fc2"),l("2877")),p=Object(u["a"])(d,o,r,!1,null,"4befd726",null),g=p.exports,h=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{visible:e.show,title:e.dialogAttrs.title,width:e.dialogAttrs.width,fullscreen:e.dialogAttrs.fullScreen,top:e.dialogAttrs.top,modal:e.dialogAttrs.modal,"lock-scroll":e.dialogAttrs.lockScroll,"open-delay":e.dialogAttrs.openDelay,"close-delay":e.dialogAttrs.closeDelay,"close-on-click-modal":e.dialogAttrs.closeOnClickModal,"close-on-press-escape":e.dialogAttrs.closeOnPressEscape,"show-close":e.dialogAttrs.showClose,draggable:e.dialogAttrs.draggable,center:e.dialogAttrs.center},on:{close:function(t){return e.closeDialog()}},scopedSlots:e._u([{key:"footer",fn:function(){return[l("span",{staticClass:"dialog-footer"},[l("el-button",{attrs:{disabled:e.disabled},on:{click:function(t){return e.closeDialog()}}},[e._v("取消")]),l("el-button",{attrs:{disabled:e.disabled,loading:e.loading,type:"primary"},on:{click:function(t){return e.submitSet()}}},[e._v("确定")])],1)]},proxy:!0}])},[l("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"auto"}},[l("el-form-item",{attrs:{label:"文件名称"}},[l("el-input",{attrs:{type:"text",placeholder:"请输入文件名称",maxlength:e.inputAttrs.length,clearable:e.inputAttrs.clear,"show-word-limit":e.inputAttrs.limit,disabled:e.disabled,"prefix-icon":"el-icon-edit"},model:{value:e.tableRow.name,callback:function(t){e.$set(e.tableRow,"name","string"===typeof t?t.trim():t)},expression:"tableRow.name"}})],1),l("el-form-item",{attrs:{label:"选择Sheet"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.selectAttrs.placeholder,disabled:e.disabled,filterable:e.selectAttrs.filterable,multiple:e.selectAttrs.multiple,"multiple-limit":e.selectAttrs.limit,clearable:e.selectAttrs.clearable,"no-data-text":e.selectAttrs.noDataText,"collapse-tags":e.selectAttrs.collapseTags},model:{value:e.tableRow.setSheetIndex,callback:function(t){e.$set(e.tableRow,"setSheetIndex",t)},expression:"tableRow.setSheetIndex"}},e._l(e.tableRow.sheetNames,(function(e,t){return l("el-option",{key:t,attrs:{label:e.value,value:e.key}})})),1)],1)],1)],1)],1)},b=[],m=l("61f7"),f={name:"ExcelMergeSet",emits:["close-file-set"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}},tableRow:{type:Object,require:!0,default:function(){return{}}}},data:function(){return{loading:!1,disabled:!1,labelPosition:"left",dialogAttrs:{title:"文件设置",width:"40%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},inputAttrs:{clear:!0,length:"55",limit:!0},selectAttrs:{multiple:!0,clearable:!0,filterable:!1,collapseTags:!1,limit:0,noDataText:"暂无数据",placeholder:"请选择合并的Sheet"}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{closeDialog:function(){this.$emit("close-file-set",!1)},submitSet:function(){var e=this;if(!this.tableRow.name)return this.$message({message:"文件名称不允许为空",type:"warning",duration:2e3}),!1;if(this.tableRow.name.length>55)return this.$message({message:"文件名称超出限制",type:"warning",duration:2e3}),!1;if(!Object(m["e"])(this.tableRow.name))return this.$message({message:"文件格式不正确",type:"warning",duration:2e3}),!1;if(this.tableRow.setSheetIndex.length<1)return this.$message({message:"文件Sheet不允许为空",type:"warning",duration:2e3}),!1;this.disabled=!0,this.loading=!0;var t={rtx_id:n["a"].getters.rtx_id,name:this.tableRow.name,set_sheet:this.tableRow.setSheetIndex,md5:this.tableRow.md5};return new Promise((function(l,a){Object(i["q"])(t).then((function(t){e.disabled=!1,e.loading=!1;var a=t.status_id;t.message;100===a&&(e.$message({message:"文件设置成功",type:"success",duration:2e3}),e.$emit("close-file-set",!0)),l(t)})).catch((function(t){e.disabled=!1,e.loading=!1,a(t)}))}))}}},w=f,A=Object(u["a"])(w,h,b,!1,null,"93de777a",null),_=A.exports,v=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{visible:e.show,title:e.dialogAttrs.title,width:e.dialogAttrs.width,fullscreen:e.dialogAttrs.fullScreen,top:e.dialogAttrs.top,modal:e.dialogAttrs.modal,"lock-scroll":e.dialogAttrs.lockScroll,"open-delay":e.dialogAttrs.openDelay,"close-delay":e.dialogAttrs.closeDelay,"close-on-click-modal":e.dialogAttrs.closeOnClickModal,"close-on-press-escape":e.dialogAttrs.closeOnPressEscape,"show-close":e.dialogAttrs.showClose,draggable:e.dialogAttrs.draggable,center:e.dialogAttrs.center},on:{close:e.handleClose,open:e.handleOpen},scopedSlots:e._u([{key:"footer",fn:function(){return[l("span",{staticClass:"dialog-footer"},[l("el-button",{attrs:{disabled:e.disabled},on:{click:e.handleClose}},[e._v(" 取消 ")]),l("el-button",{attrs:{type:"primary",disabled:e.disabled},on:{click:e.submitMerge}},[e._v(" 确认 ")])],1)]},proxy:!0}])},[l("div",{staticStyle:{"text-align":"center"},attrs:{id:"main-opr-div"}},[l("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"auto"}},[l("el-form-item",{attrs:{label:"新文件名称"}},[l("el-input",{attrs:{type:"text",placeholder:"请输入新文件名称，默认为.xlsx格式",maxlength:e.inputAttrs.length,clearable:e.inputAttrs.clear,"show-word-limit":e.inputAttrs.limit,disabled:e.disabled,"prefix-icon":"el-icon-edit"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"===typeof t?t.trim():t)},expression:"formData.name"}})],1),l("el-form-item",{attrs:{label:"间隔行数"}},[l("el-input-number",{staticStyle:{width:"100%"},attrs:{min:e.inputNumberAttrs.min,controls:e.inputNumberAttrs.controls,precision:e.inputNumberAttrs.precision,step:e.inputNumberAttrs.step,disabled:e.disabled,"prefix-icon":"el-icon-edit"},model:{value:e.formData.blank,callback:function(t){e.$set(e.formData,"blank",t)},expression:"formData.blank"}})],1)],1)],1)])],1)},x=[],y={name:"ExcelMergeOpr",emits:["close-file-merge"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}},list:{type:Array,require:!0,default:function(){}}},data:function(){return{dialogAttrs:{title:"表格合并",width:"45%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!1,closeOnPressEscape:!1,showClose:!1,draggable:!1,center:!1},inputAttrs:{clear:!0,length:"55",limit:!0},inputNumberAttrs:{min:0,max:100,step:1,precision:0,size:"",controls:!0,cp:"right"},disabled:!1,labelPosition:"left",formData:{name:"",blank:0}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handleClose:function(){this.$emit("close-file-merge",!1)},handleOpen:function(){this.formData.name="",this.formData.blank=0},submitMerge:function(){var e=this;if(!this.formData.name)return this.$message({message:"请输入新文件名称",type:"warning",duration:2e3}),!1;if(this.list.length<1)return this.$message({message:"请选择合并的数据",type:"warning",duration:2e3}),!1;var t={rtx_id:n["a"].getters.rtx_id,list:this.list,name:this.formData.name,blank:this.formData.blank};this.disabled=!0;var l=this.$loading({target:document.querySelector("#main-opr-div"),body:!1,fullscreen:!0,lock:!0,text:"努力工作中......",spinner:"el-icon-loading",background:"",class:""});return new Promise((function(a,s){Object(i["h"])(t).then((function(t){e.disabled=!1,e.loading=!1;var s=t.status_id;100===s&&(e.$message({message:"表格合并成功",type:"success",duration:2e3}),l.close(),e.$emit("close-file-merge",!0)),a(t)})).catch((function(t){e.disabled=!1,e.loading=!1,s(t)}))}))}}},S=y,D=Object(u["a"])(S,v,x,!1,null,"16d4d50a",null),k=D.exports,C=l("39ed"),R=l("076b"),T=l("333d"),$={name:"Merge",components:{"excel-merge-tip":g,"office-upload":R["a"],"excel-merge-set":_,"excel-merge-opr":k,"office-batch-delete":C["a"],pagination:T["a"]},props:{},data:function(){return{fileType:"2",excelType:"1",selBtnText:"全选",btnUploadLoading:!1,btnMergeLoading:!1,btnDeleteLoading:!1,btnDisabled:!1,btnBaseAttrs:{size:"medium",type:"primary",plain:!0,round:!1,circle:!1},tipDialogStatus:!1,uploadDialogStatus:!1,tableAttrs:{stripe:!0,border:!0,size:"medium",fit:!0,showHeader:!0,hcr:!0,height:450,maxHeight:450,showSum:!0,sumText:"统计",emptyText:"暂无数据"},tableRowAttrs:{type:"selection",index:1,fixed:!0,resizable:!0,align:"center",headerAlign:"center",sot:!0},pageCur:1,pageSize:15,pageTotal:0,selectAllStatus:!1,selectList:[],tableData:[],oprSelectData:{},setDialogStatus:!1,mergeDialogStatus:!1,deleteSource:"excel-source",deleteConfirm:!1}},computed:{},watch:{selectAllStatus:function(e,t){this.selBtnText=e?"取消":"全选"}},created:function(){this.getTableData()},mounted:function(){},methods:{openTip:function(){this.tipDialogStatus=!0},closeTip:function(){this.tipDialogStatus=!1},openFileUpload:function(){this.uploadDialogStatus=!0},closeFileUpload:function(e){this.uploadDialogStatus=!1,e&&this.getTableData()},selectRow:function(e,t){if(t){if(null!==t&&void 0!==t&&t.md5_id&&!this.selectList.includes(t.md5_id))this.selectList.push(t.md5_id);else if(null!==t&&void 0!==t&&t.md5_id&&this.selectList.includes(t.md5_id)){var l=this.selectList.indexOf(t.md5_id);l>-1&&this.selectList.splice(l,1)}else console.log("Add data is not have md5-id");this.selectAllStatus=this.tableData.length===this.selectList.length}},selectChange:function(e){},selectAll:function(e){e&&(this.selectAllStatus=!this.selectAllStatus,this.selectList=this.selectAllStatus?e.map((function(e){return(null===e||void 0===e?void 0:e.md5_id)||""})):[])},manualSelectALL:function(){this.$refs.multipleTableRef.toggleAllSelection()},setTableHeaderStyle:function(){return{background:"#eee",color:"#606266"}},rowHandleEdit:function(e,t){if(!t||!t.md5_id)return!1;this.oprSelectData={name:t.name,setSheetIndex:t.set_sheet_index,sheetNames:t.sheet_names,md5:t.md5_id},this.setDialogStatus=!0},closeFileSet:function(e){this.setDialogStatus=!1,e&&this.getTableData()},rowHandleDelete:function(e,t){var l=this;if(!t||null===t||void 0===t||!t.md5_id)return!1;var a={rtx_id:n["a"].getters.rtx_id,md5:t.md5_id};return new Promise((function(e,t){Object(i["c"])(a).then((function(t){var a=t.status_id;t.message;100===a&&(l.$message({message:"删除成功",type:"success",duration:2e3}),l.getTableData()),e(t)})).catch((function(e){l.loading=!1,t(e)}))}))},getTableData:function(){var e=this;this.selectAllStatus=!1,this.selectList=[],this.oprSelectData={};var t={rtx_id:n["a"].getters.rtx_id,type:this.excelType,limit:this.pageSize||15,offset:(this.pageCur-1)*this.pageSize||0};return new Promise((function(l,a){Object(i["l"])(t).then((function(t){var a=t.status_id,s=t.data;100!==a&&101!==a||(e.tableData=s.list,e.pageTotal=s.total),l(t)})).catch((function(t){e.loading=!1,a(t)}))}))},paginSizeChange:function(e){this.pageSize=e,this.getTableData()},paginCurrentChange:function(e){this.pageCur=e,this.getTableData()},openFileMerge:function(){if(this.selectList.length<1)return this.$message({message:"请选择合并的数据",type:"warning",duration:2e3}),!1;this.mergeDialogStatus=!0},closeFileMerge:function(e){this.mergeDialogStatus=!1,e&&this.getTableData()},closeDeleteDialog:function(e){this.deleteConfirm=!1,e&&this.getTableData()},openDeleteDialog:function(){if(0===this.selectList.length)return this.$message({message:"请选择删除的文件",type:"warning",duration:2e3}),!1;this.deleteConfirm=!0}}},O=$,z=Object(u["a"])(O,a,s,!1,null,"9d720024",null);t["default"]=z.exports},9809:function(e,t,l){}}]);