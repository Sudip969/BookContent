const service = require('./userService')
function postService(req)
{
    console.log("In Controller.js")
    return service.postRepository(req);

}
function selectService(req)
{
    console.log("In Controller.js")
    return service.selectRepository(req);
}

function deleteService(req)
{
    console.log("In Controller.js")
    return service.deleteRepository(req);
}

function updateService(req)
{
    console.log("In Controller.js")
    return service.updateRepository(req);
}

module.exports= {
    postService: postService,
    selectService: selectService,
    deleteService: deleteService,
    updateService: updateService    
}