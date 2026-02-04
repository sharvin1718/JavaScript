// for( let i=1;i<=100;i++)
// {
//     console.log(i);
// }
// for( let i=100;i>=1;i--)
// {
//     console.log(i);
// }
// let a=1
// while(a<=10)
// {
//     if(a%2==0){
//         console.log(a)
//     }
//     a++
// }
// console.log("********************************");

// let b=1
// while(b<=10)
// {
//     if(b%2!=0)
//     {
//         console.log(b);
//     }
//     b++
// }
let ipl=["rcb","csk","mi","kkr","rr","srh","pbks","dc","gt","lsg"]
for(let i=0;i<ipl.length;i++){
    console.log(ipl[i]);
    
}
let name=["sharvin","selva","rokesh","dharun","rajesh"]
for(let ele of name){
    console.log(ele);// it will print the array elements
}

let obj={
    name:"sharvin",
    age:22,
    phone:7010689654,
    email:"sharvin@gmail.com"
}
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
    console.log(key+":"+obj[key]);
    
}