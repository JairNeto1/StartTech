"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = require("query-string");
var fs_1 = require("fs");
var http_1 = require("http");
var port = 5000;
var server = http_1.createServer(function (request, response) {
    var urlparse = query_string_1.parse(request.url ? request.url : '', true);
    var resposta;
    // Receber informações do usuarios
    var params = query_string_1.parse(urlparse.search ? urlparse.search : '', true);
    // Criar usuário - Atualizar usuário
    if (urlparse.pathname == '/criar-atualizar-usuario') {
        // Salvar as informações
        fs_1.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log('Saved!');
            resposta = 'usuario criado/atualizado com sucesso.';
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(resposta);
        });
    }
});
// Execução
server.listen(port, function () {
    console.log("Server is running on port " + port);
});
