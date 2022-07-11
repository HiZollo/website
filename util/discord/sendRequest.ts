import https from 'https';

export interface DiscordAPIRequest {
  path: string,
  token: string,
  data?: string,
  method?: RequestMethod
}

export async function sendDiscordAPIRequest({ 
  path, 
  token, 
  data = '', 
  method = RequestMethod.GET
}: DiscordAPIRequest): Promise<string> {
  const header = (data.length) ? {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  }: {}

  return new Promise((resolve, reject) => {
    const req = https.request({
      protocol: 'https:',
      host: 'discord.com',
      path: path,
      headers: {
        Authorization: `Bot ${token}`,
        "User-Agent": "DiscordBotWebsite HiZollo",
        ...header
      },
      method: RequestMethod[method]
    }, res => {
      let data = '';

      res.on('error', err => {
        reject(err);
      });

      res.on('data', chunk => {
        data += chunk;
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('REQUEST_TIMEOUT'));
      });

      res.on('end', () => {
        resolve(data);
      });
    });

    if (data) req.write(data);
    req.end();
  });
}

export enum RequestMethod {
  GET, POST, PUT, DELETE, PATCH
}