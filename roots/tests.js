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

testRouter.post('/liquid/create', jsonParser, function (req, res) {

    var WaterTest = parseInt(req.body.WaterTest)
    var OilTest = parseInt(req.body.OilTest)
    var FuelTest = parseInt(req.body.FuelTest)
    var TestEmployee = parseInt(req.body.TestEmployee)
    var m = new Date()
    var dateString = m.getUTCFullYear() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCDate()

    var insertQuery = ` INSERT INTO Liquid_Test (TestDate, TestEmployee, OilTest, WaterTest, FuelTest) 
                        VALUES ('${dateString}', ${TestEmployee},  ${OilTest},  ${WaterTest}, ${FuelTest})`
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query(insertQuery, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

module.exports = testRouter