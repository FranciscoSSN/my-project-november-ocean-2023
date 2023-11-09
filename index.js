const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function(req, res) {
    res.send('Chico')
})

app.get('/oi', function(req, res){
    res.send('ahhhh')
})

const list = ["Chico", "Francisco", "Flavia", "Raquel"]

app.get('/item', function(req, res) {
    res.send(list)
})

app.get('/item/:id', function(req, res){
    const id = req.params.id - 1
    const item = list[id]

    res.send(item)
})

// adicionado novo dado na memoria da lista
app.post('/item', function(req, res) {
    const item = req.body.nome

    list.push(item)

    res.send("Adicionado com sucesso")

})

app.put('/item/:id', function(req, res) {
    const id = req.params.id - 1

    const novoItem = req.body.nome

    list[id] = novoItem

    res.send("Atualizado")
})

app.delete('/item/:id', function(req, res) {
    const id = req.params.id - 1

    delete list[id]

    res.send("Delete")
})

app.listen(3000, () => console.log("rodando"))