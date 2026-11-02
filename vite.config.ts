import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, '.', 'VITE_')
  const configuredUrl = env.VITE_SITE_URL?.trim() || (command === 'build' ? 'https://yxi967076-hash.github.io/Yang-Xiao/' : undefined)
  let siteUrl: URL | undefined
  if (configuredUrl) {
    siteUrl = new URL(configuredUrl)
    if (siteUrl.protocol !== 'https:' || siteUrl.username || siteUrl.password || siteUrl.search || siteUrl.hash) {
      throw new Error('VITE_SITE_URL 应为真实站点的 HTTPS 站点地址，不含账号、查询参数或锚点。')
    }
  }
  if (siteUrl && !siteUrl.pathname.endsWith('/')) siteUrl.pathname += '/'
  return {
    base: command === 'build' ? '/Yang-Xiao/' : '/',
    plugins: [react(), {
      name: 'academic-sharing-metadata',
      transformIndexHtml() {
        if (!siteUrl) return []
        const image = new URL('images/academic-share.jpg', siteUrl).href
        return [
          { tag: 'link', attrs: { rel: 'canonical', href: siteUrl.href }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: siteUrl.href }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image', content: image }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image:height', content: '630' }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image:alt', content: '杨潇个人学术主页分享卡片' }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:image', content: image }, injectTo: 'head' },
        ]
      },
    }],
  }
})
