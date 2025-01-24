import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, ChefHat, Bell, Settings, Utensils, Users, DollarSign, Clock, TrendingUp, ShoppingBag } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();

  const metrics = [
    { name: 'Today\'s Orders', value: '124', icon: ShoppingBag, change: '+12%' },
    { name: 'Active Tables', value: '18', icon: Users, change: '+3' },
    { name: 'Average Wait Time', value: '24m', icon: Clock, change: '-2m' },
    { name: 'Today\'s Revenue', value: '$3,240', icon: DollarSign, change: '+15%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">{user?.restaurantName}</h1>
                <p className="text-sm text-gray-500">{user?.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="bg-orange-100 rounded-md p-3">
                        <metric.icon className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {metric.name}
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {metric.value}
                          </div>
                          <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            {metric.change}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Active Orders</h2>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  12 Pending
                </span>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white p-2 rounded-md">
                        <Utensils className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium">Table {order}</p>
                        <p className="text-sm text-gray-500">3 items • 18:30</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                      In Progress
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Popular Items</h2>
                <TrendingUp className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Margherita Pizza', orders: 45, revenue: '$675' },
                  { name: 'Pasta Carbonara', orders: 38, revenue: '$532' },
                  { name: 'Caesar Salad', orders: 32, revenue: '$384' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.orders} orders today</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-orange-600">{item.revenue}</p>
                      <p className="text-sm text-gray-500">Revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}