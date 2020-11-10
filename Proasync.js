function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Data received');
        },5000);
    });
}
async function main(){
    let msg=await getData();
    console.log(msg);
    console.log('Finish');
}
main();