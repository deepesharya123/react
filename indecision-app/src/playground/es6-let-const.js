// Allows , not allows
// -----------------------Var ----------let-----------const
// Redefine ------------Allows--------not_Allows-----not_Allows
// ReAssign ------------Allows--------Allows---------not_Allows
// All (var, let and const ) are function_Level_scoped ,can't be accessed out of the function 
// Block_level_scoped---Allows---------NOt_allows------Not_allows   (Accessing out of block, blocks like for or if etc)


// Redefine , redeclare and reassign 
var nameVar = 'Deepesh';
console.log("nameVar",nameVar)
var nameVar = 'Arya';   
console.log("nameVar",nameVar);

let nameLet = "LEt nam";
nameLet = "Change the let's value"
// let nameLet = "redefine/ redclare " gave error
console.log("nameLet",nameLet);

const nameConst = "Name of const";
// const nameConst = "Name of const";       // will give error
// nameConst= "can not change"              // will give error

console.log("nameConst", nameConst);

//  funciton level scoped
function getWishes(a){
    var namaste = 'Namaste';
    let stee = 'Namastee';
    const see = 'Namasteee';

    if(a==1)
        return namaste;
    else if(a==2)
        return stee;
    else 
        return see;

}
// All will give error as they cant be accessed out of the function
// console.log(namaste);
// console.log(stee);
// console.log(see);

// Block Level Scoped
var fullName = 'Amit Shah';
let anName ;
if(fullName){
    var  firstName = fullName.split(' ')[0];
    anName = fullName.split(' ')[0];
    // let  letfirstName = fullName.split(' ')[0];
    // const  constfirstName = fullName.split(' ')[0];
    
    console.log(firstName);
    var anotherName = "Another Name";
}
console.log(firstName);
console.log(anotherName);
console.log("anName , let declared before block ",anName);
// console.log(letfirstName);   // will give error as letfirstName is not accessable
// console.log(constfirstName); // will give error as constfirstName is not accessable
        