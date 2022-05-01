const conexion = require('../database/db');


exports.save = ( request, response ) => {
    const user = request.body.user;
    const rol = request.body.rol;

    conexion.query( 'INSERT INTO users SET ?', { usuario:user, rol:rol}, ( error, results) => {
        if( error ) {
            console.log( error )
        } else {
            response.redirect('/');
        }

    });
};