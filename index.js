var express = require('express');
var app = express();
var path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'client', '/assets/')));
app.use('/css', express.static(path.join(__dirname, 'client', '/css/')));
app.use('/js', express.static(path.join(__dirname, 'client', '/js/')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/')));

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'));

const defaultPortNumber = 3000;
console.log('App listening to on port ' + (process.env.PORT ? process.env.PORT : defaultPortNumber) + '...' );
app.listen(process.env.PORT || defaultPortNumber);