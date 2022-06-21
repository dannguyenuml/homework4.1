// this is the function i used for jquery
$().ready(function() {

     $('#form').validate({
// this is the set of rules i used, required is to make sure they enter an integer
// number is used to make sure the entered character is a number 
// range is between -50 and 50           
          rules: {
               number1: {
                    required: true,
                    number: true,
                    range: [-50, 50]
                    },
               number2: {
                    required: true,
                    number: true,
                    range: [-50, 50]
                    },
               number3: {
                    required: true,
                    number: true,
                    range: [-50, 50] 
                    },
               number4: {
                    required: true,
                    number: true,
                    range: [-50, 50]
                    },
               },
// i changed the error messages to be more helpful to the user, so they know what to change.                
          messages: {
               number1: {
                    required: "Please enter an integer",
                    number: "Please enter an integer",
                    range: "Integer has to be between -50 and 50"
               }, 
               number2: {
                    required: "Please enter an integer",
                    number: "Please enter an integer",
                    range: "Integer has to be between -50 and 50"
               },
               number3: {
                    required: "Please enter an integer",
                    number: "Please enter an integer",
                    range: "Integer has to be between -50 and 50"
               }, 
               number4: {
                    required: "Please enter an integer",
                    number: "Please enter an integer",
                    range: "Integer has to be between -50 and 50"
               }                                              
          },
// this is the what happens when they click the submit button, it makes the table
          submitHandler: function() {
               multiplicationtable();
               return false; 
          },
// this is what happens when they click the submit button and there are still errors. It wont show a table           
          invalidHandler: function(){
               $("#table").empty();
          }
          
     })
});

// this function creates the multiplication table 
function multiplicationtable(){
// this creates the variables
          var mnum1, mnum2, mnum3, mnum4; 
// this gives the variables the numbers i want           
          mnum1 = parseInt($('input[name=number1]').val());
          mnum2 = parseInt($('input[name=number2]').val());
          mnum3 = parseInt($('input[name=number3]').val());
          mnum4 = parseInt($('input[name=number4]').val());

//  i used this to make sure the numbers was being parsed correctly
//          console.log(mnum1);    
//          console.log(mnum2);    
//          console.log(mnum3);    
//          console.log(mnum4);    

// this is what i made to switch number 1 and 2 if number 1 is greater than number 2. 
// it switches the numbers and creates an error message 
          $("#emessage").empty();
          if(mnum1 > mnum2) {
               $("#emessage").append("<p>Swapping number1 and number2, since number1 is greater than number2<br></p>")
               var temp = mnum1;
               mnum1 = mnum2;
               mnum2 = temp;
          }
// this is made to switch number 3 and number 4 if number 3 is greater than number 4
// it switches the numbers and creates the appropiate error messages           
          if(mnum3 > mnum4) {
               $("#emessage").append("<p>Swapping number3 and number4, since number3 is greater than number4<br></p>")
               var temp = mnum3;
               mnum3 = mnum4;
               mnum4 = temp;
          }


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
 // this adds the table to the table container         
         $("#table").html(table);
         return false;
    }