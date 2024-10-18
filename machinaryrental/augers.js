// JavaScript functions for Augers page

function changeVariant(variant) {
    // Change variant-specific details
    // Update the image and pricing based on the selected variant
    const augerImage = document.getElementById('augerImage');
    const dailyPrice = document.getElementById('dailyPrice');
    const weeklyPrice = document.getElementById('weeklyPrice');
    const monthlyPrice = document.getElementById('monthlyPrice');
    
    if (variant === '5-10') {
        augerImage.src = 'https://geartap.in/api/image/eed952ae-9485-42a1-92b9-f0505b1ca66f.webp';
        dailyPrice.textContent = '₹4479';
        weeklyPrice.textContent = '₹22396';
        monthlyPrice.textContent = '₹71667';
    } else if (variant === '10+') {
        augerImage.src = 'https://geartap.in/api/image/946f7a04-d9e2-4ffa-b7ab-eaead7612b33.webp';
        dailyPrice.textContent = '₹5499';
        weeklyPrice.textContent = '₹27496';
        monthlyPrice.textContent = '₹87867';
    } else if (variant === '20+') {
        augerImage.src = 'https://geartap.in/api/image/b9c870a6-fa3e-4f1e-9525-7a7dc317977f.webp';
        dailyPrice.textContent = '₹6599';
        weeklyPrice.textContent = '₹32996';
        monthlyPrice.textContent = '₹105667';
    }
  }
  
  function increaseQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    let quantity = parseInt(quantityInput.value, 10);
    quantityInput.value = quantity + 1;
  }
  
  function decreaseQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    let quantity = parseInt(quantityInput.value, 10);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
    }
  }