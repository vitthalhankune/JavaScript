//Object.create
//oject literals

const mySymbol=Symbol("Key1");
const JsUser={
    name:"Vitthal",
    "Full Name":"Vitthal Shivaji Hankune",
    age:18,
    location:"Pune",
    email:"vitthal@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Thurseday"],
    [mySymbol]:"myKey1"
};
//Accessing Element

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser [mySymbol]);
// console.log(typeof JsUser[mySymbol]);

// console.log(JsUser);

// JsUser.email="vitthal@microsoft.com"
// console.log(JsUser["email"]);

//To freez Object

//Object.freeze(JsUser);

//How to add function into Object

JsUser.greeting=function () {
    console.log(`Hello my name is:- ${JsUser["Full Name"]}.`);
}
// console.log(JsUser.greeting());

// console.log(JsUser);


//Singleton Object
const tinderUser=new Object();

const regularuser={
email:"vitthal@microsoft.com",
fullname:{
    userfullname:{
        firstname:"Vitthal",
        lastname:"Hankune"
    }
}
}
//console.log(regularuser.fullname.userfullname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
// const obj3={obj1,obj2};
// console.log(obj3);

const obj4=Object.assign({},obj1,obj2);
// console.log(obj4);
//By using sprade operator..

// const obj5={...obj1, ...obj2}; 
// console.log(obj5);

//fetch only keys from object
// console.log(Object.keys(JsUser));

//fetch only value from object
// console.log(Object.values(JsUser));

//fetch entries form object
// console.log(Object.entries(JsUser));

//to cheack property of object present or not
//console.log(JsUser.hasOwnProperty('greeting'));

//object de-Structure

const{isLoggedIn:logged}=JsUser;
console.log(logged);

