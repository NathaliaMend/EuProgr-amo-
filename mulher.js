const express = require("express")
const router = express.Router()

const app = express()
const porta = 3390 

function mostraMulher(request, response) {
   response.json( {
    nome: 'Nathalia Mendonca',
    imagem: 'https://github.com/account',
    minibio: 'Analista e Desenvolvedora de Sistemas'
   })
}

function mostraPorta() {
    console.log('servidor criado e rodando na porta', porta)
} 

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)