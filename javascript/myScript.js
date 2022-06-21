
//   File: index.html
//   GUI Assignment: Creating My First WebPage
//   Dan Nguyen, UMASS Lowell Computer Science, dan_nguyen@student.uml.edu
//   created on 5/19/2022, finished on 6/15/2022
//   Copyright (c) 2022 by Dan Nguyen 
//   This is a website that uses javascript to create a table where a user can enter
//   4 numbers(between -50 and 50) (2 ranges) and create a multiplication table
//


// this is the function that gets used when you press the submit button
function buttonpressed() {
//     console.log("Hello it worked");
// i used this to make sure the javascript worked

// these next 4 lines of code get the user inputted vaues
     var num1 = document.getElementById("input1").value;
     var num2 = document.getElementById("input2").value;
     var num3 = document.getElementById("input3").value;
     var num4 = document.getElementById("input4").value;

// i first make sure the numbers are okay and if they check out then 
// i use them to make table if not then i will print no table 
// and the error message
     if(checkvalid(num1, num2, num3, num4)) {
          multiplicationtable(num1, num2, num3, num4);
     } else {
          document.getElementById('table') = "";
     }
}    

// this function is used to make sure the numbers are valid 

function checkvalid(number1, number2, number3,  number4){

// these are the variables i used in this function      
     var errormessage = "";
     var error1, error2, error3, error4, rowerror, columnerror; 

// the first if makes sure its not empty     
     if(number1 == ""){
          error1 = true;
          errormessage += "Number 1 is empty! <br>";
//  this makes sure the number isnt less than 50          
     } else if (number1 < -50){
          error1 = true;
          errormessage += "Number 1 cannot be less than -50! <br>";

// this makes sure the number isnt greater than 50           
     } else if (number1 > 50){
          error1 = true;
          errormessage += "Number 1 cannot be greater than 50! <br>";
// this makes sure the number isnt a double or a float           
     } else if (Number(number1) % 1 == 0){
          error1 = false;
     } else {
          error1 = true;
          errormessage += "Number 1 must be an integer <br>";
     }
// im on a time crunch so these comments can be applied  to the all the sets of number     

//    console.log(errormessage);
// I used this to check to see if the error was working 

     if(number2 == ""){
          error2 = true;
          errormessage += "Number 2 is empty! <br>";
     } else if (number2 < -50){
          error2 = true;
          errormessage += "Number 2 cannot be less than -50! <br>";
     } else if (number1 > 50){
          error2 = true;
          errormessage += "Number 2 cannot be greater than 50! <br>";
     } else if (Number(number2) % 1 == 0){
          error2 = false;
     } else {
          error2 = true;
          errormessage += "Number 2 must be an integer <br>";
     }

//    console.log(errormessage);
// I used this to check to see if the error was working 
     if(number3 == ""){
          error3 = true;
          errormessage += "Number 3 is empty! <br>";
     } else if (number3 < -50){
          error3 = true;
          errormessage += "Number 3 cannot be less than -50! <br>";
     } else if (number3 > 50){
          error3 = true;
          errormessage += "Number 3 cannot be greater than 50! <br>";
     } else if (Number(number3) % 1 == 0){
          error3 = false;
     } else {
          error3 = true;
          errormessage += "Number 1 must be an integer <br>";
     }

//    console.log(errormessage);
// I used this to check to see if the error was working 
     if(number4 == ""){
          error4 = true;
          errormessage += "Number 4 is empty! <br>";
     } else if (number4 < -50){
          error4 = true;
          errormessage += "Number 4 cannot be less than -50! <br>";
     } else if (number4 > 50){
          error4 = true;
          errormessage += "Number 4 cannot be greater than 50! <br>";
     } else if (Number(number4) % 1 == 0){
          error4 = false;
     } else {
          error4 = true;
          errormessage += "Number 4 must be an integer <br>";
     }

//    console.log(errormessage);
// I used this to check to see if the error was working 

// this is used to make sure number 1 isnt bigger than number 2 
     if(number1 > number2){
          rowerror = true;
          errormessage += "Number1 cannot be greater than Number2! <br>";
     } else {
          rowerror = false; 
     }

// this makes sure number 3 isnt greater than number 4
     if(number3 > number4){
          colerror = true;
          errormessage += "Number3 cannot be greater than Number4! <br>";
     } else {
          colerror = false; 
     }

//     console.log(errormessage);

// if any of the errors are true then it will return a false and show the error messages and if everything is ok then it will return true
     if(error1 || error2 || error3 || error4 || rowerror || colerror == true) {
          document.getElementById('emessage').innerHTML = "Error: <br>" + errormessage;
          return false;              
     }else {
          return true;
     }
}

// this function creates the multiplication table 
function multiplicationtable(mnum1, mnum2, mnum3, mnum4){

// this makes the variables into numbers
     mnum1 = Number(mnum1);
     mnum2 = Number(mnum2);
     mnum3 = Number(mnum3);
     mnum4 = Number(mnum4);

// this makes the variable im going to use for the table 
     var table = "";

     table += "<table id = 'style-table'>";

// i used a for loop and a nested for loop to go through the numbers to make the multiplication table      
     for(var x = 0; x <= (mnum2-mnum1 +1); x++){
          table += "<tr>";
          for(var y = 0; y <= (mnum4-mnum3 +1); y++){
               if(x ==0 ) {
                    table += "<td class = 'header'>" + ((y == 0) ? "" : (y + mnum3 - 1)) + "</td>";
               } else if(y == 0) {
                    table += "<td class = 'header'>" + (x + mnum1 -1) + "</td>";
  
// this is used to make the cells that container the product of the x and y.                     
               } else
                    table += ("<td class = 'cell'>" + (x + mnum1 -1) * (y + mnum3 -1) + "</td>");
          }
          table += "</tr>";
     }
     table += "</table>";
     document.getElementById('table').innerHTML = table;
}