
// const greet=(name, callback)=>{
//     console.log(`hello ${name}`);

//     callback()
// }
// function greeting(){
//     console.log('hellooo');

// }



// greet('uniq', greeting)


// const greetuser=(name, callback)=>{
//     console.log(`welcome${name}`);
//     setTimeout(() => {
//         callback()
//     }, 1000);

// }

// const whatNow=()=>{
//         console.log(`what now boss??`);
// }


// greetuser("Unique", whatNow)


// const showTime=(callback)=>{

//     setInterval(()=>{
//             callback()
//     }, 1000)

// }

// const time=()=>{
//     const datee= new Date();
// let hour=datee.getHours().toLocaleString().padStart(2,0);
// let minute=datee.getMinutes().toLocaleString().padStart(2,0);
// let second=datee.getSeconds().toLocaleString().padStart(2,0);
// console.log(`${hour}:${minute}:${second}`);
// }

// showTime(time)


// const greetUse=(name, callback)=>{
//         console.log(`hello ${name}`);
//         setTimeout(()=>{
//             callback(name)
//         }, 1000)
// }

// function showTime(name){
//     let date=new Date();
//     let strngedDate=date.toDateString()
//     let hour=date.getHours();
//     let minute=date.getMinutes();
//     let second=date.getSeconds();


//     console.log(`successfully greeted Mr.${name} after 1second`);
//     console.log(`Time: ${hour}:${minute}:${second}`);
//     console.log(strngedDate);
// }

// greetUse('Unique', showTime)











// const placeOrder=(Order, callback)=>{
//     console.log(`${Order} Placed!!`);
//     setTimeout(()=>{
//             console.log(`Please wait!!`);
//             setTimeout(()=>{
//                 return callback(Order)
//             }, 1000)
//     }, 800)

// }


// function readyOrder(order){
//     console.log(`${order} ready`);
// }


// placeOrder('MOMO', readyOrder)





// const confirmOrder=(callback)=>{
//     console.log(`Is this your order??`);
//     if(true){
//         setTimeout(()=>{
//                 callback()
//         }, 1000)
//     } else{
//         return
//     }
// }

// function confirm(){
//          console.log(`order placed`);
// }


// confirmOrder(confirm)
// const processOrder=(orderIsTrue, callback)=>{
//     if(orderIsTrue){
//         console.log(`Order takes time`);
//         setTimeout(()=>{
//             callback()
//         }, 1500)
//     }
//     else{
//         console.log(`first check if its your order`);
//     }

// }

// function orderPlaced(){
//     console.log(`Coming to you babey!!`);
// }

// processOrder(true, orderPlaced)





// Promises

// let myPromise=new Promise((res, rej)=>{
//     setTimeout(()=>{
//         return res('Resolved after 2 second')
//     }, 2000)
// })


// console.log(myPromise); //pending

// myPromise.then((data)=>{
//     console.log(data);      //displays
// }
// )

// .finally(
//     ()=>{
//         console.log(`Finally!!`);
//     }
// )


// let myPromise=new Promise((res, rej)=>{
//     let variable='uniqueeeeeeee'
//     if(variable.length===10){
//         return res('Resolved')
//     }else{
//         return rej('`Something went wrong')
//     }
// })

// // console.log(myPromise);

// myPromise.then((data)=>{
//     console.log("object");
// }).catch((data)=>{
//         console.log(data);
// })







//async/await

//function returning promise
// function getGift(gift){
//     return new Promise((res, rej)=>{
//         if(gift==='mobile'){
//             return res(`I wanted this ${gift}`)
//         } else{
//             return rej(`I didnt wanted ${gift}`)
//         }
//     })
// }

// const giftPromise=async(gift)=>{

//     try{
//         const result= await getGift(gift)
//         console.log("resolved:", result);
//     }
//     catch(error){
//         console.log("rejected:", error);

//     }
    
// }

// giftPromise('mobile')


// function promised(){
//     return new Promise((res, rej)=>{
//         if(true){
//             setTimeout(()=>{
//                 return res('Data loaded')
        
//     }, 2000)
//         }
//         else{
//             rej(`error`)
//         }
//     })
// }

// const getData=async ()=>{
//     let data=await promised();
//     console.log(data);
    
// }


// getData()

// const fun1=(callback1)=>{

//     console.log('Start');
//     setTimeout(() => {
//         callback1()
//     }, 2000);

// }

// const fun2=(callback2)=>{
//     console.log('Loading User');
//   setTimeout(() => {
//         callback2()
//     }, 2000);

// }

// const fun3=(callback3)=>{
//     console.log('Fetching data');
//   setTimeout(() => {
//         callback3()
//     }, 2000);
// }

// const fun4=()=>{
//     console.log('Done');
// }




// fun1(()=>{fun2(()=>{fun3(()=>{fun4()})})})









































































































