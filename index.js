let parent ={
    name : "pramod",
    age : 25,
    place : "kadapa"
}
let child = {
    name : "ppramod",
    
    place : "Tpt"
    

}
child.__proto__ = parent
console.log(parent.__proto__)



function student(){
    this.name = "kumar"
}
student.prototype.name = "pramod"
student.prototype.age = 23

let obj = new student()
console.log(obj.name)
console.log(obj.age)


 


let arr = [1,2,3]
let sum = 0;
let add = arr.reduce((a,b)=>a+b);
console.log(add)





 function allKeys(obj) 
   {
    if (!isObject(obj)) 
    return [];
    let keys = [];
    for (let key in obj)
    keys.push(key);
    return keys;
}
function isObject(obj) 
{
    let type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}

Student.prototype.age = true;
console.log((new Student("pramod")));




// function allKeys(obj) 
// {
//  if (!isObject(obj)) 
//  return [];
//  let keys = [];
//  for (let key in obj)
//  keys.push(key);
//  return keys;
// }
// function isObject(obj) 
// {
//  let type = typeof obj;
//  return type === 'function' || type === 'object' && !!obj;
// }
// function Student(name) {
// this.name = name;
// }

// Student.prototype.age = true;
// console.log(allKeys(new Student("pramod")));