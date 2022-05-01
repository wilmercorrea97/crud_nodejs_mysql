const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'crud_nodejs_db'
});

conexion.connect( ( error ) => {

    if ( error ) {
        console.error('El error de conexión es: ' + error);
        return 
    } 

    console.log('¡Conectado a la BD de MySql!');
});

module.exports = conexion;