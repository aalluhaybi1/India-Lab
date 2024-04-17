// Function to handle form submission
$('#submitBtn').click(function() { 
  // Validate inputs
  if (validatePersonalInfo() && validateUsername() && validatePassword() && validateInterests() && validateAvailability() && validateReferral()) {
    // Package and display data
    displayData();
  } else {
    // Inform user about validation errors
    $('#confirmMsg').text("Please fill out all required fields correctly.");
  }
});

// Function to validate personal information
function validatePersonalInfo() {
  let name = $('#name').val();
  let email = $('#email').val();
  
  if (name.trim() === '' || email.trim() === '') {
    alert('Please fill out all required fields in the Personal Information section.');
    return false;
  }
  
  return true;
}

// Function to validate username
function validateUsername() {
  let username = $('#username').val();
  
  if (username.trim() === '') {
    alert('Please enter a username.');
    return false;
  }
  
  return true;
}

// Function to validate password
function validatePassword() {
  let password = $('#password').val();
  
  if (password.trim() === '') {
    alert('Please enter a password.');
    return false;
  }
  
  return true;
}

// Function to validate interests
function validateInterests() {
  // Add validation logic for interests checkboxes
  
  return true;
}

// Function to validate availability
function validateAvailability() {
  // Add validation logic for availability checkboxes
  
  return true;
}

// Function to validate referral
function validateReferral() {
  // Add validation logic for referral selection
  
  return true;
}

// Function to package and display data
function displayData() {
  let name = $('#name').val();
  let email = $('#email').val();
  let username = $('#username').val();
  let confirmation = "Thank you, " + name + " (" + username + ") for your interest! You will hear from us via your email: " + email + " soon!";
  $('#confirmationMessage').text(confirmation);
  $('#confirmationModal').modal('show'); // Show the modal
};
