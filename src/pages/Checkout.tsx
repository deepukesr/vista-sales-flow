
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight, User, MapPin, Clock } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    landmark: ""
  });
  const [deliveryOption, setDeliveryOption] = useState("standard");

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      navigate("/payment");
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-soft border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 1 ? "bg-sales-primary text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  1
                </div>
                <span className={`text-sm ${step >= 1 ? "text-gray-900" : "text-gray-500"}`}>Customer Info</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-200">
                <div className={`h-full transition-all duration-300 ${
                  step >= 2 ? "bg-sales-primary w-full" : "bg-gray-200 w-0"
                }`}></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 2 ? "bg-sales-primary text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  2
                </div>
                <span className={`text-sm ${step >= 2 ? "text-gray-900" : "text-gray-500"}`}>Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card className="shadow-soft animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-sales-primary" />
                    <span>Customer Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter full name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="Enter phone number"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Complete Address *</Label>
                    <Input
                      id="address"
                      placeholder="House no, Building, Street"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="Enter city"
                        value={customerInfo.city}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">PIN Code *</Label>
                      <Input
                        id="pincode"
                        placeholder="Enter PIN code"
                        value={customerInfo.pincode}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, pincode: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="landmark">Landmark</Label>
                      <Input
                        id="landmark"
                        placeholder="Nearby landmark"
                        value={customerInfo.landmark}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, landmark: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card className="shadow-soft animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-sales-primary" />
                    <span>Delivery Options</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption} className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-sales-primary transition-colors">
                      <RadioGroupItem value="express" id="express" />
                      <div className="flex-1">
                        <Label htmlFor="express" className="text-base font-medium cursor-pointer">
                          Express Delivery
                        </Label>
                        <p className="text-sm text-gray-600">Delivery within 2-4 hours</p>
                        <p className="text-sm font-medium text-sales-secondary">₹150 extra</p>
                      </div>
                      <Clock className="w-5 h-5 text-sales-warning" />
                    </div>

                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-sales-primary transition-colors">
                      <RadioGroupItem value="standard" id="standard" />
                      <div className="flex-1">
                        <Label htmlFor="standard" className="text-base font-medium cursor-pointer">
                          Standard Delivery
                        </Label>
                        <p className="text-sm text-gray-600">Delivery within 1-2 days</p>
                        <p className="text-sm font-medium text-sales-success">FREE</p>
                      </div>
                      <MapPin className="w-5 h-5 text-sales-primary" />
                    </div>

                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-sales-primary transition-colors">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <div className="flex-1">
                        <Label htmlFor="pickup" className="text-base font-medium cursor-pointer">
                          Store Pickup
                        </Label>
                        <p className="text-sm text-gray-600">Pickup from our store</p>
                        <p className="text-sm font-medium text-sales-success">FREE</p>
                      </div>
                      <div className="w-5 h-5 bg-sales-accent rounded-full"></div>
                    </div>
                  </RadioGroup>

                  {deliveryOption === "pickup" && (
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Store Location</h4>
                      <p className="text-sm text-blue-800">
                        SalesFlow Store<br />
                        123 Main Street, Mumbai Central<br />
                        Mumbai, Maharashtra 400001<br />
                        Phone: +91 98765 43210
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="shadow-soft sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=60&h=60&fit=crop&crop=center"
                      alt="Product"
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Premium Cotton T-Shirt</p>
                      <p className="text-xs text-gray-600">Size: M, Color: Blue, Qty: 2</p>
                    </div>
                    <span className="text-sm font-medium">₹1,798</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=60&h=60&fit=crop&crop=center"
                      alt="Product"
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Denim Blue Jeans</p>
                      <p className="text-xs text-gray-600">Size: L, Color: Blue, Qty: 1</p>
                    </div>
                    <span className="text-sm font-medium">₹1,599</span>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹3,397</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span className={deliveryOption === "express" ? "text-sales-secondary" : "text-sales-success"}>
                      {deliveryOption === "express" ? "₹150" : "FREE"}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>₹{(3397 + (deliveryOption === "express" ? 150 : 0)).toLocaleString()}</span>
                  </div>
                </div>
                
                <Button onClick={handleNext} className="w-full btn-primary">
                  {step === 1 ? "Continue to Delivery" : "Proceed to Payment"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
