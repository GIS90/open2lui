(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c48797e0"],{"05ea":function(e,s,t){"use strict";t("3a88")},2017:function(e,s,t){"use strict";t("cafe")},"3a88":function(e,s,t){},"7ebd":function(e,s,t){"use strict";t("84188")},84188:function(e,s,t){},"9ed6":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"titleName"},[e._v(e._s(e.loginTitle))])]),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),t("el-input",{ref:"username",attrs:{placeholder:"账号",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),t("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(s){e.capsTooltip=s},expression:"capsTooltip"}},[t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(s){e.capsTooltip=!1}},nativeOn:{keyup:[function(s){return e.checkCapslock(s)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}]},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),t("el-row",{staticClass:"slide-verify"},[t("slide-check",{attrs:{"success-fun":e.sliderVerifySuccess,"error-fun":e.sliderVerifyError}})],1),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v("登录")])],1)],1)},o=[],r=(t("d3b7"),t("b64b"),t("83d6")),i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"slider-check-box"},[t("div",{staticClass:"slider-check",class:e.rangeStatus?"success":""},[t("i",{class:e.rangeStatus?e.successIcon:e.startIcon,on:{mousedown:e.rangeMove}}),e._v(" "+e._s(e.rangeStatus?e.successText:e.startText)+" ")])])},a=[],c={name:"SliderCheck",props:{successFun:{type:Function,default:function(){}},errorFun:{type:Function,default:function(){}}},data:function(){return{disX:0,rangeStatus:!1,startIcon:"el-icon-right",startText:"请拖住滑块，拖动到最右边",successIcon:"el-icon-success",successText:"验证通过"}},methods:{rangeMove:function(e){var s=this,t=e.target,n=e.clientX,o=t.offsetWidth,r=t.parentElement.offsetWidth,i=r-o;if(this.rangeStatus)return!1;document.onmousemove=function(e){var r=e.clientX;s.disX=r-n,s.disX<=0&&(s.disX=0),s.disX>=i-o&&(s.disX=i),t.style.transition=".1s all",t.style.transform="translateX("+s.disX+"px)",e.preventDefault()},document.onmouseup=function(){s.disX!==i?(t.style.transition=".5s all",t.style.transform="translateX(0)",s.errorFun&&s.errorFun()):(s.rangeStatus=!0,s.status&&(s.$parent[s.status]=!0),s.successFun&&s.successFun()),document.onmousemove=null,document.onmouseup=null}}}},l=c,u=(t("05ea"),t("2877")),d=Object(u["a"])(l,i,a,!1,null,"60bcc7c8",null),p=d.exports,f={name:"Login",components:{"slide-check":p},data:function(){var e=function(e,s,t){s?t():t(new Error("请输入用户名RTX账户/电话/邮箱"))},s=function(e,s,t){s.length<6?t(new Error("密码不能少于6位")):t()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:s}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},loginTitle:r["loginTitle"]||"沈阳分公司智行工具箱",isPass:!1}},watch:{$route:{handler:function(e){var s=e.query;s&&(this.redirect=s.redirect,this.otherQuery=this.getOtherQuery(s))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(e){var s=e.key;this.capsTooltip=s&&1===s.length&&s>="A"&&s<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.isPass?this.$refs.loginForm.validate((function(s){if(!s)return!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(s){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1})).catch((function(s){e.loading=!1,console.log(s)}))})):this.$message({message:"请拖动滑块，拖动到最右边",type:"error",duration:2e3})},getOtherQuery:function(e){return Object.keys(e).reduce((function(s,t){return"redirect"!==t&&(s[t]=e[t]),s}),{})},sliderVerifySuccess:function(){this.isPass=!0},sliderVerifyError:function(){this.isPass=!1}}},m=f,h=(t("2017"),t("7ebd"),Object(u["a"])(m,n,o,!1,null,"83a3b56c",null));s["default"]=h.exports},cafe:function(e,s,t){}}]);