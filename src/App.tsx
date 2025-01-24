import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import CustomerManagement from './components/CustomerManagement';
import ProductManagement from './components/ProductManagement';

function MainContent() {
  const { currentPage } = useNavigation();

  const renderContent = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Customers':
        return <CustomerManagement />;
      case 'Products':
        return <ProductManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="pl-64">
      {renderContent()}
    </div>
  );
}

function AuthenticatedApp() {
  const { isAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  if (isAuthenticated) {
    return (
      <NavigationProvider>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <MainContent />
        </div>
      </NavigationProvider>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=64&h=64&fit=crop&auto=format"
            alt="Restaurant logo"
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Sign in to your restaurant' : 'Register your restaurant'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isLogin ? <LoginForm /> : <RegisterForm />}
          
          <div className="mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-center text-sm text-orange-600 hover:text-orange-500"
            >
              {isLogin ? 'Need to register your restaurant?' : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  );
}

export default App;