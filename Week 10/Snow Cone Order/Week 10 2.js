
//first we create our order into a function then make all the flavors,sizes,and numbers into variables

function newOrder(){
    let num = document.getElementById('num').value;
    let flav1 = document.getElementById("flavor1").value;
    let flav2 = document.getElementById("flavor2").value;
    let size = document.getElementById('size').value;
}
 
// we make the orders into a variable to store it then do the same thing as the beginning 

let orders = document.getElementById("orders");

//we make our newrow into a variable 
//then we name the doc,name the action, and name the object from the html page 


let newRow = orders.insertRow(-1);

// Make into a var then use the name newRow,
//name the action (insertcell),name what you'll do to the row,
//then insert name of doc and the action (createTextNode) then name flavor

let newOrderNum = newRow.insertCell(0).appendChild(document.createTextNode(flav1));
let newflav1 = newRow.insertCell(1).appendChild(document.createTextNode(flav1));
let newflav2 = newRow.insertCell(2).appendChild(document.createTextNode(flav2));
let newSize  = newRow.insertCell(3).appendChild(document.createTextNode(size));


//make the button into a function and as I did in my homework assignment name,action,name of the button.
//we want to make the button make a list when clicked so we 
//name the action,add the (eventlistener)which listens for clicks 
// and then have it do the work for you 

let orderButton = document.getElementById("order-button")
orderButton.addEventListener("click",(event) => {
    event.preventDefault();
    newOrder();
});

console.log(flav1);