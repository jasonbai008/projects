/**
 * 这是一个极简的 Service Worker，用于满足 PWA 安装要求。
 * 浏览器要求必须有一个注册成功的 Service Worker，且包含 fetch 事件监听器。
 */

const CACHE_NAME = 'jbai-projects-v1';

// 安装阶段：可以预缓存一些静态资源
self.addEventListener('install', (event) => {
  // 强制跳过等待，直接激活
  self.skipWaiting();
});

// 激活阶段
self.addEventListener('activate', (event) => {
  // 立即接管所有客户端
  event.waitUntil(clients.claim());
});

// 关键点：必须包含 fetch 事件监听器，哪怕它只是透传请求
self.addEventListener('fetch', (event) => {
  // 这里可以添加缓存逻辑，目前直接透传
  event.respondWith(fetch(event.request));
});
