// JavaScript for Brush Cutter Page

// Price and image data for each variant
const brushCutterData = {
    "2-10": {
        dailyPrice: "₹401",
        weeklyPrice: "₹2005",
        monthlyPrice: "₹6417",
        imageSrc: "https://geartap.in/api/image/40f948da-9bf9-4a73-a362-6f637eb569a5.webp"
    },
    "10-16": {
        dailyPrice: "₹501",
        weeklyPrice: "₹2505",
        monthlyPrice: "₹7417",
        imageSrc: "https://geartap.in/api/image/eec16c87-b892-406a-ab06-058e4a05b68a.webp"
    },
    "16-26": {
        dailyPrice: "₹601",
        weeklyPrice: "₹3005",
        monthlyPrice: "₹8417",
        imageSrc: "https://geartap.in/api/image/ad635293-aa40-4a0c-b3e5-07afa9c79bbc.webp"
    }
  };
  
  // Function to change the variant
  function changeVariant(variant) {
    const data = brushCutterData[variant];
    document.getElementById("dailyPrice").textContent = data.dailyPrice;
    document.getElementById("weeklyPrice").textContent = data.weeklyPrice;
    document.getElementById("monthlyPrice").textContent = data.monthlyPrice;
    document.getElementById("productImage").src = data.imageSrc;
  
    // Add active class to the selected variant
    const variants = document.querySelectorAll(".variant");
    variants.forEach(v => v.classList.remove("active"));
    document.querySelector(`.variant[onclick="changeVariant('${variant}')"]`).classList.add("active");
  }
  
  // Quantity control
  function decreaseQuantity() {
    const quantityInput = document.getElementById("quantityInput");
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
    }
  }
  
  function increaseQuantity() {
    const quantityInput = document.getElementById("quantityInput");
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
  }