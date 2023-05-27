import React from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Vision from './pages/Vision';
import MyProfile from './pages/MyProfile';
import ContactUs from './pages/ContactUs';
import Return from './pages/Return'

// components
import Header from './components/Header';
import Footer from './components/Footer';

// layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products/:id', element: <Products /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/search', element: <Search /> },
      { path: '/vision', element: <Vision /> },
      { path: '/myprofile', element: <MyProfile /> },
      { path: '/contactUs', element: <ContactUs /> },
      { path: '/return', element: <Return /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
