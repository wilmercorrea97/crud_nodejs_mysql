const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const conexion = require('./database/db');

// Mostrar los registros
router.get( '/', ( request, response ) => {
    
    conexion.query('SELECT * FROM users', ( error, results ) => {
        if ( error ) {
            throw error ;
        } else {
            response.render('index', { results:results } );
        }
    });
});

// Ruta para crear registros
router.get( '/create', ( request, response ) => {
    response.render('create');
});

// Ruta para editar registros
router.get( '/edit/:id', ( request, response )=> {
    const id = request.params.id;
    conexion.query('SELECT * FROM users where id=?',[id], ( error, results) => {
       
        if ( error ) {
            throw error ;
        } else {
            response.render('edit', { user:results[0] });
        }

    });

});

// Ruta para eliminar registro
router.get('/delete/:id', ( request, response ) => {
    const id = request.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
        if ( error ) {
            throw error ;
        } else {
            response.redirect('/');
        }
    });

});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update',crud.update);


module.exports = router;