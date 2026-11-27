///nested callback or callback HElll  or Pyramid dome---------A CALL BACK FUNCTION INSIDE OTHER CALL BACK FUNCTION 
function orderfood(callback)
{
    setTimeout(()=>{
        console.log("order is placed");
        callback()
        
},2000);
}
function preparefood(callback)
{
    setTimeout(()=>{
        console.log("food is prepared");
        callback()
        
},4000);
}
function payment(callback)
{
    setTimeout(()=>{
        console.log("Payment Succesfull");
        callback()
        
    },2000)
}
function takeAway(callback)
{
    setTimeout(()=>{
        console.log("Your order is ready to take");
        callback()
        
},3000);
}
orderfood(()=>{
    preparefood(()=>{
        payment(()=>{

       
        takeAway(()=>{
            console.log("Enjoy ur food");
             })
            
        })

    })
})