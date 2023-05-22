const mongoose = require('mongoose')

async function ConectaBancoDeDados() {
    try{
        console.log('Conexao com o banco de dados iniciou')

    await mongoose.connect('mongodb+srv://nathaliamend017:59fXeVUtl4wSKy7L@clustermulheres.q0ezkni.mongodb.net/?retryWrites=true&w=majority')

    console.log('Conexao com o banco de dados feita com sucesso!')
    } catch (erro) {
        console.log(erro)
    }
}

module.exports = ConectaBancoDeDados