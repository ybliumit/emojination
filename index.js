// setup server
const express = require('express');
const app     = express();
module.exports = app;
const low     = require('lowdb');
const fs      = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db      = low(adapter);
const cors = require('cors');

// setup directory used to serve static files
app.use(express.static('public'));
app.use(cors());





app.listen(3000, function(){
    console.log('Bad Bank 1.125 Branch running on port 3000!')
 })