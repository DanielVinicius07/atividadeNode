const express = require('express');

const app = express();

app.get('/'), (req,res =>{
    res.send('Olá, Mundo');
});

app.get('/'), (req,res =>{
    res.send('#home');
});

app.get('/about'), (req,res =>{
    res.send('#about');
});

app.get('/features'), (req,res =>{
    res.send('#features');
});

app.get('/contact'), (req,res =>{
    res.send('#contact');
});