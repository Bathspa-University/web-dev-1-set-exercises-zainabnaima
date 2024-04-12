// Get elements
const costInput = document.getElementById('cost');
const litersInput = document.getElementById('liters');
const calculateButton = document.getElementById('calculate');
const totalCostDisplay = document.getElementById('totalCost');

// Function to calculate total cost
function calculateTotalCost() {
    const cost = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);
    const totalCost = cost * liters;
    totalCostDisplay.textContent = `Total cost: $${totalCost.toFixed(2)}`;
}

// Event listener for calculate button click
calculateButton.addEventListener('click', calculateTotalCost);
