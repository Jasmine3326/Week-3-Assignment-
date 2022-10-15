//create any action into a function 
//in this case we want the button to store any information once clicked

function addNewH1() {}

// You target the element pdiv by creating it into a var
// then naming the document, naming that you want to get it and then within brackets the name of the objects

let pdiv = document.getElementById("p-div");

// You do the same method with the H1 

let newH1 = pdiv.appendChild(document.createElement("H1"));

//And the same goes for the unput
// text but at the end you use .value to let the button take in inputed information

let unputText = document.getElementById("p-input").value;

// Then you want the h1 to let any words pass through
//to do this you equal it to innertext

newH1.innertext = innerText;

//Now we use the same format as before to create a var for the button
//name where we are placing it(document),naming the action(getElementById),
// and then naming the actual button it self to grab it(p-button)
// we then put the name of button,we want the button to listen 
//to when its clicked so we use (addEventListener)
// and then the action withing brackets and then call the event to return a new header everytime its clicked.

let pButton = document.getElementById("p-button");
pButton.addEventListener("click", (event) =>  {
    addNewH1();
});
