// console.log("Hello Array");

//HOMOGENOUS
// let data=[1,2,3,4]
// console.log(data);


//HETROGENOUS
// let data=["vaish",true]
// console.log(data);

// data[1]="Helllo"
// console.log(data);

// let data=["vaish",true,80, function(){console.log("Hello i am inside array as item of array")}]
// data[3]();

// let array = new Array(10,20,30,40,50)
// console.log(array);

// let array=[10]
// console.log(array)
// console.log(array.length);

// let array=new Array(10)
// console.log(array)
// console.log(array.length);


///STATIC METHODSSS
//1.array.from()
//2.array.isarray()
//3.Array.of()

//1.Array.from
// let data="JavaScript"
// console.log(Array.from(data));

// let bool=true
// console.log(Array.from(bool));

// let n=10
// console.log(Array.from(n));

// let data=[1,2,3,4,5]
// console.log(Array.from(data,(num)=>num*5));



//to print J0A0V0A0
// let data = "JavaScript";
// console.log(Array.from(data,(str)=>str+0).toString().replaceAll(',', ''));

//2.ARRAY.isarrya()-->it will return a boolean value

// let data=[1,2,3,4,5]
// if(Array.isArray(data))
// {
//     console.log("Data received in the form of array"); 
// }
// else{
//     console.log("Data not received in thr form of array");
// }

//3. array.of()
// console.log(Array.of(1,2,3,4,5));
// console.log(Array.of(10));

//instance mthod()
//1.push()---add element at end
// let array=[1,2,3,4]
// array.push("somu")
// console.log(array);

// //2.pop()---remove element at end
// array.pop()
// console.log(array);

// //3.shift()---remove in the begning
// array.shift()
// console.log(array);

// //4.unshift()--add at the begnning
// array.unshift("somu")
// console.log(array);

//5.slice()--
// let array=[10,20,30,40,50,60]
// console.log(array.slice(2));
// console.log(array.slice(2,4));
// console.log(array.slice(-2)); 

//6.splice()---returns the deleted data and modifies
// let array=[10,20,30,40,50,60]
// // let DeletedData=array.splice(1,2,"somu","dia")
// let DeletedData=array.splice(1,0,"somu","dia")///// it wont delete if we add 0
// console.log("Deleted data "+DeletedData);
// console.log(array);


//7.concat()
// let arr1=[10]
// let arr2=[20]
// console.log(arr1.concat(arr2));

//8.reverse()
// let arr=[10,20,30,40]
// console.log(arr.reverse());

//9.join()
// let arr=[10,20,30,40]
// console.log(arr.join(""));
// console.log(arr.join("_"));

//10indexOf()
// let arr=[10,20,30,40]
// console.log(arr.indexOf(30));

////11.lastIndexOf()
// console.log(arr.lastIndexOf(30));

//12.includes()
// let arr=[10,20,30,40]
// console.log(arr.includes(30));

//13.entries---returns a new integer object of the array in the form of key and value pair
// let arr=[10,20,30,40]
// for(let x of arr.entries())
// {
//     console.log(x);
    
// }

//14.keys()----it will only give us keys
// let arr=[10,20,30,40]
// for(let x of arr.keys())
// {
//     console.log(x);
    
// }

//15.values-----it will give only values
// let arr=[10,20,30,40]
// for(let x of arr.values())
// {
//     console.log(x);
    
// }

//16.every()--test wheteh alll the elements in array pass the test implements
// let arr=[2,4,6,7]
// console.log(arr.every((num)=>num%2==0));
// let data=['red','white','green']
// console.log(arr.every((data)=>data !== undefined));

//17.some()--utleast one shld be matched 
// let array=[1,2,3,4,5,6,]
// console.log(array.some((num)=>num>5));

//18.fill()
// console.log(array.fill("vaish",0,5));

// 19.find()

// let array=[1,2,3,4,5]
// console.log(array.find((num)=>num%2==0));
// console.log(array.find((num)=>num>4));

//20.findIndex()
// let array=[1,2,3,4,5]
// console.log(array.findIndex((num)=>num%2==0));
// console.log(array.findIndex((num)=>num>4));

//21.findLast()
// let array=[1,2,3,4,5]
// console.log(array.findLast((num)=>num%2==0));
// console.log(array.findLast((num)=>num>4));

//22.findLastIndex()
// let array=[1,2,3,4,5]
// console.log(array.findLastIndex((num)=>num%2==0));
// console.log(array.findLastIndex((num)=>num>4));

//23.flat()
// let data=[1,2,[3,[4,[10,20,[30,40]]]]]
// console.log(data.flat(Infinity));
// console.log(data.flat());
// console.log(data.flat(2));
// console.log(data[4]);

//24.toReversed
// let data=[1,2,3,4,5]
// console.log(data.reverse());// it will modify
// console.log(data.toReversed());// it will not modify

//25.toSpliced
// let data=[1,2,3,4,5]
// console.log(data.splice());//  
// console.log(data.toSpliced());

// //26.sort()
// let data=[1,9,3,7,8,2,4]
// console.log(data.sort());

// let colors=["white","pink","blue","grey"]
// console.log(colors.sort());

// let data=[1,3,9,4,10,20,50]
// // console.log(data.sort());//you will get 1,10,20---it checks the elemets based on there second valu also
// // console.log(data.sort(function (){}));
// // console.log(data.sort((a,b)=>a-b));//to overcome the above thing--we go for this
// // console.log(data.sort((a,b)=>b-a));
// console.log(data.sort(function (a,b){
//     console.log("a is "+a + " b is "+ b);
  
//     return a-b
    
    
// }));















