import React from 'react';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
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

const router = (
  <Router>
    <Layout />
  </Router>
);

const generateSitemapXML = () => {
  const routes = router.getRoutes(); 

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => {
        const url = `https://indsoftware.in${route.path}`; // Update with your actual domain
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;
      }).join('')}
      <url>
        <loc>https://indsoftware.in/sitemap.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    </urlset>
  `;

  return sitemap;
};

const App = () => {
  const sitemap = generateSitemapXML();

  return (
    <div>
      <Router>
        <Outlet />
      </Router>
      <textarea
        style={{ width: '100%', height: '500px' }}
        value={sitemap}
        readOnly
      />
    </div>
  );
};

export default App;
