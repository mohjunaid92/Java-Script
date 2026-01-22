//let form = document.querySelector("form");
// form.addEventListener("submit", function(eve) {
//     eve.preventDefault();
//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);
    
// });

// extracting form data 


// change event

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",function(eve){
    console.log("div clicked");
    eve.stopPropagation();

})
ul.addEventListener("click",function(eve){
    console.log("ul clicked");
       eve.stopPropagation();
});
for(li of lis){
    li.addEventListener("click",function(eve){
    console.log("li clicked");
       eve.stopPropagation();
})
}
 


  

   
   

    






const h1 = document.querySelector("h1");
const ipt = document.querySelector("#input");
ipt.addEventListener("input", function(){
    console.log(ipt.value);
    h1.innerText = ipt.value;
});












