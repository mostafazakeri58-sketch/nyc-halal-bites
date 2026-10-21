import React from "react";
import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import menuItems from "../data/menuData";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO NYC HALAL BITES</p>

          <h1>
            Fresh Halal Food.
            <span> Big NYC Flavor.</span>
          </h1>

          <p>
            Delicious rice platters, freshly prepared gyros,
            sandwiches, and salads.
          </p>

          <Link to="/menu" className="primary-btn">
            Explore Our Menu →
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="/items/chicken-over-rice.png"
            alt="Chicken Over Rice"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <p className="eyebrow">OUR FAVORITES</p>
          <h2>Popular Dishes</h2>
          <p>Discover some of our signature meals.</p>
        </div>

        <div className="food-grid">
          {menuItems.slice(0, 3).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        <div className="center">
          <Link to="/menu" className="primary-btn">
            View Full Menu
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;