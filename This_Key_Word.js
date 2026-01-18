let obj = {
    name:"junaid",
    age : 22,
    print: ()=> {
        console.log(this)
        console.log(this.name);
    }
}
let obj1 = {
    name:"junaid",
    age : 22,
    print: function() {
        console.log(this)
        console.log(this.name);
    }
}
let obj2 = {
    name:"junaid",
    age : 22,
    print: ()=> {
        console.log(this)
        console.log(this.name);
    },

    add: function(){
        setInterval(()=> {
            console.log(this.name+this.age);
            console.log(this);
        },1000);
    }
}
let square = n => n**2;
console.log(square(3))


for(i = 1; i<=5; i++){
    setTimeout(()=> {
    console.log("junaid usmani");
}, 2000);

}
 let id = setInterval(()=> {
    console.log("junaid usmani");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran")
},10000);

// This keywork in EventHandler;


let div = document.querySelector('div');

div.addEventListener("click", ()=> {
    let val = color();

    div.style.backgroundColor = val;
    console.log("click hua hai")
});

 function color(){
    let red = Math.floor(Math.random()* 256);
    let green = Math.floor(Math.random()* 256);
    let blue = Math.floor(Math.random()* 256);
let val = `rgb(${red},${green},${blue})`;
return val;
    
 }


 let h1 = document.querySelector("h1");
 let h3 = document.querySelector("h3");
 let p = document.querySelector("p");

 h1.addEventListener("click", colors);
 h3.addEventListener("click", colors);
 p.addEventListener("click", colors);

 function colors(){
    console.dir(this);
    this.style.backgroundColor = "blue";

 }

