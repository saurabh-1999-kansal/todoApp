const express = require('express');
const port = 8000;
const app = express();
const path=require('path');
const db=require('./config/mongoose');

app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

console.log('we are in main index file');
app.use('/',require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log('error in running the server', err);
    }
    console.log('Server running sucessfully on port:,port');
});
