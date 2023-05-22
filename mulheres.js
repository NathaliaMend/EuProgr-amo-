const express = require("express") // Aqui estou iniciando o express
const router = express.Router() // Aqui  estou configurando a primera parte da rota
const { v4: uuidv4 } = require('uuid'); //coloquei outra biblioteca

const app = express() // Aqui estou iniciando o app
app.use(express.json())
const porta = 3390 // Aqui estou criando a porta


// Aqui foi criado a lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'nathalia mendonca',
        imagem: 'https://lh3.google.com/pw/AJFCJaUAWZfqGT5Sg7lV6J4DuXwcWbnNTbc8QW_f7bKjNHuwo4Ipcy4qpg5_o3cQ2VNk_3YSQvWZVPWbZAf9QN5QYv0htls6BAs=w493-h657-s-no?authuser=1',
        minibio: 'Analista e desenvolvedora de sistemas'
    },
    {
        id:'2',
        nome: 'Iana Chan',
        imagem: 'https://pbs.twimg.com/profile_images/1420905428452524037/DURvAmKN_400x400.jpg',
        minibio: 'Fundadora do programaria'

    },
    {
        id:'3',
        nome: 'Nina da Hora',
        imagem: 'https://www.fundacaotelefonicavivo.org.br/wp-content/uploads/2022/11/10-ninadahora800x500mobile.png',
        minibio: 'cientista da computacao'
    }
]

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
function mostraMulheres(request, response) {
   response.json(mulheres)
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