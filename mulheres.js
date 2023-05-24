const express = require("express") // Aqui estou iniciando o express
const router = express.Router() // Aqui  estou configurando a primera parte da rota
const { v4: uuidv4 } = require('uuid'); //coloquei outra biblioteca
const cors = require('cors') // aqui estou trazendo o pacote cors que oermite consumir essa API no front end

const ConectaBancoDeDados = require('./BancoDeDados') // Liguei o arquivo banco de dados a esse
ConectaBancoDeDados() // chamando a funcao que conecta o banco de dados

const Mulher = require('./mulherModel')
const app = express() // Aqui estou iniciando o app
app.use(express.json())
app.use(cors())
const porta = 3390 // Aqui estou criando a porta



//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher ( {
        id:uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citação: request.body.citação
    })
   try {
      const mulherCriada = await novaMulher.save()
      response.status(201).json(mulherCriada)
    }catch (erro) {
    console.log(erro)
   }
}

//PATCH
async function corrigeMulher(request, response) {
    try {
           const mulherEncontrada = await Mulher.findById(request.params.id) 

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
        if (request.body.citação) {
            mulherEncontrada = request.body.citação
        }
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json (mulherAtualizadaNoBancoDeDados)
    }catch (erro) {
        console.log(erro)
    }
    
   
}

//DELETE
async function deletaMulher(request, response) {
   try{
    await Mulher.findByIdAndDelete(request.params.id)
    response.json({menssagem: 'Mulher deletada com sucesso'})
   }catch (erro){
    console.log(erro)
   }
 
}

//GET
async function mostraMulheres(request, response) {
    try{
         const MulheresVindasDoBancoDeDados = await Mulher.find()
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