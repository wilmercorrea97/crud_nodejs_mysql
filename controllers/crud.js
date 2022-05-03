const { request } = require('express');
const req = require('express/lib/request');
const conexion = require('../database/db');


exports.save = ( request, response ) => {
    const user = request.body.user;
    const rol = request.body.rol;

    conexion.query( 'INSERT INTO users SET ?', { usuario:user, rol:rol}, ( error, results) => {
        error ? console.log( error ) : response.redirect('/');
    });
};

exports.update = ( request, response ) => {

    const id = request.body.id;
    const user = request.body.user;
    const rol = request.body.rol;

    conexion.query('UPDATE users SET ? WHERE id = ?',[{usuario:user,rol:rol}, id], ( error, results ) => {
        error ? console.log( error ) : response.redirect('/');
    });
};