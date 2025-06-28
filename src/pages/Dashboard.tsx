
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Search, Cart, User, Clock, CheckCircle, TrendingUp, Package } from "lucide-react";

const Dashboard = () => {
  const metrics = [
    {
      title: "Today's Sales",
      value: "₹24,680",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-sales-success"
    },
    {
      title: "Orders in Progress",
      value: "8",
      change: "3 pending",
      icon: Clock,
      color: "text-sales-warning"
    },
    {
      title: "Completed Orders",
      value: "23",
      change: "+5 today",
      icon: CheckCircle,
      color: "text-sales-success"
    },
    {
      title: "Top Products",
      value: "12",
      change: "Active items",
      icon: Package,
      color: "text-sales-accent"
    }
  ];

  const quickActions = [
    { title: "Browse Products", icon: Search, link: "/products", color: "bg-blue-500" },
    { title: "View Cart", icon: Cart, link: "/cart", color: "bg-green-500" },
    { title: "Customer Info", icon: User, link: "/checkout", color: "bg-purple-500" },
    { title: "Admin Panel", icon: Home, link: "/admin", color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sales Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your daily overview</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Store: Mumbai Central</p>
              <p className="text-sm font-medium text-gray-900">Sales Rep: John Doe</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="metric-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className={`text-sm ${metric.color} font-medium`}>{metric.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50 ${metric.color}`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.link}>
                  <Button 
                    variant="outline" 
                    className="w-full h-24 flex-col space-y-2 hover:shadow-soft transition-all duration-200 border-2 hover:border-gray-300"
                  >
                    <div className={`p-2 rounded-lg ${action.color} text-white`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium">{action.title}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Order #ORD-00{order}</p>
                      <p className="text-sm text-gray-600">₹2,400 • 2 items</p>
                    </div>
                    <span className="px-2 py-1 bg-sales-success text-white text-xs rounded-lg font-medium">
                      Completed
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Premium T-Shirt", "Cotton Jeans", "Sports Sneakers"].map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                      <div>
                        <p className="font-medium">{product}</p>
                        <p className="text-sm text-gray-600">{15 - index * 2} sold today</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-sales-primary">₹{1200 + index * 300}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
