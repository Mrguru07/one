<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ElectroMarket - India's Largest Electronics Store</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Amazon-style Header -->
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-top-content">
                    <div class="logo">
                        <i class="fas fa-bolt"></i>
                        <span>Electro<span>Market</span></span>
                        <span class="logo-dot">.in</span>
                    </div>
                    <div class="delivery-address">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <span>Deliver to</span>
                            <span>India <i class="fas fa-caret-down"></i></span>
                        </div>
                    </div>
                    <div class="search-bar">
                        <select class="search-category">
                            <option>All</option>
                            <option>Mobiles</option>
                            <option>Laptops</option>
                            <option>Watches</option>
                        </select>
                        <input type="text" placeholder="Search for products, brands and more" id="searchInput">
                        <button class="search-btn" id="searchBtn">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <div class="header-actions">
                        <div class="lang-selector">
                            <i class="fas fa-globe"></i>
                            <span>EN</span>
                        </div>
                        <div class="account">
                            <span>Hello, Sign in</span>
                            <span>Account & Lists <i class="fas fa-caret-down"></i></span>
                        </div>
                        <div class="returns">
                            <span>Returns</span>
                            <span>& Orders</span>
                        </div>
                        <div class="cart-icon">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="cart-count">0</span>
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <div class="nav-menu">
                    <div class="all-categories">
                        <i class="fas fa-bars"></i>
                        <span>All</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <a href="#mobiles" class="nav-link">Mobiles</a>
                    <a href="#laptops" class="nav-link">Laptops</a>
                    <a href="#watches" class="nav-link">Smartwatches</a>
                    <a href="#" class="nav-link">Today's Deals</a>
                    <a href="#" class="nav-link">Customer Service</a>
                    <a href="#" class="nav-link">Electronics</a>
                    <a href="#" class="nav-link">New Releases</a>
                    <a href="#" class="nav-link">Best Sellers</a>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Banner -->
    <section class="hero-banner">
        <div class="hero-slider">
            <div class="hero-slide active">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1500" alt="Electronics Sale">
                <div class="hero-content">
                    <h2>Great Indian Festival</h2>
                    <p>Up to 70% off on Electronics</p>
                    <a href="#mobiles" class="shop-now">Shop Now →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
        <div class="container">
            <div class="category-grid">
                <div class="category-card" data-category="mobiles">
                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200" alt="Mobiles">
                    <span>Mobiles</span>
                </div>
                <div class="category-card" data-category="laptops">
                    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200" alt="Laptops">
                    <span>Laptops</span>
                </div>
                <div class="category-card" data-category="watches">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" alt="Watches">
                    <span>Smartwatches</span>
                </div>
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200" alt="Accessories">
                    <span>Accessories</span>
                </div>
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1585386959984-a4155224f1b3?w=200" alt="Audio">
                    <span>Audio</span>
                </div>
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200" alt="Wearables">
                    <span>Wearables</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Sections -->
    <main class="main-content">
        <div class="container">
            <!-- Mobiles Section -->
            <section id="mobiles" class="product-section">
                <div class="section-header">
                    <h2>Smartphones & Accessories</h2>
                    <a href="#" class="view-all">View all →</a>
                </div>
                <div class="product-grid" id="mobiles-grid"></div>
            </section>

            <!-- Laptops Section -->
            <section id="laptops" class="product-section">
                <div class="section-header">
                    <h2>Laptops & Computers</h2>
                    <a href="#" class="view-all">View all →</a>
                </div>
                <div class="product-grid" id="laptops-grid"></div>
            </section>

            <!-- Watches Section -->
            <section id="watches" class="product-section">
                <div class="section-header">
                    <h2>Smartwatches & Fitness Trackers</h2>
                    <a href="#" class="view-all">View all →</a>
                </div>
                <div class="product-grid" id="watches-grid"></div>
            </section>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-back-to-top">
            <button id="backToTop">Back to top</button>
        </div>
        <div class="footer-links">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <h4>Get to Know Us</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press Releases</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Connect with Us</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Make Money with Us</h4>
                        <ul>
                            <li><a href="#">Sell on ElectroMarket</a></li>
                            <li><a href="#">Become an Affiliate</a></li>
                            <li><a href="#">Advertise Your Products</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Let Us Help You</h4>
                        <ul>
                            <li><a href="#">Your Account</a></li>
                            <li><a href="#">Returns Centre</a></li>
                            <li><a href="#">100% Purchase Protection</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                <div class="copyright-content">
                    <div class="footer-logo">
                        <i class="fas fa-bolt"></i>
                        <span>ElectroMarket</span>
                        <span>.in</span>
                    </div>
                    <div class="copyright-text">
                        <a href="#">Conditions of Use</a>
                        <a href="#">Privacy Notice</a>
                        <a href="#">Interest-Based Ads</a>
                        <p>© 1996-2025, ElectroMarket.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div id="toast" class="toast"></div>

    <script src="script.js"></script>
</body>
</html>
