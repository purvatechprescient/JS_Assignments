function callResponse(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Response 1 received");
        },5000);
       
    }).then((msg)=>{
        console.log(msg);
    }).then(()=>{
        console.log("Response 2 received");
    }).catch((err)=>{
        console.log(err);
    });
} 
function main(){
    callResponse();
}
main();