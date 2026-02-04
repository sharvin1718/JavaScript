// let obj1={
//     dish:"idly",
//     price:10,
//     rating:1
// }
// console.log(obj1);

// console.log(obj1.price);
// obj1.rating=2
// console.log(obj1);
// obj1.price=15
// console.log(obj1);
// obj1.place="arumbakkam"//if it is not there in the objcet it will  create object.
// console.log(obj1);

// let obj1={}
// let obj2={}
// let obj3={}
// // obj1.name="dhoni"
// // obj1.age=43

// // obj2.name="kohli"
// // obj2.age=37

// // obj3.name="rohit"
// // obj3.age=38

// // console.log(obj1,obj2,obj3);

// function abc(x,y){
//     this.name=x
//     this.age=y
// }
// abc.call(obj1,"ms dhoni",43)
// abc.call(obj2,"virat kohli",37)
// console.log(obj1,obj2);

// let obj4={}
// let obj5={}
// let obj6={}
// function ABC(a,b){
//     this.name=a
//     this.age=b
// }
// ABC.apply(obj4,["sharvin",22])
// ABC.apply(obj5,["selva",22])
// ABC.apply(obj6,["rokesh",22])
// console.log(obj4,obj5,obj6);

function Abc(x,y){
    this.name=x
    this.age=y
}
let obj1= new Abc("msdhoni",43)
let obj2=new Abc("kohli",37)
let obj3=new Abc("rohit",38)
console.log(obj1);
console.log(obj2);
console.log(obj3);

function Product(a,b,c,d){
    this.name=a
    this.price=b
    this.rating=c
    this.availability=d
}
let product1=new Product("samsung",30000,8,true)
let product2=new Product("vivo",20000,10,true)
let product3=new Product("oppo",25000,9,false)
let product4=new Product("apple",150000,7,false)
let product5=new Product("nothing",35000,10,true)

console.log(product1);

















