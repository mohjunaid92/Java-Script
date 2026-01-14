function value(){
    return 3*4;
}
console.log("The value is "+ value());


function b( a , b){ 
    //console.log(a*b);

    function ccca(){
        console.log(a);
        console.log(b);
        
        
        

    }
    ccca();
}
b(2,4);


let x = function(){
    a = 5;
    b = 5;
    return a*b;
}

let val = x();
console.log( val );




