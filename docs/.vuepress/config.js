module.exports = {
  title: 'Summary Of work',
  description: 'The description of the site.',
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  // base: '/SummaryOfwork/',
  base: '/',
  dest: './dist',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Works', link: '/guide/' },
      { text: 'Learnings', link: '/projects/' },
      { text: 'Gayhub', link: 'https://github.com/xinandiyishuai/SummaryOfWork' }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('使用指北')
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

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: true,
      children: ['', 'getting-started', 'customize', 'advanced']
    }
  ]
}
