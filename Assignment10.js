let i=1;
setTimeout(() => {
      console.log(i);
      i++;
      setTimeout(() => {
         console.log(i);
         i++;
         setTimeout(() => {
            console.log(i);
            i++;
            setTimeout(() => {
               console.log(i);
            }, 1000);
         }, 1000);
      }, 1000);
}, 1000);