// Product Data
const products = {
    mobiles: [
        { id: 1, name: "iPhone 15 Pro", price: 134900, specs: "6.1-inch Display, A17 Pro, 48MP Camera", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400", badge: "New" },
        { id: 2, name: "Samsung Galaxy S24 Ultra", price: 129999, specs: "6.8-inch, 200MP Camera, S Pen", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400", badge: "Best Seller" },
        { id: 3, name: "Google Pixel 8 Pro", price: 106999, specs: "6.7-inch, Tensor G3, AI Camera", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", badge: "New" },
        { id: 4, name: "OnePlus 12", price: 64999, specs: "6.82-inch, Snapdragon 8 Gen 3", image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400", badge: "" },
        { id: 5, name: "Xiaomi 14 Pro", price: 69999, specs: "Leica Camera, 120W Charging", image: "https://images.unsplash.com/photo-1678911820864-e5eac7aafa3d?w=400", badge: "" },
        { id: 6, name: "Vivo X100 Pro", price: 89999, specs: "Zeiss Camera, Dimensity 9300", image: "https://images.unsplash.com/photo-1610792516307-ea5acd4c2b9c?w=400", badge: "" },
        { id: 7, name: "Oppo Find X7 Ultra", price: 99999, specs: "1-inch Camera, 100W Charging", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400", badge: "Premium" },
        { id: 8, name: "Nothing Phone (2)", price: 44999, specs: "Glyph Interface, 50MP Camera", image: "https://images.unsplash.com/photo-1688056223815-1c5e7a1e2d7a?w=400", badge: "" },
        { id: 9, name: "Motorola Edge 50 Pro", price: 38999, specs: "144Hz Display, 125W Charging", image: "https://images.unsplash.com/photo-1610945415292-d9bbf067e59c?w=400", badge: "" },
        { id: 10, name: "Realme GT 6", price: 40999, specs: "Snapdragon 8s Gen 3, 120W", image: "https://images.unsplash.com/photo-1610945264803-c22e62d2a7b3?w=400", badge: "" }
    ],
    laptops: [
        { id: 11, name: "MacBook Pro M3", price: 169900, specs: "14-inch, M3 Chip, 16GB RAM", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", badge: "New" },
        { id: 12, name: "Dell XPS 15", price: 159990, specs: "Intel i9, 32GB RAM, RTX 4060", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400", badge: "Premium" },
        { id: 13, name: "HP Spectre x360", price: 124999, specs: "2-in-1, OLED, Intel i7", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", badge: "" },
        { id: 14, name: "Lenovo Legion Pro 7", price: 189990, specs: "RTX 4080, i9, 32GB RAM", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400", badge: "Gaming" },
        { id: 15, name: "Asus ROG Zephyrus", price: 139990, specs: "Ryzen 9, RTX 4070, 16GB", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400", badge: "" },
        { id: 16, name: "Microsoft Surface Laptop 5", price: 114999, specs: "13.5-inch, Intel i7, 16GB", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", badge: "" },
        { id: 17, name: "Acer Swift Go 14", price: 74999, specs: "OLED, Intel i7, 16GB RAM", image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400", badge: "" },
        { id: 18, name: "MSI Stealth 16", price: 174990, specs: "RTX 4070, i9, 32GB RAM", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400", badge: "Gaming" },
        { id: 19, name: "Samsung Galaxy Book4", price: 89990, specs: "Ultra 7, 16GB, 512GB SSD", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", badge: "" },
        { id: 20, name: "ASUS Zenbook 14", price: 84990, specs: "OLED, Intel i7, 16GB RAM", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400", badge: "" }
    ],
    watches: [
        { id: 21, name: "Apple Watch Ultra 2", price: 89990, specs: "49mm, GPS + Cellular, 36hrs", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400", badge: "Ultra" },
        { id: 22, name: "Samsung Watch 6 Classic", price: 42990, specs: "47mm, Rotating Bezel", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", badge: "" },
        { id: 23, name: "Garmin Fenix 7", price: 64990, specs: "Solar Charging, Multi-sport", image: "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=400", badge: "Sport" },
        { id: 24, name: "Google Pixel Watch 2", price: 34990, specs: "Fitbit Integration, 24hrs", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", badge: "" },
        { id: 25, name: "OnePlus Watch 2", price: 24999, specs: "100hr Battery, Dual Engine", image: "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=400", badge: "" },
        { id: 26, name: "Amazfit T-Rex Ultra", price: 29999, specs: "Military Grade, 20 Days", image: "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?w=400", badge: "Rugged" },
        { id: 27, name: "Fire-Boltt Invincible", price: 4999, specs: "1.43 AMOLED, Bluetooth Calling", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", badge: "" },
        { id: 28, name: "Noise ColorFit Pro 6", price: 5499, specs: "1.96 Display, 7 Days Battery", image: "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?w=400", badge: "" },
        { id: 29, name: "boAt Xtend Smartwatch", price: 2799, specs: "1.69 HD, HR Monitor", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", badge: "" },
        { id: 30, name: "Titan Smart 4", price: 12990, specs: "Premium Metal, GPS, SpO2", image: "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=400", badge: "Premium" }
    ]
};

let cartCount = 0;
let currentActiveNav = 'home';

// Format price in INR
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

// Create product card HTML
function createProductCard(product, category) {
    return `
        <div class="product-card" data-id="${product.id}" data-category="${category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-specs">${product.specs}</div>
                <div class="product-price">${formatPrice(product.price)} <small>incl. taxes</small></div>
                <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Render products
function renderProducts() {
    // Render mobiles
    const mobilesGrid = document.getElementById('mobiles-grid');
    if (mobilesGrid) {
        mobilesGrid.innerHTML = products.mobiles.map(product => createProductCard(product, 'mobile')).join('');
    }
    
    // Render laptops
    const laptopsGrid = document.getElementById('laptops-grid');
    if (laptopsGrid) {
        laptopsGrid.innerHTML = products.laptops.map(product => createProductCard(product, 'laptop')).join('');
    }
    
    // Render watches
    const watchesGrid = document.getElementById('watches-grid');
    if (watchesGrid) {
        watchesGrid.innerHTML = products.watches.map(product => createProductCard(product, 'watch')).join('');
    }
}

// Add to cart function (global for onclick)
window.addToCart = function(productName, price) {
    cartCount++;
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    
    showToast(`🛍️ ${productName} added to cart • ${formatPrice(price)}`);
    console.log(`Added to cart: ${productName} - ${formatPrice(price)}`);
};

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Smooth scroll to section
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Update active navigation
function updateActiveNav(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Setup navigation
function setupNavigation() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
            updateActiveNav(targetId);
        });
    });
    
    // Featured cards navigation
    const featuredCards = document.querySelectorAll('.featured-card');
    featuredCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            if (category) {
                smoothScrollTo(category);
                updateActiveNav(category);
            }
        });
    });
    
    // Hero buttons navigation
    const shopNowBtn = document.querySelector('.btn-primary');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo('mobiles');
            updateActiveNav('mobiles');
        });
    }
    
    const viewOffersBtn = document.querySelector('.btn-secondary');
    if (viewOffersBtn) {
        viewOffersBtn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo('featured');
        });
    }
    
    // Add scroll spy to update active nav
    window.addEventListener('scroll', () => {
        const sections = ['home', 'mobiles', 'laptops', 'watches'];
        let current = '';
        
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = section;
                    break;
                }
            }
        }
        
        if (current && current !== currentActiveNav) {
            currentActiveNav = current;
            updateActiveNav(current);
        }
    });
    
    // Add scroll to top button
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
}

// Initialize the website
function init() {
    renderProducts();
    setupNavigation();
    console.log('ElectroHub initialized! 30 products loaded.');
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
