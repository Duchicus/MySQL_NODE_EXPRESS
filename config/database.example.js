const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'tu host',
    user: 'tu usuario',
    password: 'tu password',
    database: 'tu base de datos'
  });
  
  db.connect();

module.exports = db