import React from "react";

const hours = [
  ["Monday", "12:00 PM - 8:00 PM"],
  ["Tuesday", "12:00 PM - 8:00 PM"],
  ["Wednesday", "12:00 PM - 8:00 PM"],
  ["Thursday", "12:00 PM - 8:00 PM"],
  ["Friday", "12:00 PM - 10:00 PM"],
  ["Saturday", "12:00 PM - 10:00 PM"],
  ["Sunday", "Closed"]
];

function Contact() {
  return (
    <main>
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Visit NYC Halal Bites!</p>
      </section>

      <section className="section contact-section">
        <div className="contact-card">
          <h2>Opening Hours</h2>

          {hours.map(([day, time]) => (
            <div className="hours-row" key={day}>
              <span>{day}</span>
              <strong>{time}</strong>
            </div>
          ))}
        </div>

        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p>NYC Halal Bites</p>
          <p>Fresh halal platters, gyros, and salads.</p>
          <p>Restaurant address and phone coming soon.</p>
        </div>
      </section>
    </main>
  );
}

export default Contact;