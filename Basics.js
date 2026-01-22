



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





