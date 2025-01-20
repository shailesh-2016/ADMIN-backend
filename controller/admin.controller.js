const Admin = require("../model/admin.model");
const { plainToHash } = require("../utils/password");

exports.register = async (req, res) => {
  try {
    const { username, email, password, confirm_password } = req.body;
    const existEmail = await Admin.findOne({ email: email })
      .countDocuments()
      .exec();
    if (existEmail > 0) {
      res.json("email already exist");
    } else {
      // await Admin.create({ username, email, password, confirm_password });
      // res.redirect("/login");
      const hash=await plainToHash(password)
      await Admin.create({ username, email, password:hash, confirm_password });
    }
  } catch (err) {
    res.json(err);
  }
};

exports.login=async(req,res)=>{
  const {email,password}=req.body
if(existEmail > 0){
  const existUser=await Admin.findOne({email})
  const match_pass=await hashToPlain(password,existUser.password)
  if(match_pass){

  }else{
    res.json("password not match")
  }
}else{
  res.json("email is not exist")
}
 
}
