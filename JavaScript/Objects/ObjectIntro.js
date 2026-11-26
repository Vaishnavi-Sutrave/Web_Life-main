// let userInformation=
// {
//     name:"somu",
//     IsLoggedIn:true,
//     age:22,

//     reading:function()
//     {
//         console.log("somu is reading");
        
//     },
//     sleeping:function()
//     {
//         console.log("somu is sleeping");
        
//     }
// }
// console.log(userInformation);

//synatx of object
// let object={
// key: value,
// key:value
// }

// let object={
//     name: "vaish",
//     age:22,
//     gender:"female"
// }
// console.log(object);
// console.log(object.name);



let userinformation ={
    name :'somu',
    age : 21,
    'Is loggedIn' : true,

    reading: function(){
        console.log("somu is reading");   
    },
    sleeping : function(){
        console.log("somu is sleeping");   
    },
    favColors :['red','green','yellow'],
    address :{
        city : 'karnataka',
        pincode : 586213,
    }
}



// let key='name'
//ways
// //1.using dot notation
// userInformation.reading()
// console.log(userInformation.color);
// console.log(userInformation.color[1]);
// console.log(userInformation.address.street);


// userinformation.reading() //? somu is reading
// console.log(userinformation.favColors); //? [ 'red', 'green', 'yellow' ]
// console.log(userinformation.favColors[0]); //? red
// console.log(userinformation.address.pincode); //? 586213

//2. BY USING [" "] NOTATION. 
// Advantages
//i. dynamic access by using [], 
// console.log(userinformation['name']); //? somu
// console.log(userinformation[key]);    //? somu
// console.log(userinformation["age"]);  //? 21
// console.log(userinformation.key); //? undefined


//ii. if we have space in key (.notation) will not work get error
// console.log(userinformation.Is loggedIn); //? error
// console.log(userinformation['Is loggedIn']); //? true

//iii. (.) will not work for special characters.
// console.log(userinformation[name%]); //? error
// console.log(userinformation["name"]); //? somu

// //iv. (.) will not work for numbers
// console.log(userinformation[1]); //? undefined
// //1.using dot
// userInformation.reading()
// console.log(userInformation.color);
// console.log(userInformation.color[1]);
// console.log(userInformation.address.street);

// //2.using []
// let key="name"
// console.log(userInformation[key]);

// //1st adv(using)
// console.log(userInformation[name]);
// console.log(userInformation["age"]);
// console.log(userInformation[key]);

// //2nd adv

// console.log(userInformation.Is LoggedIn);
// console.log(userInformation["Is LoggedIn"]);

//3rd adv


//CRUD
//creating 
// let data={
//     name:"scoot",
//     age:30,
//     carrier:"gamer"
// }
// console.log(data);

//adding
// data.partner="kashvi"
// console.log(data);

// //updating
// data.age=35
// console.log(data);

// //deleting
// delete data.name
// console.log(data);

//1.keys()
// console.log(Object.keys(data));//--name,age,carrier

// //2.values()
// console.log(Object.values(data));

// //3.entries()
// console.log(Object.entries(data));
// let NewDataFormat=Object.entries(data)
// console.log(NewDataFormat);

// //4.fromEntries
// console.log(Object.fromEntries(NewDataFormat));

//5.ObjectAssign
//  let user={
//     name:"vaish"
//  }

//  let per_Info={
//     age:20,
//     flag:false
//  }
//  let Info_user={
//     pass_code:"vaish@09"
//  }
//  let Final_user=Object.assign(Info_user,user,per_Info)
// //  console.log(Final_user);
//  console.log(Info_user);

 //6.Object.seal--does'nt add or delete but you can modify
//  let emp_info={
//     name:"ravi",
//     age:"30",
//     pan_no:"CIPL0015",
//     IsLoggedIn:true
//  }
//  Object.seal(emp_info)
// //  console.log(emp_info);
//  delete emp_info.pan_no
//  console.log(emp_info);//not possible bcoz of seal

//  emp_info.reff="rani"
//  console.log(emp_info);//not possible bcoz of seal
  
//7.Object.isSealed
// let emp_info={
//     name:"ravi",
//     age:"30",
//     pan_no:"CIPL0015",
//     IsLoggedIn:true
//  }
 
//  Object.seal(emp_info)
// if(Object.isSealed(emp_info))
// {
//     console.log("possible");
    
// }
// else{
//     console.log("not possible");
    
// }

//8.Object.Freeze()
// let emp_info={
//     name:"ravi",
//     age:"30",
//     pan_no:"CIPL0015",
//     IsLoggedIn:true
//  }
//  Object.freeze(emp_info)
//  //del
//  delete emp_info.name
//  //upd
//  emp_info.age='34'
//  //reff
//  emp_info.riff="rani"
//  console.log(emp_info);

 //9.Object.isFrozen
//  let emp_info={
//     name:"ravi",
//     age:"30",
//     pan_no:"CIPL0015",
//     IsLoggedIn:true
//  }
//  Object.freeze(emp_info)
//  if(Object.isFrozen(emp_info))
//  {
//     console.log("possible");
//  }
//  else{
//     console.log("not possible");
//  }
 //10.object.define property--used to add a new property or modify an existing property of an object

//value:value assigned to Property
//writiable:allows changing values  true-can be chnaged false-cant be chnaged
//enumerable- allows property in loops   true-allows in eumeration false-hidden from enumeration
//configurable- allows deleting or redefining property  true-can be deleted  false-cannot be deleted

//  let emp_info={
//     name:"ravi",
//     age:"30", 
//     pan_no:"CIPL0015",
//     IsLoggedIn:true
//  }
//  Object.defineProperty(emp_info,"pan_no")


 //11.Object.hasOwn--checks for specified propert is preent in object or not, return boolean value
//  let emp_info={
//     name:"ravi",
//     age:"30",
//     pan_no:"CIPL0015",
//     IsLoggedIn:true
//  }
//  let res=Object.hasOwn(emp_info,"age")
//  console.log(res);

 //12.Object.is--checks whethe 2 value is same or not
//  let emp_info={
//     name:"ravi",
//     age:"30",
//     pan_no:"CIPL0015",
//     IsLoggedIn:true
//  }
//  let res=Object.is(emp_info.age,"35")
//  let rani_Info={
//     name:"rani",age:"67"
//  }
//  Object.is(emp_info,rani_Info)
//  Object.is(emp_info,{name:"rani",age:67})
//  console.log(res);
 

 




















