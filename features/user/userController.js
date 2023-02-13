const service = require('./userService')
const contObj={
async  postService(req,res)
{
    console.log("In Controller.js")
    const comeBack= await service.postRepository(req);
    res.send(comeBack);

},
async selectService(req,res)
{
    console.log("In Controller.js")
    const comeBack= await service.selectRepository(req);
    res.send(comeBack);
},

async  deleteService(req,res)
{
    console.log("In Controller.js")
     await service.deleteRepository(req);
    res.send("Row deleted");
},

async  updateService(req,res)
{
    console.log("In Controller.js")
    await service.updateRepository(req);
    res.send("Row updated successfully")
},
}
module.exports= contObj;



// const User = require("../../routes/user.js");

// const postService= async(req,res)=>{
//     const data = User.build({name : req.body.name});
//     await data.save();                        //Or can use create instead using build and save 
//     res.send(data);
// }
// const updateService = async(req,res)=>{
//     const data =  await User.findOne({where: {id:req.params.id}});   //in progress               
                                
//     data.name = req.body.name;
//     data.save();
//     console.log(data.name);
//     res.send(data);
// }
// const selectService = async (req, res) => {
//     const data =await User.findAll();
//     res.send(data);
// }   

// const deleteService = async (req, res) => {
  
//    const data = await User.findOne({where: {id: req.params.id}});

   
//     data.destroy();
//     res.send("Row deleted");
// }
// module.exports = {
//     postService:postService,
//     selectService:selectService,
//     updateService:updateService,
//     deleteService:deleteService};