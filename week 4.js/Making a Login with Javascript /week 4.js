// Problem 1 
const createFullName = (firstName,lastName) => 
firstName+' ' + lastName;

const doubleNumber = (number) = number * 2; 
const getEvenNumber = (array) => 

const evenNumbers 
let evenNumbers = []; 
for (let i of array) 
if (i % 2 === 0) 
evenNumbers.push(i); 
 return evenNumbers; 


 // Problem 2 
 
 const customers = [ {
name: 'Sam',
 address: {
street: '1234 W Bell Rd',
 city: 'Phoeni
zip: '85308',
 state: 'AZ'
 },
  membershipLevel: 'GOLD',
  age: 32
 },
 //more customers with the same schema
];

const filterCustomers = customers.map((index) =>{
    if(ndex.name.charAt(0).toLowerCase()=='c' && index.adreess.state == "AZ"){
        return index
    }

});
console.log(filterCustomers);