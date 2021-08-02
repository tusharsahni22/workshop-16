const fetch=require("node-fetch")
const express=require("express")
const app=express();
app.get("/data",async(req,res)=>{
    const data=await getInfo();
    console.log("data -->",data)
    res.status(200).send({"data":data})
})
async function getInfo(){
    const infoData=await fetch(
        "https://api.publicapis.org/entries"

    ).then((res)=>res.json()).catch(e=>console.log(e))
    console.log(infoData)
    return infoData;
   
}
app.listen(3200,console.log("run on port 3200"))