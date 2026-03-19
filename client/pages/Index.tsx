import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShoppingCart, ArrowRight, Star } from "lucide-react";

// Product Section Component
function ProductSection({
  title,
  description,
  products,
  reverse = false,
}: {
  title: string;
  description: string;
  products: Array<{
    id: string;
    name: string;
    tagline: string;
    price: number;
    image: string;
    description: string;
    rating: number;
  }>;
  reverse?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="no-style">
                <div className="product-card h-full">
                  {/* Image Container */}
                  <div className="w-full h-64 sm:h-72 bg-secondary overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="image-container w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm text-accent font-semibold mb-1">{product.tagline}</p>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>

                    {/* Description on Scroll */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={isVisible ? { opacity: 1, height: "auto" } : {}}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    >
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    </motion.div>

                    {/* Price and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-2xl font-bold">₹{product.price.toLocaleString("en-IN")}</p>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-accent text-accent" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 btn-premium-primary text-sm">
                        Buy Now
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="flex-1 btn-premium-secondary text-sm no-style"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Homepage
export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Real product data for Indian market
  const electronics = [
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      tagline: "Apple's Latest Flagship",
      price: 129999,
      image: "https://images.unsplash.com/photo-1592286927505-1def25e63e67?w=500&h=500&fit=crop",
      description: "Advanced A17 Pro chip, titanium design, ProMotion display, advanced camera system.",
      rating: 4.9,
    },
    {
      id: "macbook-pro-16",
      name: "MacBook Pro 16\" M3 Max",
      tagline: "Professional Performance",
      price: 249999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      description: "M3 Max chip, 16GB unified memory, stunning Liquid Retina display, 20-hour battery.",
      rating: 4.8,
    },
    {
      id: "samsung-galaxy-s24",
      name: "Samsung Galaxy S24 Ultra",
      tagline: "Next Gen Android",
      price: 124999,
      image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop",
      description: "6.8\" Dynamic AMOLED display, Snapdragon 8 Gen 3, 200MP camera, AI features.",
      rating: 4.8,
    },
    {
      id: "ipad-air",
      name: "iPad Air 11\" (M2)",
      tagline: "Creativity Unleashed",
      price: 59999,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=500&h=500&fit=crop",
      description: "M2 chip, 11-inch Liquid Retina display, Apple Pencil support, perfect for creators.",
      rating: 4.7,
    },
  ];

  const gadgets = [
    {
      id: "airpods-pro-2",
      name: "Apple AirPods Pro (2nd Gen)",
      tagline: "Premium Audio Experience",
      price: 29999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      description: "Active noise cancellation, adaptive transparency, personalized spatial audio.",
      rating: 4.9,
    },
    {
      id: "apple-watch-series-9",
      name: "Apple Watch Series 9 45mm",
      tagline: "Health & Fitness Companion",
      price: 41999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      description: "Retina display, ECG app, blood oxygen sensor, 18-hour battery life.",
      rating: 4.8,
    },
    {
      id: "gopro-hero-12",
      name: "GoPro HERO 12 Black",
      tagline: "4K Action Camera",
      price: 54999,
      image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop",
      description: "5.3K video, waterproof design, advanced stabilization, perfect for adventures.",
      rating: 4.7,
    },
    {
      id: "sony-wh1000xm5",
      name: "Sony WH-1000XM5 Headphones",
      tagline: "Noise-Cancelling Kings",
      price: 34999,
      image: "https://images.unsplash.com/photo-1589003077984-894e133814c9?w=500&h=500&fit=crop",
      description: "Industry-leading ANC, 30-hour battery, multipoint connection, premium sound.",
      rating: 4.8,
    },
  ];

  const appliances = [
    {
      id: "daikin-ac-2-ton",
      name: "Daikin 2 Ton Inverter AC",
      tagline: "Cooling Excellence",
      price: 45999,
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop",
      description: "Inverter technology, 5-star energy rating, quiet operation, WiFi control.",
      rating: 4.8,
    },
    {
      id: "lg-refrigerator-655l",
      name: "LG 655L French Door Fridge",
      tagline: "Food Storage Perfected",
      price: 89999,
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&h=500&fit=crop",
      description: "Inverter compressor, door cooling, 10-year compressor warranty, spacious design.",
      rating: 4.7,
    },
    {
      id: "bosch-washing-machine",
      name: "Bosch 8kg Front Load Washer",
      tagline: "Advanced Washing",
      price: 59999,
      image: "https://images.unsplash.com/photo-1584622281867-8d4c3fbb4dbb?w=500&h=500&fit=crop",
      description: "Dual pump system, 8 wash programs, 1200 RPM spin, 5-year warranty.",
      rating: 4.8,
    },
    {
      id: "havells-water-heater",
      name: "Havells Immersion Water Heater",
      tagline: "Quick & Safe Heating",
      price: 4999,
      image: "https://images.unsplash.com/photo-1574694292902-8e9b4e8dbe8b?w=500&h=500&fit=crop",
      description: "1500W heating element, copper body, auto cut-off, ISI certified, 2-year warranty.",
      rating: 4.6,
    },
  ];

  const essentials = [
    {
      id: "oral-b-toothbrush",
      name: "Oral-B iO Series 10 Toothbrush",
      tagline: "Smart Dental Care",
      price: 11999,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
      description: "Oscillating-rotating tech, 6 cleaning modes, smart timer, 2-week battery.",
      rating: 4.7,
    },
    {
      id: "milton-water-bottle",
      name: "Milton Thermosteel Water Bottle 750ml",
      tagline: "Temperature Control",
      price: 1899,
      image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=500&h=500&fit=crop",
      description: "Keeps cold for 24hrs, hot for 12hrs, leak-proof, double-walled design.",
      rating: 4.8,
    },
    {
      id: "philips-smart-bulb",
      name: "Philips Hue Smart LED Bulb",
      tagline: "Smart Home Lighting",
      price: 2499,
      image: "https://images.unsplash.com/photo-1565636192335-14f9d9a0a9b6?w=500&h=500&fit=crop",
      description: "16 million colors, app control, voice activation compatible, 25000-hour lifespan.",
      rating: 4.6,
    },
    {
      id: "anker-power-bank",
      name: "Anker 737 Power Bank 24000mAh",
      tagline: "Ultimate Fast Charging",
      price: 5999,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
      description: "140W output, 3 ports, charges laptops & phones, compact design, 2-year warranty.",
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block text-accent font-semibold mb-4"
              >
                ✨ Premium Electronics & Daily Essentials
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6"
              >
                Experience Premium Quality
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-muted-foreground mb-8 max-w-lg"
              >
                Discover the finest collection of electronics, gadgets, and home appliances curated
                for modern India. Premium quality, unbeatable prices.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex gap-4"
              >
                <Link to="/products" className="btn-premium-primary gap-2 no-style">
                  <ShoppingCart size={20} />
                  Shop Now
                </Link>
                <button className="btn-premium-secondary gap-2">
                  Explore Collections
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=600&h=600&fit=crop"
                alt="Featured Product"
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <ProductSection
        title="Electronics"
        description="Latest smartphones, laptops, and premium tech gadgets for professionals and enthusiasts."
        products={electronics}
      />

      <div className="bg-secondary/30">
        <ProductSection
          title="Gadgets & Accessories"
          description="Smart devices, portable tech, and innovative accessories for your digital lifestyle."
          products={gadgets}
        />
      </div>

      <ProductSection
        title="Home Appliances"
        description="Modern home solutions with smart features for comfort, efficiency, and convenience."
        products={appliances}
      />

      <div className="bg-secondary/30">
        <ProductSection
          title="Daily Essentials"
          description="Everything you need for daily life, from personal care to smart home gadgets."
          products={essentials}
        />
      </div>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Upgrade Your Lifestyle?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-8"
          >
            Browse thousands of premium products and get instant delivery across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/products" className="btn-premium-primary gap-2 no-style inline-flex">
              Explore All Products
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
