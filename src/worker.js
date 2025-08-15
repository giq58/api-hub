const API_CONFIGS = {
    openai: {
      host: 'api.openai.com',
      paths: ['/v1/'],
      description: "OpenAI API 代理服务",
      logo: "🤖"
    },
    gemini: {
      host: 'generativelanguage.googleapis.com',
      paths: ['/v1beta/models/'],
      description: "Google Gemini API 代理服务",
      logo: "🌟"
    },
    claude: {
      host: 'api.anthropic.com',
      paths: ['/v1/'],
      description: "Claude API 代理服务",
      logo: "🧠"
    },
    grok: {
      host: 'api.x.ai',
      paths: ['/v1/'],
      description: "Grok API 代理服务",
      logo: "⚡"
    },
    docker: {
      host: 'docker.ixu.cc',
      paths: ['/'],
      description: "Docker Registry 服务",
      logo: "🐳",
      directUrl: true
    },
    github: {
      host: 'github.com',
      paths: ['/'],
      description: "GitHub API 代理服务",
      logo: "📦"
    },
    telegram: {
      host: 'api.telegram.org',
      paths: ['/bot'],
      description: "Telegram Bot API 代理服务",
      logo: "📱"
    }
  };

  const HTML_TEMPLATE = `<!DOCTYPE html>
  <html lang="zh">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Hub</title>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>">
      <style>
          :root {
              --bg: #f0f2f5;
              --card-bg: #ffffff;
              --text: #1a1a1a;
              --text-secondary: #666666;
              --border: #eaeaea;
              --primary: #0066ff;
          }
  
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
  
          body {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              background: var(--bg);
              color: var(--text);
              min-height: 100vh;
          }
  
          .container {
              width: 100%;
              max-width: 1200px;
              margin: 0 auto;
              padding: 2rem;
          }
  
          .header {
              text-align: center;
              margin-bottom: 3rem;
              padding: 2rem 0 1rem; /* 减小整体内边距 */
          }
  
          .header h1 {
              font-size: 2.5rem;
              margin-bottom: 0.5rem; /* 减小标题和描述之间的间距 */
              background: linear-gradient(120deg, #FF0080, #7928CA, #0066ff);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradient 8s ease infinite;
              background-size: 200% auto;
          }
  
          @keyframes gradient {
              0% {
                  background-position: 0% 50%;
              }
              50% {
                  background-position: 100% 50%;
              }
              100% {
                  background-position: 0% 50%;
              }
          }
  
          .header p {
              color: var(--text-secondary);
              font-size: 1.1rem;
              position: relative;
              display: inline-block;
              margin-top: 0.25rem; /* 微调描述文字的上边距 */
          }
  
          .header p::after {
              content: '🚀';
              margin-left: 8px;
              display: inline-block;
              animation: float 2s ease-in-out infinite;
          }
  aa'cc
          @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
          }
  
          .grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 1.5rem;
          }
  
          /* 添加动画关键帧 */
          @keyframes fadeInUp {
              from {
                  opacity: 0;
                  transform: translateY(20px);
              }
              to {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
  
          .card {
              background: var(--card-bg);
              border: 1px solid var(--border);
              border-radius: 16px;
              padding: 1.5rem;
              transition: all 0.3s ease;
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12); /* 增加阴影 */
              animation: fadeInUp 0.6s ease backwards;
          }
  
          /* 让卡片依次出现 */
          .grid .card {
              animation-delay: calc(var(--order) * 0.2s);
          }
  
          .card:hover {
              transform: translateY(-5px);
              box-shadow: 0 12px 36px rgba(0, 0, 0, 0.16);
          }
  
          .card-header {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              margin-bottom: 1rem;
          }
  
          .logo {
              font-size: 2rem;
          }
  
          .title {
              font-size: 1.25rem;
              font-weight: 600;
          }
  
          .description {
              color: var(--text-secondary);
              margin-bottom: 1rem;
              font-size: 0.9rem;
          }
  
          .endpoint {
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 0.875rem;
              padding: 0.75rem;
              border-radius: 8px;
              background: #2f3542;  /* 改为更柔和的灰色 */
              color: #f1f2f6;      /* 更改文字颜色为浅色 */
              margin: 1rem 0;
              word-break: break-all;
              position: relative;
              border: 1px solid rgba(255, 255, 255, 0.1);  /* 添加微妙的边框 */
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);    /* 添加轻微阴影 */
          }
  
          .endpoint::before {
              content: '$ ';
              opacity: 0.6;
              color: #a4b0be;  /* 命令提示符使用更淡的颜色 */
          }
  
          .copy-btn {
              width: 100%;
              padding: 0.75rem;
              border: none;
              border-radius: 12px;
              background: var(--primary);
              color: white;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
          }
  
          .copy-btn svg {
              width: 16px;
              height: 16px;
          }
  
          .copy-btn:hover {
              opacity: 0.9;
              transform: translateY(-2px);
          }
  
          .toast {
              position: fixed;
              bottom: 2rem;
              left: 50%;
              transform: translateX(-50%);
              background: rgba(0, 0, 0, 0.8);
              color: white;
              padding: 0.75rem 1.5rem;
              border-radius: 100px;
              font-size: 0.875rem;
              opacity: 0;
              transition: opacity 0.3s ease;
          }
  
          .github-link {
              display: inline-flex;
              align-items: center;
              gap: 0.75rem;
              color: #24292e;
              text-decoration: none;
              font-size: 1.1rem;
              margin: 1.5rem auto;
              padding: 0.75rem 1.5rem;
              border-radius: 12px;
              background: var(--card-bg);
              border: 1px solid var(--border);
              transition: all 0.3s ease;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
  
          .github-link:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
              background: #f6f8fa;
          }
  
          .github-icon {
              width: 24px;
              height: 24px;
          }
  
          @media (max-width: 640px) {
              .container {
                  padding: 1rem;
              }
              .header {
                  padding: 1rem 0;
              }
              .header h1 {
                  font-size: 2rem;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>API 代理服务</h1>
              <p>一站式 API 代理服务</p>
          </div>
          <!-- 减小上方间距 -->
          <div style="text-align: center; margin: -4rem 0 0rem;">
              <a href="https://github.com/Ten-o/api_gateway_worker" class="github-link" target="_blank">
                  <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  在 GitHub 上查看源码
              </a>
          </div>
          <div class="grid">
              ${Object.entries(API_CONFIGS).map(([provider, config], index) => `
                  <div class="card" style="--order: ${index + 1}">
                      <div class="card-header">
                          <span class="logo">${config.logo}</span>
                          <span class="title">${provider.toUpperCase()}</span>
                      </div>
                      <div class="description">${config.description}</div>
                      <div class="endpoint" id="endpoint-${provider}"></div>
                      <button class="copy-btn" onclick="copyEndpoint('${provider}')">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                          </svg>
                          复制
                      </button>
                  </div>
              `).join('')}
          </div>
      </div>
      <div id="toast" class="toast">已复制到剪贴板</div>
      <script>
          const currentDomain = window.location.origin;
          Object.entries(${JSON.stringify(API_CONFIGS)}).forEach(([provider, config]) => {
              const endpointEl = document.getElementById(\`endpoint-\${provider}\`);
              const endpoint = config.directUrl ? 
                  \`https://\${config.host}\` :
                  \`\${currentDomain}/\${provider}/\`;
              endpointEl.textContent = endpoint;
          });
  
          function copyEndpoint(provider) {
              const config = ${JSON.stringify(API_CONFIGS)}[provider];
              const endpoint = config.directUrl ? 
                  \`https://\${config.host}\` :
                  \`\${window.location.origin}/\${provider}/\`;
              navigator.clipboard.writeText(endpoint).then(() => {
                  const toast = document.getElementById('toast');
                  toast.style.opacity = '1';
                  setTimeout(() => {
                      toast.style.opacity = '0';
                  }, 2000);
              });
          }
      </script>
  </body>
  </html>`;addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });

  async function handleRequest(request) {
    const url = new URL(request.url);
    
    // 首页处理
    if (url.pathname === '/') {
      return new Response(HTML_TEMPLATE, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    try {
      const [_, service] = url.pathname.split('/');
      
      if (!API_CONFIGS[service]) {
        return new Response('Invalid service', { status: 400 });
      }
      const config = API_CONFIGS[service];

      if (request.method === 'GET' && (url.pathname === `/${service}` || url.pathname === `/${service}/`)) {
        return Response.redirect(url.origin, 302);
      }

      const targetPath = url.pathname.replace(`/${service}`, '');
      const targetURL = `https://${config.host}${targetPath}${url.search}`;

      const headers = new Headers(request.headers);
      headers.delete('host');

      const response = await fetch(targetURL, {
        method: request.method,
        headers: headers,
        body: request.body
      });

      return new Response(response.body, {
        status: response.status,
        headers: response.headers
      });

    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }

  function handleCORS() {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Max-Age': '86400',
        'Allow': 'GET, HEAD, POST, OPTIONS'
      }
    });
  }
