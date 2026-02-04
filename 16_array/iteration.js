let ipl=["mi","rcb","lsg","dc","pbks","gt","srh","rr","kkr","csk"]
// iteration methods or higher order methods

ipl.forEach(function (ele,i,arr){
    console.log(ele,i,arr);
    
})
console.log("foreach!!!!!!!!!!!!!!!!!!!!!!!");

ipl.forEach((e,i)=>{
    console.log(e,i);
    
})

console.log("map!!!!!!!!!!!!!!!!!!!!!!!!!!");

ipl.map((e,i)=>{
    console.log(e,i);
    
})
console.log("filter!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

ipl.filter((e,i)=>{
    console.log(e,i);
    
})
console.log("find!!!!!!!!!!!!!!!!!!!!!");

ipl.find((e,i)=>{
    console.log(e,i);
    
})
console.log("findindex!!!!!!!!!!!!!!!!!!!!!");

ipl.findIndex((e,i)=>{
    console.log(e,i);
    
})
console.log("!!!!!!!!!!!!!! return type of for each!!!!!!!!!!!!");

let resultforeach=ipl.forEach((e)=>{
    console.log(e);
    return 10;
    
})
console.log(resultforeach);// it does not return anything
let resultmap=ipl.map((e)=>{
    console.log(e);
    return e.toUpperCase();
    
})
console.log(resultmap);// it will return values and modify

let resultfilter=ipl.filter((e)=>{
    if(e.includes("r")){
        return e
    }
    
})
console.log(resultfilter);// here we cannot modify all the satisfied elemrent take
let resultfind=ipl.find((e)=>{
    if(e.includes("r")){
        return e
    }
    
})
console.log(resultfind);// first satisfies element will be take
let resultfindindex=ipl.findIndex((e)=>{
    if(e.includes("r")){
        return e
    }
    
})
console.log(resultfindindex);//  it will return the index of first satisfies element will be take



