const port = 3000

const express = require('express');
const app = express();

function config(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next() 
    // Sin next la app no responde
    //https://miro.medium.com/max/1358/1*4nJJgPOnlJwD6s-7ygqgTg.jpeg
}

app.use(express.json());
app.use(config)

app.get('/v1', function (req, res) {
    res.status(403)
    res.send(JSON.stringify({ status: "v1 get" }))
});

app.post('/v1', function (req, res) {
    res.status(403)
    res.send(JSON.stringify({ status: "v1 post" }))
});

app.put('/v1', function (req, res) {
    res.status(403)
    res.send(JSON.stringify({ status: "v1 put" }))
});

app.patch('/v1', function (req, res) {
    res.status(403)
    res.send(JSON.stringify({ status: "v1 path" }))
});

app.delete('/v1', function (req, res) {
    res.status(403)
    res.send(JSON.stringify({ status: "v1 delete" }))
});

app.listen(port, () => {
    console.log(`Server en el puerto ${port}`)
});

app.route('/usuarios')
    .get(function (req, res) {
        res.send('Petición GET usuarios');
    })
    .post(function (req, res) {
        res.send('Petición POST usuarios');
    })
    .put(function (req, res) {
        res.send('Petición PUT usuarios');
    });