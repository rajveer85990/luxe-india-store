import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Zap, Home, Watch, Utensils, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      description: "Smartphones, laptops, tablets, and more",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    },
    {
      id: "gadgets",
      name: "Gadgets & Accessories",
      description: "Smart devices, wearables, and tech accessories",
      icon: Watch,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    },
    {
      id: "appliances",
      name: "Home Appliances",
      description: "AC, refrigerators, washing machines, and more",
      icon: Home,
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop",
    },
    {
      id: "essentials",
      name: "Daily Essentials",
      description: "Personal care, home essentials, and more",
      icon: Utensils,
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Shop by Category
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Explore our complete range of products organized by category
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/products?category=${category.id}`}
                    className="no-style group block"
                  >
                    <div className="relative h-96 rounded-2xl overflow-hidden cursor-pointer">
                      {/* Background Image */}
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-8">
                        {/* Icon */}
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center self-start`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Text */}
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {category.name}
                          </h3>
                          <p className="text-white/90 mb-4">{category.description}</p>
                          <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                            Explore <ArrowRight size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Can't Find What You're Looking For?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-8"
          >
            Use our search feature to find exactly what you need
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/products" className="btn-premium-primary gap-2 inline-flex no-style">
              Browse All Products
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
