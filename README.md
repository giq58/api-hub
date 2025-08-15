<h1 align="center">API Hub</h1>

<p align="center">
  一个强大的 API 代理服务集合
</p>

<p align="center">
  <a href="https://api.ixu.cc">演示站点</a> •
  <a href="https://github.com/Ten-o/api_gateway_worker">GitHub</a>
</p>

## 🚀 快速开始


<table>
<tr>
  <td>
    <p><b>标准版本</b></p>
    <p>部署完整功能的 API Hub</p>
    <p>
      <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/Ten-o/api_gateway_worker">
        <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" />
      </a>
    </p>
  </td>
  <td>
    <p><b>优化版本</b></p>
    <p>禁止亚太区域作为出口</p>
    <p>
      <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/Ten-o/api_gateway_worker/tree/exclude-asia-pacific">
        <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers (Exclude Asia Pacific)" />
      </a>
    </p>
  </td>
</tr>
</table>

1. 点击上方按钮
2. 登录你的 Cloudflare 账号
3. 等待自动部署完成
4. 访问分配的 Workers 域名即可使用

### 手动部署

如果一键部署不成功，可以尝试以下方式：

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 Workers & Pages
3. 创建新的 Worker
4. 复制 `src/worker.js` 中的代码到 Worker 编辑器
5. 点击 "Save and Deploy"

### 本地开发

```bash
# 克隆项目
git clone https://github.com/Ten-o/api_gateway_worker.git
cd api_gateway_worker

# 安装依赖
npm install

# 本地开发
npm run dev

# 部署
npm run deploy
```

## ⚡ 功能特性

### AI API 代理服务
- OpenAI API (`/openai/*`)
- Google Gemini API (`/gemini/*`)
- Claude API (`/claude/*`)
- Grok API (`/grok/*`)

### 其他服务
- Docker Registry (`/docker/*`)
- GitHub API (`/github/*`)
- Telegram Bot API (`/telegram/*`)

### 核心优势
- 统一入口 统一管理
- 简单易用的配置方式
- 优雅的 Web UI 界面
- 支持跨域请求（CORS）
- 保持原始 API 的请求格式

## 🔧 配置说明

在 `src/worker.js` 中配置各个 API 服务：

```js
const API_CONFIGS = {
  "服务名称": {
    host: "api.example.com",
    paths: ["/v1/"],
    description: "服务描述",
    logo: "📦"
  }
}
```

## 📦 项目结构

```
.
├── src/
│   ├── worker.js      # 主要业务逻辑
│   └── ...
├── package.json
└── README.md
```

## 🤝 参与贡献

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

## 📬 联系方式

- [GitHub Issues](https://github.com/Ten-o/api_gateway_worker/issues)
- [演示站点](https://api.ixu.cc)

