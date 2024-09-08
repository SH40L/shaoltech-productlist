// Sample Products Data
const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'images/products/Allah + Muhammad.jpeg' },
    { id: 2, name: 'Product 2', price: '$15', image: 'images/products/product2.jpg' },
    { id: 3, name: 'Product 3', price: '$20', image: 'images/products/product3.jpg' },
    // Add more products as needed
];

const itemsPerPage = 20;
let currentPage = 1;

// Function to display products
function displayProducts(page = 1) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    paginatedProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <a href="https://m.me/429980123522052?ref=${encodeURIComponent(`Product Name: ${product.name}, Price: ${product.price}`)}" class="buy-now-button">Buy Now</a>
        `;
        productGrid.appendChild(productItem);
    });

    window.scrollTo(0, 0); // Scroll to the top of the page
}

// Function to display pagination
function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(products.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        if (i === currentPage) {
            pageButton.style.backgroundColor = '#d49c1b';
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayProducts(i);
            displayPagination();
        });
        pagination.appendChild(pageButton);
    }
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <a href="https://m.me/429980123522052?ref=${encodeURIComponent(`Product Name: ${product.name}, Price: ${product.price}`)}" class="buy-now-button">Buy Now</a>
        `;
        productGrid.appendChild(productItem);
    });

    displayPagination(); // Update pagination for search results
});

// Initial load
displayProducts();
displayPagination();
