const express = require("express");
const User = require("./features/user/userModel.js");
const router = require("./routes/user.js");
const bodyParser=require("body-parser");
const cors=require("cors");

const app = express();
User.sync();

app.use(bodyParser.json());
app.use(cors())
app.use("/", router);

app.listen(3000,() => {
  console.log("Server is listening ");
});
