// Get references to elements
const closedBook = document.getElementById('closed-book');
const bookAnimation = document.getElementById('book-animation');
const addButton = document.getElementById('add-button');
const customizationMenu = document.getElementById('customization-menu');

// Handle book click
closedBook.addEventListener('click', () => {
  closedBook.style.display = 'none'; // Hide the closed book
  bookAnimation.classList.remove('hidden'); // Show the book animation
});

// Handle add button click
addButton.addEventListener('click', () => {
  customizationMenu.classList.toggle('hidden'); // Toggle customization menu
});

// Handle customization options (extend as needed)
customizationMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('option')) {
    alert(`You clicked: ${e.target.textContent}`);
  }
});
