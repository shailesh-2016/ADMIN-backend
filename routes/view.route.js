const router = require("express").Router();
const Admin = require("../model/admin.model");
const catModel = require("../model/catModel");
const { matchLogin } = require("../utils/loginMiddleware");

router.get("/", (req, res) => {
  matchLogin(req, res, "pages/index");
});
// router.get("/",(req,res)=>{
//   console.log(req.cookies)
// res.render('pages/index')
// })

router.get("/addCategory", (req, res) => {
  matchLogin(req, res, "pages/addCategory");
  // res.render("pages/addCategory");
});

router.get("/viewCategory", async (req, res) => {
  const category = await catModel.find();
  res.render("pages/viewCategory", { category });
});

router.get("/updateCategory", async (req, res) => {
  const { id } = req.query;
  const category = await catModel.findById(id);
  res.render("pages/updateCategory", { category });
});

router.get("/register", (req, res) => {
  res.render("pages/register");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});
router.get("/logout", (req, res) => {
  res.clearCookie("admin");
  res.redirect("/login");
});
router.get("/myProfile",async (req, res) => {
  // const admin = req.cookies.admin;
  // res.render("pages/myProfile", { admin });

  const cookieData=req.cookies.admin
  const email=cookieData.email
  const singleAdmin=await Admin.findOne({email})
  res.render('pages/myProfile',{admin:singleAdmin})
});

module.exports = router;
