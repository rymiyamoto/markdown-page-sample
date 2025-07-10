import { defineConfig } from 'vitepress'
import { getAllTags } from '../src/utils/tags'

const tagItems = getAllTags().map(tag => ({
  text: tag,
  link: `/tags/${tag}`
}))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja',
  title: "Markdown Sample",
  titleTemplate: ':title - Markdown Sample',
  description: "Markdown Sample",
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ],
    [
      'link',
      { rel: 'icon', href: '/images/common/favicon.ico' }
    ],
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'タグ',
        items: tagItems
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
  },
  lastUpdated: true,
  cleanUrls: true,
})
