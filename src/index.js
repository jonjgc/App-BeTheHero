//Variável express recebe as funcionalidades de Express
const express = require('express');
const routes = require('./routes'); //o ./ é para referenciar que o arquivo routes está na mesma pasta que o index
const cors = require('cors');

//Instanciando a aplicação
const app = express(); 

/*O LINHA ABAIXO ESTÁ DIZENDO QUE, QUANDO O EXPRESS FOR NO CORPO DA REQUISIÇÃO 
(IMSOMNIA), CONVERTER O JSON EM UM OBJETO DO JAVASCRIPT, CASO NÃO SEJA FEITO ISSO
UTILIZANDO O CONSOLE.LOG, VAI MOSTRAR QUE ESTÁ INDEFINIDO */
app.use(cors());
app.use(express.json()); 

app.use(routes);

/*
  
get quer dizer que a rota é acessível através do método get 

MÉTODOS HTTP:
 * GET - Buscar/Listar uma informação
 * POST - Criar uma informação do Backend
 * PUT - alterar uuma informação no backend
 * Delete - Deletar uma informação no Backend
 
*/

/*
        TIPOS DE PARÂMETROS/ROTAS:

 * QUERY PARAMS: PARAMETROS NOMEADOS NA ROTA APÓS O "?"  (FILTROS, PAGINAÇÃO)     
 * ROUTE PARAMS: PARÂMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS
 * REQUEST BODY: CORPO DA REQUISIÇÃO, UTILIZADO PARA CRIAR OU ALTERAR RECURSOS
 *  
 */ 

 /*
* SQL: MySQL, SQLite, PostgreeSQL, Mycrosoft SQL Server
* NoSQL: MongoDB, CounchDB, etc...
 */



app.listen(3333);