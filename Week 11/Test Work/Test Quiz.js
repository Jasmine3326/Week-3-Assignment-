//Assume that you have an array of customer objects like this:
//Also, assume your HTML contains a table with an id of "customer-table" and columns 
//First Name, Last Name, and Email Address. Using JQuery,
// write the code needed to add a new row to the table for each customer in the returned array.
//let array = [

//  {

 //   firstName: "Sam",

 //   lastName: "Smith",

  //  email: "sam.smith@gmail.com"

 // },

 // {

  //  firstName: "Tom",

 //   lastName: "Jones",

  //  email: "tom.jones@gmail.com"

 // },

//]


//$('input').val('New Value');

let div = $('.rows');

div.appended('<row>prepended paragraph<row>');
div.after('<row>paragraph that was added before the table<row>');

//let row = $('#row ');
//let table = $('#customer-table');

//let tr = $('.table content');

//console.log(row);
//console.log(table);
//console.log(div);
//console.log(tr);

//console.log(row.text());
//p.text('New row')

//$.get('https://regres.in/api/users/2' , (data) => console.log(data))

//$.get('https://regres.in/api/users/2',{
 // name: "jasmine",
  //job: 'Front End Software Developer'

//}, (data) => console.log(data));