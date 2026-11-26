// function Print()
// {
// console.log("Hello");
// console.log("Hey");
// }
// Print()

// function Morning()
// {
//     console.log("Good Morning");
    
// }
// function Noon()
// {
//     console.log("Good AfterNoon");
    
// }
// function Eve()
// {
//     console.log("Good Evening");
    
// }
// Morning()
// Noon()
// Eve()

// function greet(abc)
// {
//     console.log("welcome "+abc);
    
// }
// greet("Vaishnavi")


// function greet(time)
// {
//     if(time>9 && time<12)
//     console.log("Good Morning");
//     else if(time>=12 && time<15)
//     {
//     console.log("Good Afternoon");
//     }
//     else{
//         console.log("Good Evening");    
//     }
// }
// greet(10 )


//Named Function;A FUNCTION THAT IS DEFINED NY A NAME IS CALLED NAMED FUNCTION

// function TotalMarks(e,h,m,s,ss)
// {
//     return e+h+m+s+ss
// }
// let res=TotalMarks(88,88,55,52,90)
// console.log(res+5);



//Anonymous Function:A FUNCTION THAT DOESNT HAVE ANY NAME

// let a=function()
// {
//     console.log("Anonymous Function");
    
// }
// a();

//ARROW FUNCTION:SHORTER WAY OF WRITING FUNCTION
//Syntax ()=>{}(called as FAT ARROW FUNCTION)
// let addition=(a,b) =>{
//     console.log(a+b)
// }
// addition(10,20)

// case1
//A SINGLE LINE STATEMNT WILL RETURN W/0 CURLY BRACES
// let addition=(a,b)=> a+b
// console.log(addition(10,20));

//case 2
//IF YOU HAVE SINGLE PARAMETER NO NEED TO ADD PARENTHESIS YOU WILL GET THE OUTPUT
// let addition=a =>a+20
// console.log(addition(10));

//case 3 if no parenthesis you can give underscore(_)
// let addition = _ =>20+20
// console.log(addition());


 //function expression   -- something which is stored in a variable is called function expression
// let addition =() =>{
//     console.log(10+20);   
// }
// addition()

//CALL BACK FUNCTION--- WHICH IS PASSED AS ARGUMENT TO OTHER FUNCTION
// function add(){
//     console.log(20+10);  
// }
// function Tak(Fun)
// {
//     Fun()
// }
// Tak(add)

// function Task(abc)
// {
//     abc()
    
// }
// Task(
//     function(){
//         console.log(20+10);
        
// }
// )

//HIGHER ORDER FUNCTION--a function whicch accepts another functions as parameter or if it returns another function
// function Task(){
//     return function(){
//     console.log("Thank you");
//     }

// }
// let result=Task()
// result()


// ---------
// function task(fun){  //*add function is stored inside fun
//     fun()
// }
// task(function () {         //*add function is a arguement value
//     console.log(10 + 20);
// })
// ------

//CALCULATOR
// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function mul(a,b){                
//     return a*b
// }
// function div(a,b){
//     return a/b
// }
// function calci(callback ,a,b){       ////HIGHER ORDER FUNCTION -CALCI
//     console.log(callback(a,b));
// }
// calci(mul,20,30)


//RESTURANT
// function Greeting(order, takeaway) {
//     console.log("Welcome to COFFEE TATTVA");
//     console.log("You can order here..");

//     order(takeaway);
// }

// function ChickenBiryani(takeaway) {
//     setTimeout(() => {
//         console.log("Thank you for your order..");
//         console.log("Your chicken biryani is getting ready..");
//         console.log("Here is your chicken biryani!");

//         takeaway();
//     }, 5000);
// }

// function VegBiryani(takeaway) {
//     setTimeout(() => {
//         console.log("Thank you for your order..");
//         console.log("Your veg biryani is getting ready..");
//         console.log("Here is your veg biryani!");

//         takeaway();
//     }, 5000);
// }

// function takeaway() {
//     console.log("Your order is ready for takeaway!");
// }

// // Order chicken biryani
// Greeting(ChickenBiryani, takeaway);

// // To order veg biryani, use this instead:
// // Greeting(VegBiryani, takeaway);




//UING BACK-TICK 
// let firstName="vaish"
// let lastName="sutrave"
// console.log("My first name is "+ firstName +" and my last name is "+ lastName);
// console.log("my fullName is"+(firstName+lastName));

// console.log(`my first name is ${firstName} and my last name is ${lastName}`);
// console.log(`my full name is ${firstName+lastName}`);


// let str=new String("javascipt")
// console.log(str);
// console.log(typeof str);

//LENGTH
// let name="superfragilisticexpladeous"
// console.log(name.length);

// console.log(name.length-1);
// console.log(name[5]);

//ASCII
//charcode---ASCII TO STRING
// let name=String.fromCharCode(86,97,105,115,104,110,97,118,105)
// console.log(name);

//EMOJIII
// let str=String.fromCodePoint(128506)
// console.log(str);

//RAW
// let str=String.raw `such a bitch`
// console.log(str);

//AT()
// let str="Vaish"
// console.log(str.at(0));

// let strr="abcccc"
// console.log(str.charAt(4));

// let str1="abhjdosj"
// console.log(str.charCodeAt(2));

// let str2="Java"
// let str3="Script"
// let newStr=str2.concat(" ",str3)
// console.log(newStr);

// //INCLUDES(ALWAYS RETURNS A BOOLEAN VALUE)
// let sttr="JavaScript is wonderful language"
// console.log(sttr.includes('is',10));

// //indexof
// console.log(sttr.indexOf("a",5));

// //lastIndexOF
// let data="Divya Sharma"
// console.log(data.lastIndexOf("a"));





























 











