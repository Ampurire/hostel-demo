import React from 'react';

const Carouselitem = ({ item }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-img" src={item.icon} alt={item.title} />
      <div className="carousel-item-text">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Location: {item.location}</p>
        <p>Room Types: {item.roomTypes}</p>
        <p>Single Room Price: {item.singleRoomPrice}</p>
        <p>Double Room Price: {item.doubleRoomPrice}</p>
      </div>
    </div>
  );
};

export default Carouselitem;
