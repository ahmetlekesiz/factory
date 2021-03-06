const measurementRouter = require('express').Router()
const {sql, config} = require('../database/sql')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json() // create application/json parser

measurementRouter.post('/rubbersilicone/create', jsonParser, function (req, res) {

    var maxPressure = parseFloat(req.body.maxPressure)
    var minPressure = parseFloat(req.body.minPressure)
    var companyID = req.body.companyID
    var m = new Date()
    var dateString = m.getUTCFullYear() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCDate()

    var insertQuery = ` INSERT INTO Rubber_Silicone_Measurement (MeasurementDate, MaxPressure, MinPressure, CompanyID) 
                        VALUES ('${dateString}', ${maxPressure},  ${minPressure},  '${companyID}')`
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


// Get Rubber Measurement by Car ID
measurementRouter.get(`/rubbersilicone/:carID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
        
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        var id = req.params.carID
        var query = 'EXEC GetFromCarID_RubberSiliconeMeasurement ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
        });
    });
});

// Get Door Lock Measurement by Car ID
measurementRouter.get(`/doorlock/:carID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
        
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        var id = req.params.carID
        var query = 'EXEC GetFromCarID_DoorLockMeasurement ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
        });
    });
});

// Get Geometric Body Measurement by Car ID
measurementRouter.get(`/geometricbody/:carID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
        
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        var id = req.params.carID
        var query = 'EXEC GetFromCarID_GeometricBodyMeasurement ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
        });
    });
});

// Get Carello Measurement by Car ID
measurementRouter.get(`/carello/:carID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
        
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        var id = req.params.carID
        var query = 'EXEC GetFromCarID_CarelloMeasurement ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
        });
    });
});

// Get Montage Measurement by Car ID
measurementRouter.get(`/montage/:carID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
        
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        var id = req.params.carID
        var query = 'EXEC GetFromCarID_MontageMeasurement ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
        });
    });
});

// Get Steer Measurement by Car ID
measurementRouter.get(`/steer/:carID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
        
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        var id = req.params.carID
        var query = 'EXEC GetFromCarID_SteerMeasurement ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
        });
    });
});


module.exports = measurementRouter