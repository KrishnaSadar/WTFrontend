// Data for different variants
const variantsData = {
    "21 - 40 HP": {
        image: "https://geartap.in/api/image/808b5507-0ec9-454a-8d73-ad75e25bfe31.webp",
        dailyPrice: "₹3000",
        weeklyPrice: "₹15000",
        monthlyPrice: "₹50000"
    },
    "41 - 50 HP": {
        image: "https://geartap.in/api/image/d37e48bf-3ac1-4747-b55b-24f0203f20d3.webp",
        dailyPrice: "₹3500",
        weeklyPrice: "₹17708",
        monthlyPrice: "₹56667"
    },
    "50 - 75 HP": {
        image: "https://geartap.in/api/image/febf8a64-848c-45ba-ae72-b03bbcad300b.webp",
        dailyPrice: "₹4000",
        weeklyPrice: "₹20000",
        monthlyPrice: "₹60000"
    },
    "75 - 100 HP": {
        image: "https://geartap.in/api/image/ebfcdb42-53cc-40c4-81ed-77ff609b8060.webp",
        dailyPrice: "₹4500",
        weeklyPrice: "₹22000",
        monthlyPrice: "₹65000"
    },
    "100+ HP": {
        image: "https://geartap.in/api/image/81e78759-1e55-4a28-83fe-c324f5daeb7a.webp",
        dailyPrice: "₹5000",
        weeklyPrice: "₹25000",
        monthlyPrice: "₹70000"
    }
  };
  
  // Function to update the tractor image and pricing based on the selected variant
  function updateVariant(variant) {
    const selectedVariant = variantsData[variant];
  
    // Update the image
    document.getElementById("productImage").src = selectedVariant.image;
  
    // Update the pricing
    document.querySelector(".pricing .price-option:nth-child(1) .price").textContent = selectedVariant.dailyPrice;
    document.querySelector(".pricing .price-option:nth-child(2) .price").textContent = selectedVariant.weeklyPrice;
    document.querySelector(".pricing .price-option:nth-child(3) .price").textContent = selectedVariant.monthlyPrice;
  }
  
  // Add event listeners to the variant buttons
  const variantButtons = document.querySelectorAll(".variant");
  variantButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Update active state
        variantButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Update the variant details
        updateVariant(button.textContent);
    });
  });
  
  // Set default variant
  updateVariant("41 - 50 HP");