// function Abc(x,y,z){
//     this.name=x
//     this.price=y
//     this.rating=z
// }
// let obj1=new Abc("vivo",20000,10)
// console.log(obj1);

// class Movies{
//     constructor(x,y,z){
//         this.name=x
//         this.actor=y
//         this.rating=z
//     }
// }
// let obj2=new Movies("mankatha","ajith",4.5)
// let obj3=new Movies("theri","vijay",4)
// console.log(obj2,)
// console.log(obj3);

// class Bikes{
//     constructor(a,b,c,d){
//     this.name=a
//     this.cc=b
//     this.model=c
//     this.milege=d
//     }
// }
// let b1=new Bikes("pulsar",150,220,45)
// let b2=new Bikes("xl",50,"xl100",60)
// let b3=new Bikes("royal enfield",140,"Thunderbird",35)
// let b4=new Bikes("MT",120,"Mt15",40)

// console.log(b1);
// console.log(b2);
// console.log(b3);
// console.log(b4);

// let obj5=new Object()
// console.log(obj5)
// method 1 to craete object

// let obj1={
//     name:"ajith",
//     nickname:"thala",
//     greet:function(){
//         console.log(`Good evening from ${this.name}`);
        
//     },
//     aim(){
//         console.log("win championship in racing");
        
//     }
// }
// obj1.greet()
// obj1.aim()

// let obj2={
//     name:"virat",
//     nickname:"king",
//     greet:function()
//     {
//         console.log(`good morning from${this.nickname}`);
        
//     },
//     achieve(){
//         console.log("no 1 batsman in ODI");
        
//     }
// }
// obj2.greet()
// obj2.achieve()// method 1

// method 2

// function Actor(x,y){
//     this.name="vijay",
//     this.nickname="thalapathy",
//     this.greet=function(){
//         console.log(`good evening from ${this.nickname} `);
//     }
//     this.aim=function(){
//         console.log("became chief minister of tamilnadu");
        
//     }
// }
// let obj1= new Actor("vijay","Thalapathy")
// obj1.greet()
// obj1.aim()// method 2
// method 3

class Actor{
    constructor(x,y)
    {
        this.name=x
        this.nickname=y
    }
    greet(){
        console.log(`good evening from ${this.name}`);
        
    }
    aim(){
        console.log("to marry mrunal thakur");
        
    }
}
let obj1=new Actor("dhanush","MR.D")
obj1.greet()
obj1.aim()