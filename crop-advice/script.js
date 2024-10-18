document.getElementById('soilForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Collect form data
    const data = {
        phCaCl2: document.getElementById('phCaCl2').value,
        phWater: document.getElementById('phWater').value,
        ec: document.getElementById('ec').value,
        organicCarbon: document.getElementById('organicCarbon').value,
        calciumCarbonate: document.getElementById('calciumCarbonate').value,
        phosphorus: document.getElementById('phosphorus').value,
        nitrogen: document.getElementById('nitrogen').value,
        potassium: document.getElementById('potassium').value
    };

    // Display the collected data in the console for debugging
    console.log('Collected Soil Data:', data);

    // Generate the prompt to send to the chatbot API
    const prompt = `Soil data: 
    pH of CaCl2: ${data.phCaCl2}, 
    pH of H₂O: ${data.phWater}, 
    Electrical Conductivity: ${data.ec}, 
    Organic Carbon: ${data.organicCarbon}%, 
    Calcium Carbonate: ${data.calciumCarbonate}%, 
    Phosphorus: ${data.phosphorus} mg/kg, 
    Nitrogen: ${data.nitrogen} mg/kg, 
    Potassium: ${data.potassium} mg/kg. 
    
    Based on the soil composition, suggest which crops are best suited for my farm, and provide any other recommendations. give me the suggestion in plain text and don't include anything extra like bigger font underlines just plain normal text. And I also don't want stars (* or **) before crop names, just plain paragraph format.`;

    // Show the loading dialog
    showLoadingDialog();

    // Prepare the POST request
    try {
        const response = await fetch('https://w-tbackend.vercel.app/api/bot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        // Handle the response and store it in the 'result' variable
        console.log(prompt);
        const result = await response.json();

        // Check if the API returned a valid response
        if (result) {
            // Remove the asterisks (*) from the result before displaying
            const cleanResponse = result.prompt.replace(/\*/g, '');
            displayResult(cleanResponse);
        } else {
            displayResult("Sorry, I couldn't process your request. Please try again.");
        }

    } catch (error) {
        console.error('Error:', error);
        displayResult("Error: Unable to get a response from the server.");
    } finally {
        // Hide the loading dialog once the request is complete
        hideLoadingDialog();
    }
});

// Function to display the result on the page
function displayResult(response) {
    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container';
    resultContainer.innerHTML = `<h3>AI Response:</h3><p>${response}</p>`;

    // Append the result to the form section or anywhere in the document
    document.querySelector('.soil-data').appendChild(resultContainer);
}

// Function to show loading dialog
function showLoadingDialog() {
    let loadingDialog = document.createElement('div');
    loadingDialog.className = 'loading-dialog';
    loadingDialog.innerHTML = '<p>Loading data, please wait...</p>';
    document.body.appendChild(loadingDialog);
}

// Function to hide loading dialog
function hideLoadingDialog() {
    const loadingDialog = document.querySelector('.loading-dialog');
    if (loadingDialog) {
        loadingDialog.remove();
    }
}