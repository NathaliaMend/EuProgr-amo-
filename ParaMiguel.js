const express = require("express")
const router = express.Router()

const app = express()
const porta = 3390 

function mostraMensagem(request, response) {
   response.json("Te amo!")
}

function mostraPorta() {
    console.log('servidor criado e rodando na porta', porta)
} 

app.use(router.get('/mensagem', mostraMensagem))
app.listen(porta, mostraPorta)