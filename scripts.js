// Sample Products Data
const products = [
    { id: 1, name: 'Islamic Calligraphy - Allah & Muhammad', price: 'Tk. 899 /-', image: 'images/products/1-Allah + Muhammad.jpg' },
    { id: 2, name: 'Birt Date Frame', price: 'Tk. 1150 /-', image: 'images/products/2-Birth Date.jpg' },
    { id: 3, name: 'Birthday Wishing Gift', price: 'Tk. 1150 /-', image: 'images/products/3-Birthday Gift.jpg' },
    { id: 4, name: 'Owl Night Lamp', price: 'Tk. 899 /-', image: 'images/products/4-Owl (2).jpg' },
    { id: 5, name: 'Islamic Calligraphy - Quran Book', price: 'Tk. 899 /-', image: 'images/products/5-Quran.jpg' },
    { id: 6, name: 'Spotify Color Frame', price: 'Tk. 1150 /-', image: 'images/products/6-Spotify Color.jpg' },
    { id: 7, name: 'Gift For Special Person', price: 'Tk. 1150 /-', image: 'images/products/7-Two Love.jpg' },
    { id: 8, name: 'PUBG', price: 'Tk. 899 /-', image: 'images/products/8-PUBG.jpg' },
    { id: 9, name: 'Spotify Engraved Frame', price: 'Tk. 1150 /-', image: 'images/products/9-Spotify Engraved.jpg' },
    { id: 10, name: 'Blank Sheet of any Shape with 2 Pen', price: 'Tk. 899 /-', image: 'images/products/10-Blank.jpg' },
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
