# Dockerfile
# 第一阶段：构建应用
FROM node:24-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装生产依赖
RUN npm install --production

# 复制项目文件
COPY . .

# 构建应用
RUN npm run build

# 第二阶段：创建静态文件服务器镜像
FROM nginx:alpine

# 复制构建产物到Nginx的静态文件目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制配置文件到Nginx配置目录
COPY config /usr/share/nginx/html/config

# 暴露端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]