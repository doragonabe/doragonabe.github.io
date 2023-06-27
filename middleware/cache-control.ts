// GitHub Pages非対応...残念！
/*
import {IncomingMessage, ServerResponse} from 'http';

export default defineEventHandler(event => {
  const res: ServerResponse<IncomingMessage> = event.node.res;
  const max_age: number = 3600; // 1時間
  const url: string = event.node.req.url ?? '';
  if (url) {
    if (url.match(/(.+)\.(.+)\.(css|js|webp)/)) {
      res.setHeader('Cache-Control', `max-age=${max_age}`);
    }
  }
});
*/
