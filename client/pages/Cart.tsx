import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      price: 129999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1592286927505-1def25e63e67?w=500&h=500&fit=crop",
    },
    {
      id: "airpods-pro-2",
      name: "Apple AirPods Pro (2nd Gen)",
      price: 29999,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.18);
  const deliveryFee = subtotal > 500 ? 0 : 99;
  const total = subtotal + gst + deliveryFee;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-2xl font-bold mb-4">Your cart is empty</p>
            <p className="text-lg text-muted-foreground mb-8">
              Start shopping to add items to your cart
            </p>
            <Link to="/products" className="btn-premium-primary gap-2 no-style inline-flex">
              Continue Shopping
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-6 border border-border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <Link to={`/product/${item.id}`} className="no-style">
                        <h3 className="font-bold text-lg hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-2xl font-bold text-primary mt-2">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-destructive/10 rounded-lg text-destructive transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>

                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 hover:bg-secondary transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 hover:bg-secondary transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-20 h-fit"
            >
              <div className="p-6 rounded-lg bg-secondary/30 border border-border">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p className="font-semibold">₹{subtotal.toLocaleString("en-IN")}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">GST (18%)</p>
                    <p className="font-semibold">₹{gst.toLocaleString("en-IN")}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Delivery Fee</p>
                    <p className={`font-semibold ${deliveryFee === 0 ? "text-green-600" : ""}`}>
                      {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mb-6 text-xl font-bold">
                  <p>Total</p>
                  <p className="text-primary">₹{total.toLocaleString("en-IN")}</p>
                </div>

                <Link to="/checkout" className="w-full btn-premium-primary block text-center no-style mb-3">
                  Proceed to Checkout
                </Link>
                <Link to="/products" className="w-full btn-premium-secondary block text-center no-style">
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
