// console.log("Program Started");
// console.log("Program Mid");
// for(let i=0;i<12348;i++){
//     console.log("Loading....");
// }
// console.log("Dealing with imp Data");
// console.log("Program Ended");





//Asynchronous
// console.log("Program Started");
// console.log("Program Mid");
// function handlingData()
// {
//     console.log("Done with program");
    
// }
// setTimeout---executes the function once after a specified delay(in milliseconds)
// setTimeout(handlingData,5000)

//setInterval--executes the function repeatedly at specified time interval
// setInterval(handlingData, 5000)

// clearInterval---stops repeating task set by setInterval
// clearInterval(handlingData,2000)

//clearTimeout--stops a timeout set by setTimeout
// clearTimeout(handlingData,2000)

let interval=setInterval(()=>{
    console.log("program.....");
    
})
setTimeout(()=>{
    clearInterval(interval)
},5000)
console.log("Dealing with imp Data");
console.log("Program Ended");

console.log("");
