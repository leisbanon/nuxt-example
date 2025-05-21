export default defineEventHandler((event) => {
  let value = getRequestURL(event);
  console.log('value => ', value);
});
