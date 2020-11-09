function resolveAfter2Sec(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Resolved');
        }, 2000);
    });
}
async function asynccall(){
    console.log('Calling');
    let msg=await resolveAfter2Sec();
    console.log(msg);
}
asynccall();