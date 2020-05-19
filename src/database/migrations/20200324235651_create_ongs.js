
exports.up = function(knex) { //MÉTODO UP É RESPONSAVEL POR EXECUTAR A TABELA
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  }); 
};

exports.down = function(knex) { //MÉTODO DOWN É RESPONSÁVEL DE DELETAR UMA TABELA CASO DÊ ALGUM ERRO FUTURO
  return knex.schema.dropTable('ongs');
};
