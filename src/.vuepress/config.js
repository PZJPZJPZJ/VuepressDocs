import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { catalogPlugin } from '@vuepress/plugin-catalog'

export default defineUserConfig({
  lang: 'zn-CN',
  title: 'PZJ',
  description: 'A Simple Wiki Site',
  base: '/VuepressDocs/',
  dest: 'docs/',
  theme: defaultTheme({
    logo: 'https://avatars.githubusercontent.com/u/68857304',
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
    catalogPlugin({

    }),
  ],
})
