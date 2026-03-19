import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, Share2, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Real product details for Indian market
  const productDetails: Record<
    string,
    {
      name: string;
      price: number;
      rating: number;
      reviews: number;
      inStock: boolean;
      images: string[];
      description: string;
      specs: Record<string, string>;
      features: string[];
      warranty: string;
    }
  > = {
    "iphone-15-pro": {
      name: "iPhone 15 Pro",
      price: 129999,
      rating: 4.9,
      reviews: 2840,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1592286927505-1def25e63e67?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=800&fit=crop",
      ],
      description:
        "iPhone 15 Pro represents the pinnacle of Apple's smartphone engineering. Featuring the advanced A17 Pro chip, titanium design, and ProMotion display, it delivers unprecedented performance and stunning visuals.",
      specs: {
        Display: '6.1" Super Retina XDR, 120Hz ProMotion',
        Processor: "A17 Pro Bionic",
        RAM: "8GB",
        Storage: "128GB / 256GB / 512GB / 1TB",
        "Main Camera": "48MP (f/1.78)",
        "Ultra Wide": "12MP",
        "Telephoto": "12MP (3x optical zoom)",
        Battery: "Up to 29 hours video playback",
        Weight: "187g",
        Colors: "Black Titanium, White Titanium, Blue Titanium, Natural Titanium",
      },
      features: [
        "A17 Pro chip with 6-core CPU for blazing fast performance",
        "Advanced computational photography with ProRAW",
        "ProMotion display up to 120Hz for buttery smooth scrolling",
        "Titanium design - aerospace-grade durability",
        "Action button for quick access to custom actions",
        "USB-C connector for fast charging and data transfer",
        "IP68 water resistance - rated up to 6 meters for 30 minutes",
      ],
      warranty: "1 year limited warranty (optional AppleCare+ available)",
    },
    "samsung-galaxy-s24": {
      name: "Samsung Galaxy S24 Ultra",
      price: 124999,
      rating: 4.8,
      reviews: 2120,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
      ],
      description:
        "The Galaxy S24 Ultra is Samsung's flagship powerhouse with the latest Snapdragon 8 Gen 3, groundbreaking camera technology, and Galaxy AI integration for next-generation productivity.",
      specs: {
        Display: '6.8" Dynamic AMOLED 2X, 120Hz LTPO',
        Processor: "Snapdragon 8 Gen 3",
        RAM: "12GB LPDDR5X",
        Storage: "256GB / 512GB / 1TB UFS 4.0",
        "Rear Camera": "200MP + 50MP + 12MP",
        "Front Camera": "12MP with Autofocus",
        Battery: "5000mAh with 45W Fast Charging",
        Weight: "232g",
        Colors: "Titanium Black, Titanium Gray, Titanium Violet, Titanium Yellow",
      },
      features: [
        "Galaxy AI features powered by Snapdragon 8 Gen 3",
        "200MP primary camera with advanced night mode",
        "10x optical zoom with Super Clear Glass",
        "Titanium frame for premium durability",
        "Vision Booster display technology",
        "All-day battery with Ultra Power Saving Mode",
        "IP68 water and dust resistance",
      ],
      warranty: "2 years manufacturer warranty (India specific)",
    },
    "macbook-pro-16": {
      name: "MacBook Pro 16\" M3 Max",
      price: 249999,
      rating: 4.8,
      reviews: 890,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1488225073519-e21cc028cb29?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
      ],
      description:
        "MacBook Pro 16-inch with M3 Max chip delivers exceptional performance for professionals. Stunning Liquid Retina XDR display, all-day battery life, and thermal efficiency make it ideal for demanding workflows.",
      specs: {
        Display: '16.2" Liquid Retina XDR, 3456x2234',
        Processor: "Apple M3 Max (12-core CPU, 16-core GPU)",
        Memory: "36GB Unified Memory",
        Storage: "512GB SSD",
        Battery: "Up to 22 hours battery life",
        Weight: "2.15 kg",
        Ports: "3x Thunderbolt 4, HDMI, SD card, MagSafe",
      },
      features: [
        "M3 Max chip with up to 12-core CPU and 16-core GPU",
        "Stunning 16-inch Liquid Retina XDR display",
        "Up to 22 hours battery life on single charge",
        "Thermal design keeps it cool and quiet",
        "ProMotion 120Hz for smooth scrolling",
        "1080p FaceTime HD camera with advanced processing",
        "Six-speaker system with spatial audio",
      ],
      warranty: "1 year limited warranty (AppleCare+ available)",
    },
    "airpods-pro-2": {
      name: "Apple AirPods Pro (2nd Gen)",
      price: 29999,
      rating: 4.9,
      reviews: 3420,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      ],
      description:
        "AirPods Pro (2nd generation) feature up to 2x more Active Noise Cancellation, adaptive transparency, and personalized spatial audio with dynamic head tracking.",
      specs: {
        Driver: "Custom Apple audio driver",
        "Noise Control": "Active Noise Cancellation + Transparency",
        Audio: "Personalized Spatial Audio with dynamic head tracking",
        Connectivity: "Bluetooth 5.3",
        Battery: "Up to 6 hours listening time (ANC on), 30 hours with case",
        Charging: "USB-C with Fast Charging",
        Weight: "4.3g per earbud",
      },
      features: [
        "Up to 2x more Active Noise Cancellation than previous generation",
        "Adaptive Audio intelligently blends music with your surroundings",
        "Conversation Awareness automatically lowers volume when you speak",
        "Personalized Spatial Audio with dynamic head tracking",
        "Adaptive Transparency to hear the world while listening",
        "iOS, iPadOS, macOS, tvOS, and watchOS compatible",
        "Sweat and water resistant design",
      ],
      warranty: "1 year limited warranty (AppleCare+ available)",
    },
  };

  // Default product if not found
  const product = productDetails[id || ""] || {
    name: "Premium Product",
    price: 79999,
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=800&fit=crop",
    ],
    description: "Premium product with exceptional features and quality.",
    specs: {
      Brand: "TechPro",
      Model: "Max 15",
      Warranty: "2 Years",
      Availability: "In Stock",
    },
    features: ["Premium quality", "Long lasting", "Great value", "Easy to use"],
    warranty: "2 years manufacturer warranty",
  };

  const relatedProducts = [
    {
      id: "macbook-pro-16",
      name: "MacBook Pro 16\" M3 Max",
      price: 249999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    },
    {
      id: "ipad-air",
      name: "iPad Air 11\" (M2)",
      price: 59999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=500&h=500&fit=crop",
    },
    {
      id: "apple-watch-series-9",
      name: "Apple Watch Series 9 45mm",
      price: 41999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    },
  ];

  const reviews = [
    {
      id: 1,
      author: "Rajesh Kumar",
      rating: 5,
      date: "2025-03-10",
      title: "Excellent product!",
      content: "Best purchase I made this year. Highly recommended for anyone looking for premium quality.",
    },
    {
      id: 2,
      author: "Priya Sharma",
      rating: 4,
      date: "2025-03-08",
      title: "Great value for money",
      content: "Good quality and fast delivery. Would have appreciated better packaging.",
    },
    {
      id: 3,
      author: "Arjun Patel",
      rating: 5,
      date: "2025-03-05",
      title: "Perfect product",
      content: "Exactly as described. Customer service was amazing. Will buy again!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-12">
          <Link to="/" className="text-primary hover:text-primary/80 no-style">
            Home
          </Link>
          <ChevronRight size={16} className="text-muted-foreground" />
          <Link to="/products" className="text-primary hover:text-primary/80 no-style">
            Products
          </Link>
          <ChevronRight size={16} className="text-muted-foreground" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="sticky top-20">
              {/* Main Image */}
              <div className="w-full h-96 md:h-[500px] bg-secondary rounded-lg overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 overflow-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-border"
                    }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{product.rating}</span>
              <a href="#reviews" className="text-primary hover:text-primary/80 no-style">
                ({product.reviews} reviews)
              </a>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold mb-2">₹{product.price.toLocaleString("en-IN")}</p>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

            {/* Key Benefits */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
              <div className="flex flex-col items-center text-center">
                <Truck className="text-accent mb-2" size={24} />
                <p className="text-sm font-semibold">Free Delivery</p>
                <p className="text-xs text-muted-foreground">on orders over ₹500</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="text-accent mb-2" size={24} />
                <p className="text-sm font-semibold">Secure Payment</p>
                <p className="text-xs text-muted-foreground">100% secure</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="text-accent mb-2" size={24} />
                <p className="text-sm font-semibold">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30-day guarantee</p>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-lg font-bold hover:bg-secondary"
                >
                  −
                </button>
                <span className="px-6 py-3 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-lg font-bold hover:bg-secondary"
                >
                  +
                </button>
              </div>
              <button className="flex-1 btn-premium-primary">Add to Cart</button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-6 border-2 rounded-lg transition-colors ${
                  isWishlisted
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border hover:border-accent"
                }`}
              >
                <Heart size={24} className={isWishlisted ? "fill-current" : ""} />
              </button>
            </div>

            {/* Stock Status */}
            <div className="p-4 rounded-lg bg-secondary/50 mb-6">
              {product.inStock ? (
                <p className="text-sm text-green-600 font-semibold">✓ In Stock - Order now and get it tomorrow</p>
              ) : (
                <p className="text-sm text-red-600 font-semibold">Out of Stock</p>
              )}
            </div>

            {/* Share */}
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Share2 size={20} />
              Share Product
            </button>
          </motion.div>
        </div>

        {/* Specifications and Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6">Specifications</h2>
            <div className="space-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex gap-4 pb-4 border-b border-border">
                  <p className="font-semibold min-w-40">{key}</p>
                  <p className="text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6 p-3 rounded-lg bg-secondary/30">
              <strong>Warranty:</strong> {product.warranty}
            </p>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.section
          id="reviews"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 pb-12 border-b border-border"
        >
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="p-6 rounded-lg bg-secondary/20">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < review.rating ? "fill-accent text-accent" : "text-border"}`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-bold mb-2">{review.title}</h3>
                <p className="text-muted-foreground">{review.content}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related Products */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((related, index) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/product/${related.id}`} className="no-style">
                  <div className="product-card h-full">
                    <div className="w-full h-48 bg-secondary rounded-lg overflow-hidden mb-4">
                      <img src={related.image} alt={related.name} className="image-container w-full h-full" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{related.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold">₹{related.price.toLocaleString("en-IN")}</p>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-accent text-accent" />
                        <span className="text-sm font-semibold">{related.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
