const path = require('path')
const { getTimeEmoj, getMdMap } = require('./util/tools')
const navTitle = getTimeEmoj()
module.exports = {
  title: 'Summary Of work',
  description: 'The description of the site.',
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  // base: '/SummaryOfwork/',
  base: '/',
  dest: './dist',

  themeConfig: {
    nav: [
      { text: '🏠', link: '/' },
      { text: navTitle, link: '/nav/' },
      { text: '博客', link: '/blog/' },
      {
        text: '学习之道',
        items: [
          {
            text: '📚读书',
            link: '/bookReading/'
          },
          {
            text: '🥧资源',
            link: '/resource/'
          },
          {
            text: '📃文章',
            link: '/article/'
          }
        ]
      },
      {
        text: 'Gayhub',
        link: 'https://github.com/xinandiyishuai/SummaryOfWork'
      }
    ],
    sidebar: {
      '/nav/': getMdMap(path.join('nav')),
      '/blog/': getMdMap(path.join('blog')),
      '/bookReading/': getMdMap(path.join('bookReading')),
      '/resource/': getMdMap(path.join('resource')),
      '/article/': getMdMap(path.join('article'))
    },
    lastUpdated: 'Last Updated'
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: (md) => {
      md.use(require('markdown-it-katex'))
    }
  }
}
