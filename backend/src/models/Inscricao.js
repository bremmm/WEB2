const mongoose = require('mongoose');

const InscricaoSchema = new mongoose.Schema({
    email: String,
    nome: String,
    endereco: String,
    sexo: Boolean,
    dataNasc: Date,
    nomeMae: String,
    cpf: String,
    rg: String,
    formacao: String,
    naturalidade: String,
    tel: String
});

module.exports = mongoose.model('Inscricao', InscricaoSchema);