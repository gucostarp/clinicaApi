const { getConnection } = require('typeorm');

const getProfissoes = async() => {
    const profissaoRepository = getConnection().getRepository('Profissao');
    const profissoes = await profissaoRepository.find();
    return (profissoes);
};

const getProfissao = async(id) => {

    const profissaoRepository = getConnection().getRepository('Profissao');
    const especialista = await profissaoRepository.findOne(id);
    return (especialista);

};
const updateProfissao = async(id, fields) => {

    const profissaoRepository = getConnection().getRepository('Profissao');
    await profissaoRepository.update(id, fields);
    return getProfissao(id);
};


const deleteProfissao = async(id) => {
    const profissaoRepository = getConnection().getRepository('Profissao');
    await profissaoRepository.delete(id);
    return { message: 'Profissao excluído' };
};

const insertProfissao = async(profissao) => {

    const profissaoRepository = getConnection().getRepository('Profissao');
    const insertedProfissao = await profissaoRepository.save(profissao);
    return insertedProfissao;
};


module.exports = {
    getProfissoes,
    getProfissao,
    insertProfissao,
    updateProfissao,
    deleteProfissao,
};