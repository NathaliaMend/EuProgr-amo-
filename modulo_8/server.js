const express = require("express")// Computador, va no pacote express e guarde todos os poderes de servidor do Node na constante express.

const app = express()// Agora, chame a funcao express pra criar uma aplicacao e guarde na constante app
const porta = 3390 // Defini um numero para a porta

function mostraPorta() {
    console.log('servidor criado e rodando na porta', porta)
} // Defini uma funcao mostraPorta

app.listen(porta, mostraPorta) //Computador, faca esse app escutar, ou seja , chame a funcao listen informando o endereco da porta e o identificador da funcao mostraPorta.