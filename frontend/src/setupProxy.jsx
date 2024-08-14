// src/setupProxy.js
import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
  // Proxy for API requests
  app.use(
    '/api', // This is the path to be proxied
    createProxyMiddleware({
      target: 'http://localhost:5000', // Your backend server URL
      changeOrigin: true,
      pathRewrite: { '^/api': '' }, // Rewrites the URL path (optional)
    })
  );
}
