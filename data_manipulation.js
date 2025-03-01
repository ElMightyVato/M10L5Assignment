// Task 1: Create an array containing product information
let products = [
    { name: "Laptop", price: 250.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 98.99, description: "Immersive audio experience" }
]; // Here I'm defining an array of products where each one of my elements is an object 
// with three properties name, price, and description.

// Task 2: Function to display the product information dynamically
function displayProducts() {
    // Get the div where the product details will be displayed
    const productListDiv = document.getElementById('product-list');

    // Loop through the products array and create HTML elements
    products.forEach(product => {
        // Create a div for each product
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Create elements for product name, price, and description
        let productName = document.createElement('h2');
        productName.textContent = product.name;

        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

        let productDescription = document.createElement('p');
        productDescription.textContent = `Description: ${product.description}`;

        // Append the product details to the productDiv
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        // Append the productDiv to the main product list div
        productListDiv.appendChild(productDiv);
    });
}

// Task 3: Event listener to trigger the display of products when the page loads
window.onload = function() {
    displayProducts();
};
