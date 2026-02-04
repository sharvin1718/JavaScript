// class player{
//     constructor(name,age,sports){
//         this.name=name
//         this.age=age
//         this.sports=sports
//     }
//     info(){// non static belongs to objects
//         console.log(`player name is ${this.name} his age is ${this.age}`);
//     }
//     static greet(){//static belongs to class
//         console.log("good evening from players");
        
//     }
// }
// let player1=new player("dube",27,"cricket")
// let player2=new player("messi",35,"football")

// player1.info()
// player2.info()
// player.greet()
let obj1={
    name:"dube",
    age:27,
    sports:"cricket"
}
let obj2={
    name:"messi",
    age:35,
    sports:"football"
}
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
obj1.name="jadeja"
obj1.team="india"
delete obj1.sports
console.log(obj1);

obj2.name="ronaldo"
delete obj2.sports
console.log(obj2);

let obj3={
    name:"virat",
    age:37,
    sports:"cricket"
}
Object.freeze(obj3)
obj3.name="dhoni"// whenever the object is freeze we cannot change or delete the value
console.log(obj3);
let obj4={
    name:"ronaldo",
    age:37,
    sports:"football"
}
Object.seal(obj1)// we cannot add or delete property but we can update the property
obj4.role="right wing"//not working
obj4.name="neymar"//working
console.log(obj4);

console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj3));
console.log(Object.isSealed(obj2));
console.log(Object.isSealed(obj4));
let obj5={
    name:"virat"
}
let obj6={
    age:40
}
Object.assign(obj5,obj6)
console.log(obj5);











