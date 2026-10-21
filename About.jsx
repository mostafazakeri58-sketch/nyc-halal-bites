import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <section className="page-header">
        <h1>About Us</h1>
        <p>Welcome to NYC Halal Bites.</p>
      </section>

      <section className="section about-section">
        <img
          src="/items/combo-over-rice.png"
          alt="NYC Halal Bites Combo Platter"
        />

        <div>
          <h2>Food You'll Love</h2>

          <p>
            NYC Halal Bites brings the flavors of classic
            New York halal street food to your plate.
          </p>

          <p>
            Explore our delicious chicken over rice,
            combo platters, gyros, sandwiches, and salads.
          </p>

          <Link to="/menu" className="primary-btn">
            Explore Menu
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;