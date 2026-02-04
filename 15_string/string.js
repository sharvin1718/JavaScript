let str=" i am from js "
let str2=new String(" i am also a string")
console.log(str.toUpperCase());//
console.log(str2.toUpperCase());

let str3=" I AM UPPERCASE STRING"
console.log(str3.toLowerCase());
console.log(str3);
let str4="     i am string with lot of empty space                  "
console.log(str4.length);
console.log(str4.trimStart().length);
console.log(str4.trimEnd().length);
console.log(str4.trim().length);

let str5="i am string searching methods"

console.log(str5.indexOf("a"));//2
console.log(str5.indexOf("o"));//26// it will start search from 0
console.log(str5.lastIndexOf("o"));//26  // it will start searching from  last index and last number
console.log(str5.indexOf("m"));//3
console.log(str5.lastIndexOf("m"));//
console.log(str5.indexOf("s",6));
console.log(str5.lastIndexOf("s",27))
console.log(str5.lastIndexOf("z"));// if character is not present it will return -1

console.log(str5.startsWith("i am"));//true
console.log(str5.startsWith("i amstring"));// false
console.log(str5.startsWith("i am"));//true
console.log(str5.endsWith("thods"));//true
console.log(str5.includes("searching"));//true
console.log(str5.includes("sharvin"))//false

let str6="i am used to get part of the string"
console.log(str6[2]);//a
console.log(str6.charAt(2));//a
console.log(str6.slice(5,11));// it will print 5 to 8
console.log(str6.slice(-10,-4));// slice accept negative number substring will not accept
console.log(str6.substring(5,11));
console.log(str6.substring(5,11));// order is not important but slice order is imporatant 

console.log(str5.concat(str6));
console.log(str6.split());// each elemrnt is consider as 1 element
console.log(str6.split(""));// each character is one elemrnt
console.log(str6.split(" "));// it is use to split one one string























