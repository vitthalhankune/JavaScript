
if(true){
    let a=10;
const b=20;
var c=30;
}
//console.log(a);
//console.log(b);
//console.log(c);
 
function one(){
    const userName="Vitthal";
    function two(){
        const weSite=" youtube";
        console.log(userName+weSite);
    }
    //console.log(weSite);
    two();
}
one();

//+++++++++++++++Interesting+++++++++++++
console.log(addOne(5));

function addOne(num){
    return num+1;
}
//addOne(5);

//console.log(addTwo(5));

const addTwo=function(num){
    return num+2
}
addTwo(5)