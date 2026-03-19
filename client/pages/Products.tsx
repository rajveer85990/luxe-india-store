import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Star, Filter, Search as SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // All real products available in India
  const allProducts = [
    // Electronics
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      category: "electronics",
      price: 129999,
      image: "https://images.unsplash.com/photo-1592286927505-1def25e63e67?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 2840,
    },
    {
      id: "samsung-galaxy-s24",
      name: "Samsung Galaxy S24 Ultra",
      category: "electronics",
      price: 124999,
      image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 2120,
    },
    {
      id: "macbook-pro-16",
      name: "MacBook Pro 16\" M3 Max",
      category: "electronics",
      price: 249999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 890,
    },
    {
      id: "ipad-air",
      name: "iPad Air 11\" (M2)",
      category: "electronics",
      price: 59999,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 1450,
    },
    {
      id: "oneplus-12",
      name: "OnePlus 12",
      category: "electronics",
      price: 79999,
      image: "https://images.unsplash.com/photo-1512491768245-e88e19f91afc?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 1680,
    },
    {
      id: "dell-xps-15",
      name: "Dell XPS 15 (Core i7)",
      category: "electronics",
      price: 139999,
      image: "https://images.unsplash.com/photo-1488225073519-e21cc028cb29?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 920,
    },
    // Gadgets & Accessories
    {
      id: "airpods-pro-2",
      name: "Apple AirPods Pro (2nd Gen)",
      category: "gadgets",
      price: 29999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 3420,
    },
    {
      id: "apple-watch-series-9",
      name: "Apple Watch Series 9 45mm",
      category: "gadgets",
      price: 41999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 2560,
    },
    {
      id: "gopro-hero-12",
      name: "GoPro HERO 12 Black",
      category: "gadgets",
      price: 54999,
      image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 1240,
    },
    {
      id: "sony-wh1000xm5",
      name: "Sony WH-1000XM5 Headphones",
      category: "gadgets",
      price: 34999,
      image: "https://images.unsplash.com/photo-1589003077984-894e133814c9?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 2890,
    },
    {
      id: "dji-mini-3-pro",
      name: "DJI Mini 3 Pro Drone",
      category: "gadgets",
      price: 74999,
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 780,
    },
    {
      id: "garmin-watch",
      name: "Garmin Forerunner 965",
      category: "gadgets",
      price: 59999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 620,
    },
    // Home Appliances
    {
      id: "daikin-ac-2-ton",
      name: "Daikin 2 Ton Inverter AC",
      category: "appliances",
      price: 45999,
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 1560,
    },
    {
      id: "lg-refrigerator-655l",
      name: "LG 655L French Door Fridge",
      category: "appliances",
      price: 89999,
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 920,
    },
    {
      id: "bosch-washing-machine",
      name: "Bosch 8kg Front Load Washer",
      category: "appliances",
      price: 59999,
      image: "https://images.unsplash.com/photo-1584622281867-8d4c3fbb4dbb?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 1340,
    },
    {
      id: "havells-water-heater",
      name: "Havells Immersion Water Heater 1500W",
      category: "appliances",
      price: 4999,
      image: "https://images.unsplash.com/photo-1574694292902-8e9b4e8dbe8b?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 840,
    },
    {
      id: "voltas-ac-1-5-ton",
      name: "Voltas 1.5 Ton Inverter AC",
      category: "appliances",
      price: 34999,
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 1200,
    },
    {
      id: "godrej-microwave",
      name: "Godrej 30L Convection Microwave",
      category: "appliances",
      price: 12999,
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 560,
    },
    // Daily Essentials
    {
      id: "oral-b-toothbrush",
      name: "Oral-B iO Series 10 Toothbrush",
      category: "essentials",
      price: 11999,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 1890,
    },
    {
      id: "milton-water-bottle",
      name: "Milton Thermosteel Water Bottle 750ml",
      category: "essentials",
      price: 1899,
      image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 2340,
    },
    {
      id: "philips-smart-bulb",
      name: "Philips Hue Smart LED Bulb",
      category: "essentials",
      price: 2499,
      image: "https://images.unsplash.com/photo-1565636192335-14f9d9a0a9b6?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 1450,
    },
    {
      id: "anker-power-bank",
      name: "Anker 737 Power Bank 24000mAh",
      category: "essentials",
      price: 5999,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 2560,
    },
    {
      id: "pigeon-cooker",
      name: "Pigeon 5L Pressure Cooker",
      category: "essentials",
      price: 1999,
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 1680,
    },
    {
      id: "amazon-echo-dot",
      name: "Amazon Echo Dot (5th Gen)",
      category: "essentials",
      price: 2999,
      image: "https://images.unsplash.com/photo-1589003077984-894e133814c9?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 2120,
    },
  ];

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Products" },
    { id: "electronics", name: "Electronics" },
    { id: "gadgets", name: "Gadgets" },
    { id: "appliances", name: "Appliances" },
    { id: "essentials", name: "Daily Essentials" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-lg text-muted-foreground">
            Discover our complete collection of premium electronics, gadgets, and home essentials.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-20 space-y-8">
              {/* Search */}
              <div>
                <h3 className="font-bold mb-4">Search</h3>
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Min: ₹{priceRange[0]}</label>
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Max: ₹{priceRange[1]}</label>
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">Showing {filteredProducts.length} products</p>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 btn-premium-secondary"
              >
                <Filter size={20} />
                Filters
              </button>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mb-6 p-4 border border-border rounded-lg space-y-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Categories */}
                <div>
                  <h4 className="font-semibold mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === cat.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Search */}
                <div>
                  <h4 className="font-semibold mb-2">Search</h4>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </motion.div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link to={`/product/${product.id}`} className="no-style">
                    <div className="product-card h-full">
                      <div className="w-full h-64 bg-secondary overflow-hidden rounded-lg mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="image-container w-full h-full"
                        />
                      </div>

                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="fill-accent text-accent" />
                          <span className="font-semibold">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold">₹{product.price.toLocaleString("en-IN")}</p>
                        <button className="btn-premium-primary py-2 px-3">Shop</button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchTerm("");
                    setPriceRange([0, 150000]);
                  }}
                  className="btn-premium-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
