// check things are ready
$( document ).ready(function() { 
  
  console.log( "ready!" ); 
  
  //click the submit button and get confirmation message 
  $('#submitBtn').click(function() { 
    console.log("button clicked")
    
    let name = $('#name').val()
    
    let email = $('#email').val()
     
    let userName = $('#userName').val()
       
    let confirmation; 
    
    confirmation = "Thank you, " + name + " (" + userName + ") for your interest! You will hear from us via your email: " + email + " soon!"
    
    $('#confirmMsg').text(confirmation);
    

  }); 
  
});
