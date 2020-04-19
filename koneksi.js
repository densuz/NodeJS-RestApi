var mysql = require('mysql');

//Create Koneksi Database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin123',
    database:'db_restapi',
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Terkoneksi');

});

module.exports = conn;