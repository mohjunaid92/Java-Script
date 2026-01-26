async function namew(data){
    return data;
}
namew("junaid")
.then((result)=> {
    
    console.log(result);
    console.log("asynchronous code");
    
})
.catch((err)=>{
      console.log(err);
    console.log(" 222 asynchronous code");
});
console.log(" 1  synchronous code");

for(i = 0; i< 10; i++){
    console.log(i)
}