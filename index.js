// Your code here
// Initialize the dodger element
let dodger;

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left);

  // Check if moving left won't go beyond the left edge of the game field
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left);
  const dodgerWidth = 40; // Width of the dodger

  // Get the width of the game field (400px)
  const gameWidth = 400;

  // Check if moving right won't exceed the right edge of the game field
  if (left + dodgerWidth < gameWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listeners for keydown events
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});


