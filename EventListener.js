let btn = document.querySelector('button');
let div = document.querySelector('div');


div.addEventListener("mouseenter", ()=> {
    console.log("color updated")
    let colors = color(); 
    let h1 = document.querySelector('h1');
    h1.innerText = colors;
    let div = document.querySelector('div');
    div.style.backgroundColor = colors;
     let body = document.querySelector('body');
      body.style.backgroundColor = colors;


   
   

});


function color(){
    let red = Math.floor(Math.random()* 256);
    let green = Math.floor(Math.random()* 256);
    let blue = Math.floor(Math.random()* 256);
    let val = `rgb(${red}, ${blue}, ${green})`;
    return val;
}
