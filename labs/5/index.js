const express = require('express')
const db = require('./models')
const boatService = require('./services/boat')
const sailorService = require('./services/sailor')
const reserveService = require('./services/reserve')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json())

db.sequelize.sync({force:false}).then(()=>{
    boatService(app,db)
    sailorService(app,db)
    reserveService(app,db)
    app.listen(8080,()=>console.log('Server is running'))
})