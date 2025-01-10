const Category = require("../model/catModel");
exports.store = async (req, res) => {
  try {
    const { cat_name } = req.body;
    const existcat = await Category.findOne({ cat_name }).countDocuments();
    if (existcat) {
      res.json({
        success: true,
        message: "already exist",
      });
    } else {
      await Category.create({ cat_name });
      res.json({
        success: true,
        message: "category added",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.trash=async(req,res)=>{
  try{
    const {id}=req.params
    await Category.findByIdAndDelete(id)
    res.json("deleted")
  }catch(err){
   res.json(err)
  }
}
