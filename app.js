import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

import express from 'express';
import hbs from 'hbs';
import 'dotenv/config';



const app = express()
const port = process.env.PORT;

// HANDLEBARS
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials', function(err) {});



//Servir contenido estático
app.use( express.static('public') )


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Sebastián Gossos',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Sebastián Gossos',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Sebastián Gossos',
        titulo: 'Curso de node'
    })
})

// app.get('/generic', (req, res) => {
//     res.sendFile( __dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//     res.sendFile( __dirname + '/public/elements.html')
// })

// app.get('*', (req, res) => {
//     res.sendFile( __dirname + '/public/back/404.html' );
// }) 

app.listen( port , () => {
    console.log(`Example app listenin on port ${ port } `)
})

