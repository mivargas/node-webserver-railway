const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
//const port = 3800; //DOTENV
port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servidor de contenido estatico
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res)=>{
    res.render('home', {
        nombre:'Miguel',
        titulo: 'node'
    });
});

app.get('/generic', (req, res)=>{
    res.render('generic', {
        nombre:'Miguel',
        titulo: 'node'
    });
});

app.get('/elements', (req, res)=>{
    res.render('elements', {
        nombre:'Miguel',
        titulo: 'node'
    });
});

app.listen(port, ()=>{
    console.log(`listen http://localhost:${port}`);
});