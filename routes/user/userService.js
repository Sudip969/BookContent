const repo = require('./userRepository')
function postRepository(req)
{
    console.log("In Service.js")
    return repo.postApiCollect(req);
}
function selectRepository(req)
{
  console.log("In Service.js")
  return repo.selectApiCollect(req);
}
function deleteRepository(req)
{
  console.log("In Service.js")
  return repo.deleteApiCollect(req);
}
function updateRepository(req)
{
  console.log("In Service.js")
  return repo.updateApiCollect(req);
}
module.exports= {
  postRepository: postRepository,
  selectRepository: selectRepository,
  deleteRepository: deleteRepository,
  updateRepository: updateRepository
}