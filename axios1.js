import axios from 'axios'
let data = [];
async function makeGetRequest() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/users');
    data = res.data;
    return data;
}
function getUser(data) {
    let findUser = data.find((user) => {
        return user.email = 'Nathan@yesenia.net';
    });
    return findUser;
}
function sumOfIds(data) {
    let sumOfUserId = data.reduce((currTotal, user) => {
        return user.id + currTotal;
    }, 0);
    return sumOfUserId;
}
function addObject(data) {
    data.forEach(user => {
        user["userInfo"] = { "fullName": user.name,  "emailId": user.email };
    });
    return data;
}
function getObject(data){
   let finalaccObject= data.reduce((accObject, user) => {
        accObject[user.name] = user.email;
        return accObject;
    }, {});
    return finalaccObject;
}
function getWebsites(data){
    let websiteUsers=[];
    data.forEach((user)=>{
        let websitePattern=/.org/;
        if(websitePattern.test(user['website'])){
            websiteUsers.push(user);
        }
    });
    return websiteUsers;
}
async function main() {
    data = await makeGetRequest();
    let findUser=getUser(data);
    console.log(findUser);
    let sumOfUserId=sumOfIds(data);
    console.log(sumOfUserId);
    let newData=addObject(data);
    console.log(newData);
    let accObjectResult=getObject(data);
    console.log(accObjectResult);
    let websiteUsers=getWebsites(data);
    console.log(websiteUsers);
}
main();