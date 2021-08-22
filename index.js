const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');

const flash = require('connect-flash');
const customMware = require('./config/middleware');

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'assets')));
app.use(expressLayout);

app.set('layout extractStyles', true);
app.set('layoutE extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(session({
    name: 'codeial',
    //TODO change secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },

}));

app.use(flash());
app.use(customMware.setFlash);


app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log('error in running the server', err);
    }
    console.log('Server running sucessfully on port:,port');
});
