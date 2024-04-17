// Check if everything is ready
$(document).ready(function() { 
  console.log("ready!");

  // Click the submit button and get confirmation message 
  $('#submitBtn').click(function() { 
    let name = $('#name').val();
    let email = $('#email').val();
    let username = $('#username').val();
    let confirmation = "Thank you, " + name + " (" + username + ") for your interest! You will hear from us via your email: " + email + " soon!";
    $('#confirmationMessage').text(confirmation);
    $('#confirmationModal').modal('show'); // Show the modal
  });
});  
