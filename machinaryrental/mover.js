const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const quantityInput = document.getElementById('quantity');
const variantButtons = document.querySelectorAll('.variant');

// Quantity selector logic
decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

// Variant selection logic
variantButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove 'active' class from all buttons
        variantButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        e.target.classList.add('active');
        
        // Optionally, update price based on variant
        // For example, change price based on selection
        // if (e.target.innerText === 'Large (75+ HP)') {
        //     document.querySelector('.price').innerText = '₹3000';
        // }
    });
});