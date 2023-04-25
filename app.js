const express = require('express')
const app = express()

const homePage = require('./router/home.js')
const aboutUsPage = require('./router/aboutUs.js')
const contactUsPage = require('./router/contactUs.js')
const servicePage = require('./service/Service.js')

app.get('/',(request,response)=>{
    response.send("This is home Page")
})

app.use('/home',homePage)
app.use('/aboutUs',aboutUsPage)
app.use('/contactUs',contactUsPage)
app.use('/service',servicePage)

app.listen(3500)