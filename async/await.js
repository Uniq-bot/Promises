
// // async function getResult(){
// //     const result= new Promise(function (res, rej ){
// //         const gift = 'watch';
// //         if(gift.startsWith('watch')){
// //             res('Thanks')
// //         } else{
// //             rej('rejected')
// //         }
// //     });

// //     try{
// //         const message= await result;
// //         console.log(message);
// //     }
// //     catch(error){
// //         console.log('Error:', error);
        
// //     }
// //     finally{
// //         console.log('success');
// //     }
// // }

// // getResult();


// const promises=(x)=>{
//     return new Promise((res)=>{
//             setTimeout(() => {
         
//                 return   res(x*2)
                
//             }, 2000);
//     });
// }

// // async function run(){
// //     try{
    
// //     let res=await promises(10)
// //     console.log(res);
// //     let res2=await promises(res);
// //     console.log(res2);
// //     let res3=await promises(res2);
// //     console.log(res3);
// // }catch(error){
// //     console.log('error');
// // }
// // }

// // run();


function doubleAfter2SecondsWithError(x) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (x > 25) rej('Too big!');
      else res(x * 2);
    }, 2000);
  });
}

async function runAllSettled() {
  const results = await Promise.allSettled([
    doubleAfter2SecondsWithError(10),
    doubleAfter2SecondsWithError(20),
    doubleAfter2SecondsWithError(30),
  ]);

  console.log(results);
}
runAllSettled()
// runParallelWithError();