import request from 'request';
function getAPI() {
    return new Promise((resolve,reject)=>{
        request('https://jsonplaceholder.typicode.com/users', ()=>{
            request('https://jsonplaceholder.typicode.com/users',()=>{
                request('https://jsonplaceholder.typicode.com/users',()=>{
                    return resolve('Called API 3 times');
                });
            });
        });
    });
  
}
async function main(){
    let msg=await getAPI();
    console.log(msg);
    console.log('finish');
}
main();