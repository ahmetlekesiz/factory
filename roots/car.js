const carRouter = require('express').Router()
const {sql, config} = require('../database/sql')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json() // create application/json parser

// Read
carRouter.get('/', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
           
        // Run Car and Measurements View
        request.query('SELECT * FROM Car_With_Measurements', function (err, recordset) {
          
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
            
        });
    });
  });

  module.exports = carRouter