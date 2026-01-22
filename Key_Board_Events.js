let h1 = document.querySelector('h1');
h1.addEventListener("dblclick", function(eve){
    console.log(eve);
   console.log( eve.type);

    console.log( eve.pointerType);
});

let inp = document.querySelector('input');

inp.addEventListener("keydown", function(eve){
    let val = eve.code;
    console.log(val)
    if( val == "ArrowUp"){
        console.log("Move up");
    } else if(val == "ArrowDown"){
        console.log("Move Down");
    } else if(val == "ArrowRight"){
        console.log("Move forword");
    }else if(val == "ArrowLeft"){
        console.log("Move back");
    }
});

//








