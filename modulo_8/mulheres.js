const express = require("express") // Aqui estou iniciando o express
const router = express.Router() // Aqui  estou configurando a primera parte da rota
const { v4: uuidv4 } = require('uuid'); //coloquei outra biblioteca

const ConectaBancoDeDados = require('./BancoDeDados') // Liguei o arquivo banco de dados a esse
ConectaBancoDeDados() // chamando a funcao que conecta o banco de dados

const mulher = require('./mulherModel')
const app = express() // Aqui estou iniciando o app
app.use(express.json())
const porta = 3390 // Aqui estou criando a porta



//POST
function criaMulher(request, response){
    const novaMulher = {
        id:uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }
    mulheres.push(novaMulher)
    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }
    const mulherEncontrada = mulheres.find(encontraMulher)
    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }
    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }
    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }
    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id){
            return mulher
        }
    }
    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

//GET
async function mostraMulheres(request, response) {
    try{
         const MulheresVindasDoBancoDeDados = await mulher.find()
         response.json(MulheresVindasDoBancoDeDados)
    }catch (erro) {
         console.log(erro)
    }
}
//PORTA
function mostraPorta() {
    console.log('servidor criado e rodando na porta', porta)
} 

app.use(router.get('/mulheres', mostraMulheres)) // configurei rota GET/mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei rota POST/mulheres
app.listen(porta, mostraPorta) // Servidor ouvindo a porta
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota PATCH/mulheres
app.use(router.delete('/mulheres/:id', deletaMulher)) // configurei a rota DELETE/mulheres