const serverless = require('serverless-http');
const express = require('express')
const app = express()

require("./routes/customer.routes.js")(app);

module.exports.handler = serverless(app);
