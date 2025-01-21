// const promiseOne=new Promise(function(resolve,reject){
// //DB calls,network calls,cryptography
// setTimeout(function(){
//     console.log('Async task is completed');
//     resolve();
// },1000)
// });
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })
// //--------------------------------------------------
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Asyn 2 resolved");
// })

// //--------------------------------------------

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"vitthal",email:"vitthal@google.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

//-------------------------------------------
 const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"vitthal",email:"vitthal@google.com"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolve or rejected.."); 
})
