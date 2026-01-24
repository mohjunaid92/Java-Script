function getNum(){
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
         let num = Math.floor(Math.random()*10)+1;
        console.log(num);
         resolve("Promise resolved");
       },1000);
       

    });
}

async function demo(){
     await getNum();
     await getNum();
      await getNum();
}
demo();


// change color function
let h1 = document.querySelector("h1");
function changeColor(data, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = data;
            console.log(`color change to ${data}`);
            resolve("change color");
        },delay);
    })
}

async function call(data, delay){
   try {
     await changeColor("blue",1000);
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("pink",1000);
    await changeColor("orange",1000);
   } catch(err){
    console.log(err);
    console.log("error occur");
   }
   return new Promise((resolve, reject) => {
       setTimeout((()=>{
        h1.style.color = data;
        resolve("promise resolved");
       }),delay);
   })

}
call("green",1000)
.then((result)=>{
    console.log(result);
    console.log("promise fullfileed")
})
.catch((error)=>{
    console.log(error);
    console.log("erroe")
});

// Api's