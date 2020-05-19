//IMPORTANDO ARQUIVOS
const knex = require('knex');
const configuration = require('../../knexfile'); 



//FAZENDO A CONEXÃO COM O KENX, PASSANDO PRA ELE POR PARÂMETRO O CONFIGURATION.DEVELOPMENT
//QUE ESTÁ NO ARQUIVO KNEXFILES
const connection = knex(configuration.development);

//EXPORTANDO A CONEXÃO FEITA
module.exports = connection;

