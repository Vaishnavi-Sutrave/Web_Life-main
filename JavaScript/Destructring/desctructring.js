let color=["black","pink","white","greeen","blue"]
// console.log(color[3]);

// let[b,,,,b2]=color
// console.log(b);
// console.log(b2);

let userData={
    first_name:"somu",
    last_name:'raj',
    age:30,
    IsLoggedIn:true
}
let {first_name,IsLoggedIn,last_name}=userData
let {first_name:fn,IsLoggedIn:is,last_name:ln}=userData
console.log(first_name);
console.log(ln);
