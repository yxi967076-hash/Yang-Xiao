# 杨潇 | Yang Xiao

React + Vite + TypeScript 个人学术网站公开副本。仅从已审核的当前文件创建独立历史，未复制私有仓库的 .git、原始 Word 文档、文档审核记录、环境文件或构建目录。

仓库：https://github.com/yxi967076-hash/Yang-Xiao
目标地址：https://yxi967076-hash.github.io/Yang-Xiao/

## 本地开发

使用 Node.js 22.12 或更高版本。

```powershell
npm.cmd ci
npm.cmd run dev
```

打开终端给出的本地网址，默认 http://127.0.0.1:5173/。若旧项目占用该端口，Vite 会选择下一端口。

## 构建与部署

```powershell
npm.cmd run build
npm.cmd run preview
```

生产 base 为 /Yang-Xiao/；预览时访问 /Yang-Xiao/。构建默认生成目标网址的 canonical 和分享图片 URL，VITE_SITE_URL 可覆盖完整 HTTPS 站点地址。

.github/workflows/deploy.yml 在 main 推送或手动运行后构建并部署 dist。正式发布需将 Settings → Pages 的来源设为 GitHub Actions。目前仅完成本地准备，未推送或发布。

## 内容维护与隐私

个人资料在 src/content.ts，样式在 src/styles.css，组件在 src/components。照片和分享卡片在 public/images。没有真实链接的社交入口保持隐藏。

公开文件包含本人肖像、联系邮箱、教育背景及历史排名说明，并保留足球兴趣的文字介绍；不包含足球队合影。原始工程参考 Word 不公开。不要把密钥放在 VITE_ 变量中。
