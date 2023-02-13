const express = require('express');
const app = express();


const user = require('./routes/user.js');
user.sync();

app.use(express.json());


const router = require('./routes/user2.js');
 app.use('/',router);

app.listen(3000, () => {
    console.log("Server is listening ");
})

 