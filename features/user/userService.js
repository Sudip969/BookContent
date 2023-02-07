const repo = require('./userRepository')
const serObj={
 postRepository(req)
{
    console.log("In Service.js")
    return repo.postApiCollect(req);
},
 selectRepository(req)
{
  console.log("In Service.js")
  return repo.selectApiCollect(req);
},
 deleteRepository(req)
{
  console.log("In Service.js")
  return repo.deleteApiCollect(req);
},
 updateRepository(req)
{
  console.log("In Service.js")
  return repo.updateApiCollect(req);
},
}
module.exports= serObj;