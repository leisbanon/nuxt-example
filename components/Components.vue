<template>
  <li>
    <h2>Components：</h2>
    <p><a href="https://nuxt.com/docs/guide/directory-structure/components" target="_blank">https://nuxt.com/docs/guide/directory-structure/components</a></p>
    <p>Nuxt 会自动导入 components 目录中的任何组件，如：</p>
    <pre>
      <code>
        /components/AppHeader.vue
        &lt;AppHeader />

        /components/button/primary.vue
        &lt;button-primary text="Components button" />
      </code>
    </pre>

    <button-primary text="Components button" />

    <div class="my-[12px]">
      <p>如果您只想根据组件名称而不是路径来匹配导入组件，那么需要在 Nuxt 文件中进行配置：</p>
      <pre>
        <code>
        export default defineNuxtConfig({
          components: [
            {
              path: '~/components',
              pathPrefix: false,
            },
          ],
        });
        </code>
      </pre>
    </div>
  </li>
</template>
