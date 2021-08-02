let p = new Promise((resolve,reject)=>{
    let a=10+100
    if (a==20){
        resolve("success")
    }else{
        reject("failed")
    }
})

p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})