let h1 = document.querySelector("h1");

function colorChange(color, chnageColor, delay){
    setTimeout(()=>{
        h1.style.color = color;
        chnageColor();
    },delay);
}
colorChange("red",()=>{
    colorChange("blue",()=>{
        colorChange("green",()=>{

        },1000);
    },1000)

}, 1000);


function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*9)+1;
    if( internetSpeed > 4){
        success();

    } else {
        failure();
    }

}

savetoDb(
    "Moh junaid", 
   ()=> {
    console.log("Your data was saved");
    savetoDb(
        "moh junaid"
        ,
        ()=> {
            console.log("second data was saved");
        },
        ()=> {
            console.log("second data was not saved");
            savetoDb("new data", ()=> { console.log("3rd data was saved");
         }, ()=> {
                console.log("your data was not saved");
            })
        })
},
()=> {
    console.log("weak connection data was not saved");
});


setTimeout(() => {
    console.log("junaid")
    
}, 1000);
setTimeout(() => {
    console.log("junaid")
    
}, 1000);


let promise = new Promise((resolve,reject) => {
    let dataSpeed = Math.floor(Math.random()*10)+1;
    if( dataSpeed > 5){
        console.log("Data saved");
    } else {
        console.log("data was not saved");
    }
});

