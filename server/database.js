const mysql = require('mysql');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database: 'crud-operations',
    password:'Mysql@1010'
});

module.exports = pool;