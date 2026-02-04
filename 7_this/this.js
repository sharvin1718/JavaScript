
// let obj={
//     name:"Sharvin",
//     email:"sharvin@gmail.com",
//     number:9876543211,
//     graduate:true,
//     hell:function(){
//         console.log("i am method");
      
//  }
// }
// function abc(){
//     console.log(" i am function");
// }
// obj.hell()
// console.log(obj);
// console.log(obj.email);
// console.log(obj.graduate);

// console.log(this);//window object or global object

// function abc(){
//     console.log(this);// window object
    
// }
// abc()
// let obj={
//     name:"sharvin",
//     email:"sharvin@gmail.com",
//     xyz:function(){
//         console.log(this);//obj
        
//     }
// }
// obj.xyz()

// let obj1={
//     name:"ms dhoni",
//     greet:function(){
//         console.log("good evening "+this.name);
        
//     }
// }
// let obj2={
//     name:"virat",
//     greet:function(){
//         console.log("good night "+this.name);
        
//     }
// }
// let obj3={
//     name:"rohit",
//     greet:function(){
//         console.log("good morning " +this.name);
        
//     }
// }
// obj1.greet();
// obj2.greet();
// obj3.greet();

// let obj1={
//     name:"vijay",
//     age:50,
//     add:"cococola"

// }
// let obj2={
//     name:"ajith",
//     age:55,
//     add:"campa"

// }
// let obj3={
//     name:"surya",
//     age:48,
//     add:"bru"

// }
// function abc(){
//     console.log(this.add);
    
// }
// abc.call(obj1)
// abc.call(obj2)
// abc.call(obj3)
let obj1={
    name:"vijay",
    age:50,
    add:"cococola",
    greet:function(){
        console.log("good morning "+this.name);
        
    }

}
let obj2={
    name:"ajith",
    age:55,
    add:"campa"

}
let obj3={
    name:"surya",
    age:48,
    add:"bru"
}
obj1.greet();
obj1.greet.call(obj2);
obj1.greet.call(obj3)


