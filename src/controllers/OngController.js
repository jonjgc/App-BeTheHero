const crypto = require('crypto'); //CRIAR UM ID PARA O USUÁRIO
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
    
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; 

    //VAI GERAR UM ID RANDOMICAMENTE DE 4 BYTES, 
    //E DPS CONVERTER PARA UMA STRING DO TIPO HEXADECIMAL, GERANDO APENAS LETRAS 
    const id = crypto.randomBytes(4).toString('HEX');

    //COM O CONNECTION, USA COMO PARÂMETRO A TABELA ONGS PARA INSERIR DADOS

    /*AWAIT É USADO PARA QUE A FUNÇÃO RESPONSE.JASON() SEJA EXECUTADA APENAS
      QUANDO FOREM PREENCHIDO OS DADOS ABAIXO (ID, NAME..)  
    */ 
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })


    return response.json({ id }); //DEVOLVE APENAS O ID    

    }
};