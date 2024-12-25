function loginUserMessage(userName="Sam"){
    if (userName===undefined) {
        console.log("Please Enter User name");
        return;
    }
return `${userName} just logged in`
}

//console.log(loginUserMessage("Vitthal"));

function calculateCartPrice(...num1){
    return num1;
}
//console.log(calculateCartPrice(200,300,800,400));


const user={
    userName:"Vitthal",
    price:1000
};

function handleObject(anyObjet){
    console.log(`User name is ${anyObjet.userName} and price is ${anyObjet.price}`);
}
//handleObject(user);

const myNewArray=[100,500,800,900];

function handleArray(arrray) {
    return arrray[0]
}
console.log(handleArray(myNewArray));

