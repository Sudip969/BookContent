const express = require("express"); //express require
const router = express.Router();
const controller = require("../features/user/userController");

router.post("/insert", controller.post);

router.get("/select", controller.select);

router.get("/select/:id", controller.select);

router.delete("/delete/:id", controller.delete);

router.put("/update/:id", controller.update);

module.exports = router;
