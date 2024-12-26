const user={
    userName:"Vitthal",
    price:999,
    welComeMessage:function(){
        console.log(`${this.userName}, welcome to website `);
        console.log(this);
        
    }
}
// user.welComeMessage()
// user.userName="Shubham";
// user.welComeMessage()

// console.log(this);

// function chai(){
//     let username="Vitthal";
//     // console.log(this);
//     console.log(this.username);
// }
// chai();

// const chai=()=>{
//     let username="Vitthal";
//     console.log(this);
//     //console.log(this.username);
// }
// chai();

//explicite Arrow Function

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(
//  addTwo(5,3));

///Implicit Arrow Function

// const addTwo=(num1,num2)=>(num1+num2);
// console.log(
//  addTwo(5,3));

// Implicit function for  object

const obj=()=>({username:"Vitthal",password:"123"})

console.log(obj());
