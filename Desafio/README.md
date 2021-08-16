# Desafio do programa Full Sstack StartTech

## Frontend

### Fase 1 - Criação da Página

- [x] Apresentar a estrutura do projeto no github;
- [x] Landing page com formulário para preenchimento de candidatura.
- Não existe uma regra para o layout da página, use a imaginação com todos os conhecimentos adquiridos no front-end
- Indicamos o `Netlify` para hospedar sua pagina gratuitamente.

<a href='https://drive.google.com/file/d/1S3Y6otnW2tQLsX1aSgXL5bZuzPbt4rWS/view/' target='_blank'>->Link do Template</a>

## Backend

### Domínio - Modelagem de Dados

- [ ] Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos.
- [ ] Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep) NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link: https://viacep.com.br/ws/{SEU_CEP}/json/

### Regra de Negócio

- Não pode haver 2 cadastros de candidatos com o mesmo cpf;
- Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular

### Integração entre a Página de Formulário e o Back-end

- Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados.
- Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.
