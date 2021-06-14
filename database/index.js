const { createConnection } = require('typeorm');

module.exports = async function startDB() {
    try {
        await createConnection();
        console.log('Conectado ao Banco de Dados');
    } catch (error) {
        console.log('Erro ao conectar ao Banco de Dados', error);
    }
};