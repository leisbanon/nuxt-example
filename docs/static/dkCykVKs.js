import{a as p}from"./B4_qRzbU.js";import{D as d,t as a,x as t,B as u,E as i,y as m,v as x}from"./-izJgR3p.js";const g=()=>"湖南省长沙市",f=()=>({name:"leisbanon",email:"158****9672@163.com",address:g()});function h(s,r){let e=0;return function(...o){const l=new Date().getTime();if(!(l-e<r))return e=l,s.apply(this,o)}}const w={__name:"1-关键概念",setup(s){p({title:"关键概念"});const r=f();console.log("u => ",r);const e=d({clientX:null}),o=h(l=>{e.clientX=l.clientX},100);return(l,n)=>(x(),a("ul",null,[n[4]||(n[4]=t("li",null,[t("strong",null,"关键概念"),t("p",null,[t("a",{href:"https://nuxt.zhcndoc.com/docs/guide/concepts/auto-imports#vue-和-nuxt-组合函数",target:"_blank"},"https://nuxt.zhcndoc.com/docs/guide/concepts/auto-imports#vue-和-nuxt-组合函数")]),t("p",null,"基于目录的自动导入："),t("p",null,"组件 => components"),t("p",null,"vue 组合项 => composables"),t("p",null,"工具 => utils"),t("pre",null,[u("        "),t("code",null,`
        const name = ref('Leisbanon');
        console.log('a => ', name);
        `),u(`
      `)])],-1)),t("li",null,[n[1]||(n[1]=t("strong",null,"Utils",-1)),n[2]||(n[2]=t("p",null,"函数节流（Utils）",-1)),t("div",{class:"bg-gray-200 w-[300px] h-[100px] rounded-[12px] text-center leading-[100px] text-[18px]",onMousemove:n[0]||(n[0]=(...c)=>i(o)&&i(o)(...c))},m(i(e).clientX),33),n[3]||(n[3]=t("pre",null,[u("        "),t("code",null,`
          // utils/index.js
          export function throttle(func, delay) {
            ...
          }

          // .Vue
          const test__throttle = throttle((e) => {
            form.clientX = e.clientX;
          }, 100);
        `),u(`
      `)],-1))]),n[5]||(n[5]=t("li",null,[t("strong",null," 生命周期 - 浏览器 "),t("p",null,[t("a",{href:"https://nuxt.zhcndoc.com/docs/guide/concepts/nuxt-lifecycle",target:"_blank"},"https://nuxt.zhcndoc.com/docs/guide/concepts/nuxt-lifecycle")]),t("ul",{class:"mt-[12px]"},[t("li",null,"初始化 Nuxt 并支持 Nuxt 应用程序插件（Plugins）https://nuxt.com/docs/guide/directory-structure/plugins"),t("li",null,"路由验证"),t("li",null,"执行 Nuxt 应用程序中间件（Middleware）https://nuxt.com/docs/guide/directory-structure/middleware#when-middleware-runs"),t("li",null,"Mount Vue Application，挂载 Vue 应用程序到 DOM"),t("li",null,"Vue 生命周期，浏览器将执行完成的 Vue 生命周期")])],-1))]))}};export{w as default};
