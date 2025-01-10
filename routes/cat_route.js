const router=require('express').Router()

const Category=require('../controller/cat_controller')

router.post('/addCategory/',Category.store)
router.get('/delete/:id',Category.trash)
module.exports=router