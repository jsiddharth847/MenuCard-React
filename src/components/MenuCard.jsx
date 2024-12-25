import React from "react";

export const MenuCard = ({ menuData }) => {
  return (
    <section className="main-card--cointainer">
      {menuData.map((curElem) => {
        // Destructure properties for readability
        const { id, name, category, description, image } = curElem;

        return (
          <div className="card-container" key={id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <p className="card-description subtle">{description}</p>
                <div className="card-read">Read</div>
              </div>
              {/* Uncomment and provide `image` property to display images */}
              <img src={image} alt={`${name}`} className="card-media" />
              <span className="card-tag subtle">Order Now</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};
