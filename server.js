var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var swaggerJsdoc = require("swagger-jsdoc")
var swaggerUi = require("swagger-ui-express");
var swaggerDocument = require('./swagger.json');
const employeeRouter = require('./roots/employee')
const {sql, config} = require('./database/sql')


// use routers
app.use('/employees',employeeRouter)

// SQL 


// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        var tableName = 'Course'
        var valueList = []
        valueList.add('CSE400')
        // query to the database and get the records
        request.query('INSERT INTO ' + tableName +' VALUES(\'CSE400\', \'Webden Insert\', 3)', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

app.post('/addEmployee', jsonParser, function (req, res) {

    var departmentID = parseInt(req.body.departmentID)
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var email = req.body.email
    var city = req.body.city
    var birthdate = req.body.birthdate

    var insertQuery = ` INSERT INTO Employee (DepartmentID, FirstName, LastName, Email, City, Birthdate) 
                        VALUES (${departmentID}, '${firstName}',  '${lastName}',  '${email}',  '${city}',  '${birthdate}')`

    console.log(insertQuery)

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

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/books",
        },
      ],
    },
    apis: ["./routes/books.js"],
  };
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


var server = app.listen(5000, function () {
    console.log('Server is running..');

});



