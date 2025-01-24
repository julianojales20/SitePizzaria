import React from 'react';
import { Home, Users, Coffee, ClipboardList, Calendar, Settings, BarChart2 } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

export default function Sidebar() {
  const { currentPage, setCurrentPage } = useNavigation();

  const menuItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Customers', icon: Users },
    { name: 'Products', icon: Coffee },
    { name: 'Orders', icon: ClipboardList },
    { name: 'Reservations', icon: Calendar },
    { name: 'Reports', icon: BarChart2 },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="flex flex-col h-full">
        <div className="space-y-4 py-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.name)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                currentPage === item.name ? 'bg-orange-50 text-orange-600 border-r-4 border-orange-500' : ''
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}