// For each method

students = [ 1,2,3,4,5,6];

let print = el => {
    console.log(el);
}
students.forEach(print);
students.forEach(el => {
    console.log(el);
});


// Map method
// this is used to create a new array with the help of existing array 

let arr = [{
    name : "junaid",
    age : 22
},{
    name : "kaif",
    age : 21
},{
    name : "saijul",
    age : 24
}];


let neww = arr.map(function(el){
    return el.name;
});

let even = students.filter((el)=> {
  return ( el % 2 == 0);
});

// Every function

let arrr = [0,2,4,6,8];
let m = arrr.every((el)=> {
    return el %2 ==0;
});

// some 
let naa = arrr.some((el)=> {
    return el%2 == 0;
} )

let vall = arrr.map((el) => {
       return el*el;
});

// reduce
let val = arrr.reduce((res, el)=> {
    return res+el;
});

let max = [1,4,7,8,9,2];

let max2 = max.reduce((rec, el)=> {
    
        
   if( rec > el ){
    return rec;
   } else {
     return el;
   }

});



// every element 

numbers = [ 10,20,30,35];

let num3 = numbers.every((el)=> {
    return el % 10 == 0;
});


// recude

 num3 = numbers.reduce((rec, el)=> {
    if( rec < el){
        return rec;
    } else {
        return el;
    }
 });
 console.log(num3);


 let odd = [11,3,5,7,9];
  even = [2,4,6,8,10];

  let Newarray = [...odd,...even];
  let name2 = "junaid";
  console.log(...name2);
  let arr5 = [..."junaid"];



  const obj = {
    name : "junaid",
    value:10
  };
  const obj1 = {...obj, rollno: 10, marks:20};

  function sum(...args){
   
    return args.reduce((rec, el)=>{
        if( rec < el){
            return el;
        } else {
            return rec;
        }
    });

  }
 console.log(sum(...odd)) ;
  even = [2,4,3];
   
let val3 = (even)=>{
    let sum = 0;
    for(i = 0; i< even.length; i++){
        let val = even[i]*even[i];
        sum += val;
    }
    return sum / even.length;
}

console.log(val3(even));

let mapp = even.map((el)=> {
    return el+5;
});

let stri = [ "junaid","Vall","sA"];

let stri1 = stri.map((el)=> {
    return el.toUpperCase();
});

let val7 = document.getElementById("jun");
val7.innerText = "junaid malik";