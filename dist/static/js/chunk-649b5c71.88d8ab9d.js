(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-649b5c71"],{"133c":function(e,t,i){"use strict";i("7c25")},"16a0":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[e.user?i("div",{staticStyle:{width:"100%"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8,xs:24}},[i("user-card",{attrs:{user:e.user}})],1),i("el-col",{attrs:{span:16,xs:24}},[i("el-card",[i("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("el-tab-pane",{attrs:{label:"账户信息",name:"account"}},[i("account",{attrs:{user:e.user,rtx:e.rtx}})],1),i("el-tab-pane",{attrs:{label:"操作日志",name:"timeline"}},[i("time-line")],1)],1)],1)],1)],1)],1):e._e()])},s=[],r=i("b192"),o=i("2f62"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticStyle:{"margin-bottom":"20px"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("strong",[e._v("About me")])]),i("div",{staticClass:"user-profile"},[i("div",{staticClass:"box-center"},[i("pan-thumb",{attrs:{image:e.user.avatar,height:e.image.height,width:e.image.width,hoverable:!1}},[i("div",{staticStyle:{"margin-top":"15px"}},[e._v("Hello")]),i("div",{staticClass:"user-name text-center",staticStyle:{"margin-top":"20px",color:"red"}},[e._v(e._s(e.user.rtx_id))])])],1),i("div",{staticClass:"box-center"},[i("div",{staticClass:"user-name text-center"},[e._v(e._s(e.user.name))])]),i("div",{staticClass:"box-center"},[i("avatar",{attrs:{avatar:e.user.avatar},on:{"update-avatar":e.updateAvatar}})],1)]),i("div",{staticClass:"user-bio"},[i("div",{staticClass:"user-education user-bio-section"},[i("div",{staticClass:"user-bio-section-header"},[i("svg-icon",{attrs:{"icon-class":"education"}}),i("span",[e._v("自我介绍")])],1),i("div",{staticClass:"user-bio-section-body"},[i("div",{staticClass:"text-muted"},[i("div",{staticClass:"user-introduction text-muted"},[e._v(e._s(e.user.introduction))])])])]),i("div",{staticClass:"user-skills user-bio-section"},[i("div",{staticClass:"user-bio-section-header"},[i("svg-icon",{attrs:{"icon-class":"skill"}}),i("span",[e._v("IT技能")])],1),i("div",{staticClass:"user-bio-section-body"},[i("div",{staticClass:"progress-item"},[i("span",[e._v("Vue")]),i("el-progress",{attrs:{percentage:40}})],1),i("div",{staticClass:"progress-item"},[i("span",[e._v("JavaScript")]),i("el-progress",{attrs:{percentage:30}})],1),i("div",{staticClass:"progress-item"},[i("span",[e._v("Python")]),i("el-progress",{attrs:{percentage:85}})],1),i("div",{staticClass:"progress-item"},[i("span",[e._v("摸鱼")]),i("el-progress",{attrs:{percentage:100,status:"success"}})],1)])])])])},l=[],c=i("3cbc"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-button",{staticClass:"pan-btn yellow-btn avatar-btn",on:{click:e.openDialog}},[i("i",{staticClass:"el-icon-upload"}),e._v(" 上传头像 ")]),i("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.showDia,expression:"showDia"}],key:e.imageIndex,attrs:{width:e.width,height:e.height,url:e.uploadUrl,"no-rotate":e.rotate,"no-circle":e.circle,"no-square":e.square,"max-size":e.maxSize,params:e.params,"lang-type":"zh"},on:{close:e.closeDialog,"crop-upload-success":e.uploadSuccess}})],1)},d=[],h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"vue-image-crop-upload"},[i("div",{staticClass:"vicp-wrap"},[i("div",{staticClass:"vicp-close",on:{click:e.off}},[i("i",{staticClass:"vicp-icon4"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[i("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[i("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[i("i",{staticClass:"vicp-icon1-arrow"}),i("i",{staticClass:"vicp-icon1-body"}),i("i",{staticClass:"vicp-icon1-bottom"})]),i("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),1==e.step?i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}}):e._e()]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),2==e.step?i("div",{staticClass:"vicp-step2"},[i("div",{staticClass:"vicp-crop"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[i("div",{staticClass:"vicp-img-container"},[i("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,touchstart:e.imgStartMove,touchmove:e.imgMove,touchend:e.createImg,touchcancel:e.createImg,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),i("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),i("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),i("div",{staticClass:"vicp-range"},[i("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{input:e.zoomChange}}),i("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),i("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})]),e.noRotate?e._e():i("div",{staticClass:"vicp-rotate"},[i("i",{on:{mousedown:e.startRotateLeft,mouseout:e.endRotate,mouseup:e.endRotate}},[e._v("↺")]),i("i",{on:{mousedown:e.startRotateRight,mouseout:e.endRotate,mouseup:e.endRotate}},[e._v("↻")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[i("div",{staticClass:"vicp-preview"},[e.noSquare?e._e():i("div",{staticClass:"vicp-preview-item"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),i("span",[e._v(e._s(e.lang.preview))])]),e.noCircle?e._e():i("div",{staticClass:"vicp-preview-item vicp-preview-item-circle"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),i("span",[e._v(e._s(e.lang.preview))])])])])]),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(t){return e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),i("a",{staticClass:"vicp-operate-btn",on:{click:e.prepareUpload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),3==e.step?i("div",{staticClass:"vicp-step3"},[i("div",{staticClass:"vicp-upload"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),i("div",{staticClass:"vicp-progress-wrap"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[i("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+" ")])]),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(t){return e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),i("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},p=[],m=i("90a6"),g=(i("a9e3"),i("d3b7"),i("159b"),i("b64b"),i("b775")),f={zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},"zh-tw":{hint:"點擊，或拖動圖片至此處",loading:"正在上傳……",noSupported:"瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",success:"上傳成功",fail:"圖片上傳失敗",preview:"頭像預覽",btn:{off:"取消",close:"關閉",back:"上一步",save:"保存"},error:{onlyImg:"僅限圖片格式",outOfSize:"單文件大小不能超過 ",lowestPx:"圖片最低像素為（寬*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}},ro:{hint:"Atinge sau trage fișierul aici",loading:"Se încarcă",noSupported:"Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",success:"S-a încărcat cu succes",fail:"A apărut o problemă la încărcare",preview:"Previzualizează",btn:{off:"Anulează",close:"Închide",back:"Înapoi",save:"Salvează"},error:{onlyImg:"Doar imagini",outOfSize:"Imaginea depășește limita de: ",loewstPx:"Imaginea este prea mică; Minim: "}},ru:{hint:"Нажмите, или перетащите файл в это окно",loading:"Загружаю……",noSupported:"Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",success:"Загрузка выполнена успешно",fail:"Ошибка загрузки",preview:"Предпросмотр",btn:{off:"Отменить",close:"Закрыть",back:"Назад",save:"Сохранить"},error:{onlyImg:"Только изображения",outOfSize:"Изображение превышает предельный размер: ",lowestPx:"Минимальный размер изображения: "}},"pt-br":{hint:"Clique ou arraste o arquivo aqui para carregar",loading:"Carregando…",noSupported:"Browser não suportado, use o IE10+ ou outro browser",success:"Sucesso ao carregar imagem",fail:"Falha ao carregar imagem",preview:"Pré-visualizar",btn:{off:"Cancelar",close:"Fechar",back:"Voltar",save:"Salvar"},error:{onlyImg:"Apenas imagens",outOfSize:"A imagem excede o limite de tamanho: ",lowestPx:"O tamanho da imagem é muito pequeno. Tamanho mínimo: "}},fr:{hint:"Cliquez ou glissez le fichier ici.",loading:"Téléchargement…",noSupported:"Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",success:"Téléchargement réussit",fail:"Téléchargement echoué",preview:"Aperçu",btn:{off:"Annuler",close:"Fermer",back:"Retour",save:"Enregistrer"},error:{onlyImg:"Image uniquement",outOfSize:"L'image sélectionnée dépasse la taille maximum: ",lowestPx:"L'image sélectionnée est trop petite. Dimensions attendues: "}},nl:{hint:"Klik hier of sleep een afbeelding in dit vlak",loading:"Uploaden…",noSupported:"Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",success:"Upload succesvol",fail:"Upload mislukt",preview:"Voorbeeld",btn:{off:"Annuleren",close:"Sluiten",back:"Terug",save:"Opslaan"},error:{onlyImg:"Alleen afbeeldingen",outOfSize:"De afbeelding is groter dan: ",lowestPx:"De afbeelding is te klein! Minimale afmetingen: "}},tr:{hint:"Tıkla veya yüklemek istediğini buraya sürükle",loading:"Yükleniyor…",noSupported:"Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",success:"Yükleme başarılı",fail:"Yüklemede hata oluştu",preview:"Önizle",btn:{off:"İptal",close:"Kapat",back:"Geri",save:"Kaydet"},error:{onlyImg:"Sadece resim",outOfSize:"Resim yükleme limitini aşıyor: ",lowestPx:"Resmin boyutu çok küçük. En az olması gereken: "}},"es-MX":{hint:"Selecciona o arrastra una imagen",loading:"Subiendo...",noSupported:"Tu navegador no es soportado, porfavor usa IE10+ u otros navegadores mas recientes",success:"Subido exitosamente",fail:"Sucedió un error",preview:"Vista previa",btn:{off:"Cancelar",close:"Cerrar",back:"Atras",save:"Guardar"},error:{onlyImg:"Unicamente imagenes",outOfSize:"La imagen excede el tamaño maximo:",lowestPx:"La imagen es demasiado pequeño. Se espera por lo menos:"}},de:{hint:"Klick hier oder zieh eine Datei hier rein zum Hochladen",loading:"Hochladen…",noSupported:"Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",success:"Upload erfolgreich",fail:"Upload fehlgeschlagen",preview:"Vorschau",btn:{off:"Abbrechen",close:"Schließen",back:"Zurück",save:"Speichern"},error:{onlyImg:"Nur Bilder",outOfSize:"Das Bild ist zu groß: ",lowestPx:"Das Bild ist zu klein. Mindestens: "}},ja:{hint:"クリック・ドラッグしてファイルをアップロード",loading:"アップロード中...",noSupported:"このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",success:"アップロード成功",fail:"アップロード失敗",preview:"プレビュー",btn:{off:"キャンセル",close:"閉じる",back:"戻る",save:"保存"},error:{onlyImg:"画像のみ",outOfSize:"画像サイズが上限を超えています。上限: ",lowestPx:"画像が小さすぎます。最小サイズ: "}}},v={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},w=(i("ac1f"),i("1276"),i("ace4"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),function(e,t){e=e.split(",")[1],e=window.atob(e);for(var i=new Uint8Array(e.length),a=0;a<e.length;a++)i[a]=e.charCodeAt(a);return new Blob([i],{type:t})}),b=function(e,t){var i=Object.assign({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},t),a=i.ele;if(a){var s=a.getBoundingClientRect(),r=a.querySelector(".e-ripple");switch(r?r.className="e-ripple":(r=document.createElement("span"),r.className="e-ripple",r.style.height=r.style.width=Math.max(s.width,s.height)+"px",a.appendChild(r)),i.type){case"center":r.style.top=s.height/2-r.offsetHeight/2+"px",r.style.left=s.width/2-r.offsetWidth/2+"px";break;default:r.style.top=e.pageY-s.top-r.offsetHeight/2-document.body.scrollTop+"px",r.style.left=e.pageX-s.left-r.offsetWidth/2-document.body.scrollLeft+"px"}return r.style.backgroundColor=i.bgc,r.className="e-ripple z-active",!1}},x={props:{field:{type:String,default:"avatar"},ki:{type:Number,default:0},value:{type:Boolean,default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noRotate:{type:Boolean,default:!0},noCircle:{type:Boolean,default:!1},noSquare:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"},withCredentials:{type:Boolean,default:!1}},data:function(){var e=this.imgFormat,t=this.langType,i=this.langExt,a=this.width,s=this.height,r=!0,o=["jpg","png"],n=-1===o.indexOf(e)?"jpg":e,l=f[t]?f[t]:f["en"],c=v[n];return this.imgFormat=n,i&&Object.assign(l,i),"function"!==typeof FormData&&(r=!1),{mime:c,lang:l,isSupported:r,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:a/s,sourceImg:null,sourceImgUrl:"",createImgUrl:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:184},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,rotateLeft:!1,rotateRight:!1,degree:0,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var e=this.progress;return{width:e+"%"}},sourceImgStyle:function(){var e=this.scale,t=this.sourceImgMasking,i=e.y+t.y+"px",a=e.x+t.x+"px";return{top:i,left:a,width:e.width+"px",height:e.height+"px",transform:"rotate("+e.degree+"deg)","-ms-transform":"rotate("+e.degree+"deg)","-moz-transform":"rotate("+e.degree+"deg)","-webkit-transform":"rotate("+e.degree+"deg)","-o-transform":"rotate("+e.degree+"deg)"}},sourceImgMasking:function(){var e=this.width,t=this.height,i=this.ratio,a=this.sourceImgContainer,s=a,r=s.width/s.height,o=0,n=0,l=s.width,c=s.height,u=1;return i<r&&(u=s.height/t,l=s.height*i,o=(s.width-l)/2),i>r&&(u=s.width/e,c=s.width/i,n=(s.height-c)/2),{scale:u,x:o,y:n,width:l,height:c}},sourceImgShadeStyle:function(){var e=this.sourceImgMasking,t=this.sourceImgContainer,i=t,a=e,s=a.width===i.width?a.width:(i.width-a.width)/2,r=a.height===i.height?a.height:(i.height-a.height)/2;return{width:s+"px",height:r+"px"}},previewStyle:function(){var e=this.ratio,t=this.previewContainer,i=t,a=i.width,s=i.height,r=a/s;return e<r&&(a=i.height*e),e>r&&(s=i.width/e),{width:a+"px",height:s+"px"}}},watch:{value:function(e){e&&1!==this.loading&&this.reset()}},created:function(){document.addEventListener("keyup",this.closeHandler)},destroyed:function(){document.removeEventListener("keyup",this.closeHandler)},methods:{ripple:function(e){b(e)},off:function(){var e=this;setTimeout((function(){e.$emit("input",!1),e.$emit("close"),3===e.step&&2===e.loading&&e.setStep(1)}),200)},setStep:function(e){var t=this;setTimeout((function(){t.step=e}),200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var t=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(t[0])&&this.setSourceImg(t[0])}},checkFile:function(e){var t=this.lang,i=this.maxSize;return-1===e.type.indexOf("image")?(this.hasError=!0,this.errorMsg=t.error.onlyImg,!1):!(e.size/1024>i)||(this.hasError=!0,this.errorMsg=t.error.outOfSize+i+"kb",!1)},reset:function(){this.loading=0,this.hasError=!1,this.errorMsg="",this.progress=0},setSourceImg:function(e){var t=this,i=new FileReader;i.onload=function(e){t.sourceImgUrl=i.result,t.startCrop()},i.readAsDataURL(e)},startCrop:function(){var e=this,t=this.width,i=this.height,a=this.ratio,s=this.scale,r=this.sourceImgUrl,o=this.sourceImgMasking,n=this.lang,l=o,c=new Image;c.src=r,c.onload=function(){var r=c.naturalWidth,o=c.naturalHeight,u=r/o,d=l.width,h=l.height,p=0,m=0;if(r<t||o<i)return e.hasError=!0,e.errorMsg=n.error.lowestPx+t+"*"+i,!1;a>u&&(h=d/u,m=(l.height-h)/2),a<u&&(d=h*u,p=(l.width-d)/2),s.range=0,s.x=p,s.y=m,s.width=d,s.height=h,s.degree=0,s.minWidth=d,s.minHeight=h,s.maxWidth=r*l.scale,s.maxHeight=o*l.scale,s.naturalWidth=r,s.naturalHeight=o,e.sourceImg=c,e.createImg(),e.setStep(2)}},imgStartMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,a=this.scale,s=i;s.mX=t.screenX,s.mY=t.screenY,s.x=a.x,s.y=a.y,s.on=!0},imgMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,a=i.on,s=i.mX,r=i.mY,o=i.x,n=i.y,l=this.scale,c=this.sourceImgMasking,u=c,d=t.screenX,h=t.screenY,p=d-s,m=h-r,g=o+p,f=n+m;a&&(g>0&&(g=0),f>0&&(f=0),g<u.width-l.width&&(g=u.width-l.width),f<u.height-l.height&&(f=u.height-l.height),l.x=g,l.y=f)},startRotateRight:function(e){var t=this,i=this.scale;i.rotateRight=!0;var a=function e(){if(i.rotateRight){var a=++i.degree;t.createImg(a),setTimeout((function(){e()}),60)}};a()},startRotateLeft:function(e){var t=this,i=this.scale;i.rotateLeft=!0;var a=function e(){if(i.rotateLeft){var a=--i.degree;t.createImg(a),setTimeout((function(){e()}),60)}};a()},endRotate:function(){var e=this.scale;e.rotateLeft=!1,e.rotateRight=!1},startZoomAdd:function(e){var t=this,i=this.scale;i.zoomAddOn=!0;var a=function e(){if(i.zoomAddOn){var a=i.range>=100?100:++i.range;t.zoomImg(a),setTimeout((function(){e()}),60)}};a()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){var t=this,i=this.scale;i.zoomSubOn=!0;var a=function e(){if(i.zoomSubOn){var a=i.range<=0?0:--i.range;t.zoomImg(a),setTimeout((function(){e()}),60)}};a()},endZoomSub:function(e){var t=this.scale;t.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var t=this,i=this.sourceImgMasking,a=this.scale,s=a.maxWidth,r=a.maxHeight,o=a.minWidth,n=a.minHeight,l=a.width,c=a.height,u=a.x,d=a.y,h=i,p=h.width,m=h.height,g=o+(s-o)*e/100,f=n+(r-n)*e/100,v=p/2-g/l*(p/2-u),w=m/2-f/c*(m/2-d);v>0&&(v=0),w>0&&(w=0),v<p-g&&(v=p-g),w<m-f&&(w=m-f),a.x=v,a.y=w,a.width=g,a.height=f,a.range=e,setTimeout((function(){a.range===e&&t.createImg()}),300)},createImg:function(e){var t=this.mime,i=this.sourceImg,a=this.scale,s=a.x,r=a.y,o=a.width,n=a.height,l=a.degree,c=this.sourceImgMasking.scale,u=this.$refs.canvas,d=u.getContext("2d");e&&(this.sourceImgMouseDown.on=!1),u.width=this.width,u.height=this.height,d.clearRect(0,0,this.width,this.height),d.fillStyle="#fff",d.fillRect(0,0,this.width,this.height),d.translate(.5*this.width,.5*this.height),d.rotate(Math.PI*l/180),d.translate(.5*-this.width,.5*-this.height),d.drawImage(i,s/c,r/c,o/c,n/c),this.createImgUrl=u.toDataURL(t)},prepareUpload:function(){var e=this.url,t=this.createImgUrl,i=this.field,a=this.ki;this.$emit("crop-success",t,i,a),"string"===typeof e&&e?this.upload():this.off()},upload:function(){var e=this,t=this.lang,i=this.imgFormat,a=this.mime,s=this.url,r=this.params,o=this.field,n=this.ki,l=this.createImgUrl,c=new FormData;c.append(o,w(l,a),o+"."+i),"object"===Object(m["a"])(r)&&r&&Object.keys(r).forEach((function(e){c.append(e,r[e])})),this.reset(),this.loading=1,this.setStep(3),Object(g["a"])({url:s,method:"post",data:c}).then((function(t){e.loading=2,e.$emit("crop-upload-success",t.data)})).catch((function(i){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=t.fail,e.$emit("crop-upload-fail",i,o,n))}))},closeHandler:function(e){!this.value||"Escape"!==e.key&&27!==e.keyCode||this.off()}}},y=x,C=(i("de53"),i("2877")),S=Object(C["a"])(y,h,p,!1,null,null,null),k=S.exports,_={name:"Avatar",components:{"image-cropper":k},emits:["update-avatar"],props:{avatar:{type:String,require:!0,default:""}},data:function(){return{image:this.avatar,showDia:!1,imageIndex:0,width:300,height:300,uploadUrl:"",rotate:!1,circle:!1,square:!1,maxSize:3072,params:{rtx_id:this.$store.getters.rtx_id}}},created:function(){this.uploadUrl="/user/avatar"},methods:{openDialog:function(){this.showDia=!0},closeDialog:function(){this.showDia=!1},uploadSuccess:function(e){var t=e.avatar;this.showDia=!1,this.imageIndex=this.imageIndex+1,this.image=t,this.$emit("update-avatar",t),this.$store.commit("user/SET_AVATAR",t),this.$message({message:"头像更新成功",type:"success",duration:2e3})}}},I=_,z=(i("d974"),Object(C["a"])(I,u,d,!1,null,"2e9d3c77",null)),A=z.exports,P={name:"UserCard",components:{"pan-thumb":c["a"],avatar:A},props:{user:{type:Object,default:function(){return{name:"",email:"",phone:"",introduction:"",avatar:""}}}},data:function(){return{image:{height:"150px",width:"150px"}}},methods:{updateAvatar:function(e){this.user.avatar=e}}},T=P,O=(i("741a"),Object(C["a"])(T,n,l,!1,null,"435c3616",null)),D=O.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"block"},[i("el-backtop",{attrs:{bottom:80}}),i("el-timeline",e._l(e.timeline,(function(t,a){return i("el-timeline-item",{key:a,attrs:{timestamp:t.timestamp,type:t.type,color:e.timeLineAttrs.color,size:e.timeLineAttrs.size,hollow:e.timeLineAttrs.hollow,placement:e.timeLineAttrs.placement}},[i("el-card",[i("h4",[e._v(e._s(t.title))]),i("p",[e._v(e._s(t.content))])])],1)})),1),i("div",{staticClass:"block page-div"},[i("el-pagination",{attrs:{background:e.pagAttrs.background,"current-page":e.pageCur,total:e.pageTotal,"page-size":e.pageSize,layout:e.pagAttrs.layout,"page-sizes":e.pagAttrs.pageSizes,"pager-count":e.pagAttrs.pagerCount,small:e.pagAttrs.small,disabled:e.pagAttrs.disabled,"prev-text":e.pagAttrs.prevText,"next-text":e.pagAttrs.nextText,"hide-on-single-page":e.pagAttrs.hosp},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},E=[],j=i("c24f"),R=i("4360"),U={name:"Timeline",props:{},data:function(){return{timeLineAttrs:{icon:"",type:"primary",color:"hsl",size:"large",hollow:!1,center:!1,placement:"top"},backTopText:"Top",pagAttrs:{layout:"total, sizes, prev, pager, next, jumper",background:!1,pageSizes:[10,20,30,50,100],pagerCount:5,hosp:!1,small:!1,prevText:"<<",nextText:">>",disabled:!1},pageCur:1,pageSize:10,pageTotal:0,timeline:[]}},created:function(){this.getTimeLineList()},methods:{getTimeLineList:function(){var e=this;if(!R["a"].getters.rtx_id)return!1;var t={rtx_id:R["a"].getters.rtx_id,limit:this.pageSize||10,offset:(this.pageCur-1)*this.pageSize||0};return new Promise((function(i,a){Object(j["c"])(t).then((function(t){var a=t.status_id,s=t.data;100===a?(e.timeline=s.timeline,e.pageTotal=s.total):101===a&&(e.timeline=[],e.pageTotal=0),i(e.timeline)})).catch((function(e){a(e)}))}))},handleSizeChange:function(e){this.pageSize=e,this.getTimeLineList()},handleCurrentChange:function(e){this.pageCur=e,this.getTimeLineList()}}},L=U,M=(i("eaa9"),Object(C["a"])(L,$,E,!1,null,"5a6533be",null)),N=M.exports,H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",[i("el-form-item",[i("el-switch",{staticStyle:{display:"block"},attrs:{disabled:e.switchAttrs.disabled,width:e.switchAttrs.width,"active-text":e.switchAttrs.activeText,"inactive-text":e.switchAttrs.inactiveText,"active-color":e.switchAttrs.activeColor,"inactive-color":e.switchAttrs.inactiveColor,"active-value":e.switchAttrs.activeValue,"inactive-value":e.switchAttrs.inactiveValue},model:{value:e.edit,callback:function(t){e.edit=t},expression:"edit"}})],1),i("el-form-item",{attrs:{label:"昵称"}},[i("el-input",{attrs:{type:"text",placeholder:"请输入昵称",maxlength:"30",clearable:e.inputAttrs.clear,"show-word-limit":e.inputAttrs.limit,size:e.inputAttrs.size,"prefix-icon":e.edit?"el-icon-edit":"",disabled:!e.edit},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name","string"===typeof t?t.trim():t)},expression:"user.name"}})],1),e.edit?i("el-form-item",{attrs:{label:"密码"}},[i("br"),i("password")],1):e._e(),i("el-form-item",{attrs:{label:"邮箱"}},[i("el-input",{attrs:{type:"text",placeholder:"请输入邮箱",maxlength:"35",clearable:e.inputAttrs.clear,"show-word-limit":e.inputAttrs.limit,size:e.inputAttrs.size,"prefix-icon":e.edit?"el-icon-edit":"",disabled:!e.edit},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email","string"===typeof t?t.trim():t)},expression:"user.email"}})],1),i("el-form-item",{attrs:{label:"电话"}},[i("el-input",{attrs:{type:"text",placeholder:"电话",maxlength:"11",clearable:e.inputAttrs.clear,"show-word-limit":e.inputAttrs.limit,size:e.inputAttrs.size,"prefix-icon":e.edit?"el-icon-edit":"",disabled:!e.edit},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone","string"===typeof t?t.trim():t)},expression:"user.phone"}})],1),i("el-form-item",{attrs:{label:"自我介绍"}},[i("el-input",{attrs:{type:"textarea",placeholder:"请输入自我介绍",rows:e.textAreaAttrs.rows,autosize:{minRows:4,maxRows:6},maxlength:e.textAreaAttrs.length,clearable:e.textAreaAttrs.clear,"show-word-limit":e.textAreaAttrs.limit,"prefix-icon":e.edit?"el-icon-edit":"",disabled:!e.edit},model:{value:e.user.introduction,callback:function(t){e.$set(e.user,"introduction",t)},expression:"user.introduction"}})],1),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}]},[i("el-button",{attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.submitUserForm()}}},[e._v("更新")])],1)],1)},B=[],q=(i("b0c0"),i("61f7")),F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-button",{attrs:{type:"success"},on:{click:function(t){return e.openDialog()}}},[i("svg-icon",{attrs:{"icon-class":"password"}}),e._v(" 更改密码 ")],1),i("el-dialog",{attrs:{visible:e.status,width:"40%",title:"密码设置（6-25位英文、数字、特殊字符任意组合）"},on:{"update:visible":function(t){e.status=t},close:function(t){return e.closeDialog()},open:function(t){return e.initDialog()}},scopedSlots:e._u([{key:"footer",fn:function(){return[i("span",{staticClass:"dialog-footer"},[i("el-button",{on:{click:function(t){return e.closeDialog()}}},[e._v("取消")]),i("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:function(t){return e.submitPassword()}}},[e._v("确定")])],1)]},proxy:!0}])},[i("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"auto"}},[i("el-form-item",{attrs:{label:"原密码"}},[i("el-input",{attrs:{type:"password",placeholder:"请输入老密码",maxlength:"25","show-password":""},model:{value:e.oldPassword,callback:function(t){e.oldPassword="string"===typeof t?t.trim():t},expression:"oldPassword"}})],1),i("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"新密码"}},[i("el-input",{attrs:{type:"password",placeholder:"请输入新密码",maxlength:"25","show-password":""},model:{value:e.newPassword,callback:function(t){e.newPassword="string"===typeof t?t.trim():t},expression:"newPassword"}})],1),i("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"确认密码"}},[i("el-input",{attrs:{type:"password",placeholder:"再次输入确认密码",maxlength:"25","show-password":""},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword="string"===typeof t?t.trim():t},expression:"confirmPassword"}})],1),i("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"备注"}},[i("div",{staticClass:"info_red"},[e._v("密码重置成功后，会自动退出，重新登录请使用新密码！")])])],1)],1)],1)},V=[],W=i("7580"),Z=(i("96cf"),{name:"Password",data:function(){return{loading:!1,status:!1,oldPassword:"",newPassword:"",confirmPassword:"",labelPosition:"left"}},computed:Object(r["a"])({},Object(o["b"])(["rtx_id"])),methods:{initDialog:function(){this.oldPassword="",this.newPassword="",this.confirmPassword=""},openDialog:function(){this.status=!0},closeDialog:function(){this.status=!1,this.oldPassword="",this.newPassword="",this.confirmPassword=""},checkPassword:function(){return this.oldPassword?this.newPassword?this.confirmPassword?this.newPassword.length<6||this.confirmPassword.length<6?(this.$message({message:"用户密码最小长度为6",type:"warning",duration:2500}),!1):this.newPassword.length>35||this.confirmPassword.length>35?(this.$message({message:"用户密码最大长度为25",type:"warning",duration:2500}),!1):this.newPassword===this.confirmPassword||(this.$message({message:"两次输入的密码不一致，请重新输入",type:"warning",duration:2500}),!1):(this.$message({message:"请再次输入确认密码",type:"warning",duration:2500}),!1):(this.$message({message:"请输入新密码",type:"warning",duration:2500}),!1):(this.$message({message:"请输入老密码",type:"warning",duration:2500}),!1)},logout:function(){var e=this;return Object(W["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/logout");case 2:e.$router.push("/login?redirect=".concat(e.$route.fullPath));case 3:case"end":return t.stop()}}),t)})))()},submitPassword:function(){var e=this;if(!this.checkPassword())return!1;var t={rtx_id:this.rtx_id,old_password:this.oldPassword,new_password:this.newPassword,con_password:this.confirmPassword};return this.loading=!0,new Promise((function(i,a){Object(j["g"])(t).then((function(t){e.loading=!1;var s=t.status_id;t.message;100===s?(e.$message({message:"更改密码成功",type:"success",duration:2500}),setTimeout((function(){e.closeDialog(),e.logout()}),2500),i(t)):a(t)})).catch((function(t){e.loading=!1,a(t)}))}))}}}),Y=Z,X=Object(C["a"])(Y,F,V,!1,null,null,null),G=X.exports,J={name:"Account",emits:[],components:{password:G},props:{user:{type:Object,default:function(){return{name:"",email:"",phone:"",introduction:""}}},rtx:{type:String,default:""}},data:function(){return{edit:!1,loading:!1,inputAttrs:{size:"medium",clear:!0,length:"25",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},textAreaAttrs:{rows:4,autoSize:!1,clear:!0,length:"255",limit:!0,prefixIcon:"el-icon-edit",suffixIcon:""},switchAttrs:{disabled:!1,width:35,activeText:"编辑模式",inactiveText:"视图模式",activeValue:!0,inactiveValue:!1,activeColor:"#ff4949",inactiveColor:"#13ce66"}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{checkRtx:function(e){return!!e||(this.$message({message:"缺少rtx-id参数，请刷新页面",type:"error",duration:2500}),!1)},checkName:function(e){return e?!(e.length>30)||(this.$message({message:"用户昵称最大长度为30",type:"warning",duration:2500}),!1):(this.$message({message:"请输入用户昵称",type:"warning",duration:2500}),!1)},checkEmail:function(e){return e?Object(q["d"])(e)?!(e.length>35)||(this.$message({message:"用户邮箱最大长度为35",type:"warning",duration:2500}),!1):(this.$message({message:"请输入正确邮箱",type:"warning",duration:2500}),!1):(this.$message({message:"请输入用户邮箱",type:"warning",duration:2500}),!1)},checkPhone:function(e){return e?Object(q["f"])(e)?!(e.length>11)||(this.$message({message:"用户电话最大长度为11",type:"warning",duration:2500}),!1):(this.$message({message:"请输入正确电话",type:"warning",duration:2500}),!1):(this.$message({message:"请输入用户电话",type:"warning",duration:2500}),!1)},submitUserForm:function(){var e=this;if(this.loading=!0,!this.checkRtx(this.rtx)||!this.checkName(this.user.name)||!this.checkEmail(this.user.email)||!this.checkPhone(this.user.phone))return this.loading=!1,!1;var t={rtx_id:this.rtx,name:this.user.name,email:this.user.email,phone:this.user.phone,introduction:this.user.introduction};return new Promise((function(i,a){Object(j["f"])(t).then((function(t){e.loading=!1;var s=t.status_id,r=(t.message,t.data);100===s?(e.$message({message:"用户信息更新成功",type:"success",duration:2500}),e.$store.commit("user/SET_USER",r),e.edit=!1,i(r)):a(t)})).catch((function(t){e.loading=!1,a(t)}))}))}}},K=J,Q=Object(C["a"])(K,H,B,!1,null,"270fe830",null),ee=Q.exports,te={name:"Profile",components:{"user-card":D,"time-line":N,account:ee},data:function(){return{user:{},rtx:"",introduction:"",activeTab:"account",isTimeLineGet:!1}},computed:Object(r["a"])({},Object(o["b"])(["userObj","rtx_id"])),created:function(){this.initUser()},methods:{initUser:function(){this.user=this.userObj,this.rtx=this.rtx_id,this.introduction=this.userObj.introduction},refreshTimeLine:function(){this.isTimeLineGet=!0},resetTimeLine:function(){this.isTimeLineGet=!1}}},ie=te,ae=Object(C["a"])(ie,a,s,!1,null,null,null);t["default"]=ae.exports},"3cbc":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pan-item",style:{zIndex:e.zIndex,height:e.height,width:e.width}},[i("div",{staticClass:"pan-info"},[i("div",{staticClass:"pan-info-roles-container"},[e._t("default")],2)]),i("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+e.image+")"}})])},s=[],r=(i("a9e3"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),o=r,n=(i("133c"),i("2877")),l=Object(n["a"])(o,a,s,!1,null,"799537af",null);t["a"]=l.exports},"47a0":function(e,t,i){},"573e":function(e,t,i){},"741a":function(e,t,i){"use strict";i("47a0")},"7c25":function(e,t,i){},"7f24":function(e,t,i){},"946e":function(e,t,i){},d974:function(e,t,i){"use strict";i("7f24")},de53:function(e,t,i){"use strict";i("946e")},eaa9:function(e,t,i){"use strict";i("573e")}}]);