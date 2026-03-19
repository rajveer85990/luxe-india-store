import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const cartItems = [
    {
      name: "iPhone 15 Pro",
      price: 129999,
      quantity: 1,
    },
    {
      name: "Apple AirPods Pro (2nd Gen)",
      price: 29999,
      quantity: 2,
    },
  ];

  const subtotal = 129999 + 29999 * 2;
  const gst = Math.round(subtotal * 0.18);
  const deliveryFee = 0;
  const total = subtotal + gst + deliveryFee;

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Checkout</h1>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping & Payment Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Address */}
                <div className="p-6 border border-border rounded-lg">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <MapPin size={24} className="text-primary" />
                    Shipping Address
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring mb-4"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select State</option>
                      {indianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="pinCode"
                      placeholder="PIN Code"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-premium-primary gap-2 flex items-center justify-center"
                >
                  Continue to Payment
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="sticky top-20 p-6 rounded-lg bg-secondary/30 border border-border">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border max-h-64 overflow-y-auto">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
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
                    <p className="text-green-600 font-semibold">FREE</p>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-bold">
                  <p>Total</p>
                  <p className="text-primary">₹{total.toLocaleString("en-IN")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✓</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Shipping Address Confirmed</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your address has been saved. Now let's complete the payment.
            </p>
            <div className="space-y-3">
              <Link to="/payment" className="w-full btn-premium-primary block no-style">
                Continue to Payment
              </Link>
              <Link to="/cart" className="w-full btn-premium-secondary block no-style">
                Back to Cart
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
