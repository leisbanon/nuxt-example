import{E as c}from"./D1wOFNwm.js";import"./3oKjoXyR.js";import{F as g,u as y,G as _,v as o,A as f,B as r,y as b,_ as a,t as u,x as t,z as s,C as v,H as N,I as w}from"./CNtEq8J6.js";import{a as $}from"./CcdTj-iB.js";const M={__name:"primary",props:["text"],setup(e){return g(),y(),(n,l)=>{const p=c;return o(),_(p,{type:"primary",size:"default"},{default:f(()=>[r(b(e.text),1)]),_:1})}}},C={};function k(e,n){const l=M;return o(),u("li",null,[n[0]||(n[0]=t("h2",null,"Components：",-1)),n[1]||(n[1]=t("p",null,[t("a",{href:"https://nuxt.com/docs/guide/directory-structure/components",target:"_blank"},"https://nuxt.com/docs/guide/directory-structure/components")],-1)),n[2]||(n[2]=t("p",null,"Nuxt 会自动导入 components 目录中的任何组件，如：",-1)),n[3]||(n[3]=t("pre",null,[r("      "),t("code",null,`
        /components/AppHeader.vue
        <AppHeader />

        /components/button/primary.vue
        <button-primary text="Components button" />
      `),r(`
    `)],-1)),s(l,{text:"Components button"}),n[4]||(n[4]=t("div",{class:"my-[12px]"},[t("p",null,"如果您只想根据组件名称而不是路径来匹配导入组件，那么需要在 Nuxt 文件中进行配置："),t("pre",null,[r("        "),t("code",null,`
        export default defineNuxtConfig({
          components: [
            {
              path: '~/components',
              pathPrefix: false,
            },
          ],
        });
        `),r(`
      `)])],-1))])}const B=a(C,[["render",k]]),P={};function V(e,n){return o(),u("li",null,n[0]||(n[0]=[t("h2",null,"Layout：",-1),t("p",null,"Nuxt 应用默认布局为 ~/layouts/default.vue，通过 <NuxtLayout /> 组件发送布局到 app.vue；",-1)]))}const j=a(P,[["render",V]]),A={};function R(e,n){return o(),u("li",null,n[0]||(n[0]=[v(`<h2>Middleware</h2><p>Nuxt 提供中间件，用于导航到特定的路由之前执行指定的代码；</p><p>路由中间件是接收当前路由（from）和下一个路由（to）作为参数的导航守卫；</p><p>中间件的命令规范为 kebab-case，即小写驼峰式，myMiddleware，my-middleware；</p><p>路由中间提供三种形式，分别是：</p><strong>一：内联中间件（内面内定义）</strong><pre>      <code>
        // 内联中间件（定义在页面内）

        /middleware/auth.js        
        export default defineNuxtRouteMiddleware((to, from) =&gt; {
          console.log(&#39;Middleware auth to =&gt; &#39;, to.path);
          console.log(&#39;Middleware auth from =&gt; &#39;, from.path);

          // 中止导航
          if (false) {
            return abortNavigation(&#39;导航拦截，并抛出错误！&#39;);
          }

          // 重定向到给定的路由
          if (false) {
            return navigateTo(&#39;/guide&#39;);
          }
        });

        /pages/xxx.vue
        definePageMeta({
          middleware: &#39;auth&#39;,
        });
      </code>
    </pre><strong>二：全局中间件（根据文件名按照字母顺序执行）</strong><pre>      <code>
        /middleware/logger.global.js
        export default defineNuxtRouteMiddleware((to, from) =&gt; {
          console.log(&#39;logger to =&gt; &#39;, to.path);
        });
      </code>
    </pre><strong>三：中间件运行时</strong>`,10)]))}const z=a(A,[["render",R]]),D={};function E(e,n,l,p,d,m){const i=c,x=N("debounce");return o(),u("li",null,[n[2]||(n[2]=t("h2",null,"Plugins：",-1)),n[3]||(n[3]=t("p",null,[t("a",{target:"_blank",href:"https://nuxt.com/docs/guide/directory-structure/plugins"},"https://nuxt.com/docs/guide/directory-structure/plugins")],-1)),n[4]||(n[4]=t("p",null,"Nuxt 会自动读取 Plugins 目录中的文件，并在创建 Vue 应用时加载他们；（plugin/scroll.js）",-1)),n[5]||(n[5]=t("p",null,"只有目录的顶层文件，或者子目录中的索引文件才会被注册为插件；（plugins/player/index.js）",-1)),n[6]||(n[6]=t("p",{class:"mb-[12px]"},"传递给插件的唯一参数是 nuxtApp",-1)),t("div",null,[n[1]||(n[1]=t("span",{class:"mr-[12px]"},"点击防抖（Plugin）",-1)),w((o(),_(i,{class:"mr-[80px]",type:"primary",size:"default"},{default:f(()=>n[0]||(n[0]=[r("测试 - debounce")])),_:1})),[[x,e.test__debounce,"300",{begin:!0}]])])])}const H=a(D,[["render",E]]),G={__name:"2-目录结构",setup(e){return $({title:"目录结构"}),(n,l)=>{const p=B,d=j,m=z,i=H;return o(),u("ul",null,[s(p,{class:"mb-[24px]"}),s(d),s(m),s(i)])}}};export{G as default};
