const express = require('express');

const app = express();

const porta = 3000

app.get('/'), (req,res =>{
    res.send('Olá, Mundo');
});

app.get('/Home'), (req,res =>{
    res.send('#home');
});

app.get('/api/produtos', (req, res) => {
    res.json([
        {
            "id": 1,
            "produto": "mouse",
            "estoque":
        }
        {"id": 2,
            "produto": "mouse",
            "estoque":101}
        {"id": 3,
            "produto": "mouse",
            "estoque":1021}
        {"id": 4,
            "produto": "mouse",
            "estoque":12}
    ]);
}
    app.listen(porta);

app.get('/features'), (req,res =>{
    res.send('#features');
});

app.get('/contact'), (req,res =>{
    res.send('#contact');
});

