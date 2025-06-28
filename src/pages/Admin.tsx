
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Home, TrendingUp, Users, Package, DollarSign, Download, Filter, Search } from "lucide-react";

const Admin = () => {
  const metrics = [
    { title: "Total Revenue", value: "₹2,45,680", change: "+15.2%", icon: DollarSign },
    { title: "Total Orders", value: "1,245", change: "+8.1%", icon: Package },
    { title: "Active Customers", value: "892", change: "+12.5%", icon: Users },
    { title: "Growth Rate", value: "23.4%", change: "+3.2%", icon: TrendingUp }
  ];

  const topProducts = [
    { name: "Premium Cotton T-Shirt", sales: 245, revenue: "₹2,20,055" },
    { name: "Denim Blue Jeans", sales: 189, revenue: "₹3,02,111" },
    { name: "Sports Running Shoes", sales: 156, revenue: "₹3,89,844" },
    { name: "Leather Wallet", sales: 134, revenue: "₹1,74,066" },
    { name: "Wireless Headphones", sales: 98, revenue: "₹3,91,902" }
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", amount: "₹2,450", status: "completed", date: "2024-01-15" },
    { id: "ORD-002", customer: "Jane Smith", amount: "₹1,890", status: "processing", date: "2024-01-15" },
    { id: "ORD-003", customer: "Mike Johnson", amount: "₹3,250", status: "pending", date: "2024-01-14" },
    { id: "ORD-004", customer: "Sarah Wilson", amount: "₹1,299", status: "completed", date: "2024-01-14" },
    { id: "ORD-005", customer: "David Brown", amount: "₹4,560", status: "completed", date: "2024-01-13" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-sales-success text-white";
      case "processing": return "bg-sales-warning text-white";
      case "pending": return "bg-sales-secondary text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="metric-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-sales-success font-medium">{metric.change}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 text-sales-primary">
                    <metric.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Chart Placeholder */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Sales Overview</span>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Sales Chart Visualization</p>
                  <p className="text-sm text-gray-500">Revenue trends over time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-sales-primary"></div>
                      <div>
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-gray-600">{product.sales} units sold</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-sales-primary">{product.revenue}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Tables */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Management Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="orders">Recent Orders</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="orders">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Recent Orders</h3>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Search className="w-4 h-4 mr-2" />
                        Search
                      </Button>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Order ID</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((order, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{order.id}</td>
                            <td className="py-3 px-4">{order.customer}</td>
                            <td className="py-3 px-4 font-medium">{order.amount}</td>
                            <td className="py-3 px-4">
                              <Badge className={`${getStatusColor(order.status)} text-xs`}>
                                {order.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{order.date}</td>
                            <td className="py-3 px-4">
                              <Button variant="outline" size="sm">View</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="customers">
                <div className="text-center py-12">
                  <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Management</h3>
                  <p className="text-gray-600">View and manage customer information, purchase history, and preferences</p>
                </div>
              </TabsContent>

              <TabsContent value="products">
                <div className="text-center py-12">
                  <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Product Management</h3>
                  <p className="text-gray-600">Add, edit, and manage product catalog, inventory, and pricing</p>
                </div>
              </TabsContent>

              <TabsContent value="reports">
                <div className="text-center py-12">
                  <TrendingUp className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics & Reports</h3>
                  <p className="text-gray-600">Generate detailed reports and analyze sales performance</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
