(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40932096"],{"0f36":function(e,t,l){},1077:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-row",[l("el-button",{attrs:{id:"btn-upload",size:e.btnBaseAttrs.size,plain:e.btnBaseAttrs.plain,round:e.btnBaseAttrs.round,disabled:e.btnDisabled},on:{click:e.openFileUpload}},[l("svg-icon",{attrs:{"icon-class":"i_upload"}}),e._v(" 上传 ")],1),l("el-button",{staticClass:"btn-margin",attrs:{id:"btn-select",plain:e.btnBaseAttrs.plain,round:e.btnBaseAttrs.round,size:e.btnBaseAttrs.size,disabled:e.btnDisabled},on:{click:e.manualSelectALL}},[l("svg-icon",{attrs:{"icon-class":"i_select"}}),e._v(" "+e._s(e.selBtnText)+" ")],1),l("el-button",{staticClass:"btn-margin",attrs:{id:"btn-delete",plain:e.btnBaseAttrs.plain,round:e.btnBaseAttrs.round,size:e.btnBaseAttrs.size,disabled:e.btnDisabled},on:{click:e.openDeleteDialog}},[l("svg-icon",{attrs:{"icon-class":"i_delete"}}),e._v(" 删除 ")],1),l("el-button",{staticClass:"btn-margin",attrs:{id:"btn-tip",type:"success",plain:e.btnBaseAttrs.plain,round:e.btnBaseAttrs.round,size:e.btnBaseAttrs.size,disabled:e.btnDisabled},on:{click:function(t){return e.openTip()}}},[l("svg-icon",{attrs:{"icon-class":"i_sm"}}),e._v(" 操作说明 ")],1)],1),l("excel-split-tip",{attrs:{show:e.tipDialogStatus},on:{"close-tip":e.closeTip}}),l("public-upload-file",{attrs:{dialog:e.uploadDialogStatus,"file-type":e.fileType},on:{"close-file-upload":e.closeFileUpload}}),l("div",{staticClass:"table-sty",attrs:{id:"data-container"}},[l("el-table",{ref:"multipleTableRef",staticStyle:{width:"100%"},attrs:{data:e.tableData,size:e.tableAttrs.size,fit:e.tableAttrs.fit,"show-header":e.tableAttrs.showHeader,"highlight-current-row":e.tableAttrs.hcr,border:e.tableAttrs.border,"default-sort":{prop:"create_time",order:"descending"},"empty-text":e.tableAttrs.emptyText,"header-cell-style":e.setTableHeaderStyle},on:{select:e.selectRow,"selection-change":e.selectChange,"select-all":e.selectAll}},[l("el-table-column",{attrs:{fixed:"left",type:"selection","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"60"}}),l("el-table-column",{attrs:{fixed:"left",label:"上传时间","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"220",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("i",{staticClass:"el-icon-time"}),l("span",{staticStyle:{"margin-left":"20px"}},[e._v(e._s(t.row.create_time))])]}}])}),l("el-table-column",{attrs:{prop:"name",label:"文件名称",width:"350",sortable:"","header-align":e.tableRowAttrs.headerAlign,align:"left","show-overflow-tooltip":e.tableRowAttrs.sot}}),l("el-table-column",{attrs:{prop:"set_sheet_name",label:"合并Sheet",sortable:"","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.headerAlign,width:"280","show-overflow-tooltip":e.tableRowAttrs.sot}}),l("el-table-column",{attrs:{prop:"ftypev",label:"类别","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"150"}}),l("el-table-column",{attrs:{label:"Sheet数","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"150",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.sheet_names.length>0?l("el-popover",{attrs:{trigger:"hover",placement:"top",width:"220"}},[e._l(t.row.sheet_names,(function(t,s){return l("div",{key:s},[l("p",[e._v(e._s(t.key)+": "+e._s(t.value))])])})),l("div",{attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{effect:"plain"}},[e._v(e._s(t.row.nsheet))])],1)],2):e._e()]}}])}),l("el-table-column",{attrs:{prop:"numopr",label:"操作次数","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"150",sortable:""}}),l("el-table-column",{attrs:{prop:"rtx_id",label:"上传人RTX","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"200",sortable:""}}),l("el-table-column",{attrs:{fixed:"right",label:"操作","header-align":e.tableRowAttrs.headerAlign,align:e.tableRowAttrs.align,width:"360"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tooltip",{attrs:{effect:"dark",content:"设置",placement:"top"}},[l("i",{staticClass:"el-icon-setting",on:{click:function(l){return e.rowHandleEdit(t.$index,t.row)}}})]),l("el-tooltip",{staticClass:"icon-item",attrs:{effect:"light",content:"拆分",placement:"top"}},[l("el-button",{attrs:{icon:"el-icon-edit",type:"primary",size:"mini",round:"",plain:""},on:{click:function(l){return e.openFileSplit(t.$index,t.row)}}})],1),l("el-tooltip",{staticClass:"icon-item",attrs:{effect:"dark",content:"下载",placement:"top"}},[l("a",{attrs:{href:t.row.url}},[l("i",{staticClass:"el-icon-download"})])]),l("el-tooltip",{staticClass:"icon-item",attrs:{effect:"dark",content:"删除",placement:"top"}},[l("i",{staticClass:"el-icon-delete",on:{click:function(l){return e.rowHandleDelete(t.$index,t.row)}}})])]}}])})],1)],1),l("public-pagination",{attrs:{page:e.pageCur,size:e.pageSize,total:e.pageTotal},on:{"pagin-size-change":e.paginSizeChange,"pagin-current-change":e.paginCurrentChange}}),l("excel-split-set",{attrs:{show:e.setDialogStatus,"table-row":e.oprSelectData},on:{"close-file-set":e.closeFileSet}}),l("excel-split-opr",{attrs:{show:e.splitDialogStatus,"table-row":e.oprSelectData},on:{"close-file-split":e.closeFileSplit}}),l("office-batch-delete",{attrs:{show:e.deleteConfirm,list:e.selectList,source:e.deleteSource},on:{"close-delete-dialog":e.closeDeleteDialog}})],1)},a=[],i=(l("caad"),l("2532"),l("a434"),l("d81d"),l("b0c0"),l("d3b7"),l("4360")),o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-drawer",{attrs:{visible:e.show,title:"操作说明",modal:e.drawerAttrs.modal,direction:e.drawerAttrs.arrow,"show-close":e.drawerAttrs.closeButton,"close-on-click-modal":e.drawerAttrs.closeOnModal,"close-on-press-escape":e.drawerAttrs.closeOnEsc},on:{close:function(t){return e.close()}}},[l("div",{staticClass:"app-container tip"},[l("div",[l("h3",[e._v("操作流程")]),l("ol",[l("li",[e._v("上传需要拆分的Excel文件，平台目前只支持"),l("span",{staticClass:"info_red"},[e._v(".xls")]),e._v("、"),l("span",{staticClass:"info_red"},[e._v(".xlsx")]),e._v("格式的Excel文件。")]),l("li",[e._v("点击文件列表最后列的设置按钮，配置需要拆分的Sheet（单选）。")]),l("li",[e._v("拆分操作中需要配置拆分的操作选项，具体配置请参考拆分功能中的说明。")]),l("li",[e._v("拆分完成后，下载拆分文件： "),l("router-link",{attrs:{to:{path:"/office/history"}}},[l("a",{staticClass:"history_a"},[e._v("我的历史")])])],1)])]),l("div",[l("h3",[e._v("注意要点")]),l("ol",[l("li",[e._v(".xls格式文件最大支持为"),l("strong",[e._v("65535")]),e._v("行数，如果超出最大行数请转换为.xlsx格式文件，再进行上传。")]),l("li",[e._v("拆分的Excel数据默认为文件的第一个Sheet，如需拆分其他Sheet，请点击设置按钮，设置需要拆分的Sheet选项。")]),l("li",[e._v("平台处理过程中请勿做其他操作，拆分完成后的文件请到 "),l("router-link",{attrs:{to:{path:"/excel/history"}}},[l("a",{staticClass:"history_a"},[e._v("我的历史")])]),e._v(" 进行下载。 ")],1)])])])])],1)},n=[],r={name:"ExcelSplitTip",emits:["close-tip"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}}},data:function(){return{drawer:!0,drawerAttrs:{arrow:"rtl",modal:!1,closeButton:!0,closeOnModal:!0,closeOnEsc:!0}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{close:function(){this.$emit("close-tip")}}},c=r,d=(l("3918"),l("2877")),u=Object(d["a"])(c,o,n,!1,null,"35ca1e01",null),p=u.exports,h=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{visible:e.show,title:e.dialogAttrs.title,width:e.dialogAttrs.width,fullscreen:e.dialogAttrs.fullScreen,top:e.dialogAttrs.top,modal:e.dialogAttrs.modal,"lock-scroll":e.dialogAttrs.lockScroll,"open-delay":e.dialogAttrs.openDelay,"close-delay":e.dialogAttrs.closeDelay,"close-on-click-modal":e.dialogAttrs.closeOnClickModal,"close-on-press-escape":e.dialogAttrs.closeOnPressEscape,"show-close":e.dialogAttrs.showClose,draggable:e.dialogAttrs.draggable,center:e.dialogAttrs.center},on:{close:function(t){return e.closeDialog()}},scopedSlots:e._u([{key:"footer",fn:function(){return[l("span",{staticClass:"dialog-footer"},[l("el-button",{attrs:{disabled:e.disabled},on:{click:function(t){return e.closeDialog()}}},[e._v("取消")]),l("el-button",{attrs:{disabled:e.disabled,loading:e.loading,type:"primary"},on:{click:function(t){return e.submitSet()}}},[e._v("确定")])],1)]},proxy:!0}])},[l("el-form",{staticStyle:{width:"100%"},attrs:{"label-position":e.labelPosition,"label-width":"auto"}},[l("el-form-item",{attrs:{label:"文件名称"}},[l("el-input",{attrs:{type:"text",placeholder:"请输入文件名称",maxlength:e.inputAttrs.length,clearable:e.inputAttrs.clear,"show-word-limit":e.inputAttrs.limit,disabled:"","prefix-icon":"el-icon-edit"},model:{value:e.tableRow.name,callback:function(t){e.$set(e.tableRow,"name","string"===typeof t?t.trim():t)},expression:"tableRow.name"}})],1),l("el-form-item",{attrs:{label:"选择Sheet"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.selectAttrs.placeholder,disabled:e.disabled,filterable:e.selectAttrs.filterable,multiple:e.selectAttrs.multiple,"multiple-limit":e.selectAttrs.limit,clearable:e.selectAttrs.clearable,"no-data-text":e.selectAttrs.noDataText,"collapse-tags":e.selectAttrs.collapseTags},model:{value:e.tableRow.setSheetIndex,callback:function(t){e.$set(e.tableRow,"setSheetIndex",t)},expression:"tableRow.setSheetIndex"}},e._l(e.tableRow.sheetNames,(function(e,t){return l("el-option",{key:t,attrs:{label:e.value,value:e.key}})})),1)],1)],1)],1)],1)},f=[],g=l("b157"),m=l("61f7"),b={name:"ExcelSplitSet",emits:["close-file-set"],props:{show:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}},tableRow:{type:Object,require:!0,default:function(){return{}}}},data:function(){return{loading:!1,disabled:!1,labelPosition:"left",dialogAttrs:{title:"设置",width:"40%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},inputAttrs:{clear:!0,length:"55",limit:!0},selectAttrs:{multiple:!1,clearable:!0,filterable:!1,collapseTags:!1,limit:0,noDataText:"暂无数据",placeholder:"请选择拆分的Sheet"}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{closeDialog:function(){this.$emit("close-file-set",!1)},submitSet:function(){var e=this;if(!this.tableRow.name)return this.$message({message:"文件名称不允许为空",type:"warning",duration:2e3}),!1;if(this.tableRow.name.length>55)return this.$message({message:"文件名称超出限制",type:"warning",duration:2e3}),!1;if(!Object(m["e"])(this.tableRow.name))return this.$message({message:"文件格式不正确",type:"warning",duration:2e3}),!1;if(!this.tableRow.setSheetIndex)return this.$message({message:"文件Sheet不允许为空",type:"warning",duration:2e3}),!1;this.disabled=!0,this.loading=!0;var t={rtx_id:i["a"].getters.rtx_id,name:this.tableRow.name,set_sheet:[this.tableRow.setSheetIndex],md5:this.tableRow.md5};return new Promise((function(l,s){Object(g["j"])(t).then((function(t){e.disabled=!1,e.loading=!1;var s=t.status_id;t.message;100===s&&(e.$message({message:"文件设置成功",type:"success",duration:2e3}),e.$emit("close-file-set",!0)),l(t)})).catch((function(t){e.disabled=!1,e.loading=!1,s(t)}))}))}}},A=b,x=Object(d["a"])(A,h,f,!1,null,"160055d6",null),_=x.exports,w=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{visible:e.show,title:e.dialogAttrs.title,width:e.dialogAttrs.width,fullscreen:e.dialogAttrs.fullScreen,top:e.dialogAttrs.top,modal:e.dialogAttrs.modal,"lock-scroll":e.dialogAttrs.lockScroll,"open-delay":e.dialogAttrs.openDelay,"close-delay":e.dialogAttrs.closeDelay,"close-on-click-modal":e.dialogAttrs.closeOnClickModal,"close-on-press-escape":e.dialogAttrs.closeOnPressEscape,"show-close":e.dialogAttrs.showClose,draggable:e.dialogAttrs.draggable,center:e.dialogAttrs.center},on:{close:e.handleClose,open:e.handleOpen},scopedSlots:e._u([{key:"footer",fn:function(){return[l("span",{staticClass:"dialog-footer"},[l("el-button",{attrs:{disabled:e.disabled},on:{click:e.handleClose}},[e._v(" 取消 ")]),l("el-button",{attrs:{type:"primary",disabled:e.disabled},on:{click:e.submitSplit}},[e._v(" 确认 ")])],1)]},proxy:!0}])},[l("div",{staticStyle:{"text-align":"center"},attrs:{id:"main-opr-div"}},[l("el-form",{staticStyle:{width:"100%"},attrs:{"label-position":e.labelPosition,"label-width":"auto"}},[l("el-form-item",{attrs:{label:"新文件名称"}},[l("el-input",{attrs:{type:"text",placeholder:"请输入新文件名称，不填写默认为拆分文件名称",maxlength:e.inputAttrs.length,clearable:e.inputAttrs.clear,"show-word-limit":e.inputAttrs.limit,disabled:e.disabled,"prefix-icon":"el-icon-edit"},model:{value:e.name,callback:function(t){e.name="string"===typeof t?t.trim():t},expression:"name"}})],1),l("el-form-item",{attrs:{label:"拆分Sheet"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择拆分的Sheet",disabled:e.disabled,filterable:e.selectAttrs.filterable,multiple:e.selectAttrs.multiple,"multiple-limit":e.selectAttrs.limit,clearable:e.selectAttrs.clearable,"no-data-text":e.selectAttrs.noDataText,"collapse-tags":e.selectAttrs.collapseTags},on:{change:e.changeSheet},model:{value:e.sheetIndex,callback:function(t){e.sheetIndex=t},expression:"sheetIndex"}},e._l(e.sheetNames,(function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-form-item",{attrs:{label:"拆分方式"}},[l("el-tooltip",{attrs:{placement:"top",effect:"light"}},[l("div",{attrs:{slot:"content"},slot:"content"},[e._v("行：按表格Sheet页数据"),l("span",{staticClass:"info_red"},[e._v("行")]),e._v("拆分，一行是一个新的文件或者Sheet页"),l("br"),e._v("列：按表格Sheet页数据"),l("span",{staticClass:"info_red"},[e._v("列")]),e._v("拆分，一列是一个新的文件或者Sheet页")]),l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择拆分方式",disabled:e.disabled,filterable:e.selectAttrs.filterable,multiple:e.selectAttrs.multiple,"multiple-limit":e.selectAttrs.limit,clearable:e.selectAttrs.clearable,"no-data-text":e.selectAttrs.noDataText,"collapse-tags":e.selectAttrs.collapseTags},model:{value:e.splitTypeIndex,callback:function(t){e.splitTypeIndex=t},expression:"splitTypeIndex"}},e._l(e.splitType,(function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),l("el-form-item",{attrs:{label:"存储方式"}},[l("el-tooltip",{attrs:{placement:"top",effect:"light"}},[l("div",{attrs:{slot:"content"},slot:"content"},[e._v("多表一Sheet：生成N个.xlsx文件，每个文件只有一个Sheet页，文件以ZIP压缩格式进行下载"),l("br"),e._v("一表多Sheet：生成一个新的.xlsx文件，一行/列的数据是文件中的Sheet页")]),l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择存储方式",disabled:e.disabled,filterable:e.selectAttrs.filterable,multiple:e.selectAttrs.multiple,"multiple-limit":e.selectAttrs.limit,clearable:e.selectAttrs.clearable,"no-data-text":e.selectAttrs.noDataText,"collapse-tags":e.selectAttrs.collapseTags},model:{value:e.splitStoreIndex,callback:function(t){e.splitStoreIndex=t},expression:"splitStoreIndex"}},e._l(e.excelSplitStore,(function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),l("el-form-item",{attrs:{label:"命名规则"}},[l("el-tooltip",{attrs:{content:"新的文件/Sheet页名称命名规则，选项为Sheet页的Title，最多选4列，建议至少选一个序号自增。",placement:"top",effect:"light"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择命名规则",disabled:e.disabled,filterable:e.mulSelectAttrs.filterable,multiple:e.mulSelectAttrs.multiple,"multiple-limit":e.mulSelectAttrs.limit,clearable:e.mulSelectAttrs.clearable,"no-data-text":e.mulSelectAttrs.noDataText,"collapse-tags":e.mulSelectAttrs.collapseTags},model:{value:e.splitColumnIndexList,callback:function(t){e.splitColumnIndexList=t},expression:"splitColumnIndexList"}},e._l(e.columnNames,(function(t,s){return l("el-option",{key:s,attrs:{label:t.label,value:t.value}},[l("span",{staticStyle:{float:"left"}},[e._v(" "+e._s(t.label)+" ")]),l("span",{staticStyle:{float:"right",color:"#8492a6"}},[e._v(" "+e._s(t.value)+" ")])])})),1)],1)],1),l("el-form-item",{attrs:{label:"文件Title"}},[l("el-tooltip",{attrs:{content:"新文件的Sheet页是否包含表头，默认为是（拆分的Sheet页第一行默认为Title）",placement:"bottom",effect:"light"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择是否包含文件Title",disabled:e.disabled,filterable:e.selectAttrs.filterable,multiple:e.selectAttrs.multiple,"multiple-limit":e.selectAttrs.limit,clearable:e.selectAttrs.clearable,"no-data-text":e.selectAttrs.noDataText,"collapse-tags":e.selectAttrs.collapseTags},model:{value:e.headerIndex,callback:function(t){e.headerIndex=t},expression:"headerIndex"}},e._l(e.boolType,(function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)])],1)},v=[],y={name:"ExcelSplitOpr",emits:["close-file-split"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}},tableRow:{type:Object,require:!0,default:function(){return{}}}},data:function(){return{curMd5:"",dialogAttrs:{title:"拆分",width:"45%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!1,closeOnPressEscape:!1,showClose:!1,draggable:!1,center:!1},inputAttrs:{clear:!0,length:"55",limit:!0},selectAttrs:{multiple:!1,clearable:!0,filterable:!1,collapseTags:!1,limit:0,noDataText:"暂无数据",placeholder:""},mulSelectAttrs:{multiple:!0,clearable:!0,filterable:!0,collapseTags:!1,limit:4,noDataText:"暂无数据",placeholder:""},disabled:!1,labelPosition:"left",name:"",sheetIndex:this.tableRow.setSheetIndex||"0",splitStoreIndex:"",splitTypeIndex:"",splitColumnIndexList:["9999"],headerIndex:"1",sheetNames:this.tableRow.sheetNames||[],columnNames:[],excelSplitStore:[{label:"多表一Sheet",value:"1"},{label:"一表多Sheet",value:"2"}],splitType:[{label:"行",value:"1"},{label:"列",value:"2"}],boolType:[{label:"是",value:"1"},{label:"否",value:"0"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handleClose:function(){this.$emit("close-file-split",!1)},handleOpen:function(){this.curMd5!==this.tableRow.md5&&(this.name="",this.sheetIndex="",this.splitTypeIndex="",this.splitStoreIndex="",this.splitColumnIndexList=["9999"],this.headerIndex="1"),this.initParams()},submitSplit:function(){var e=this;if(!this.sheetIndex)return this.$message({message:"请选择拆分文件Sheet",type:"warning",duration:2e3}),!1;if(!this.splitTypeIndex)return this.$message({message:"请选择拆分方式",type:"warning",duration:2e3}),!1;if(!this.splitStoreIndex)return this.$message({message:"请选择拆分存储方式",type:"warning",duration:2e3}),!1;if(this.splitColumnIndexList.length<1)return this.$message({message:"请选择新文件命名规则",type:"warning",duration:2e3}),!1;if(!this.headerIndex)return this.$message({message:"请选择新文件是否包含Title",type:"warning",duration:2e3}),!1;var t={rtx_id:i["a"].getters.rtx_id,md5:this.tableRow.md5,name:this.name,sheet:this.sheetIndex,store:this.splitStoreIndex,split:this.splitTypeIndex,columns:this.splitColumnIndexList,header:this.headerIndex};this.disabled=!0;var l=this.$loading({target:document.querySelector("#main-opr-div"),body:!1,fullscreen:!0,lock:!0,text:"努力工作中......",spinner:"el-icon-loading",background:"",class:""});return new Promise((function(s,a){Object(g["k"])(t).then((function(t){e.disabled=!1,l.close();var a=t.status_id;100===a&&(e.$message({message:"文件拆分成功",type:"success",duration:2e3}),e.$emit("close-file-split",!0)),s(t)})).catch((function(t){e.disabled=!1,l.close(),a(t)}))}))},initParams:function(){var e=this,t={rtx_id:i["a"].getters.rtx_id,md5:this.tableRow.md5};return this.curMd5=this.tableRow.md5,new Promise((function(l,s){Object(g["l"])(t).then((function(t){var s=t.status_id,a=t.data;100===s?(e.excelSplitStore=a.excel_split_store,e.splitType=a.split_type,e.sheetIndex=a.sheet_index,e.sheetNames=a.sheet_names,e.columnNames=a.column_names,e.boolType=a.bool_type):e.$emit("close-file-split",!1),l(t)})).catch((function(e){s(e)}))}))},changeSheet:function(e){var t=this;if(!e)return!1;var l={rtx_id:i["a"].getters.rtx_id,md5:this.curMd5,sheet:e};return new Promise((function(e,s){Object(g["f"])(l).then((function(l){var s=l.status_id,a=l.data;100===s&&(t.columnNames=a.headers,t.splitColumnIndexList=["9999"]),e(l)})).catch((function(e){s(e)}))}))}}},S=y,D=Object(d["a"])(S,w,v,!1,null,"95e95254",null),T=D.exports,C=l("a2ce"),k=l("b418"),O=l("333d"),$={name:"Split",components:{"excel-split-tip":p,"excel-split-set":_,"excel-split-opr":T,"office-batch-delete":C["a"],"public-upload-file":k["a"],"public-pagination":O["a"]},props:{},data:function(){return{fileType:"2",selBtnText:"全选",btnDisabled:!1,btnBaseAttrs:{size:"medium",type:"primary",plain:!0,round:!1,circle:!1},tipDialogStatus:!1,uploadDialogStatus:!1,tableAttrs:{stripe:!0,border:!0,size:"medium",fit:!0,showHeader:!0,hcr:!0,height:450,maxHeight:450,showSum:!0,sumText:"统计",emptyText:"暂无数据"},tableRowAttrs:{type:"selection",index:1,fixed:!0,resizable:!0,align:"center",headerAlign:"center",sot:!0},pageCur:1,pageSize:15,pageTotal:0,selectAllStatus:!1,selectList:[],tableData:[],oprSelectData:{},setDialogStatus:!1,splitDialogStatus:!1,deleteSource:"excel-source",deleteConfirm:!1}},computed:{},watch:{selectAllStatus:function(e,t){this.selBtnText=e?"取消":"全选"}},created:function(){this.getTableData()},mounted:function(){},methods:{openTip:function(){this.tipDialogStatus=!0},closeTip:function(){this.tipDialogStatus=!1},openFileUpload:function(){this.uploadDialogStatus=!0},closeFileUpload:function(e){this.uploadDialogStatus=!1,e&&this.getTableData()},selectRow:function(e,t){if(t){if(null!==t&&void 0!==t&&t.md5_id&&!this.selectList.includes(t.md5_id))this.selectList.push(t.md5_id);else if(null!==t&&void 0!==t&&t.md5_id&&this.selectList.includes(t.md5_id)){var l=this.selectList.indexOf(t.md5_id);l>-1&&this.selectList.splice(l,1)}else console.log("Add data is not have md5-id");this.selectAllStatus=this.tableData.length===this.selectList.length}},selectChange:function(e){},selectAll:function(e){e&&(this.selectAllStatus=!this.selectAllStatus,this.selectList=this.selectAllStatus?e.map((function(e){return(null===e||void 0===e?void 0:e.md5_id)||""})):[])},manualSelectALL:function(){this.$refs.multipleTableRef.toggleAllSelection()},setTableHeaderStyle:function(){return{background:"#eee",color:"#606266"}},rowHandleEdit:function(e,t){if(!t)return!1;this.oprSelectData={name:t.name,setSheetIndex:t.set_sheet_index[0]||"0",sheetNames:t.sheet_names||[],md5:t.md5_id},this.setDialogStatus=!0},closeFileSet:function(e){this.setDialogStatus=!1,e&&this.getTableData()},rowHandleDelete:function(e,t){var l=this;if(!t||null===t||void 0===t||!t.md5_id)return!1;var s={rtx_id:i["a"].getters.rtx_id,md5:t.md5_id};return this.btnDisabled=!0,new Promise((function(e,t){Object(g["g"])(s).then((function(t){var s=t.status_id;t.message;100===s&&(l.$message({message:"删除成功",type:"success",duration:2e3}),l.getTableData()),l.btnDisabled=!1,e(t)})).catch((function(e){l.btnDisabled=!1,t(e)}))}))},getTableData:function(){var e=this;this.selectAllStatus=!1,this.selectList=[],this.oprSelectData={};var t={rtx_id:i["a"].getters.rtx_id,type:this.fileType,limit:this.pageSize||15,offset:(this.pageCur-1)*this.pageSize||0};return new Promise((function(l,s){Object(g["i"])(t).then((function(t){var s=t.status_id,a=t.data;100!==s&&101!==s||(e.tableData=a.list,e.pageTotal=a.total),l(t)})).catch((function(e){s(e)}))}))},paginSizeChange:function(e){this.pageSize=e,this.getTableData()},paginCurrentChange:function(e){this.pageCur=e,this.getTableData()},openFileSplit:function(e,t){if(!t)return!1;this.oprSelectData={name:t.name,setSheetIndex:t.set_sheet_index[0]||"0",sheetNames:t.sheet_names||[],md5:t.md5_id},this.splitDialogStatus=!0},closeFileSplit:function(e){this.splitDialogStatus=!1,e&&this.getTableData()},closeDeleteDialog:function(e){this.deleteConfirm=!1,e&&this.getTableData()},openDeleteDialog:function(){if(0===this.selectList.length)return this.$message({message:"请选择删除的文件",type:"warning",duration:2e3}),!1;this.deleteConfirm=!0}}},R=$,I=Object(d["a"])(R,s,a,!1,null,"51f5f282",null);t["default"]=I.exports},2983:function(e,t,l){},"333d":function(e,t,l){"use strict";var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"block page-div"},[l("el-pagination",{attrs:{background:e.pagAttrs.background,"current-page":e.page,total:e.total,"page-size":e.size,layout:e.pagAttrs.layout,"page-sizes":e.pagAttrs.pageSizes,"pager-count":e.pagAttrs.pagerCount,small:e.pagAttrs.small,disabled:e.pagAttrs.disabled,"prev-text":e.pagAttrs.prevText,"next-text":e.pagAttrs.nextText,"hide-on-single-page":e.pagAttrs.hosp},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},a=[],i=(l("a9e3"),{name:"Pagination",emits:["pagin-size-change","pagin-current-change"],components:{},props:{page:{type:Number,require:!0,default:1},size:{type:Number,require:!0,default:15},total:{type:Number,require:!0,default:0}},data:function(){return{pagAttrs:{layout:"total, sizes, prev, pager, next, jumper",background:!0,pageSizes:[15,30,50,100],pagerCount:5,hosp:!1,small:!1,prevText:"<",nextText:">",disabled:!1}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handleSizeChange:function(e){this.$emit("pagin-size-change",e)},handleCurrentChange:function(e){this.$emit("pagin-current-change",e)}}}),o=i,n=(l("c43c"),l("2877")),r=Object(n["a"])(o,s,a,!1,null,"bb08e570",null);t["a"]=r.exports},3918:function(e,t,l){"use strict";l("0f36")},a2ce:function(e,t,l){"use strict";var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{visible:e.show,title:e.dialogAttrs.title,width:e.dialogAttrs.width,fullscreen:e.dialogAttrs.fullScreen,top:e.dialogAttrs.top,modal:e.dialogAttrs.modal,"lock-scroll":e.dialogAttrs.lockScroll,"open-delay":e.dialogAttrs.openDelay,"close-delay":e.dialogAttrs.closeDelay,"close-on-click-modal":e.dialogAttrs.closeOnClickModal,"close-on-press-escape":e.dialogAttrs.closeOnPressEscape,"show-close":e.dialogAttrs.showClose,draggable:e.dialogAttrs.draggable,center:e.dialogAttrs.center},on:{close:e.cancelDelete}},[l("span",[e._v("确认删除选择的数据吗？")]),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{disabled:e.btnDisabled},on:{click:e.cancelDelete}},[e._v("取 消")]),l("el-button",{attrs:{disabled:e.btnDisabled,loading:e.btnLoading,type:"primary"},on:{click:e.confirmDelete}},[e._v("确 定")])],1)])},a=[],i=(l("caad"),l("d3b7"),l("4360")),o=l("b157"),n={name:"OfficeBatchDelete",emits:["close-delete-dialog"],components:{},props:{show:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}},list:{type:Array,require:!0,default:function(){}},source:{type:String,require:!0,default:""}},data:function(){return{dialogAttrs:{title:"提示",width:"30%",fullScreen:!1,top:"10%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},btnDisabled:!1,btnLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{cancelDelete:function(){this.$emit("close-delete-dialog",!1)},confirmDelete:function(){if(0===this.list.length)return this.$message({message:"请选择删除的文件",type:"warning",duration:2e3}),!1;if(!this.source)return!1;var e={rtx_id:i["a"].getters.rtx_id,list:this.list};if(this.btnDisabled=!0,this.btnLoading=!0,"excel-source"===this.source)this.deleteExcelSource(e);else if("excel-result"===this.source)this.deleteExcelResult(e);else{if("office-pdf"!==this.source)return!1;this.deleteOfficePDF(e)}},deleteOfficePDF:function(e){var t=this;return new Promise((function(l,s){Object(o["n"])(e).then((function(e){var s=e.status_id;e.message;100===s&&t.$message({message:"删除成功",type:"success",duration:2e3}),t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),l(e)})).catch((function(e){t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),s(e)}))}))},deleteExcelSource:function(e){var t=this;return new Promise((function(l,s){Object(o["h"])(e).then((function(e){var s=e.status_id;e.message;100===s&&t.$message({message:"删除成功",type:"success",duration:2e3}),t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),l(e)})).catch((function(e){t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),s(e)}))}))},deleteExcelResult:function(e){var t=this;return new Promise((function(l,s){Object(o["c"])(e).then((function(e){var s=e.status_id;e.message;100===s&&t.$message({message:"删除成功",type:"success",duration:2e3}),t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),l(e)})).catch((function(e){t.btnDisabled=!1,t.btnLoading=!1,t.$emit("close-delete-dialog",!0),s(e)}))}))}}},r=n,c=l("2877"),d=Object(c["a"])(r,s,a,!1,null,"d6628748",null);t["a"]=d.exports},b157:function(e,t,l){"use strict";l.d(t,"i",(function(){return a})),l.d(t,"j",(function(){return i})),l.d(t,"g",(function(){return o})),l.d(t,"h",(function(){return n})),l.d(t,"a",(function(){return r})),l.d(t,"d",(function(){return c})),l.d(t,"e",(function(){return d})),l.d(t,"b",(function(){return u})),l.d(t,"c",(function(){return p})),l.d(t,"k",(function(){return h})),l.d(t,"l",(function(){return f})),l.d(t,"f",(function(){return g})),l.d(t,"r",(function(){return m})),l.d(t,"o",(function(){return b})),l.d(t,"q",(function(){return A})),l.d(t,"m",(function(){return x})),l.d(t,"n",(function(){return _})),l.d(t,"p",(function(){return w}));var s=l("b775");function a(e){return Object(s["a"])({url:"/office/excel_source_list",method:"post",data:e})}function i(e){return Object(s["a"])({url:"/office/excel_source_update",method:"post",data:e})}function o(e){return Object(s["a"])({url:"/office/excel_source_delete",method:"post",data:e})}function n(e){return Object(s["a"])({url:"/office/excel_source_deletes",method:"post",data:e})}function r(e){return Object(s["a"])({url:"/office/excel_merge",method:"post",data:e})}function c(e){return Object(s["a"])({url:"/office/excel_history_list",method:"post",data:e})}function d(e){return Object(s["a"])({url:"/office/excel_result_update",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/office/excel_result_delete",method:"post",data:e})}function p(e){return Object(s["a"])({url:"/office/excel_result_deletes",method:"post",data:e})}function h(e){return Object(s["a"])({url:"/office/excel_split",method:"post",data:e})}function f(e){return Object(s["a"])({url:"/office/excel_init_split",method:"post",data:e})}function g(e){return Object(s["a"])({url:"/office/excel_sheet_header",method:"post",data:e})}function m(e){return Object(s["a"])({url:"/office/pdf2word_list",method:"post",data:e})}function b(e){return Object(s["a"])({url:"/office/office_pdf_detail",method:"post",data:e})}function A(e){return Object(s["a"])({url:"/office/office_pdf_update",method:"post",data:e})}function x(e){return Object(s["a"])({url:"/office/office_pdf_delete",method:"post",data:e})}function _(e){return Object(s["a"])({url:"/office/office_pdf_deletes",method:"post",data:e})}function w(e){return Object(s["a"])({url:"/office/office_pdf_to",method:"post",data:e})}},b418:function(e,t,l){"use strict";var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{visible:e.dialog,title:e.dialogAttrs.title,width:e.dialogAttrs.width,fullscreen:e.dialogAttrs.fullScreen,top:e.dialogAttrs.top,modal:e.dialogAttrs.modal,"lock-scroll":e.dialogAttrs.lockScroll,"open-delay":e.dialogAttrs.openDelay,"close-delay":e.dialogAttrs.closeDelay,"close-on-click-modal":e.dialogAttrs.closeOnClickModal,"close-on-press-escape":e.dialogAttrs.closeOnPressEscape,"show-close":e.dialogAttrs.showClose,draggable:e.dialogAttrs.draggable,center:e.dialogAttrs.center},on:{close:e.handleClose,open:e.handleOpen},scopedSlots:e._u([{key:"footer",fn:function(){return[l("span",{staticClass:"dialog-footer"},[l("el-button",{directives:[{name:"show",rawName:"v-show",value:e.fileList.length>0,expression:"fileList.length>0"}],attrs:{disabled:e.uploadBtnAttrs.disabled},on:{click:e.handleClear}},[e._v(" 清空 ")]),l("el-button",{attrs:{disabled:e.uploadBtnAttrs.disabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleClose(t)}}},[e._v(" 取消 ")]),l("el-button",{attrs:{type:"primary",disabled:e.uploadBtnAttrs.disabled,loading:e.uploadBtnAttrs.loading},on:{click:e.submitUpload}},[e._v(" 上传 ")])],1)]},proxy:!0}])},[l("div",{staticStyle:{"text-align":"center"}},[l("el-upload",{ref:"uploadRef",attrs:{action:e.getUploadUrl(),accept:e.uploadApis.accept,"file-list":e.fileList,headers:e.uploadApis.headers,method:e.uploadApis.method,data:e.uploadApis.data,name:e.uploadApis.name,"with-credentials":e.uploadApis.cookie,"show-file-list":e.uploadAttrs.showFileList,"list-type":e.uploadAttrs.listType,"auto-upload":e.uploadAttrs.autoUpload,limit:e.uploadAttrs.limit,drag:e.uploadAttrs.drag,multiple:e.uploadAttrs.multiple,disabled:e.uploadAttrs.disabled,"on-success":e.uploadSuccess,"on-remove":e.uploadRemove,"on-change":e.uploadChange,"on-exceed":e.uploadExceed,"before-upload":e.beforeUpload},scopedSlots:e._u([{key:"tip",fn:function(){return[l("div",{staticClass:"el-upload__tip"},[l("p",{domProps:{innerHTML:e._s(e.tips)}}),l("p",[e._v("上传文件数量： "),l("strong",[e._v(e._s(e.fileList.length))]),e._v("（"+e._s(e.uploadAttrs.limit>0?"单次上传限制"+e.uploadAttrs.limit:"无限制")+"）")])])]},proxy:!0}])},[l("i",{staticClass:"el-icon-upload"}),l("div",{staticClass:"el-upload__text"},[e._v("拖拽或者 "),l("em",[e._v("点击上传")])])])],1)])],1)},a=[],i=(l("caad"),l("b0c0"),l("d3b7"),l("159b"),l("b775"));function o(e){return Object(i["a"])({url:"/common/uploads",method:"post",data:e})}var n=l("4360"),r=l("5f87"),c=l("61f7"),d={name:"UploadFile",emits:["close-file-upload"],components:{},props:{dialog:{type:Boolean,require:!0,default:!1,validator:function(e){return[!0,!1].includes(e)}},fileType:{type:String,require:!0,default:"1"}},data:function(){return{tips:this.getUploadTip(),fileList:[],isManualUpload:!0,uploadApis:{url:"http://121.4.56.169:9999/common/upload",accept:this.getUploadAccept(),headers:{"Access-Control-Allow-Origin":"*","X-Token":Object(r["a"])(),"X-Rtx-Id":n["a"].getters.rtx_id},method:"POST",data:{rtx_id:n["a"].getters.rtx_id,file_type:this.fileType},name:"files",cookie:!0},uploadAttrs:{multiple:!0,showFileList:!0,drag:!0,listType:"text",autoUpload:!1,limit:10,disabled:!1},dialogAttrs:{title:"上传",width:"55%",fullScreen:!1,top:"5%",modal:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!1,closeOnPressEscape:!0,showClose:!0,draggable:!1,center:!1},uploadBtnAttrs:{disabled:!1,loading:!1},isUpload:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{getUploadTip:function(){return"1"===this.fileType||"2"===this.fileType?'<strong>提示</strong>：支持<span class="info_red">.xls</span>、<span class="info_red">.xlsx</span>格式文件上传，.xls格式文件条数最大支持为<strong>65535</strong>行，超出请上传.xlxs格式数据。':"3"===this.fileType?".doc,.docx":"4"===this.fileType?".ppt,.pptx":"5"===this.fileType?".txt":"6"===this.fileType?'<strong>提示</strong>：仅支持<span class="info_red">.pdf</span>格式文件上传。':"7"===this.fileType?'<strong>提示</strong>：支持<span class="info_red">.xls</span>、<span class="info_red">.xlsx</span>格式文件上传，.xls格式文件条数最大支持为<strong>65535</strong>行，超出请上传.xlxs格式数据。':""},getUploadAccept:function(){return["1","2","7"].includes(this.fileType)?".xls,.xlsx":"3"===this.fileType?".doc,.docx":"4"===this.fileType?".ppt,.pptx":"5"===this.fileType?".txt":"6"===this.fileType?".pdf":""},handleClose:function(){this.$refs.uploadRef.clearFiles(),this.$emit("close-file-upload",this.isUpload)},handleOpen:function(){this.fileList=[]},handleClear:function(){this.$refs.uploadRef.clearFiles(),this.fileList=[]},cancelUpload:function(){this.$refs.uploadRef.abort()},submitUpload:function(){this.isManualUpload?this.manualUpload():this.$refs.uploadRef.submit()},getUploadUrl:function(){return this.isManualUpload?"":this.uploadApis.url},uploadSuccess:function(e,t){var l=e.status_id,s=e.message;this.$message({message:100===l?null!==t&&void 0!==t&&t.name?t.name+"上传成功":"文件上传成功":s,type:100===l?"success":"warning",duration:2e3})},uploadExceed:function(e,t){this.$message({message:"文件个数超过上传限制",type:"warning",duration:2e3})},uploadRemove:function(e,t){this.fileList=t,this.$message({message:null!==e&&void 0!==e&&e.name?e.name+"移除列表成功":"文件移除列表成功",type:"success",duration:2e3})},uploadChange:function(e,t){this.fileList=t},beforeUpload:function(e){return null===e||void 0===e||!e.name||Object(c["e"])(e.name)},manualUpload:function(){var e=this;if(this.fileList.length<1)return this.$message({message:"请选择上传文件",type:"warning",duration:2e3}),!1;if(this.uploadAttrs.limit>0&&this.fileList.length>this.uploadAttrs.limit)return this.$message({message:"文件个数超过上传限制",type:"warning",duration:2e3}),!1;this.isUpload=!0,this.uploadAttrs.disabled=!0,this.uploadBtnAttrs.disabled=!0,this.uploadBtnAttrs.loading=!0;var t=new FormData;return t.append("rtx_id",this.$store.getters.rtx_id),t.append("file_type",this.fileType),this.fileList.forEach((function(e){t.append(e.name,e.raw)})),new Promise((function(l,s){o(t).then((function(t){e.uploadAttrs.disabled=!1,e.uploadBtnAttrs.disabled=!1,e.uploadBtnAttrs.loading=!1;var s=t.status_id;t.message;100===s&&(e.$message({message:"文件上传成功",type:"success",duration:2e3}),e.handleClear()),l(t)})).catch((function(t){e.uploadAttrs.disabled=!1,e.uploadBtnAttrs.disabled=!1,e.uploadBtnAttrs.loading=!1,e.$message({message:"服务端发异常，请稍后尝试",type:"warning",duration:2e3}),s(t)}))}))}}},u=d,p=l("2877"),h=Object(p["a"])(u,s,a,!1,null,"d4ee283c",null);t["a"]=h.exports},c43c:function(e,t,l){"use strict";l("2983")}}]);