import { defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  srcDir: '../src',
  vite: {
    plugins: [
      AutoSidebar({
        path: 'src',
        titleFromFile: true,
        sideBarItemsResolved: (opt) => {
          // 如果text文件名包含".",则过滤掉
          return opt.filter((item) => !item?.text?.includes('.'));
        },
      }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
