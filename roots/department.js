const departmentRouter = require('express').Router()
const {sql, config} = require('../database/sql')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json() // create application/json parser


departmentRouter.post('/create', jsonParser, function (req, res) {
    var departmentName = req.body.departmentName
    var numberOfEmployees = '0'

    var insertQuery = ` INSERT INTO Department (DepartmentName, NumberOfEmployees) 
                        VALUES ('${departmentName}', '${numberOfEmployees}')`

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

departmentRouter.get('/', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT * FROM DEPARTMENT', function (err, recordset) {
          
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
            
        });
    });
  });

  departmentRouter.get(`/:departmentID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        
        var id = req.params.departmentID
        var query = 'SELECT * FROM DEPARTMENT WHERE DepartmentID = ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
          
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
            
        });
    });
  });



module.exports = departmentRouter