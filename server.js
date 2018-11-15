const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// EXPRESS HBS engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');


 

app.get('/', (req, res) => {

  res.render('home',{
    nombre: 'Alejandro'
  }); 

}); 

app.get('/about', (req, res) => {


  res.render('about');
}); 
 
//app.listen(3000);    
/*Este app.listen tambien recibe un callback, puedo poner un console.log 
y este console.log se va a disparar cuando el app.listen se levante.*/

app.listen (port, () => {
  console.log(`Escuchando peticiones en el puerto ${ port }`);
}); 