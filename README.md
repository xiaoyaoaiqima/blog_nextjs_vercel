# 小山科技工作室官网

基于 Next.js Pages Router 的企业 AI Agent 定制开发与落地服务官网，保留技术博客。

完整的私人知识库、草稿、复盘和过程材料放在 `/Users/luxifa/brain`，本项目只保留适合对外展示的内容。

## 运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run start
```

## 目录

```text
pages/
  index.js              工作室首页
  services.js           服务能力
  cases/                项目案例列表与详情
  blog.js               技术博客分类入口
  about.js              工作室简介
  contact.js            业务合作入口
  category/[slug].js    分类页
  posts/[...slug].js    文章详情页

components/
  layout.js             站点公共布局
  date.js               日期展示
  post-navigation.js    面包屑和上一篇/下一篇
  studio.js             工作室页面公共组件

lib/
  posts.js              博客数据层对外导出
  posts/
    categories.js       分类配置
    filesystem.js       Markdown 文件读取和辅助方法
    queries.js          文章/分类查询逻辑

posts/                  博客 Markdown 内容
public/                 静态资源
```

## 内容维护

- 新文章直接放到 `posts/<category>/` 下，支持子目录嵌套。
- 不建议在本仓库长期保存私人草稿或敏感材料；先放到 `/Users/luxifa/brain/公开文章草稿/`，确认可公开后再复制到本项目。
- `posts/private/` 下的 Markdown 不会对外生成页面，但如果仓库公开，源码仍可能被看到。
- 新增分类时，不只要建目录，还要同步更新 `lib/posts/categories.js`。

## 案例维护

- 案例与服务信息统一维护在 `lib/studio.js`，过往项目经验不冒充工作室客户，避免披露未经授权的客户名称与精确业务指标。
- 简历不再是网站公开页面；求职简历由 brain 维护。
