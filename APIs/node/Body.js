const express = require('express');


const app = express();
app.listen('3000')

//middLawere
app.use(express.json())

app.route('/').get( (req, res) => {
    const {nome, cidade} = req.body
    console.log(req.body)
    res.send(`o meu nome é ${nome} e minha dade é ${cidade}`)
} )