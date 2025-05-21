const api_query = async () => {
  return await new Promise((r) => {
    setTimeout(() => {
      r({
        name: 'Leisbanon',
        email: '158****9672@163.Com',
      });
    }, 1000);
  });
};

export default defineEventHandler(async (event) => {
  // 查询参数
  const query = getQuery(event);
  console.log('query => ', query.name);

  // const data = await $fetch('http://127.0.0.1:9000/');

  return query;
});
