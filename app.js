// Invocar express
const express = require('express');
const { json } = require('express/lib/response');
const app = express();

// Invocar motor de plantillas
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

// Invocando al router
app.use( '/', require('./router') );

app.listen(5000, () => {
    console.log('SERVER corriendo en http://localhost:5000');
});

