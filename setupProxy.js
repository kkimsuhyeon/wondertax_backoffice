import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://wondertax.du.r.appspot.com',
      changeOrigin: true,
    })
  );
}
