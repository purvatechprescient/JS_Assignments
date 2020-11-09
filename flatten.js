let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }]

function flattenJSON(objectToBeFlattened, config) {
    const transformedObject = {};
    Object.keys(config).forEach(key => {
        if (key !== "address") {
            transformedObject[config[key]] = objectToBeFlattened[key];
        } else {
            Object.keys(config.address).forEach(key => {
                if(key!="geo"){
                transformedObject[config["address"][key]] = objectToBeFlattened["address"][key];
                }else{
                    Object.keys(config.address.geo).forEach(key =>{
                        transformedObject[config["address"]["geo"][key]]=objectToBeFlattened["address"]["geo"][key];
                    });
                }
            });
        }
    });
    return transformedObject;
}
function main() {
    let flattenedUserInfo = [];
    const config = {
        "id": "userid",
        "name": "fullName",
        "username": "username",
        "email": "email",
        "address": {
            "street": "address_street",
            "suite": "address_suite",
            "city":"city",
            "zipcode":"zipcode",
            "geo":{
                "lat":"latitude",
                "lng":"longitude"
            }
        }
    }
    users.forEach(user => {
        flattenedUserInfo.push(flattenJSON(user, config));
    });
    console.log(flattenedUserInfo);
}
main();

