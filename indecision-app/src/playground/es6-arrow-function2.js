// Arguments object
// es5
var add = function(a,b){
    console.log(arguments)
    return a+b;
}
console.log(add(4,6));  // output of console.log(arguments)==[4,6];
console.log(add(4,6,12,32));  // output of console.log(arguments)==[4,6];

// es6
var add = (a,b)=>{
    // console.log(arguments)  //" argument is not defined" this error will come 
    return a+b;
}
console.log(add(4,6));  // output of console.log(arguments)==[4,6];
console.log(add(4,6,12,32));  // output of console.log(arguments)==[4,6];


// this keyword
// es5 ,es6 dono me this at same level use kr skte h 
// es5 me this ke ander this nahi use kr skte
// es6 me this ke ander this user kr skte h 

const user =  {
    name : 'Deepesh',
    cities:["Bareilly","Delhi","Pune"],
    printPlacesLived : function(){  // es 5 function
        console.log(this.name);
        console.log(this.cities);

        const that = this;
        this.cities.forEach(function(city){
            console.log(that.name+" Lived in "+city)
        })
        
        this.cities.forEach((city)=>{
            console.log(this.name+" Lived in "+city)
        })
        return this.cities.map((city) => (this.name+" has lived in "+ city)) 
    },
   
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers : [2,3,4,5],
    multiplyBy: 7,
    multiply: function(){
        const res  = this.numbers.map((n)=> n*this.multiplyBy);
        return res;
    }
}

console.log(multiplier.multiply())