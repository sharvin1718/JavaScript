// let a="nickname"// this a is assigned to value a any:nickname

// let obj={
//     name:"ms dhoni",
//     age:43,
//     "role":"wk",
//     1:"finisher",
//     any:a,
//     a:"some values",// this is not taking nickname as key
//     [a]:"thala"// using a as in square bracket to take a as nickname as key

// }
// console.log(obj)
// console.log(obj.nickname);

// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj.age);
// console.log(obj["age"]);
// console.log(obj.role);
// console.log(obj["role"]);
// console.log(obj["1"]);

let nick="nickname"
let a="age"
let b=Symbol()
let c=symbol()
let obj={
    name:"ms",
    age:43,
    [nick]:"thala",
    [a]:"random value",
    [b]:"first value",
    [c]:"second value"
}
console.log(obj);







