import async from "async";
import axios from "axios";
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
function getObject(users, posts) {
    let resultantObject = [];
    for (let user of users) {
        posts[user.id-1].forEach(post => {
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
    }
    console.log(resultantObject);
}
async function main() {
    let usersId=[];
    let users = await getUsers();
    users.forEach((user)=>{
    usersId.push(user.id);
    });
    async.map(usersId, getPosts, (err, result) => {
        getObject(users, result);
    });

}
main();