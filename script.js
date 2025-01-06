// Function to calculate current
function calculateCurrent() {
    // Get the values of voltage and resistance from the sliders
    const voltage = document.getElementById('voltage').value;
    const resistance = document.getElementById('resistance').value;

    // Calculate current using Ohm's Law: I = V / R
    const current = (voltage / resistance).toFixed(2);

    // Update the current display
    document.getElementById('current').textContent = current;
}

// Function to check the quiz answer
function checkAnswer() {
    // Get the answer input by the user
    const userAnswer = document.getElementById('answer').value;

    // Correct answer (based on the question in the HTML)
    const correctAnswer = (120 / 60).toFixed(2);

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Check if the user's answer matches the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Σωστό! Καλή δουλειά!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = `Λάθος. Η σωστή απάντηση είναι ${correctAnswer} A.`;
        feedback.style.color = 'red';
    }
}
