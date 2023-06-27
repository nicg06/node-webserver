require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port =process.env.PORT;



//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) =>{
  res.render('home', {
      nombre: 'Nilson',
      titulo: 'Curso de Node'
  });
});

app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Nilson',
    titulo: 'Curso de Node'
});
})

app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Nilson',
    titulo: 'Curso de Node'
});
})

app.get('*', (req, res)=> {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})