const mongoose = require('mongoose');
//database
//mongoose.connect("mongodb+srv://gavaskar:V.gu2PSzC7cLWLa@cluster0.jivfwuj.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect('mongodb+srv://gavaskar:V.gu2PSzC7cLWLa@cluster0.9lt2ej0.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting mongodb'));

//once connected
 db.once('open',function(){
    console.log('MongoDB connected :: Successfully!');
 })

 module.exports = db;