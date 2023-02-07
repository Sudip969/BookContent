const express = require('express');
const app = express();

const router = require('./routes/user.js');

app.use(express.json());

app.use('/',router);

app.listen(3000, () => {
    console.log("Server is listening ");
})

 