// Function to check the user's selected answer
function checkAnswer() {
  const correctAnswer = "4"; // The correct answer

  // Select the checked radio button input
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Handle if no option is selected
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    return;
  }

  const userAnswer = selectedOption.value; // Get the selected value

  // Compare user's answer to the correct answer and display feedback
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

