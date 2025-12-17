# 个人在线简历 - wan-resume

## 一、项目简介
`wan-resume` 是一个使用 React 19 和 Vite 7 构建的现代化个人在线简历项目。它提供了简洁美观的界面，支持从 Markdown 文件动态加载简历内容，具有高度的可定制性，同时提供了良好的打印体验。用户可以通过修改配置文件轻松定制简历的各个方面，使用熟悉的 Markdown 语法撰写详细的简历信息。

## 二、功能特性
- **💡 Markdown 支持**：使用 Markdown 文件编写简历内容，语法简单，易于维护和格式调整
- **🎨 高度可定制**：通过 `config.yml` 文件自定义简历标题、头部信息、显示选项等
- **✨ 美观界面**：采用简洁的设计风格，模拟真实纸张效果并使用大头针装饰，视觉效果出色
- **🖨️ 打印友好**：提供打印提示，优化打印布局，方便导出为 PDF 文件
- **⚡ 快速加载**：基于 Vite 构建，性能优异，加载速度快
- **📱 响应式设计**：适配不同屏幕尺寸，在各种设备上都有良好的显示效果
- **🔧 易于部署**：支持静态部署和 Docker 容器化部署，部署方式灵活
- **🔄 实时更新**：添加防缓存机制，修改配置文件后刷新页面即可看到更新
- **🔌 自定义 Nginx 配置**：内置优化的 Nginx 配置，支持 React 单页应用路由、正确的 MIME 类型设置和性能优化
- **🌐 端口可配置**：支持自定义 Docker 容器监听端口，灵活适应不同的部署环境
- **📁 配置文件挂载**：支持将配置文件目录挂载到容器外部，方便实时修改和管理

## 三、技术栈
### 前端框架
- **React**：用于构建用户界面，提供高效的组件化开发方式。

### 构建工具
- **Vite**：快速的构建工具，提供了快速的冷启动和热更新能力。

### 解析库
- **markdown-it**：用于解析 Markdown 文件，将 Markdown 内容转换为 HTML 格式。
- **js-yaml**：用于解析 YAML 配置文件，方便读取和使用配置信息。

## 四、项目结构
```
make-cv/
├── .github/                 # GitHub 工作流配置
│   └── workflows/
│       └── docker-publish.yml
├── config/                  # 配置文件目录
│   ├── config.yml           # 简历配置文件
│   └── resume.md            # 简历 Markdown 内容
├── public/                  # 静态资源目录
│   └── cv_logo.webp         # 简历 Logo
├── src/                     # 源代码目录
│   ├── assets/              # 静态资源文件
│   │   ├── pin-left.png     # 左侧大头针图片
│   │   ├── pin-right.png    # 右侧大头针图片
│   │   ├── stick.png        # 底部装饰图片
│   │   └── react.svg        # React Logo
│   ├── components/          # 组件目录
│   │   ├── Footer.jsx       # 页脚组件
│   │   ├── HeaderInfo.jsx   # 头部信息组件
│   │   └── ResumeContent.jsx # 简历内容组件
│   ├── App.css              # 主应用样式
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 应用入口文件
│   └── style.css            # 全局样式
├── .dockerignore            # Docker 忽略文件
├── .gitignore               # Git 忽略文件
├── Dockerfile               # Docker 构建文件
├── eslint.config.js         # ESLint 配置文件
├── index.html               # HTML 入口文件
├── nginx.conf               # Nginx 配置文件
├── package.json             # 项目依赖和脚本配置
├── package-lock.json        # 依赖版本锁定文件
├── README.md                # 项目说明文档
└── vite.config.js           # Vite 配置文件
```


## 五、快速开始
### 1. 克隆项目
```bash
git clone https://github.com/PGWan68/make-cv.git
cd make-cv
```

### 2. 安装依赖
```bash
npm install
```

### 3. 开发环境启动
```bash
npm run dev
```
启动开发服务器后，在浏览器中访问 `http://localhost:3018` 即可查看简历。

### 4. 生产环境构建
```bash
npm run build
```
构建完成后，会在 `dist` 目录下生成静态文件。

### 5. 预览生产环境
```bash
npm run preview
```
启动预览服务器后，访问 `http://localhost:3018` 即可查看构建后的简历。

## 六、配置说明
可以通过修改 `config.yml` 文件来定制简历的相关信息：

```yaml
title: 'make-cv - 漂亮的在线个人简历'
showHeader: true
showPrintStick: true
headerInfo:
  photo: 'https://fileswan.x.ddnsto.com/imgs/IMG_2948.JPG'
  name: '张三(AI生成)'
  phone: '188****8888'
  email: 'zhangsan@makecv.com'
```

- `title`：简历页面的标题。
- `showHeader`：是否显示头部信息。
- `showPrintStick`：是否显示底部的打印标签。
- `headerInfo`：头部信息，包括照片、姓名、电话和邮箱。

简历内容可以在 `config/resume.md` 文件中使用 Markdown 语法编写。

## 七、部署教程

### 静态资源部署
静态资源部署是将项目构建后生成的静态文件部署到静态文件服务器上，从而让用户可以通过网络访问。以下以部署到 GitHub Pages 为例，详细介绍静态资源部署的步骤：

