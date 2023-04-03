const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// const cors = require('cors');
// const morgan = require('morgan');
const loggeduserRoute = require('./api/routes/loggeduser');
const assetRoute = require('./api/routes/asset')
const userRoute = require('./api/routes/user')

mongoose.connect('mongodb+srv://sbs:sbs123@cluster0.xzye9.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error', err =>{
    console.log('connection failed')
})
mongoose.connection.on('connected', connected=>{
    console.log('connected with databases...');
})

// app.use(cors());

// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.use('/loggeduser', loggeduserRoute);
app.use('/asset', assetRoute);
// app.use('/user', userRoute);

app.use('/', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = data.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);
  });


app.use((req, res, next) => {
    res.status(404).json({
        error:'bad request'
    })
})

module.exports = app