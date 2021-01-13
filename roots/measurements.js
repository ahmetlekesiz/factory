const measurementRouter = require('express').Router()
const {sql, config} = require('../database/sql')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json() // create application/json parser

// Create Operation
/*
measurementRouter.post('/create', jsonParser, function (req, res) {

    var departmentID = parseInt(req.body.departmentID)
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var email = req.body.email
    var city = req.body.city
    var birthdate = req.body.birthdate

    var insertQuery = ` INSERT INTO Employee (DepartmentID, FirstName, LastName, Email, City, Birthdate) 
                        VALUES (${departmentID}, '${firstName}',  '${lastName}',  '${email}',  '${city}',  '${birthdate}')`

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
*/

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