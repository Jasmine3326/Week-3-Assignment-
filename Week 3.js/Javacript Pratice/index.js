






 const pi = 3.14159;

 console.log(pi);


 











Names.forEach(function(element) {
  console.log(element);
});
 
let evens = names.filter(function(element) {
   return element.length % 2 == 0; 
});
console.log(evens);


let removedElement = names.splice(1,1);
console.log(removedElement);





















function myFunction () {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}

myFunction();


function createFullName(firstName,lastName) { 
    return (firstName + ' ' + lastName);
}
 var fullName = createFullName('Tom', 'Sawyer');
 console.log('Welcome,' + fullname);







var customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

console.log(customerNames[0]);

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[1]);
}

for (name of customerNames) {
    console.log(name);
}



var name = window.prompt('What is your name?');
window.alert('Welcome, ${name}');

let username = prompt(' Username:');
let password = prompt(' Password:');


var loggedIn = false;

while(!loggedIn) {
    let username = prompt(' Username:');
    let password = prompt(' Password:');
   
    if (username == 'samy123' && password == '12345') {
        alert('Welcome back, ' + username);
        loggedIn = true;
    } else  {
        alert('Incorrect username or password.');
    }
}













































for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('whatever is next');

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let names = ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let a = 110; 

while (a < 10) {
    console.log(a);
    a++;
}

do { 
    console.log(a);
} while (a < 10)

for (i in names) {
    console.log (i);
}

for (names of names)  {
    console.log(name);
}


var costofMilk = 3;

if (costofMilk < 2) {
    console.log('We will buy 2 gallons');
} else if (costofMilk < 3) {
    console.log('We will buy only 1 gallon');
} else {
    console.log('No thanks, way too expensive!');
} 

var grade = 'A';

switch (grade) {
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    default:
        console.log('0-69');
}

