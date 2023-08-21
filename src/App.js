import React from 'react';
import Navbar from './componenets/Navbar'
import Home from './componenets/Home.jsx'
import Trending from './componenets/Trending.jsx';
import Sellers from './componenets/Sellers.jsx'
import Deals from './componenets/Deals.jsx'
import Testimonials from './componenets/Testimonials.jsx'
import './index.css'
import Footer from './componenets/Footer';
function App() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <Home></Home>
      <Trending></Trending>
      <Sellers></Sellers>
      <Deals></Deals>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
