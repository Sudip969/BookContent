const client= require("./dBase")
client.connect()
async function postApiCollect(req)  //insert
{
  try{
        const name =req.body.name;
        const insertData = await client.query(`insert into bookData(name) values ($1) returning *`,[name])    
        console.log("In Repository")
        return (insertData.rows)
      
  }
  catch(err){
      console.log(err.message);
  }
}
async function selectApiCollect(req)   //select
{
  if(!(req.params.id))
  {
  try
  {
    const displayData= await client.query(`select * from bookData`)
    console.log("in Repository all")
    return (displayData.rows)
  }
  
  catch(err)
  {

  }
}
else{
  try
  {
    const id = req.params.id;
    const displayData= await client.query(`select * from bookData where id = $1`,[id])
    console.log("in Repository")
    return (displayData.rows)
  }
  
  catch(err)
  {
    console.log(err.message)
  }
}
}

async function deleteApiCollect(req)      //delete
{
  const id = req.params.id
  client.query(`delete from BookData where id = $1`,[id])
  return ("Row deleted successfully")
}

async function updateApiCollect(req)   //update
{
  const id = req.params.id
  const name = req.body.name
  client.query(`update BookData set name = $1 where id = $2`,[name,id])
  return ("Row updated successfully")
}
module.exports= {
  postApiCollect : postApiCollect,
  selectApiCollect : selectApiCollect,
  deleteApiCollect : deleteApiCollect,
  updateApiCollect : updateApiCollect
}