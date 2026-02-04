// let str="i am a string and string 1"
// console.log(str.split(" "));
// let str2=" i am from chennai"
// console.log(str2.replace("a","z"));// replaces only first a by z
// console.log(str2.replaceAll("a","z"));

// let str3="i am a string converted to array"
// let a=(str3.toUpperCase());
// // console.log(a.split(" "));
// let arr=[1,2,3,4]
// let arr2=new Array(1,2,3,4)
// console.log(arr,arr2);
// //static method
//  let arr3=Array.from("sharvin")
//  console.log(arr3);

//  //non static method
//  // methods will modify original array
//  let ipl=["mi","rcb","lsg","dc","pbks","gt","srh","rr","kkr","csk"]
//  ipl.sort();
//  console.log(ipl);
 
//  console.log(ipl.pop())// remove last element
//  console.log(ipl);
//  ipl.push("kochi")// add last elemnt
//  console.log(ipl);
//  ipl.shift();// removing the first element
//  console.log(ipl);
//  ipl.unshift("giants")// add first element
//  console.log(ipl);
//  ipl.splice(3,1,"titans") // which element remove is 1st and how many elemnt in second and add inplace of the elemnt it is 3rd
//  console.log(ipl);
//  let str5="i am string"
//  console.log(str5.split("").reverse().join(""));// join is used to convert array into string


let ipl=["mi","rcb","lsg","dc","pbks","gt","srh","rr","kkr","csk"]
// iteration methods or higher order methods

ipl.forEach(function (ele,i,arr){
    console.log(ele,i,arr);
    
})
console.log("foreach!!!!!!!!!!!!!!!!!!!!!!!");

ipl.forEach((e,i)=>{
    console.log(e,i);
    
})

console.log("map!!!!!!!!!!!!!!!!!!!!!!!!!!");

ipl.map((e,i)=>{
    console.log(e,i);
    
})
console.log("filter!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

ipl.filter((e,i)=>{
    console.log(e,i);
    
})
console.log("find!!!!!!!!!!!!!!!!!!!!!");

ipl.find((e,i)=>{
    console.log(e,i);
    
})
console.log("findindex!!!!!!!!!!!!!!!!!!!!!");

ipl.findIndex((e,i)=>{
    console.log(e,i);
    
})

