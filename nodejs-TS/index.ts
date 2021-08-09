import { parse } from "query-string";
import * as  url from "url";
import { writeFile } from "fs";
import { createServer, IncomingMessage, ServerResponse } from "http";


const port = 5000; 

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  
  const urlparse = parse(request.url ? request.url : '', true);

  var resposta;

  // Receber informações do usuarios
  const params = parse(urlparse.search ? urlparse.search : '', true);

  // Criar usuário - Atualizar usuário
  if(urlparse.pathname == '/criar-atualizar-usuario') {

    // Salvar as informações
    writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
      if (err) throw err;
      console.log('Saved!');

      resposta = 'usuario criado/atualizado com sucesso.'

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain')
      res.end(resposta);
    })
    
  }



  

})

// Execução
server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})