const router=require('express').Router()
const catModel=require('../model/catModel')

router.get('/addCategory',(req,res)=>{
    res.render('pages/addCategory')
  })
  
  router.get('/viewCategory',async(req,res)=>{
    const category=await catModel.find()
    res.render('pages/viewCategory',{category})
  })
  
  router.get("/updateCategory",async(req,res)=>{
    const {id}=req.query
    const category=await catModel.findById(id)
    res.render('pages/updateCategory',{category})
  })

  router.get('/register',(req,res)=>{
    res.render('pages/register')
  })
  router.get('/login',(req,res)=>{
    res.render('pages/login')
  })


module.exports=router