const { getConnection } = require('typeorm');

const getAtendimentos = async() => {

    const findArguments = { relations: ['cliente', 'especialista'] };

    // Verifica se existe algum filtro para seleção
    if (dataAtendimentos) { findArguments.where = dataAtendimentos; }

    const atendimentoRepository = getConnection().getRepository('Atendimento');
    const atendimentos = await atendimentoRepository.find(findArguments);
    return (atendimentos);
};

const getAtendimento = async(id) => {

    const atendimentoRepository = getConnection().getRepository('Atendimento');
    const atendimento = await atendimentoRepository.findOne(id, { relations: ['cliente', 'especialista'] });
    return (atendimento);

};
const updateAtendimento = async(id, fields) => {

    const atendimentoRepository = getConnection().getRepository('Atendimento');
    await atendimentoRepository.update(id, fields, { relations: ['cliente', 'especialista'] });
    return getAtendimento(id);
};


const deleteAtendimento = async(id) => {
    const atendimentoRepository = getConnection().getRepository('Atendimento');
    await atendimentoRepository.delete(id);
    return { message: 'Atendimento excluído' };
};

const insertAtendimento = async(atendimento) => {

    const atendimentoRepository = getConnection().getRepository('Atendimento');
    const insertedAtendimento = await atendimentoRepository.save(atendimento);
    return insertedAtendimento;
};


module.exports = {
    getAtendimentos,
    getAtendimento,
    insertAtendimento,
    updateAtendimento,
    deleteAtendimento,
};