const express = require("express")
const router = express.Router()

const app = express()
const porta = 3390 

const mulheres = [
    {
        nome: 'nathalia mendonca',
        imagem: 'https://lh3.google.com/pw/AJFCJaUAWZfqGT5Sg7lV6J4DuXwcWbnNTbc8QW_f7bKjNHuwo4Ipcy4qpg5_o3cQ2VNk_3YSQvWZVPWbZAf9QN5QYv0htls6BAs=w493-h657-s-no?authuser=1',
        minibio: 'Analista e desenvolvedora de sistemas'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://pbs.twimg.com/profile_images/1420905428452524037/DURvAmKN_400x400.jpg',
        minibio: 'Fundadora do programaria'

    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://www.fundacaotelefonicavivo.org.br/wp-content/uploads/2022/11/10-ninadahora800x500mobile.png',
        minibio: 'cientista da computacao'
    }
]

function mostraMulheres(request, response) {
   response.json(mulheres)
}

function mostraPorta() {
    console.log('servidor criado e rodando na porta', porta)
} 

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)