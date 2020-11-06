import axios from "axios";
import require from "requirejs";
const {Parser}=require('json2csv');

async function getAPI(){
    const url='https://drinkhint.myshopify.com/admin/api/2019-04/orders.json?updated_at_min=2020-06-08&updated_at_max=2020-06-09&limit=100';
    const responseObject= await axios.get(url,
        {
            auth:{
                username:'',
                password:''
            }
        });
    let ordersDetail=responseObject.data;
    return ordersDetail;
}
  function extractDetails(ordersDetail){
    let requiredDetails=[];
    ordersDetail.orders.forEach(user => {
        requiredDetails.push({
            "id" : user.id,
            "email":user.email,
            "created_at":user.created_at,
            "total_price":user.total_price,
            "currency":user.currency,
            "total_discounts":user.total_discounts,
            "total_line_items_price":user.total_line_items_price
        })
    });
   return requiredDetails;
}
function convertJSONtoCSV(requiredDetails){
    const parser=new Parser({fields:['id','email','created_at','total_price','currency','total_discounts','total_line_items_price']});
    const csv=parser.parse(requiredDetails);
    return csv;
}
async function main(){
    let ordersDetail=await getAPI();
    let requiredDetails= extractDetails(ordersDetail);
    let csv= convertJSONtoCSV(requiredDetails);  
    console.log(csv); 
}
main();