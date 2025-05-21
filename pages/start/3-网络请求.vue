<template>
  <ul>
    <li>
      <strong>网络请求 - 服务</strong>
      <p>Nuxt 会自动扫描 server 目录中的文件，注册 API 调用和服务器处理程序；</p>
      <p class="mb-[12px]">每个文件都应该导出一个定义的默认函数，defineEventHandler(), 函数可以处理返回 json 数据，或者发送响应；</p>

      <p>服务器路由：server/api/hello.js</p>
      <pre>
          <code>
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
          </code>
        </pre>
    </li>

    <li>
      <strong>服务器中间件</strong>
      <p>中间件：server/middleware/hello.js</p>
      <p class="mb-[12px]">中间件处理程序将在服务器请求每个路由之前运行，以添加检查标头，记录请求等；</p>

      <p>请求的 HTTP 方法以文件名匹配；.get .post .put .delete 方法：</p>
      <el-button type="primary" size="default" @click="onGet">GET 请求</el-button>
      <pre>
          // server/api/getUserInfo.get.js
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
        </pre
      >

      <el-button type="primary" size="default" @click="onPost">POST 请求</el-button>
      <pre>
          <code>
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
          </code>
        </pre>
    </li>
  </ul>
</template>

<script setup>
definePageMeta({
  name: '网络请求',
});

useSeoMeta({
  title: '网络请求',
});

const { data } = await useFetch('/api/hello');
console.log('a => ', data.value);

// Methods
const onGet = async () => {
  const { data } = await useFetch('/api/getUserInfo?name=leisbanon');
  console.log(data.value);
};

const onPost = async () => {
  const { data } = await useFetch('/api/setUserInfo', {
    method: 'POST',
    body: {
      name: 'Hello Leisbanon',
    },
  });
  console.log(data.value);
};
</script>
