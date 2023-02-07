const client= require("../../dBase")
client.connect()
const repObj={
async  postApiCollect(req)  //insert
{
  const name =req.body.name;
  const insertData = await client.query(`insert into bookData(name) values ($1) returning *`,[name])    
  console.log("In Repository")
  return (insertData.rows)
},
async selectApiCollect(req)   //select
{
  if(!(req.params.id))           //select all
  {
    const displayData= await client.query(`select * from bookData`)
    console.log("in Repository all")
    return (displayData.rows)
  }
  else                         //select by id only
  {
    const id = req.params.id;
    const displayData= await client.query(`select * from bookData where id = $1`,[id])
    console.log("in Repository")
    return (displayData.rows)
  }
},

async deleteApiCollect(req)      //delete
{
  const id = req.params.id
  client.query(`delete from BookData where id = $1`,[id])
  return ("Row deleted successfully")
},

async  updateApiCollect(req)   //update
{
  const id = req.params.id
  const name = req.body.name
  client.query(`update BookData set name = $1 where id = $2`,[name,id])
  return ("Row updated successfully")
}
}
module.exports= repObj;