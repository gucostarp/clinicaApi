const { createConnection } = require('typeorm');

async function startDB() {
    try {
        await createConnection();
        console.log('Conectado ao Banco de Dados');
    } catch (error) {
        console.log('Erro ao conectar ao Banco de Dados', error);
    }
}

module.exports = { startDB };