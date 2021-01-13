var express = require('express');
var app = express();
var swaggerJsdoc = require("swagger-jsdoc")
var swaggerUi = require("swagger-ui-express");
var swaggerDocument = require('./swagger.json');
const {sql, config} = require('./database/sql');
const employeeRouter = require('./roots/employee')
const departmentRouter = require('./roots/department');

// use routers
app.use('/employees', employeeRouter)
app.use('/departments', departmentRouter)

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



