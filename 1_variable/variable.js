/*var a=10;
console.log(a);
var a=20;
console.log(a);


let b=100;
    b=200 //allowed
    console.log(b);
const c=500;
console.log(c);

var a;
console.log(a);

let d;//allowed
console.log(d)*/

var a=10;
let b=20;
const c=1000;

console.log("this is global scope");
console.log(a,b,c);




{
    var d=1//Global scope variable
    let e=2//block scope variable
    const f=3// block scope variable
    console.log("this area is block scope");
    console.log(a,b,c);
    console.log(d,e,f);
    
}
console.log("GLOBAL SCOPE");
console.log(d);




function abc(){
    var x =2000;
    let y=3000;
    const z=4000;

    
    console.log("this area is local scope");
    console.log(a,b,c);
     console.log(x,y,z);
}
abc()
console.log(x);



