const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const config = require('./config')
const app = module.exports = express()
let connectionString = config.connectionString;
app.use(express.static('dist'))
app.use(bodyParser.json())

massive(connectionString).then(instance => {
  app.set('db', instance);
})


const data = require('./mainCtrl')

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv //


              // endpoints go here //


// example: app.get('/getAllBlogs', data.getAllBlogs) //


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //

let port = 5000

app.listen(port, function(){
  console.log('Chthulu is docked at port:', port)
})
