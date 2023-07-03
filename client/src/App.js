import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';

// pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import Vision from './pages/Vision';
// import MyProfile from './pages/MyProfile';
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
      { path: '/vision', element: <Vision /> },
      { path: '/products/:id', element: <Products /> },
      { path: '/contactUs', element: <ContactUs /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/search', element: <Search /> },
      { path: '/return', element: <Return /> },
      // { path: '/myprofile', element: <MyProfile /> },
    ],
  },
]);

const generateSitemapXML = () => {
  const routes = router.getRoutes(); // Get all the routes defined in the router

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => {
        const url = `https://www.indsoftware.in${route.path}`; // Update with your actual domain
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;
      }).join('')}
    </urlset>
  `;

  return sitemap;
};

const App = () => {
  const sitemap = generateSitemapXML();

  return (
    <div>
      <RouterProvider router={router} />
      <textarea
        style={{ width: '100%', height: '500px' }}
        value={sitemap}
        readOnly
      />
    </div>
  );
};

export default App;
