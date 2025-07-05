const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:1234',
  credentials: true
}));

// Proxy middleware for Swiggy API
app.use('/api/swiggy', createProxyMiddleware({
  target: 'https://www.swiggy.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/swiggy': ''
  },
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:1234';
    proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
  }
}));

// Proxy middleware for GitHub API
app.use('/api/github', createProxyMiddleware({
  target: 'https://api.github.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/github': ''
  },
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:1234';
    proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
  }
}));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
  console.log('Available proxy endpoints:');
  console.log('- /api/swiggy/* -> https://www.swiggy.com/*');
  console.log('- /api/github/* -> https://api.github.com/*');
}); 