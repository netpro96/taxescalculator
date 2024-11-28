// Function to calculate 12% of an amount
function calculatePercentage(amount) {
    const percentage = 12;
    return (amount * percentage) / 100;
}

// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const convertButton = document.getElementById('convert-btn');
    const outputDiv = document.getElementById('output');
    const numberInput = document.getElementById('number');

    // Handle form submission (for Enter key) and prevent refresh
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        handleCalculation();
    });

    // Add a click event listener to the calculate button
    convertButton.addEventListener('click', handleCalculation);

    // Function to handle the calculation and display the result
    function handleCalculation() {
        const amount = parseFloat(numberInput.value); // Get the input value

        if (!isNaN(amount)) {
            const result = calculatePercentage(amount);
            outputDiv.textContent = `12% of ${amount} is ${result.toFixed(3)}`; // Show result
            outputDiv.classList.remove('hidden'); // Make the output visible
        } else {
            outputDiv.textContent = 'Please enter a valid number.';
            outputDiv.classList.remove('hidden'); // Show error message
        }
    }
});