import React from "react";
import { NavLink } from "react-router-dom";
import "./css_codes/Home.css"
function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to ElectroStore ⚡</h1>
        <p>Your one-stop shop for the latest electronic gadgets</p>

        <NavLink to="/products">
          <button className="hero-btn">Explore Products</button>
        </NavLink>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>📱 Latest Devices</h3>
          <p>Discover trending smartphones, laptops, and more</p>
        </div>

        <div className="feature-card">
          <h3>💰 Best Prices</h3>
          <p>Affordable pricing with great deals</p>
        </div>

        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick and reliable shipping</p>
        </div>
      </section>

    </div>
  );
}

export default Home;