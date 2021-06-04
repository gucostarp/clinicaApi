const { getConnection } = require('typeorm');

const getEspecialistas = async() => {

    const especialistaRepository = getConnection().getRepository('Especialista');
    const especialistas = await especialistaRepository.find({ relations: ['profissao'] });
    return (especialistas);
};

const getEspecialista = async(id) => {

    const especialistaRepository = getConnection().getRepository('Especialista');
    const especialista = await especialistaRepository.findOne(id, { relations: ['profissao'] });
    return (especialista);

};

const updateEspecialista = async(id, fields) => {

    const especialistaRepository = getConnection().getRepository('Especialista');
    await especialistaRepository.update(id, fields);
    return getEspecialista(id);
};


const deleteEspecialista = async(id) => {
    const especialistaRepository = getConnection().getRepository('Especialista');
    await especialistaRepository.delete(id);
    return { message: 'Especialista excluído' };
};

const insertEspecialista = async(especialista) => {

    const especialistaRepository = getConnection().getRepository('Especialista');
    const insertedEspecialista = await especialistaRepository.save(especialista);
    return insertedEspecialista;
};

module.exports = {
    getEspecialistas,
    getEspecialista,
    insertEspecialista,
    updateEspecialista,
    deleteEspecialista,
};