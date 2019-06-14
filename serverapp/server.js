//depencies

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
//database
const config = require('./config');
const port = process.env.PORT || 4000;
const cors = require('cors');
const userRouters=require('./routes/account');
mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/accounts',userRouters)
app.listen(port, function(){
    console.log('Listening on port ' + port);
   });