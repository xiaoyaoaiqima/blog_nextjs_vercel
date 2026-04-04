# 个人重要信息记录

基于 Next.js Pages Router 的个人知识库和简历站点。

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
  index.js              首页，展示分类入口
  category/[slug].js    分类页
  posts/[...slug].js    文章详情页
  cv.js                 简历页

components/
  layout.js             站点公共布局
  date.js               日期展示
  post-navigation.js    面包屑和上一篇/下一篇
  resume/               简历模块

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
- `posts/private/` 下的 Markdown 不会对外生成页面。
- 新增分类时，不只要建目录，还要同步更新 `lib/posts/categories.js`。

## 简历维护

- 简历页面入口在 `pages/cv.js`。
- 简历内容统一维护在 `components/resume/config.js`。
- 简历渲染逻辑在 `components/resume/resume-page.js`。
- 导出 PDF 的逻辑也在简历模块里，文件名同样从 `config.js` 读取。
