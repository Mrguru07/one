// PRODUCT DATA (10 each for Mobiles, Laptops, Watches)
// All prices in INR

const mobiles = [
    { name: "iQOO Z9 Pro 5G", price: 28999, specs: "8GB RAM, 128GB, 50MP Camera", imgId: 15 },
    { name: "Samsung Galaxy S24 FE", price: 64999, specs: "12GB RAM, 256GB, AI Camera", imgId: 26 },
    { name: "OnePlus Nord 5", price: 32999, specs: "16GB RAM, 256GB, 100W Charging", imgId: 42 },
    { name: "Xiaomi 14 Ultra", price: 89999, specs: "Leica Lens, 16GB+512GB", imgId: 55 },
    { name: "Google Pixel 9", price: 71999, specs: "Tensor G4, 128GB, Pro Camera", imgId: 76 },
    { name: "Realme GT 6T", price: 37999, specs: "Snapdragon 8s Gen3, 120W", imgId: 82 },
    { name: "Vivo X Fold 3", price: 139999, specs: "Foldable, 12GB+512GB", imgId: 96 },
    { name: "Nothing Phone (3)", price: 44999, specs: "Glyph Interface, 50MP", imgId: 108 },
    { name: "Motorola Edge 50 Ultra", price: 52999, specs: "144Hz Curved, 125W", imgId: 120 },
    { name: "Apple iPhone 16", price: 79999, specs: "A18 Bionic, 48MP, 256GB", imgId: 133 }
];

const laptops = [
    { name: "MacBook Air M3", price: 114990, specs: "13.6-inch, 8GB/512GB", imgId: 20 },
    { name: "Dell XPS 15", price: 159990, specs: "i9, 32GB RAM, RTX 4060", imgId: 30 },
    { name: "HP Victus 16", price: 78990, specs: "Ryzen 7, 16GB, RTX 3050", imgId: 44 },
    { name: "Lenovo Legion Pro 7", price: 189990, specs: "i9-14900HX, RTX 4080", imgId: 60 },
    { name: "Asus ROG Zephyrus G14", price: 139990, specs: "Ryzen 9, 16GB, 1TB", imgId: 68 },
    { name: "Acer Swift Go 14", price: 69990, specs: "OLED, i7, 16GB RAM", imgId: 84 },
    { name: "MSI Stealth 16", price: 174990, specs: "i9, RTX 4070, 32GB", imgId: 99 },
    { name: "Apple MacBook Pro 14", price: 189990, specs: "M3 Pro, 18GB/1TB", imgId: 113 },
    { name: "Samsung Galaxy Book4 Ultra", price: 164990, specs: "Core Ultra 9, 32GB", imgId: 130 },
    { name: "Microsoft Surface Laptop Studio 2", price: 204990, specs: "i7, 16GB, RTX 4050", imgId: 145 }
];

const watches = [
    { name: "Apple Watch Series 9", price: 45990, specs: "GPS, 41mm, Always-On", imgId: 25 },
    { name: "Samsung Galaxy Watch 6 Classic", price: 36990, specs: "47mm, Rotating Bezel", imgId: 37 },
    { name: "Garmin Venu 3", price: 48990, specs: "AMOLED, GPS, 14 Days Battery", imgId: 52 },
    { name: "Pixel Watch 2", price: 34990, specs: "Fitbit Integration", imgId: 64 },
    { name: "OnePlus Watch 2", price: 24999, specs: "Dual Engine, 100hr Battery", imgId: 70 },
    { name: "Amazfit T-Rex Ultra", price: 29999, specs: "Military Grade, 20-Day", imgId: 88 },
    { name: "Fire-Boltt Invincible", price: 4999, specs: "1.43" AMOLED, Bluetooth Calling", imgId: 104 },
    { name: "Noise ColorFit Pro 6", price: 5499, specs: "1.96" Display, 7 Days", imgId: 117 },
    { name: "boAt Xtend Smartwatch", price: 2799, specs: "1.69" HD, HR Monitor", imgId: 125 },
    { name: "Titan Smart 4", price: 12990, specs: "Premium Metal, GPS", imgId: 140 }
];

// Helper to generate image URL
function getProductImage(imgId) {
    return `https://picsum.photos/id/${imgId}/400/300`;
}

// Format price in INR
function formatINR(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

// Toast notification system
let toastTimeout = null;
function showToast(message) {
    const toastDiv = document.getElementById('toast');
    if (!toastDiv) return;
    toastDiv.style.opacity = '1';
    toastDiv.style.transform = 'translateX(-50%) scale(1)';
    toastDiv.innerText = message || '✨ Added to cart ✨';
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastDiv.style.opacity = '0';
    }, 2000);
}

// Cart handler function
function cartHandler(e) {
    e.stopPropagation();
    const btn = e.currentTarget;
    const name = btn.getAttribute('data-name');
    const price = btn.getAttribute('data-price');
    if (name && price) {
        showToast(`🛍️ ${name} added to cart • ${formatINR(parseInt(price))}`);
        console.log(`[CART] Added ${name} - ${formatINR(parseInt(price))}`);
    } else {
        showToast(`✔️ Item added!`);
    }
}

// Attach event listeners to all cart buttons
function attachCartListeners() {
    const allButtons = document.querySelectorAll('.btn-cart');
    allButtons.forEach(btn => {
        btn.removeEventListener('click', cartHandler);
        btn.addEventListener('click', cartHandler);
    });
}

// Render products in specified grid container
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    products.forEach((product) => {
        const priceInr = formatINR(product.price);
        const imgUrl = getProductImage(product.imgId);
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="img-wrapper">
                <img class="product-img" src="${imgUrl}" alt="${product.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/1e5f7a/white?text=${encodeURIComponent(product.name)}'">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="price">${priceInr} <small>incl. taxes</small></div>
                <div class="spec">${product.specs}</div>
                <button class="btn-cart" data-name="${product.name}" data-price="${product.price}">🛒 Add to Cart</button>
            </div>
        `;
        container.appendChild(card);
    });
    
    attachCartListeners();
}

// Handle image loading errors
function setupImageErrorHandling() {
    const allImgs = document.querySelectorAll('.product-img');
    allImgs.forEach(img => {
        img.addEventListener('error', function() {
            if (!this.src.includes('placehold')) {
                this.src = `https://placehold.co/400x300/2c3e50/white?text=Device+Image`;
            }
        });
    });
}

// Smooth navigation for anchor links
function setupSmoothNavigation() {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Initialize the website
function init() {
    renderProducts(mobiles, 'mobiles-grid');
    renderProducts(laptops, 'laptops-grid');
    renderProducts(watches, 'watches-grid');
    setupSmoothNavigation();
    
    // Setup image error handling after a short delay to ensure all images are loaded
    setTimeout(setupImageErrorHandling, 100);
    
    console.log("E-Commerce website loaded | 30 products total (10 each) with INR prices.");
}

// Start the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
