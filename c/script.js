const leftPage = document.querySelector('.page.left');
const rightPage = document.querySelector('.page.right');
let isFlipped = false;

// Next Button: Flip the page forward
document.getElementById('next-button').addEventListener('click', () => {
  if (!isFlipped) {
    leftPage.style.transform = 'rotateY(-180deg)';
    rightPage.style.transform = 'rotateY(0deg)';
    isFlipped = true;
  }
});

// Previous Button: Flip the page backward
document.getElementById('prev-button').addEventListener('click', () => {
  if (isFlipped) {
    leftPage.style.transform = 'rotateY(0deg)';
    rightPage.style.transform = 'rotateY(180deg)';
    isFlipped = false;
  }
});
