console.log("Welcome to arrow functions")

function square(x){
    return x*x;
}

console.log(square(3));

const sqaureArrow = (x)=>{  // arrow fucntion is annonymous
    return x*x;
}

const sqaureArrowReturn  = (x) => x*x;  // if it contain only return statement 
console.log(sqaureArrow(6));
console.log(sqaureArrowReturn(61));

// Challenge
const firstName = (fullName) =>{
    const rv = fullName.split(' ')[0];
    return rv
}
console.log(firstName("Deepesh Arya"))

const firstNameshort = (fullName) => (fullName.split(' ')[0]);
console.log(firstNameshort("Money Gupta")); 