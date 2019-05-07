<p align="center">
  <img width="280" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557230577143&di=257ef2f1a74b0844248e75072d26752b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180127%2F9b26923bbbfe4c57bcb6621f974553c9.jpeg" alt="logo">
</p>

## Target
收集优质内容和经典问题

欢迎捐款！

## Edit Content
``` bash
# 启动开发服务
npm run dev

# 添加导航 text&link
modify /src/.vuepress/config.js
such as: 
 {
  text: '快速搭建开发环境',
  link: '/zh/standard/Start.md'
 }

# 创建一个 markdown 文件
touch /src/zh/standard/Start.md

# 添加内容

# 构建为静态文件
npm run build

# 提交代码到仓库
```

## Development

> 请确保您的Node.js版本大于8。

``` bash
npm run dev ＃为自己提供VuePress自己的文档
```

## Deploy
``` bash
npm run build
```

<!-- ## Contribute
- Send pr to add excellent content
- Help us improve our content on exist pages  

![improve](/src/.vuepress/public//img/improve.png) -->

## License

MIT

