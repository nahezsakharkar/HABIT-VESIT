import "./style.css";

import { useState } from "react";

const startupData = [
  {
    category: "tech",
    image: "startup1.jpg",
    name: "Startup 1",
    description: "Description of Startup 1.",
  },
  {
    category: "healthcare",
    image: "startup2.jpg",
    name: "Startup 2",
    description: "Description of Startup 2.",
  },
  {
    category: "finance",
    image: "startup3.jpg",
    name: "Startup 3",
    description: "Description of Startup 3.",
  },
  // Add more startup data as needed
];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  function showCategory(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="portfolio-container">
      <div className="header-spacer"></div>
      <div className="category">
        {/* Clickable category buttons */}
        <button
          className={`category-button ${
            selectedCategory === "finance" ? "active" : ""
          }`}
          onClick={() => showCategory("finance")}
        >
          Finance
        </button>
        <button
          className={`category-button ${
            selectedCategory === "healthcare" ? "active" : ""
          }`}
          onClick={() => showCategory("healthcare")}
        >
          Healthcare
        </button>
        <button
          className={`category-button ${
            selectedCategory === "tech" ? "active" : ""
          }`}
          onClick={() => showCategory("tech")}
        >
          Tech
        </button>

        <button
          className={`category-button ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => showCategory("all")}
        >
          All
        </button>
      </div>

      <div className="startup-container">
        {/* Startup cards */}
        {startupData.map((startup, index) => (
          <div className="startup" key={index}>
            <img src={startup.image} alt={startup.name} />
            <h2>{startup.name}</h2>
            <p className="startup-description">{startup.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
