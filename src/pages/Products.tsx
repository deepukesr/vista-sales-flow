
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Home, QrCode, Filter } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("name");

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      sku: "TSH-001",
      style: "Casual",
      price: 899,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
      category: "Clothing",
      stock: 25
    },
    {
      id: 2,
      name: "Denim Blue Jeans",
      sku: "JNS-002",
      style: "Formal",
      price: 1599,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&crop=center",
      category: "Clothing",
      stock: 18
    },
    {
      id: 3,
      name: "Sports Running Shoes",
      sku: "SHS-003",
      style: "Athletic",
      price: 2499,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center",
      category: "Footwear",
      stock: 12
    },
    {
      id: 4,
      name: "Leather Wallet",
      sku: "WLT-004",
      style: "Accessories",
      price: 1299,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop&crop=center",
      category: "Accessories",
      stock: 30
    },
    {
      id: 5,
      name: "Wireless Headphones",
      sku: "HPH-005",
      style: "Electronics",
      price: 3999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
      category: "Electronics",
      stock: 8
    },
    {
      id: 6,
      name: "Smart Watch",
      sku: "WTC-006",
      style: "Electronics",
      price: 8999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center",
      category: "Electronics",
      stock: 15
    }
  ];

  const filteredProducts = products.filter(product => {
    const search = searchTerm.toLowerCase();
    switch (activeTab) {
      case "name":
        return product.name.toLowerCase().includes(search);
      case "sku":
        return product.sku.toLowerCase().includes(search);
      case "style":
        return product.style.toLowerCase().includes(search);
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-soft border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Products</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="px-3 py-1">
                {filteredProducts.length} Products
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Filters */}
        <Card className="mb-6 shadow-soft">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="name" className="text-sm">By Name</TabsTrigger>
                <TabsTrigger value="sku" className="text-sm">By SKU</TabsTrigger>
                <TabsTrigger value="style" className="text-sm">By Style</TabsTrigger>
                <TabsTrigger value="qr" className="text-sm">
                  <QrCode className="w-4 h-4 mr-2" />
                  QR Scan
                </TabsTrigger>
              </TabsList>

              <TabsContent value="name" className="mt-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search products by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 input-field"
                  />
                </div>
              </TabsContent>

              <TabsContent value="sku" className="mt-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by SKU code..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 input-field"
                  />
                </div>
              </TabsContent>

              <TabsContent value="style" className="mt-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by style category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 input-field"
                  />
                </div>
              </TabsContent>

              <TabsContent value="qr" className="mt-0">
                <div className="text-center py-8">
                  <QrCode className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">QR Code Scanner</h3>
                  <p className="text-gray-600 mb-4">Point your camera at a product QR code</p>
                  <Button className="btn-primary">
                    Open Camera Scanner
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant={product.stock > 20 ? "default" : product.stock > 10 ? "secondary" : "destructive"}>
                        {product.stock} in stock
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs mb-2">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 group-hover:text-sales-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>SKU: {product.sku}</span>
                      <span>{product.style}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                      <Button size="sm" className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
