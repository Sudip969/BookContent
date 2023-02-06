const {Client} = require('pg')
const client=new Client({
    user:"postgres",
    password:"Plmnkobji@969",
    port:5432,
    host:"localhost",
    database:"internsudip"
})
client.on("connect",()=>
{
    console.log("Database connected")
})
client.on("end",()=>
{
    console.log("Connection end")
})
module.exports= client;
