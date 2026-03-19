import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Smartphone,
  Building2,
  Truck,
  ArrowRight,
  Lock,
  Check,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const total = 190997;
  const orderId = "ORD-2025-003421";

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI",
      icon: Smartphone,
      description: "Google Pay, PhonePe, Paytm",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "card",
      name: "Debit/Credit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express",
      color: "from-red-500 to-orange-500",
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: Building2,
      description: "All major Indian banks",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: Truck,
      description: "Pay when you receive",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setPaymentProcessing(false);
    setPaymentSuccess(true);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: 1 }}
                className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
              >
                <Check className="w-10 h-10 text-green-600" />
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your order has been confirmed and is being processed.
            </p>

            {/* Order Details */}
            <div className="p-8 rounded-lg bg-secondary/30 border border-border mb-8 text-left">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                  <p className="text-xl font-bold">{orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-xl font-bold text-primary">₹{total.toLocaleString("en-IN")}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <p className="text-xl font-bold text-green-600">Confirmed</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                  <p className="text-xl font-bold">Tomorrow by 6 PM</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-8 p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <h2 className="font-bold mb-4 text-left">What's Next?</h2>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex gap-2">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You'll receive a confirmation email with tracking details</span>
                </li>
                <li className="flex gap-2">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Track your order in real-time from your account</span>
                </li>
                <li className="flex gap-2">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Receive your order at your doorstep tomorrow</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 flex-col sm:flex-row">
              <Link to="/products" className="btn-premium-primary gap-2 flex-1 no-style inline-flex items-center justify-center">
                Continue Shopping
                <ArrowRight size={20} />
              </Link>
              <Link to="/" className="btn-premium-secondary flex-1 no-style">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Payment</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
            <div className="space-y-4 mb-8">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <motion.button
                    key={method.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedMethod === method.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg">{method.name}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      {selectedMethod === method.id && (
                        <Check className="w-6 h-6 text-primary" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Payment Form */}
            <motion.form
              key={selectedMethod}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handlePayment}
              className="p-6 border border-border rounded-lg"
            >
              {selectedMethod === "upi" && (
                <div className="space-y-6">
                  <h3 className="font-bold text-lg">Enter UPI ID</h3>
                  <input
                    type="text"
                    placeholder="example@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <p className="text-sm text-muted-foreground">
                    You'll be redirected to your UPI app to complete the payment
                  </p>
                </div>
              )}

              {selectedMethod === "card" && (
                <div className="space-y-6">
                  <h3 className="font-bold text-lg">Card Details</h3>
                  <input
                    type="text"
                    placeholder="Card Number (16 digits)"
                    value={cardData.cardNumber}
                    onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                    maxLength={16}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    value={cardData.cardName}
                    onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={cardData.expiryDate}
                      onChange={(e) => setCardData({ ...cardData, expiryDate: e.target.value })}
                      maxLength={5}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                      maxLength={3}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
              )}

              {selectedMethod === "netbanking" && (
                <div className="space-y-6">
                  <h3 className="font-bold text-lg">Select Your Bank</h3>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>SBI</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra Bank</option>
                    <option>IndusInd Bank</option>
                  </select>
                  <p className="text-sm text-muted-foreground">
                    You'll be redirected to your bank's secure login page
                  </p>
                </div>
              )}

              {selectedMethod === "cod" && (
                <div className="space-y-6 text-center py-8">
                  <Truck className="w-12 h-12 text-accent mx-auto" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Cash on Delivery</h3>
                    <p className="text-muted-foreground">
                      Pay ₹{total.toLocaleString("en-IN")} when you receive your order
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                <Lock size={16} />
                <span>Your payment information is secure and encrypted</span>
              </div>

              <motion.button
                type="submit"
                disabled={paymentProcessing}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-premium-primary mt-6 gap-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {paymentProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border border-current border-t-transparent"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Pay ₹{total.toLocaleString("en-IN")}
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="sticky top-20 p-6 rounded-lg bg-secondary/30 border border-border">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p className="font-semibold">₹79,999</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Additional Items</p>
                  <p className="font-semibold">₹25,998</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">GST (18%)</p>
                  <p className="font-semibold">₹15,824</p>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mb-6">
                <p>Total</p>
                <p className="text-primary">₹{total.toLocaleString("en-IN")}</p>
              </div>

              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm">
                <p className="font-semibold mb-2">Order ID: {orderId}</p>
                <p className="text-muted-foreground">
                  Your order will be confirmed after payment is processed successfully
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