#### 1. 创建新仓库
在 GitHub 上创建一个新的仓库，用于存放部署的静态文件。你可以登录 GitHub 账号，点击右上角的“+”号，选择“New repository”，然后按照提示填写仓库名称、描述等信息，最后点击“Create repository”完成创建。

#### 2. 构建项目
在本地项目目录下，执行以下命令进行生产环境构建：
```bash
npm run build
```
构建完成后，会在 `dist` 目录下生成静态文件。

#### 3. 推送文件到 `gh-pages` 分支
将 `dist` 目录下的文件推送到新仓库的 `gh-pages` 分支。可以按照以下步骤操作：
```bash
# 创建并切换到 gh-pages 分支
git checkout -b gh-pages

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "Deploy to GitHub Pages"

# 推送更改到远程仓库的 gh-pages 分支
git push origin gh-pages
```

#### 4. 配置 GitHub Pages
在新仓库的设置中，找到 GitHub Pages 部分，将源设置为 `gh-pages` 分支。设置完成后，GitHub 会自动为你部署静态文件。

#### 5. 访问简历
稍等片刻，即可通过仓库的 GitHub Pages 链接访问简历。链接格式通常为 `https://<your-github-username>.github.io/<repository-name>`。

### Docker 部署
本项目支持使用 Docker 进行容器化部署，采用两阶段构建，包含优化的 Nginx 配置：

#### 1. 本地构建镜像
在项目根目录下执行以下命令构建镜像：
```bash
# 构建镜像
docker build -t make-cv .
```

#### 2. 运行容器

##### 基本运行方式
```bash
# 运行容器
docker run -d -p 3018:3018 --name make-cv-container make-cv
```

##### 挂载自定义配置文件（推荐）
```bash
# 挂载本地配置目录到容器内部的/app/config目录
docker run -d -p 3018:3018 -v $(pwd)/config:/app/config --name make-cv-container make-cv
```

##### 使用自定义端口
如果主机3018端口已被占用，可以使用其他端口：
```bash
# 使用8080端口映射到容器的3018端口
docker run -d -p 8080:3018 -v $(pwd)/config:/app/config make-cv
```

#### 3. 拉取预构建镜像
本项目已推送至 Dockerhub，也可以直接拉取使用：
```bash
# 拉取镜像
docker pull pinger68/make-cv:latest

# 运行容器
docker run -d -p 3018:3018 -v $(pwd)/config:/app/config pinger68/make-cv:latest
```

#### 4. 访问简历
运行容器后，可以通过以下方式访问简历：
- 基本运行：`http://服务器IP:3018`
- 自定义端口：`http://服务器IP:8080`（根据实际映射端口调整）

#### 5. 验证配置文件挂载
```bash
# 检查配置文件是否正确挂载
docker exec -it make-cv-container ls -la /app/config
```

#### 6. 检查容器日志
```bash
# 查看容器日志，确认服务正常运行
docker logs make-cv-container
```

#### 7. 容器管理命令
```bash
# 查看容器状态
docker ps

# 停止容器
docker stop make-cv-container

# 删除容器
docker rm make-cv-container
```

## 八、Nginx 配置说明

本项目包含自定义的 `nginx.conf` 文件，针对 React 单页应用和简历内容的特点进行了优化配置：

### 主要特性
- **React 单页应用支持**：配置 `try_files $uri $uri/ /index.html;` 确保所有路由请求都返回 index.html
- **正确的 MIME 类型设置**：为 YAML (.yaml/.yml) 和 Markdown (.md) 文件设置了正确的 Content-Type
- **智能缓存策略**：
  - 静态资源（CSS/JS/图片）缓存1年，提高加载速度
  - 配置文件和 Markdown 文件不缓存，确保实时更新
- **性能优化**：启用 gzip 压缩，支持多种文件类型的压缩

### 自定义 Nginx 配置
如果需要修改 Nginx 配置，可以直接编辑项目根目录下的 `nginx.conf` 文件，然后重新构建 Docker 镜像：

```bash
# 修改 nginx.conf 后重新构建镜像
docker build -t make-cv .
```

## 九、防缓存机制说明

为了确保配置文件和简历内容的实时更新，本项目在前端代码中实现了防缓存机制：

1. **URL 时间戳参数**：在 `App.jsx` 和 `ResumeContent.jsx` 组件中，为 fetch 请求添加了时间戳参数 `?t=` + Date.now()
2. **Nginx 配置配合**：Nginx 配置中明确指定 YAML 和 Markdown 文件不缓存
3. **实时加载**：每次页面刷新时，浏览器都会请求最新的配置文件和简历内容

### 验证防缓存机制
```bash
# 使用 curl 测试缓存头设置
curl -I http://localhost:3018/config/config.yml
# 应该看到：Cache-Control: no-cache, no-store, must-revalidate
```

## 十、贡献
如果你发现任何问题或有改进建议，欢迎提交 Issue 或 Pull Request。

## 十一、许可证
本项目采用 [MIT 许可证](LICENSE)。
