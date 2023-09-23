const truckList = document.getElementById('truck-list');

fetch('truck.json')
const trucks = {
    "trucks": [
        {
            "id": 1,
            "make": "Ford",
            "model": "F-150",
            "year": 2022,
            "color": "Black",
            "mileage": 10000,
            "price": 50,
            "availability": true,
            "image": "https://example.com/truck1.jpg"
        },
        {
            "id": 2,
            "make": "Chevrolet",
            "model": "Silverado",
            "year": 2021,
            "color": "Red",
            "mileage": 15000,
            "price": 60,
            "availability": true,
            "image": "https://example.com/truck2.jpg"
        },
        {
            "id": 3,
            "make": "Ram",
            "model": "1500",
            "year": 2020,
            "color": "White",
            "mileage": 20000,
            "price": 55,
            "availability": false,
            "image": "https://example.com/truck3.jpg"
        }
    ]
};

let truckHtml = '';
for (let i = 0; i < trucks.trucks.length; i++) {
    let truck = trucks.trucks[i];
    let availability = truck.availability ? 'Available' : 'Not Available';
    truckHtml += `
        <div class="truck">
            <img src="${truck.image}" alt="${truck.make} ${truck.model}">
            <h2>${truck.make} ${truck.model}</h2>
            <p>Year: ${truck.year} | Color: ${truck.color} | Mileage: ${truck.mileage}</p>
            <p>Price: $${truck.price} per day</p>
            <p>${availability}</p>
        </div>
    `;
}

truckList.innerHTML = truckHtml;
