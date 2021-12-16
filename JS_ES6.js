// Default parameters -->
//UC1 =>
function addition(num1,num2=10){
    return num1+num2;
}
let result = addition(1,2);
console.log(result);
let results = addition(3);
console.log(results);

//UC2 =>
function getFullName(firstName, lastName, fullName=lastName+' '+lastName){
    return fullName;
}
let output = getFullName('Praveen','kumar'); 
console.log(output);
let outputs = getFullName('Praveen', 'Kumar', 'PraveenKumar'); 
console.log(outputs);
 
// Template literals -->
//UC1 =>
let myFirstName = "Praveen";
let myLastName = "Kumar";
console.log(`myFirstName is ${myFirstName} myLastName is ${myLastName}`);

// Tagged Templates -->
//UC1 =>
let myName = 'John';
let myRole = 'Software Developer';
console.log(`My name is ${myName} and I am ${myRole}`); 

// Destructuring assignment -->
//UC1 => array =>
let firstName,lastName;
let array = ['Praveen','Kumar'];
[firstName,lastName] = array;
console.log(firstName,lastName);

//UC2 => object => 
let Name,email;
let object = {Name:'Praveenkumar',email:'abc@gmail.com'};
({Name,email} = object);
console.log(Name,email);

//UC3 =>
let myName_, myRole_;
let array_ = ['Toad'];
[myName_='John', myRole_='Software Developer'] = array_;
console.log(myName_, myRole_); 

//Arrow function expression -->
//UC1 =>
function fruits(one,two){
    return `${one} ${two}`;
}
console.log(fruits('Mango','Apple'));

//UC2 =>
let fruit = ((one,two)=>`${one},${two}`);
console.log('Mango','Banana');

// let, var and const -->
//UC1 => let =>
let x =10;
if(x == 10){
    let x = 20;
    console.log(x);
}
console.log(x);

var y = 10;
if(y == 10){
    var y =30;
    console.log(y);
}
console.log(y);

const z = 40;
//const z = 50; // can't be reassigned
console.log(z);

const animals = {'Animal':'Elephant'};
const animal = {'animal':'Tiger'};
animals.Animal = 'Tiger';

// spread and Rest syntax (...) -->
//UC1 =>
let subtraction = (a,b,c)=>a-b-c;
const numbers = [9,7,5]
console.log(subtraction(...numbers));

//UC2 =>
let addNumbers = (...numbers) => {
    let result =0;
     numbers.forEach(num=> result +=num);
    return result
    }
    console.log(addNumbers(1,2,3));
    
// Object.assign() and Object.is() -->
//UC1 => assign() => clone & merge an objects
let employee = {section:'Electrical'};
let contacts = {phno:9876543210};
let details = Object.assign({},employee,contacts);
console.log(details);

//UC2 => is() => determines the values are same or not
let a=10, b=10;
console.log(Object.is(a,b));
let c=10, d=20;
console.log(Object.is(c,d));

// classes -->
//UC1 =>
class employeee{
    constructor(emp_ID,emp_email){ 
        this.emp_ID = emp_ID;
        this.emp_email = emp_email;
    }
}

//UC2 =>

class student{
     book = 'science';
     getbook(){
        return this.book;
     }
}

let book_details = new student();
console.log(book_details.getbook());