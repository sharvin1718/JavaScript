// console.log('hi');
// console.log("hello");
// console.log(`bye
//     hfkdfrug`);

let a=10;
let b=20;

console.log('${a}');//return string
console.log("${a}");//return string 
console.log(`the sum of ${a} and ${b} is ${a+b}`);//return value
console.log(`the subraction of ${b} - ${a} is ${b-a}`);

let obj1={
    name:"sharvin",
    mobile:9876543212 
}
let obj2={
    name:"rokesh",
    mobile:1353135313   
}
let obj3={
    name:"selva",
    mobile:1234554321 
}
function abc(age,email){
    console.log(`my name is ${this.name}, and mobile number is ${this.mobile}, age is ${age},email is ${email}`);
    

}
 abc.call(obj1 ,21,"sharvin@gmail.com")
 abc.call(obj2,22,"rokesh@gmail.com") 
 abc.call(obj3,23,"selva@gmail.com")

abc.apply(obj1,[21,"sharvin@gmail.com"])
abc.apply(obj2 ,[22,"rokesh@gmail.com"])
abc.apply(obj3,[23,"selva@gmail.com"])

 let f1=abc.bind(obj1,22,"sharvin@gmail.com")
 f1()// bind is assigned to variable if output does not occur until the variable is called.
let f2=abc.bind(obj2,23,"selva@gmail.com") 
f2()
let f3=abc.bind(obj3,23,"rokesh@gmail.com")
f3()







