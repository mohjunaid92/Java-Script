let sum = (a,b) => {
    return a+b;
}

let multi = () => {
    let a = 4;
    let b = 5;
    console.log(a+b);
}
let pow = n => {
    return n**n;
}


// implicit that is already understood

let add = n => n**n;

// Set timeOut Inbuit function that Execute after set time
setTimeout( ()=> {
    console.log("Hellow friends my name is moh junaid and i am a software engineer at google");
},4000);

//setTimeout( callback , time); // syntax
let val = function( ){
    console.log("junaid usmani");
}

setTimeout( val, 2000);
// this function execute task only once



//set Interval function 
// this function is used to call a function again and again to exectute set task
// every setInterval function has its own id

let id = setInterval(()=>{
    console.log("junaid");
}, 2000);
// to stop this fuction  we simply write clear interval
console.log(id);
clearInterval()

