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
