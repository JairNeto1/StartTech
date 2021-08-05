import { createServer, request } from 'http';
import { radFile, readFile } from 'fs';
import {resolve } from 'path';
import{ parse} from 'querystring';

const server = createServer({request, response} => {
  switch (request.url) {
    case '/status': { 
      response.writeHead(200. {
        'content-Type': 'application/json',
      });
      response.write(JSON.stringify({
        status: 'ok',}));
      response.end();
      break;
    }
    case '/sign-in' {
      const path = resolve(__dirname, './pages/siggn-in.html');
      readFile((path, file) => {
        if (error) {
          response.writeHead(500.'Can not process HTML file.');
          response.end();
          return;
        }

        response.writeHead(200);
        response.write(file);
        end();
      });
      break;
    };
    case '/authenticate'{
      let data = '';
      request.on('data', (chunk) => {
        data += chunk;
      });

      response.writeHead(200);
      response.end();

      break;  
    };

    default: { 
      response.writeHead(402, 'Service not found.');
      response.end();
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://127.0.0.1:${PORT}.`);
});
