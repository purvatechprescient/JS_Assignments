let i = 1;
let intervalId = setInterval(function(){
   if(i === 10){
      clearInterval(intervalId);
   }
   console.log(i);
   i++;
}, 1000);
