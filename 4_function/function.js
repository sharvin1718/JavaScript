/*function sharvin(){
    console.log("Hi hello");
    
}
sharvin()
dharun()
function dharun(){
    console.log("i am dharun");
    
}
//with parameter
function add(a,b){
    console.log(a);
    console.log(b);
}
add()
add(10)
add(10,20)
function multiply(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(x*y*z);
    
}
multiply(2,4,6)
function forms(p,q,r){
    console.log(p+q);
    console.log(p+"5");
    console.log(p*q);
    console.log(p*"5")
    console.log(p*"a");
    console.log(r+q);
    console.log(r+r);
   
}
forms(10,20,);

function add1(){
    console.log("hello");
    return 10;
    

}
let res1=add1
console.log(res1)

let res2=add1()
console.log(res2);*/

// Types of function

//1.named function
function anyname(){
    console.log("Named function");
    
}
anyname()
/*2.Annonymous function
function(){
    console.log("Annonymous function");
}*/

//3.function with expression
let iamnamedfunctionexpression=function ab(){
    console.log("iamnamedfunctionexpression");
    
}
//ab() it throws error because function is assignedto value so call the value with variable name
iamnamedfunctionexpression();

let iamannonymousfunctionexpression=function (){
    console.log("iamannonymousfunctionexpression");
    
}
iamannonymousfunctionexpression();
//4.IIFE->Immedietly invoked function expression
(function(){
    console.log(" i am IIEF function");
    
})()

//5.arrow function
// syntax---- let arrow =()=>{}

let add=(a,b)=>{
    console.log(a);
    console.log(b);
    console.log(a+b);
}
add(10,20);
let sub=(c,d)=>{
    console.log(c);
    console.log(d);
    return c-d;
}
console.log(sub(10,5));

let mul=(e,f)=>{
    console.log(e);
    console.log(f);
    return e*f
}
console.log(mul(2,5));
let divide=(e,f)=>
    {
    console.log(e);
    console.log(f);
    return e/f;
}
    
console.log(divide(100,50));

let arrowmul=(a,b)=>console.log(a*b);//2nd syntax for arrow function
arrowmul(10,2)

let arrowadd=()=>console.log(a+b);
arrowadd(2,3);

letarrowsub=()=>console.log(a-b);
arrowsub(50-30);













