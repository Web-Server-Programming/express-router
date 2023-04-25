const express = require('express')
const router = express.Router()

const WebDevelopmentServicePage = require('./WebDevelopmnetService.js')
const CyberSecurityServicePage = require('./CyberSecurityServices.js')
const MobileAppDevelopmentServicePage = require('./MobileAppDevelopmentService.js')
const DigitalMarketingServicePage = require('./DigitalMarketingServices.js')
// const CloudBackupServicePage = require('./CloudBackUpService.js')
const FirewallServicePage = require('./FirewallServices.js')
const NetworkingServicePage = require('./NetworkingService.js')
const SaaSServicePage = require('./SaaS.js')

router.get('/',(request,response)=>{
    response.send("This is service page")
})

router.get('/:id([0-9]{1})',(request,response)=>{
    response.json(`${request.service.name}`)
})

const services = [
    {
        name : "Web Development Service"
    },
    {
        name : "Cyber Security Service"
    },
    {
        name : "Mobile App Development Service"
    },
    {
        name: "Digital Marketing Service"
    },
    {
        name: "Firewall Service"
    },
    {
        name: "CloudBackup Service"
    },
    {
        name : "Networking Service"
    },
    {
        name : "SaaS"
    }
]

router.param('id',(request,response,next,id)=>{
    console.log(id)
    request.service = services[id]
    next()
})

router.use('/webDevelopment',WebDevelopmentServicePage)
router.use('/cyberSecurity',CyberSecurityServicePage)
router.use('/mobileAppDevelopment',MobileAppDevelopmentServicePage)
router.use('/digitalMarketing',DigitalMarketingServicePage)
// router.use('/cloudBackup',CloudBackupServicePage)
router.use('/firewall',FirewallServicePage)
router.use('/networking',NetworkingServicePage)
router.use('/SaaS',SaaSServicePage)

module.exports = router