const express = require('express');     //express require
const router= express.Router();
const controller = require("../features/user/userController");
// const User = require("./user.js");


router.post("/insert",controller.postService)

router.get('/select', controller.selectService)

router.get('/select/:id',controller.selectService)

router.delete('/delete/:id',controller.deleteService)

router.put('/update/:id', controller.updateService)

module.exports=router;   

