"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[933],{1933:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"register-container"},[t("div",{staticClass:"register"},[t("h3",[e._v(" 注册新用户 "),t("span",{staticClass:"go"},[e._v("我有账号，去 "),t("router-link",{attrs:{to:"/login"}},[e._v("登陆")])],1)]),t("div",{staticClass:"content"},[t("label",[e._v("手机号:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入你的手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),t("div",{staticClass:"content"},[t("label",[e._v("验证码:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),t("button",{staticStyle:{height:"38px","margin-left":"1px"},on:{click:e.getCode}},[e._v(" 发送验证码 ")])]),t("div",{staticClass:"content"},[t("label",[e._v("登录密码:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入你的登录密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),t("div",{staticClass:"content"},[t("label",[e._v("确认密码:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"}],attrs:{type:"password",placeholder:"请输入确认密码"},domProps:{value:e.password1},on:{input:function(t){t.target.composing||(e.password1=t.target.value)}}})]),t("div",{staticClass:"controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],attrs:{name:"m1",type:"checkbox"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(t){var s=e.agree,a=t.target,r=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.agree=s.concat([o])):i>-1&&(e.agree=s.slice(0,i).concat(s.slice(i+1)))}else e.agree=r}}}),t("span",[e._v("同意协议并注册《电商购物平台用户协议》")])]),t("div",{staticClass:"btn"},[t("button",{on:{click:e.userRegister}},[e._v("完成注册")])])]),e._m(0)])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"copyright"},[t("ul",[t("li",[e._v("关于我们")]),t("li",[e._v("联系我们")]),t("li",[e._v("联系客服")]),t("li",[e._v("商家入驻")]),t("li",[e._v("营销中心")]),t("li",[e._v("手机购物平台")]),t("li",[e._v("销售联盟")]),t("li",[e._v("用户社区")])]),t("div",{staticClass:"address"},[e._v("地址：江西省九江市濂溪区九江职业技术学院")])])}],o=(s(7658),{name:"Register",data(){return{phone:"",code:"",password:"",password1:"",agree:!0}},methods:{async getCode(){try{const{phone:e}=this;e&&await this.$store.dispatch("getCode",this.phone),this.code=this.$store.state.user.code}catch(e){alert(e.message)}},async userRegister(){try{const{phone:e,code:t,password:s,password1:a}=this;e&&t&&s==a&&await this.$store.dispatch("UserRegister",{phone:e,code:t,password:s}),this.$router.push("/login")}catch(e){alert(e.message)}}}}),i=o,n=s(1001),l=(0,n.Z)(i,a,r,!1,null,"3004eef2",null),c=l.exports}}]);