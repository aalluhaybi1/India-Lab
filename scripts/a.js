// Function to validate interests
function validateInterests() {
    let checkedInterests = $('input[name="interest"]:checked').length;
    
    if (checkedInterests === 0) {
      alert('Please select at least one programming interest.');
      return false;
    }
    
    return true;
  }
  
  // Function to validate availability
  function validateAvailability() {
    let checkedDays = $('input[name="day"]:checked').length;
    
    if (checkedDays === 0) {
      alert('Please select at least one available day.');
      return false;
    }
    
    return true;
  }
  
  // Function to validate referral
  function validateReferral() {
    let referral = $('#source').val();
    
    if (referral === '') {
      alert('Please select how you heard about us.');
      return false;
    }
    
    return true;
  }
  // Function to load favorite data
function loadFavorites() {
    $.getJSON('favorites.json', function(data) {
      let favorites = data.favorites;
      
      // Display favorite data
      favorites.forEach(function(favorite) {
        $('#favoritesList').append(`<li>${favorite.name} - ${favorite.category}</li>`);
      });
    });
  }
  
  // Call the function to load favorite data
  loadFavorites();
  