const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const dotenv = require("dotenv");

const stocksRoutes = require('./routes/stocks-routes'); 

const app = express(); 

dotenv.config(); 
 

app.use(bodyParser.json());
app.use('/api/stocks', stocksRoutes);

const db_connection = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mlcji9f.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(db_connection)
  .then(() => {
    app.listen(5000); 
  }) 
  .catch(err => {
    console.log(err); 
  })
