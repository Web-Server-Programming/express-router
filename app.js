const express = require('express')
const app = express()

app.get('/',(request,response)=>{
    response.send("This is home Page")
})

app.listen(3500)