//1.BY USING SINGLE QUOTES
// let name='vaish'
// console.log(name);
// console.log(typeof name);

//2.BY USING DOUBLE QUOTES
// let name="Vaish"
// console.log(name);
// console.log(typeof name);

//3.BY USING template literal BACKTICK(``)
// let name=`VAISH`
// console.log(name);
// console.log(typeof name);

// let str=new String("javascipt")
// console.log(str);
// console.log(typeof str);

//LENGTH
// let name="superfragilisticexpladeous"
// console.log(name.length);

// console.log(name.length-1);
// console.log(name[5]);


//!-----------------STATIC METHODS
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

//!------------------INSTANT METHODS
//AT()
// let str="Vaish"
// console.log(str.at(0));

// let strr="abcccc"
// console.log(strr.charAt(4));

// let str1="Vaish"
// console.log(str.charCodeAt(1));

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

// //Split
// let string="JavaScript is a Fabolus Language"
// console.log(string.split(' '));
// console.log(string.split(''));
// console.log(string.split('',5));

// //LOWERCASE
// let string1="JavaScript is a Fabolus Language"
// console.log(string1.toLowerCase(""));

// //UPPERCASE
// let string2="JavaScript is a Fabolus Language"
// console.log(string2.toUpperCase(""));
// console.log(string2.toLocaleLowerCase());


// //TRIM
// let string3="   JavaScript is a wonderful   "
// console.log(string3.length);
// console.log(string3.trim());
// console.log(string3.trim().length);


//TRIMSTART & TRIM END
// let string3="    JavaScript is a wonderful Language    "
// console.log(string3.trimStart());
// console.log(string3.trimEnd());

//STARTSWITH
// let link="https://pentagonspace.in/"
// console.log(link.startsWith("https"));


//ENDSWITH
// let link="https://pentagonspace.in/"
// console.log((link.endsWith("in/")));

//REPEAT
// let Data="vijay  "
// console.log(Data.repeat(3));

// //PADSTART
// let Dataa="Ramu"
// console.log(Dataa.padStart(10,'v'));

// //PADEND
// let Dataa="Ramu"
// console.log(Dataa.padEnd(10,'U'));

//REPLACE
// let Data="ramu"
// console.log(Data.replace('r','s'));

//REPLACEALL
// let Data="ramu ramu"
// console.log(Data.replaceAll('r','s'));

//TOSTRING
// let data= new String("hello")
// console.log(data);
// console.log(data.toString());

//SLICE
// let str="JavaScript is wonderful language"
// console.log(str.slice(4));   //Script is wonderful language
// console.log(str.slice(-19)); // wonderful language
// console.log(str.slice(11,27));//is wonderful lan
// console.log(str.slice(-15,-7));//derful l
// console.log(str.slice(22,11));//empty
// console.log(str.slice(-7,-15));//empty

//SUBSTRING
// let str="JavaScript is wonderful language"
// console.log(str.substring(4));   //Script is wonderful language
// console.log(str.substring(-19)); //JavaScript is wonderful language(minus takes from 0 index)
// console.log(str.substring(11,27));//is wonderful lan
// console.log(str.substring(-15,-7));//empty
// console.log(str.substring(22,11));//is wonderfu(it revesrse)
// console.log(str.substring(-7,-15));//empty


//count
// let data="javaSript"
// let count=0
// for(let i=0;i<data.length-1;i++)
// {
//   count++;
// }
// console.log(count);


//vowel
// let data='superfragilistic'
// let vow=0
// for(let i=0;i<data.length;i++)
// {
//     if("aeiou".includes(data[i]))
//     {
//         vow++
//     }
// }
// console.log(vow);

// let str="javascript"
// let res=str[0].toUpperCase().slice(1)
// console.log(res);

// let data="   java   Script   "
// console.log(data.trim());
// console.log(data.replaceAll(" ",""));

































