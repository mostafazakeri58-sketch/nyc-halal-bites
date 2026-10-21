import React, { useState } from "react";
import FoodCard from "../components/FoodCard";
import menuItems from "../data/menuData";
import "../styles/Menu.css";

function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Platters",
    "Gyros",
    "Sandwiches",
    "Salads"
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <section className="page-header">
        <h1>Our Menu</h1>
        <p>Fresh, flavorful halal food made with care.</p>
      </section>

      <section className="section">
        <div className="menu-controls">
          <input
            type="search"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={category === cat ? "selected" : ""}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="food-grid">
          {filteredItems.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="no-results">No matching food found.</p>
        )}
      </section>
    </main>
  );
}

export default Menu;