//6_Nested function
//1.lexical scope
/*function parent(){
    console.log("i am from parent");
    let a=100;
    let b=200;
    console.log(a,b);
    
    
    function child(){
        console.log("i am from child");
        let c=300
        let d=400        
        console.log(c,d);
        console.log(a,b)// we access parent member inside child
        

    }
    child()
    console.log("i am from parent");
    //console.log(c,d);//cannot acess child member inside parent
}
parent();
//child();//reference error

//2.scope chain
let x=1000;
function A(){
    let x=100;
    console.log(" i am from A");
    function B(){
        console.log(" ia m from B");
        let x=10;
        console.log(x);
    }
    B();
}
A()

//3_closure

function nandhini(){
    let a="nandhini"
    let b="nandhini purushan"
    function dharun(){
        console.log(b);
        let c=500;
        let d=100;
        
    }
    dharun();
    
}
nandhini()*/
//7_Higher order function

/*let first=50;
let second =100;

function root(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);  
    console.log(z(x,y));
    
}
function add(a,b){
    console.log(a);
    console.log(b);
     return a+b;
}
root(first,second,add)// when the function accept the another function as a argument is called higher order function*/

let first =100;
let second=50;

function root(x,y,z)
{
    return z(x,y)

}
function add(a,b)
{
    return a+b
}
function sub(a,b){
     return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b){
    return a/b;
}
function modulus(a,b){
    return a%b;
}
console.log(root(first,second,add));
console.log((root(1000,500,sub)));
console.log((root(first,second,mul)));
console.log((root(10,2,div)));
console.log(root(11,2,modulus));








