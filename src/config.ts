// 基础配置
export const BASE_CONFIG = {
  title: '啊芒果',
  subtitle: '啊芒果',
  description: '天真永不消失，浪漫至死不渝。',
  author: '啊芒果',
  favicon: '/favicon.png',
  avatar: '/avatar.webp',
  site_url: 'https://blog.almango.com',
  create_time: '2024-01-23',
}

// 配色方案
export type PaletteName = 'paper' | 'mono' | 'normal'

export const THEME_CONFIG = {
  palette: 'paper',
} as const satisfies { palette: PaletteName }

// 文章页配置
export const POST_CONFIG = {
  toc: true,
}

// 导航栏配置
export const HEADER_CONFIG = {
  nav: [
    { label: '归档', href: '/archive' },
    { label: '探索', href: '/explore' },
    { label: '朋友', href: '/link' },
    { label: '关于', href: '/about' },
  ],
}

// 页脚配置
export const FOOTER_CONFIG = {
  link: [
    { name: 'Astro', url: 'https://astro.build/'},
  ]
}

// 评论配置
export const COMMENT_CONFIG = {
  enable: true,
  provider: 'waline',
  waline: {
    serverURL: 'https://waline.almango.cn/',
  },
}
