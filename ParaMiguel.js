const express = require("express")
const router = express.Router()

const app = express()
const porta = 3390 

function mostraMensagem(request, response) {
   response.json("Te amo, Miguel!")
}

function mostraPorta() {
    console.log('servidor criado e rodando na porta', porta)
} 

app.use(router.get('/para-alguem-especial', mostraMensagem))
app.listen(porta, mostraPorta)