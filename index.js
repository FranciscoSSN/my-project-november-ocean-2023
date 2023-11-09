const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Chico')
})

app.get('/oi', function(req, res){
    res.send('ahhhh')
})

const list = ["Chico", "Francisco", "Flavia", "Raquel"]

app.get('/item', function(req, res) {
    res.send("lendo todos")
})

app.listen(3000, () => console.log("rodando"))