import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchProPlugin } from "vuepress-plugin-search-pro"
import { catalogPlugin } from '@vuepress/plugin-catalog'

export default defineUserConfig({
  lang: 'zn-CN',

  title: 'PZJ',
  description: 'PZJ VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    dest: "docs/dist",
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '教程',
        link: '/guide/',
      },
    ],
    sidebarDepth: 5,
  }),

  bundler: viteBundler(),
  
  plugins: [
    searchProPlugin({
      // 配置选项
    }),
    catalogPlugin({
      // 你的选项
    }),
  ],
})
