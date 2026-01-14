function mutigreet(func , n){
    for( i = 0; i< n; i++){
        func();
    }
}

let greet = function(){
    console.log("hellow junaid");
}

mutigreet( function(){
    console.log("hellow junaid");
}, 10);

//methods

//when a function is written in an onject is called method

let calculator = {
    add: function(a,b){
        return a+b;
    },
    multi: function(a,b){
        return a*b;
    },
    sub: function(a,b){
        return a-b;
    }
};


let cal = {
    add(a,c){
        return a+c;
    }
}

let arr = [8,3,10,1,2,3,4,5,6,7];
let val = 5;

function findBigvalues(val){
    for(i = 0; i< arr.length; i++){
        if( arr[i] > val){
            console.log(arr[i]);
        }
    }
}
findBigvalues(val);

let str = "abcdabcdefgggh";

function findUnique(str){
    let ans = "";
    for(i = 0; i< str.length; i++){
        let curr = str.charAt(i);
        if( ans.indexOf(curr) == -1){
        ans += curr;
    }
    }
    
    return ans;
}
console.log(findUnique(str));


let junaid = {
    name :"junaid",
    age : 22,
    science : 94,
    maths: 94,
    physics:92,
    
    average(){
        console.log(this);
        console.log(this.maths + this.science + this.physics);
    }


}
 console.log(this);

console.log("junaid");
console.log("junaid");
console.log("junaid");
console.log(a);


console.log("junaid");
console.log("junaid");
console.log("junaid");