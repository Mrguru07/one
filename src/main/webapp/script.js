// Product Data with Amazon-style details
const products = {
    mobiles: [
        { id: 1, name: "Apple iPhone 15 Pro Max", price: 159900, originalPrice: 179900, rating: 4.7, reviews: 2345, specs: "256GB, Deep Purple", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300", badge: "New" },
        { id: 2, name: "Samsung Galaxy S24 Ultra", price: 129999, originalPrice: 149999, rating: 4.8, reviews: 1892, specs: "12GB RAM, 256GB", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300", badge: "Best Seller" },
        { id: 3, name: "Google Pixel 8 Pro", price: 106999, originalPrice: 119999, rating: 4.6, reviews: 1456, specs: "128GB, Hazel", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300", badge: "AI Powered" },
        { id: 4, name: "OnePlus 12", price: 64999, originalPrice: 69999, rating: 4.5, reviews: 2678, specs: "16GB RAM, 512GB", image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300", badge: "" },
        { id: 5, name: "Xiaomi 14 Ultra", price: 89999, originalPrice: 99999, rating: 4.4, reviews: 1234, specs: "Leica Camera, 512GB", image: "https://images.unsplash.com/photo-1678911820864-e5eac7aafa3d?w=300", badge: "" },
        { id: 6, name: "Vivo X100 Pro", price: 89999, originalPrice: 94999, rating: 4.5, reviews: 987, specs: "Zeiss Camera, 256GB", image: "https://images.unsplash.com/photo-1610792516307-ea5acd4c2b9c?w=300", badge: "" },
        { id: 7, name: "Nothing Phone (2)", price: 44999, originalPrice: 49999, rating: 4.3, reviews: 1876, specs: "12GB RAM, 256GB", image: "https://images.unsplash.com/photo-1688056223815-1c5e7a1e2d7a?w=300", badge: "Glyph Interface" },
        { id: 8, name: "Motorola Edge 50 Pro", price: 38999, originalPrice: 42999, rating: 4.2, reviews: 876, specs: "144Hz Display, 256GB", image: "https://images.unsplash.com/photo-1610945415292-d9bbf067e59c?w=300", badge: "" },
        { id: 9, name: "Realme GT 6", price: 40999, originalPrice: 45999, rating: 4.4, reviews: 765, specs: "Snapdragon 8s Gen3", image: "https://images.unsplash.com/photo-1610945264803-c22e62d2a7b3?w=300", badge: "" },
        { id: 10, name: "iQOO 12", price: 52999, originalPrice: 57999, rating: 4.3, reviews: 654, specs: "16GB RAM, 256GB", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300", badge: "Gaming" }
    ],
    laptops: [
        { id: 11, name: "Apple MacBook Pro M3", price: 169900, originalPrice: 189900, rating: 4.9, reviews: 3456, specs: "14-inch, 16GB RAM", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300", badge: "M3 Chip" },
        { id: 12, name: "Dell XPS 15", price: 159990, originalPrice: 179990, rating: 4.7, reviews: 2345, specs: "i9, 32GB RAM, RTX 4060", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300", badge: "Premium" },
        { id: 13, name: "HP Spectre x360", price: 124999, originalPrice: 139999, rating: 4.6, reviews: 1876, specs: "2-in-1, OLED, i7", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300", badge: "" },
        { id: 14, name: "Lenovo Legion Pro 7", price: 189990, originalPrice: 209990, rating: 4.8, reviews: 1432, specs: "RTX 4080, i9, 32GB", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300", badge: "Gaming" },
        { id: 15, name: "Asus ROG Zephyrus", price: 139990, originalPrice: 154990, rating: 4.7, reviews: 1234, specs: "Ryzen 9, RTX 4070", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300", badge: "" },
        { id: 16, name: "Microsoft Surface Laptop 5", price: 114999, originalPrice: 124999, rating: 4.5, reviews: 987, specs: "13.5-inch, i7, 16GB", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300", badge: "" },
        { id: 17, name: "Acer Swift Go 14", price: 74999, originalPrice: 84999, rating: 4.4, reviews: 876, specs: "OLED, i7, 16GB RAM", image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=300", badge: "" },
        { id: 18, name: "MSI Stealth 16", price: 174990, originalPrice: 189990, rating: 4.6, reviews: 765, specs: "RTX 4070, i9, 32GB", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300", badge: "" },
        { id: 19, name: "Samsung Galaxy Book4", price: 89990, originalPrice: 99990, rating: 4.3, reviews: 654, specs: "Ultra 7, 16GB, 512GB", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300", badge: "" },
        { id: 20, name: "ASUS Zenbook 14", price: 84990, originalPrice: 94990, rating: 4.4, reviews: 543, specs: "OLED, i7, 16GB RAM", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300", badge: "" }
    ],
    watches: [
        { id: 21, name: "Apple Watch Ultra 2", price: 89990, originalPrice: 99990, rating: 4.8, reviews: 2345, specs: "49mm, GPS + Cellular", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300", badge: "Ultra" },
        { id: 22, name: "Samsung Watch 6 Classic", price: 42990, originalPrice: 47990, rating: 4.6, reviews: 1876, specs: "47mm, Rotating Bezel", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300", badge: "" },
        { id: 23, name: "Garmin Fenix 7", price: 64990, originalPrice: 74990, rating: 4.7, reviews: 1432, specs: "Solar Charging, Multi-sport", image: "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=300", badge: "Sport" },
        { id: 24, name: "Google Pixel Watch 2", price: 34990, originalPrice: 39990, rating: 4.4, reviews: 1234, specs: "Fitbit Integration", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300", badge: "" },
        { id: 25, name: "OnePlus Watch 2", price: 24999, originalPrice: 29999, rating: 4.3, reviews: 987, specs: "100hr Battery", image: "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=300", badge: "" },
        { id: 26, name: "Amazfit T-Rex Ultra", price: 29999, originalPrice: 34999, rating: 4.5, reviews: 876, specs: "Military Grade", image: "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?w=300", badge: "Rugged" },
        { id: 27, name: "Fire-Boltt Invincible", price: 4999, originalPrice: 7999, rating: 4.2, reviews: 3456, specs: "1.43 AMOLED", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300", badge: "" },
        { id: 28, name: "Noise ColorFit Pro 6", price: 5499, originalPrice: 8999, rating: 4.1, reviews: 2345, specs: "1.96 Display", image: "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?w=300", badge: "" },
        { id: 29, name: "boAt Xtend Smartwatch", price: 2799, originalPrice: 4999, rating: 4.0, reviews: 5678, specs: "1.69 HD, HR Monitor", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300", badge: "" },
        { id: 30, name: "Titan Smart 4", price: 12990, originalPrice: 15990, rating: 4.3, reviews: 987, specs: "Premium Metal, GPS", image: "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=300", badge: "Premium" }
    ]
};

let cartCount = 0;
let cartItems = [];

// Format price
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '★';
    if (halfStar) stars += '½';
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) stars += '☆';
    return stars;
}

// Create product card
function createProductCard(product, category) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
           
