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