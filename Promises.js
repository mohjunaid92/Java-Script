let h1 = document.querySelector("h1");

// function colorChange(color, chnageColor, delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//         chnageColor();
//     },delay);
// }
// colorChange("red",()=>{
//     colorChange("blue",()=>{
//         colorChange("green",()=>{

//         },1000);
//     },1000)

// }, 1000);

// using promises

function changeColors(data, delay){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            h1.style.color = data;
            resolve("promise resolved");
        },1000);
    });
}

changeColors("red",1000)
.then(()=>{
    console.log("red chnage");
    return changeColors("pink", 1000);
})
.then(()=>{
    console.log("pink chnage");
    return changeColors("yellow", 1000);
})
.then(()=>{
    console.log("yellow chnage");
    return changeColors("green", 1000);
})
.then(()=>{
    console.log("green chnage");
    return changeColors("blue", 1000);
})
.then(()=>{
    console.log("blue chnage");
    //return changeColors("pink", 1000);
})


function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*9)+1;
    if( internetSpeed > 4){
        success();

    } else {
        failure();
    }

}

savedData("junaid", 
        ()=>{
            console.log("data 1 is saved");
            savedData(" moh junaid",
            ()=> {
                console.log("data 2 was saved");
                savedData("saiju",
                ()=>{
                    console.log("data 3 was saved");
                },
                 ()=>{
                    console.log("data 3 was not saved");
                })
            },
             ()=> {
                console.log("data 2 was not saved");
            })
        },
        ()=> {
            console.log("data 1 was not saved");
        });


//Promises

// let promise = new Promise((resolve,reject) => {
//     let dataSpeed = Math.floor(Math.random()*10)+1;
//     if( dataSpeed > 5){
//       resolve("Data saved")
//     } else {
//         reject("Data not saved")
//     }
// });

// function saveData(data){
//     return promise;
// }
// saveData("junaid");

// Improved version of promises

function savedData(data){
    return new Promise((resolve, reject)=>{
        let speed = Math.floor(Math.random()*10)+1;
        if( speed <5){
            resolve("data saved");
        } else {
            reject("data did't save");
        }



    });
}

savedData("junaid")
.then(()=> {
    console.log("promise resolved");
    return savedData("moh junaid");
}).then(()=>{
    console.log("data 2 saved");
    return savedData("saijul");
}).then(()=>{
    console.log("saijul 2");
})
.catch(()=>{
    console.log("Promise did't resolved");
});



