<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ElectroHub | Premium Electronics Store</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <i class="fas fa-bolt"></i>
                <h1>Electro<span>Hub</span></h1>
            </div>
            <div class="nav-menu">
                <a href="#home" class="nav-link active">Home</a>
                <a href="#mobiles" class="nav-link">Mobiles</a>
                <a href="#laptops" class="nav-link">Laptops</a>
                <a href="#watches" class="nav-link">Watches</a>
            </div>
            <div class="cart-icon">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count">0</span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Welcome to ElectroHub</h1>
            <p>Discover the latest in technology with unbeatable prices</p>
            <div class="hero-buttons">
                <a href="#mobiles" class="btn-primary">Shop Now</a>
                <a href="#featured" class="btn-secondary">View Offers</a>
            </div>
        </div>
    </section>

    <!-- Featured Section -->
    <section id="featured" class="featured">
        <div class="container">
            <h2 class="section-title">Featured Categories</h2>
            <div class="featured-grid">
                <div class="featured-card" data-category="mobiles">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Smartphones</h3>
                    <p>Latest models with 5G support</p>
                    <a href="#mobiles" class="featured-link">Shop Now →</a>
                </div>
                <div class="featured-card" data-category="laptops">
                    <i class="fas fa-laptop-code"></i>
                    <h3>Laptops</h3>
                    <p>Gaming & Professional laptops</p>
                    <a href="#laptops" class="featured-link">Shop Now →</a>
                </div>
                <div class="featured-card" data-category="watches">
                    <i class="fas fa-clock"></i>
                    <h3>Smart Watches</h3>
                    <p>Track your fitness in style</p>
                    <a href="#watches" class="featured-link">Shop Now →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Mobiles Section -->
    <section id="mobiles" class="products-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">📱 Latest Smartphones</h2>
                <p class="section-subtitle">Discover the perfect mobile for your needs</p>
            </div>
            <div class="product-grid" id="mobiles-grid"></div>
        </div>
    </section>

    <!-- Laptops Section -->
    <section id="laptops" class="products-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">💻 Premium Laptops</h2>
                <p class="section-subtitle">Powerful performance for work and play</p>
            </div>
            <div class="product-grid" id="laptops-grid"></div>
        </div>
    </section>

    <!-- Watches Section -->
    <section id="watches" class="products-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">⌚ Smart Watches</h2>
                <p class="section-subtitle">Stay connected and track your fitness</p>
            </div>
            <div class="product-grid" id="watches-grid"></div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>ElectroHub</h3>
                    <p>Your trusted partner for premium electronics</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#mobiles">Mobiles</a></li>
                        <li><a href="#laptops">Laptops</a></li>
                        <li><a href="#watches">Watches</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <ul>
                        <li><i class="fas fa-phone"></i> +91 98765 43210</li>
                        <li><i class="fas fa-envelope"></i> support@electrohub.com</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 ElectroHub. All rights reserved. Prices in INR (₹)</p>
            </div>
        </div>
    </footer>

    <div id="toast" class="toast"></div>

    <script src="script.js"></script>
</body>
</html>
