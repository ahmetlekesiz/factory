var sql = require("mssql");

// config for your database
var config = {
    user: 'admin',
    password: 'ben',
    server: 'DESKTOP-9J8F9OG', 
    database: 'FACTORY',
    "options": {
        "encrypt": true,
        "enableArithAbort": true
        }
};

module.exports = {sql, config}