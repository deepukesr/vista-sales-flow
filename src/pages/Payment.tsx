
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CreditCard, Smartphone, Banknote, CheckCircle, Clock, AlertCircle } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState("pending"); // pending, processing, success, failed
  const [progress, setProgress] = useState(0);

  const handlePayment = (method: string) => {
    setPaymentStatus("processing");
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setPaymentStatus("success");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const StatusIcon = () => {
    switch (paymentStatus) {
      case "processing":
        return <Clock className="w-8 h-8 text-sales-warning animate-spin" />;
      case "success":
        return <CheckCircle className="w-8 h-8 text-sales-success" />;
      case "failed":
        return <AlertCircle className="w-8 h-8 text-sales-error" />;
      default:
        return null;
    }
  };

  if (paymentStatus === "processing" || paymentStatus === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-soft animate-fade-in">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <StatusIcon />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              {paymentStatus === "processing" ? "Processing Payment..." : "Payment Successful!"}
            </h2>
            <p className="text-gray-600 mb-6">
              {paymentStatus === "processing" 
                ? "Please wait while we process your payment"
                : "Your order has been placed successfully"
              }
            </p>
            {paymentStatus === "processing" && (
              <div className="space-y-4">
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-gray-500">{progress}% Complete</p>
              </div>
            )}
            {paymentStatus === "success" && (
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-lg font-medium">Order #ORD-2024-001</p>
                  <p className="text-sm text-gray-600">Redirecting to dashboard...</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-soft border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigate("/checkout")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Checkout
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Payment</h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900">₹3,397</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Choose Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upi" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="upi" className="flex items-center space-x-2">
                      <Smartphone className="w-4 h-4" />
                      <span>UPI</span>
                    </TabsTrigger>
                    <TabsTrigger value="razorpay" className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4" />
                      <span>Card/Net Banking</span>
                    </TabsTrigger>
                    <TabsTrigger value="cash" className="flex items-center space-x-2">
                      <Banknote className="w-4 h-4" />
                      <span>Cash</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="upi" className="space-y-6">
                    <div className="text-center">
                      <div className="w-64 h-64 mx-auto mb-4 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                            <span className="text-gray-500 text-sm">QR Code</span>
                          </div>
                          <p className="text-sm text-gray-600">Scan with any UPI app</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-2">Or pay using UPI ID</p>
                          <div className="flex space-x-2 max-w-sm mx-auto">
                            <Input placeholder="Enter UPI ID" className="input-field" />
                            <Button onClick={() => handlePayment("upi")} className="btn-primary">
                              Pay Now
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">
                          Pay with Google Pay, PhonePe, Paytm or any UPI app
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="razorpay" className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <CreditCard className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Secure Payment Gateway</h3>
                      <p className="text-gray-600 mb-6">
                        Pay securely using Credit Card, Debit Card, Net Banking, or Digital Wallets
                      </p>
                      <Button onClick={() => handlePayment("razorpay")} className="btn-primary w-full h-12 text-lg">
                        Continue with Razorpay
                      </Button>
                      <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-gray-500">
                        <span>Visa</span>
                        <span>•</span>
                        <span>Mastercard</span>
                        <span>•</span>
                        <span>RuPay</span>
                        <span>•</span>
                        <span>American Express</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="cash" className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                        <Banknote className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Cash on Delivery</h3>
                      <p className="text-gray-600 mb-6">
                        Pay with cash when your order is delivered to your address
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-yellow-800">
                          <strong>Note:</strong> Additional ₹50 handling charge applies for Cash on Delivery
                        </p>
                      </div>
                      <Button onClick={() => handlePayment("cash")} className="btn-secondary w-full h-12 text-lg">
                        Confirm Cash on Delivery
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="shadow-soft sticky top-24">
              <CardHeader>
                <CardTitle>Final Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Items (2)</span>
                    <span>₹3,397</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span className="text-sales-success">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Taxes</span>
                    <span>₹0</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold text-gray-900">₹3,397</span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Delivery Address</h4>
                  <p className="text-sm text-blue-800">
                    John Doe<br />
                    123 Main Street<br />
                    Mumbai, Maharashtra 400001<br />
                    Phone: +91 98765 43210
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    By placing this order, you agree to our Terms & Conditions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
