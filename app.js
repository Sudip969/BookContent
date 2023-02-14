const express = require("express");
const app = express();

const user = require("./features/user/userModel.js");
user.sync();

app.use(express.json());

const router = require("./routes/user.js");
app.use("/", router);

app.listen(3000, () => {
  console.log("Server is listening ");
});
