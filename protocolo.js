application.get('/inspecionar', (req, res) => {
    console.log("nova requisição recebida!")
    console.log("metodo:" req.method);
    console.log("URL: req.url");
    console.log("cabeçalho ", req.headers);

    res.send('Requisição recebida! veja o terminal.');
});

res.status(404).send