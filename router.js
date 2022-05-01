const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const conexion = require('./database/db');


router.get( '/contacto', ( request, response ) => {
    conexion.query('SELECT * FROM users', ( error, results ) => {
        if ( error ) {
            throw error ;
        } else {
            response.send(results);
        }
    });
});

module.exports = router;