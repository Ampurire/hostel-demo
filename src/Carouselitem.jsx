import React from 'react'

  const Carouselitem = ({ item }) => {
    return (
      <div className="carousel-item">
        <img className="carousel-img" src={item.icon} alt={item.title} />
        <p className="carousel-item-text">{item.description}</p>
      </div>
    );
  };
  

export default Carouselitem
