// make-cv/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'config/*', dest: 'config' },
      ],
    }),
  ],
  
  // 设置base路径，确保静态资源能正确加载
  base: './',
  
  server: {
    port: 3018,
    host: '0.0.0.0',
    allowedHosts: [
      'frp5.ccszxc.site',
      'localhost', 
      'all'
    ],
    open: true,   // 开启日志
    onListening(server) {
      const { port, host } = server.config;
      const domain = host === '0.0.0.0' ? 'localhost' : host;
      console.log(`服务运行成功：http://${domain}:${port}`);
    },
  },
  preview: {
    port: 3018,
    host: '0.0.0.0',
    // 更多功能需要的话自己扩展
  },
})