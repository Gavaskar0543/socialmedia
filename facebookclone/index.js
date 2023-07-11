const express = require('express');
const port = 8000;
const app = express();
//db
const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
app.set('layout extractScripts',true);
app.set('layout extractStyles',true);
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/',require('./router'));
app.listen(port,function(err){
    if(err){
        console.log('error in running server');
        return;
    }
    console.log(`server is upon port ${port}`);
})