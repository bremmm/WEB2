const Inscricao = require('../models/Inscricao');

module.exports = {
    async salvar(req, res) {
        const { email } = req.body;
        const { nome } = req.body;
        const { endereco } = req.body;
        const { sexo } = req.body;
        const { dataNasc } = req.body;
        const { nomeMae } = req.body;
        const { cpf } = req.body;
        const { rg } = req.body;
        const { formacao } = req.body;
        const { naturalidade } = req.body;
        const { tel } = req.body;

        let inscricao = await Inscricao.findOne({ email });

        if (!inscricao) {
            inscricao = await Inscricao.create({
                email, nome, endereco, sexo, dataNasc,
                nomeMae, cpf, rg, formacao, naturalidade,
                tel
            });

            const fs = require('fs');

            var inscrito = {
                email: email,
                name: nome,
                endereco: endereco,
                sexo: sexo,
                dataNasc: dataNasc,
                nomeMae: nomeMae,
                cpf: cpf,
                rg: rg,
                formacao: formacao,
                naturalidade: naturalidade,
                tel: tel
            };

            let pastaSalvar = ("/home/felipe41/Documentos/UTFPR/5º Semestre/Programação Web 2/CCH/WEB2/backend/uploads/");

            let pastaInscrito = (pastaSalvar + nome);

            try {
                if (!fs.existsSync(pastaInscrito)) {
                    fs.mkdirSync(pastaInscrito)
                }
            } catch (err) {
                console.error(err)
            }

            fs.writeFile(pastaInscrito + "/" + nome + ".json", JSON.stringify(inscrito), function (err) {
                if (err) throw err;
                console.log('complete');
            }
            );

        } else {

        }

        return res.status(200).json(inscricao);
    }
};