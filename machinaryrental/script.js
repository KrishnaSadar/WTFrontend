document.addEventListener('DOMContentLoaded', () => {
    const bookNowButton = document.querySelector('.book-now-btn');
    bookNowButton.addEventListener('click', () => {
        alert('Booking process will start soon!');
    });
});


document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
  });

  // Show suggestions when search bar is focused
function showSuggestions() {
  document.getElementById('suggestionsList').style.display = 'block';
}

// Hide suggestions when clicking outside the search container
document.addEventListener('click', function(event) {
  var searchContainer = document.querySelector('.search-container');
  if (!searchContainer.contains(event.target)) {
      document.getElementById('suggestionsList').style.display = 'none';
  }
});

// Set the search bar value to the clicked suggestion
var suggestionItems = document.querySelectorAll('.suggestion-item');
suggestionItems.forEach(function(item) {
  item.addEventListener('click', function() {
      document.getElementById('searchBar').value = this.innerText;
      document.getElementById('suggestionsList').style.display = 'none';
  });
});