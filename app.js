// Invocar express
const express = require('express');
const app = express();

// Invocar motor de plantillas
app.set('view engine', 'ejs');

// Invocando al router
app.use( '/', require('./router') );

app.listen(5000, () => {
    console.log('SERVER corriendo en http://localhost:5000');
});

