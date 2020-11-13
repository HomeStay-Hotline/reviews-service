const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'huskies4405',
    database: 'reviews'
});

connection.connect((err) => {
    if (err) {
        console.log('error connecting ', err);
    }
})

module.exports.connection = connection;