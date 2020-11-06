import axios from "axios";
import require from "requirejs";
const {Parser}= require ('json2csv');
let fs=require('fs');
async function getUsers() {
    let usersResponseObject = await axios.get('https://jsonplaceholder.typicode.com/users');
    let users = usersResponseObject.data;
    return users;
}
async function getPosts(userId) {
    let postResponseObject = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
    let post = postResponseObject.data;
    return post;
}
function getObject(user, posts) {
    let resultantObject=[];
   posts.forEach(post => {
        resultantObject.push({
            "userId": user.id,
            "postId": post.id,
            "title": post.title,
            "body": post.body,
            "name": user.name,
            "username": user.username,
            "email": user.email,
            "city": user.address.city,
            "zipcode": user.address.zipcode,
            "phone": user.phone,
            "website": user.website,
            "company": user.company
        });
    });
    try{
        const parser=new Parser({fields:['userId','postId','title','body','name','username','email','city','zipcode','phone','website','company']});
        const csv=parser.parse(resultantObject);
        fs.writeFileSync('Output.csv',csv);
    }catch{
        console.log('Error');
    }
}
async function main() {
   let users = await getUsers();
    for (let user of users) {
       let posts = await getPosts(user.id);
        getObject(user, posts);
    }
}
main();