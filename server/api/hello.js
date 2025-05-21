export default defineEventHandler((e) => {
  let data = new Object({
    name: 'leisbanon',
  });

  // 返回 JSON
  return data;

  // 发送响应
  // e.node.res.end(JSON.stringify(data));
});
