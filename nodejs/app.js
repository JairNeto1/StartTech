const http = require('http')
const queryString = require('query-string')
const url = require('url')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

// Implementação da regra de negócio
const server = http.createServer((req, res) => {
  var resposta
  var fs = require('fs')
  const urlparse = url.parse(req.url, true)

  // Receber informações do usuário
  const params = queryString.parse(urlparse.search)

  // Criar umusuário / Atualizar usuário
  if (urlparse.pathname == '/criar-usuario') {
    fs.writeFile(
      'users/' + params.id + '.txt',
      JSON.stringify(params),
      function (err) {
        if (err) throw err
        console.log('Saved!')

        resposta = 'Usuario criado/atualizado com sucesso.'

        // Selecionar umusuário
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(resposta)
      }
    )

    resposta = 'Usuario criado com sucesso'
  }
  // Salvar as Informações
  else if (urlparse.pathname == '/selecionar-usuario') {
    fs.readFile('users/' + params.id + '.txt', function (err, data) {
      resposta = data

      // Selecionar umusuário
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(resposta)
    })
  }
  // Remover usuário
  else if (urlparse.pathname == '/remover-usuario') {
    fs.unlink('users/' + params.id + '.txt', function (err) {
      console.log('File deleted!')

      resposta = err
        ? 'Usuario nao encontrado.'
        : 'Usuario removido com sucesso.'

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(resposta)
    })
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// http://localhost:3000/criar-usuario?id=
// http://localhost:3000/selecionar-usuario?id=
// http://localhost:3000/remover-usuario?id=
