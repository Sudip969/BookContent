const express = require('express');     //express require
const router= express.Router();
const controller = require('./userController');

router.post("/insert",async(req,res)=>
{
    try{
    console.log("In Index.js")
    const comeBack =await controller.postService(req);
    res.send(comeBack)
    }
    catch(err){
        console.log(err.message);
    }

})
router.get('/select', async(req, res)=>{
    try{
        console.log("In Index.js")
        const comeBack =await controller.selectService(req);
        res.send(comeBack)
    }
    catch(err){(err.message);
        console.log(err.message);
    }
})

router.get('/select/:id', async(req, res)=>{
    try{
        console.log("In Index.js")
        const comeBack =await controller.selectService(req);
        res.send(comeBack)
    }
    catch(err){
        console.log(err.message);
    }
})

router.delete('/delete/:id', async(req, res)=>{
    try{
        console.log("In Index.js")
        const comeBack =await controller.deleteService(req);
        res.send(comeBack)
    }
    catch(err){
        console.log(err.message);
    }
})

router.put('/update/:id', async(req, res)=>{
    try{
        console.log("In Index.js")
        const comeBack =await controller.updateService(req);
        res.send(comeBack)
    }
    catch(err){
        console.log(err.message);
    }
})

module.exports=router;      