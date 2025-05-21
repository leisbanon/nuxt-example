import{E as f}from"./VSYacdHO.js";import"./Bl3MsdHu.js";import{a as y}from"./DPhjH6E3.js";import{u as s}from"./DyQ5Afp0.js";import{J as v,t as c,x as e,B as t,z as u,A as i,v as g}from"./idbtiz0H.js";const T={__name:"3-网络请求",async setup(b){let o,l;y({title:"网络请求"});const{data:d}=([o,l]=v(()=>s("/api/hello","$ZDT6aQ9wYE")),o=await o,l(),o);console.log("a => ",d.value);const p=async()=>{const{data:a}=await s("/api/getUserInfo?name=leisbanon","$fX3osjGNux");console.log(a.value)},m=async()=>{const{data:a}=await s("/api/setUserInfo",{method:"POST",body:{name:"Hello Leisbanon"}},"$oG-GVZVZz4");console.log(a.value)};return(a,n)=>{const r=f;return g(),c("ul",null,[n[8]||(n[8]=e("li",null,[e("strong",null,"网络请求 - 服务"),e("p",null,"Nuxt 会自动扫描 server 目录中的文件，注册 API 调用和服务器处理程序；"),e("p",{class:"mb-[12px]"},"每个文件都应该导出一个定义的默认函数，defineEventHandler(), 函数可以处理返回 json 数据，或者发送响应；"),e("p",null,"服务器路由：server/api/hello.js"),e("pre",null,[t("          "),e("code",null,`
            // server/api/hello.js
            export default defineEventHandler((e) => {
              let data = new Object({
                name: 'leisbanon',
              });

              // 返回 JSON
              return data;

              // 发送响应
              // e.node.res.end(JSON.stringify(data));
            });

            // api.vue
            const { data } = await useFetch('/api/hello');
            console.log('a => ', data.value);
          `),t(`
        `)])],-1)),e("li",null,[n[2]||(n[2]=e("strong",null,"服务器中间件",-1)),n[3]||(n[3]=e("p",null,"中间件：server/middleware/hello.js",-1)),n[4]||(n[4]=e("p",{class:"mb-[12px]"},"中间件处理程序将在服务器请求每个路由之前运行，以添加检查标头，记录请求等；",-1)),n[5]||(n[5]=e("p",null,"请求的 HTTP 方法以文件名匹配；.get .post .put .delete 方法：",-1)),u(r,{type:"primary",size:"default",onClick:p},{default:i(()=>n[0]||(n[0]=[t("GET 请求")])),_:1}),n[6]||(n[6]=e("pre",null,`          // server/api/getUserInfo.get.js
          export default defineEventHandler(async (event) => {
            // 查询参数
            const query = getQuery(event);
            console.log('query => ', query.name);

            // const data = await $fetch('http://127.0.0.1:9000/');

            return query;
          });

          // .Vue
          const onGet = async () => {
            const { data } = await useFetch('/api/getUserInfo?name=leisbanon');
            console.log(data.value);
          };
        `,-1)),u(r,{type:"primary",size:"default",onClick:m},{default:i(()=>n[1]||(n[1]=[t("POST 请求")])),_:1}),n[7]||(n[7]=e("pre",null,[t("          "),e("code",null,`
            // server/api/setUserInfo.post.js
            export default defineEventHandler(async (event) => {
              // 请求参数
              let body = await readBody(event);

              // 错误处理
              // if (!body.name) {
              //   return createError({
              //     statusCode: 400,
              //     statusMessage: '名称不能为空',
              //   });
              // }

              // 请求 Cookie
              // const cookie = parseCookies(event);
              // console.log('cookie => ', cookie);

              return body;
            });

            // .Vue
            const onPost = async () => {
              const { data } = await useFetch('/api/setUserInfo', {
                method: 'POST',
                body: {
                  name: 'Hello Leisbanon',
                },
              });
              console.log(data.value);
            };
          `),t(`
        `)],-1))])])}}};export{T as default};
