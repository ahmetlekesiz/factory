const testRouter = require('express').Router()
const {sql, config} = require('../database/sql')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json() // create application/json parser

// Get Driving Test by Car ID
testRouter.get(`/driving/:carID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
        
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        var id = req.params.carID
        var query = 'EXEC GetFromCarID_DrivingTest ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
        });
    });
});

// Get Liquid Test by Car ID
testRouter.get(`/liquid/:carID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
        
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        var id = req.params.carID
        var query = 'EXEC GetFromCarID_LiquidTest ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
        });
    });
});

module.exports = testRouter