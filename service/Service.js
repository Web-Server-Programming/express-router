const express = require('express')
const router = express.Router()

const WebDevelopmentServicePage = require('./WebDevelopmnetService.js')
const CyberSecurityServicePage = require('./CyberSecurityServices.js')
const MobileAppDevelopmentServicePage = require('./MobileAppDevelopmentService.js')
const DigitalMarketingServicePage = require('./DigitalMarketingServices.js')

router.get('/',(request,response)=>{
    response.send("This is service page")
})

// router.get('/:id([0-9]{1})',(request,response)=>{
//     response.send(`${request.params.id}`)
// })

router.use('/webDevelopment',WebDevelopmentServicePage)
router.use('/cyberSecurity',CyberSecurityServicePage)
router.use('/mobileAppDevelopment',MobileAppDevelopmentServicePage)
router.use('/digitalMarketing',DigitalMarketingServicePage)

module.exports = router