const router=require('express').Router()
const Admin=require('../controller/admin.controller')

router.post('/register',Admin.register)

module.exports=router