const employeeRouter = require('express').Router()
const {sql, config} = require('../database/sql')

employeeRouter.get('/', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT * FROM EMPLOYEE', function (err, recordset) {
          
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
            
        });
    });
  });

  employeeRouter.get(`/:employeeID`, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        
        var id = req.params.employeeID
        var query = 'SELECT * FROM EMPLOYEE WHERE EmployeeID = ' + id
        // query to the database and get the records
        request.query(query, function (err, recordset) {
          
            if (err) console.log(err)
            // send records as a response
            res.send(recordset.recordsets);
            
        });
    });
  });



module.exports = employeeRouter