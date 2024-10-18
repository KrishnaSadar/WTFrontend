document.addEventListener("DOMContentLoaded", function () {
    let data = [];
    const stateFilter = document.getElementById('stateFilter');
    const districtFilter = document.getElementById('districtFilter');
    const commodityFilter = document.getElementById('commodityFilter');
    const productList = document.getElementById('productList');

    // Fetch data from data.json
    fetch('data.json')
        .then(response => response.json())
        .then(json => {
            data = json;
            populateStateFilter();
        });

    // Populate state filter
    function populateStateFilter() {
        const states = [...new Set(data.map(item => item.State))];
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateFilter.appendChild(option);
        });
    }

    // Event listener for state selection
    stateFilter.addEventListener('change', function () {
        districtFilter.innerHTML = '<option value="">-- Select District --</option>';
        commodityFilter.innerHTML = '<option value="">-- Select Commodity --</option>';
        districtFilter.disabled = false;
        const selectedState = stateFilter.value;
        populateDistrictFilter(selectedState);
    });

    // Populate district filter based on selected state
    function populateDistrictFilter(state) {
        const districts = [...new Set(data.filter(item => item.State === state).map(item => item.District))];
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtFilter.appendChild(option);
        });
    }

    // Event listener for district selection
    districtFilter.addEventListener('change', function () {
        commodityFilter.innerHTML = '<option value="">-- Select Commodity --</option>';
        commodityFilter.disabled = false;
        const selectedState = stateFilter.value;
        const selectedDistrict = districtFilter.value;
        populateCommodityFilter(selectedState, selectedDistrict);
    });

    // Populate commodity filter based on selected state and district
    function populateCommodityFilter(state, district) {
        const commodities = [...new Set(data
            .filter(item => item.State === state && item.District === district)
            .map(item => item.Commodity))];
        commodities.forEach(commodity => {
            const option = document.createElement('option');
            option.value = commodity;
            option.textContent = commodity;
            commodityFilter.appendChild(option);
        });
    }

    // Filter button event
    document.getElementById('filterButton').addEventListener('click', function () {
        const selectedState = stateFilter.value;
        const selectedDistrict = districtFilter.value;
        const selectedCommodity = commodityFilter.value;

        const filteredData = data.filter(item =>
            (!selectedState || item.State === selectedState) &&
            (!selectedDistrict || item.District === selectedDistrict) &&
            (!selectedCommodity || item.Commodity === selectedCommodity)
        );

        displayProducts(filteredData);
    });

    // Display products in the table
    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.State}</td>
                <td>${product.District}</td>
                <td>${product.Market}</td>
                <td>${product.Commodity}</td>
                <td>${product.Variety}</td>
                <td>${product.Grade}</td>
                <td>${product.Arrival_Date}</td>
                <td>${product.Min_x0020_Price}</td>
                <td>${product.Max_x0020_Price}</td>
                <td>${product.Modal_x0020_Price}</td>
            `;
            productList.appendChild(row);
        });
    }
});