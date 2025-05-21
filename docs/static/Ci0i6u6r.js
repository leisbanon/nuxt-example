import{E as p}from"./Cj9HpjRr.js";import"./B8Uhqbzv.js";import{a as i}from"./B4_qRzbU.js";import{u as f}from"./CKhxj4Eh.js";import{r as m,J as d,t as y,x as n,z as x,A as $,y as v,E as F,B as s,v as c}from"./-izJgR3p.js";const E={__name:"2-数据获取",async setup(k){let e,l;i({title:"数据获取"});const o=m({}),{data:u}=([e,l]=d(()=>f("/api/getUserInfo","$skzp3H4Dv6")),e=await e,l(),e);o.value=u.value;const a=async()=>{await $fetch("http://127.0.0.1:9000/")};return(w,t)=>{const r=p;return c(),y("div",null,[n("ul",null,[n("li",null,[t[1]||(t[1]=n("strong",null,"数据获取",-1)),t[2]||(t[2]=n("p",{class:"mb-[12px]"},"Nuxt 自带两个组合项和一个内置库，用于在浏览器和服务器环境的数据获取，分别是 useFetch、useAsyncData 和 $fetch；",-1)),t[3]||(t[3]=n("p",null,"简单来说：",-1)),t[4]||(t[4]=n("p",null,"$fetch：是发出网路请求最简单的办法，是对原生 fetch 封装，使用场景在如手动控制请求时机，例如点击事件后；",-1)),t[5]||(t[5]=n("p",null,"useFetch：专门为 Nuxt 组件设计，提供组件在服务器渲染请求的 Hook，使用场景在组件中直接获取数据，自动处理 SSR 网页数据；",-1)),t[6]||(t[6]=n("p",null,"useAsyncData：是为提供异步数据管理的 Hook，特点其不限制数据来源，可以是 $fetch，获取数据库查询或者其他异步操作；使用场景在需要组合多个数据源，或者存在异步逻辑数据时；",-1)),t[7]||(t[7]=n("hr",null,null,-1)),x(r,{type:"primary",size:"default",onClick:a},{default:$(()=>t[0]||(t[0]=[s("$fetch 请求")])),_:1}),n("p",null,"用户信息："+v(F(o)),1),t[8]||(t[8]=n("pre",null,[s("          "),n("code",null,`
            // useFetch
            const { data } = await useFetch('/api/getUserInfo');
            userinfo.value = data.value;

            // $fetch
            const onFetch = async () => {
              await $fetch('http://127.0.0.1:9000/');
            };
          `),s(`
        `)],-1))])])])}}};export{E as default};
