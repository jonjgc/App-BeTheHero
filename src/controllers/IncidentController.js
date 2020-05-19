const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //COMPARANDO TABELAS
        .limit(5) //VAI RETORNAR APENAS 5 INCIDENTES
        .offset((page -1) * 5)
        .select(['incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params; //PEGAR O ID DO REQUEST PARAMS, QUE É PARÂMETRO DE ROTA
        const ong_id = request.headers.authorization; //ID DA ONG LOGADA

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first(); //VAI ME RETORNAR APENAS UM RESULTADO

            if (incident.ong_id !== ong_id) { //se o ong_id do incident que foi buscado no banco de dados for diferente do ong_id que está logado na aplicação
                return response.status(401).json({ error: 'Operation not permitted.' });
            }

            await connection('incidents').where('id', id).delete();

            /*STATUS 204 É QUANDO NÃO TEM NADA PARA RETORNAR */
            return response.status(204).send();
    }
};