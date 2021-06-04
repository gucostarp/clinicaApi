const { getConnection } = require('typeorm');

const getProntuarios = async() => {

    const prontuarioRepository = getConnection().getRepository('Prontuario');
    const prontuarios = await prontuarioRepository.find({ relations: ['cliente'] });
    return (prontuarios);
};

const getProntuario = async(id) => {

    const prontuarioRepository = getConnection().getRepository('Prontuario');
    const prontuario = await prontuarioRepository.findOne(id, { relations: ['cliente'] });
    return (prontuario);
};

const updateProntuario = async(id, fields) => {

    const prontuarioRepository = getConnection().getRepository('Prontuario');
    await prontuarioRepository.update(id, fields);
    return getProntuario(id);
};

const deleteProntuario = async(id) => {
    const prontuarioRepository = getConnection().getRepository('Prontuario');
    await prontuarioRepository.delete(id);
    return { message: 'Prontuario excluído' };
};

const insertProntuario = async(prontuario) => {

    const prontuarioRepository = getConnection().getRepository('Prontuario');
    const insertedProntuario = await prontuarioRepository.save(prontuario);
    return insertedProntuario;
};

module.exports = {
    getProntuarios,
    getProntuario,
    insertProntuario,
    updateProntuario,
    deleteProntuario,
};