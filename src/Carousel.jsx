import React, { useState } from "react";
import Carouselitem from "./Carouselitem";
import "./index.css";

const Carousel = () => {
  //State to manage the active index of the carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // define an array of items each representing a hostel
  const items = [
    {
      title: "Nakiyingyi Hostel",
      location: "kikoni",
      description: "Has both selfcontained and non-selfcontained rooms",
      singleRoomPrice: "Shs 1,400,000",
      doubleRoomPrice: "Shs 950,000",
      roomTypes: "Single and Double Rooms",
      icon: require("./Media/image1.jpg"),
    },
    {
      title: "Olympia Hostel",
      location: "kikoni",
      description: "Has a swimming pool",
      singleRoomPrice: "Shs 1,700,000",
      doubleRoomPrice: "Shs 1,150,000",
      roomTypes: "Single and Double Rooms",
      icon: require("./Media/image2.jpg"),
    },
    {
      title: "JJ hostel",
      location: "kikoni, near Nakiyingyi hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      singleRoomPrice: "Shs 1,350,000",
      doubleRoomPrice: "Shs 1,150,000",
      roomTypes: "Single and Double Rooms",
      icon: require("./Media/image3.jpg"),
    },
    {
      title: "Makerere Garden Courts Hostel",
      location: "kikoni",
      description: "in a quiet neighborhood",
      singleRoomPrice: "Shs 1,200,000",
      doubleRoomPrice: "Shs 850,000",
      roomTypes: "Single and Double Rooms",
      icon: require("./Media/image4.jpg"),
    },
    {
      title: "Kare Hostel",
      location: "kikoni",
      description: "It is surrounded by good restaurants",
      singleRoomPrice: "Shs 1,150,000",
      doubleRoomPrice: "Shs 950,000",
      roomTypes: "Single and Double Rooms",
      icon: require("./Media/image5.jpg"),
    },
    {
      title: "Kann Hostel",
      location: "near Makerere western gate",
      description: "Has both selfcontained and non-selfcontained rooms",
      singleRoomPrice: "Shs 1,200,000",
      doubleRoomPrice: "Shs 900,000",
      roomTypes: "Single and Double Rooms",
      icon: require("./Media/image6.jpg"),
    },
    {
      title: "Prince Hostel",
      location: "kikoni, after kann hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      singleRoomPrice: "Shs 1,000,000",
      doubleRoomPrice: "Shs 850,000",
      roomTypes: "Single and Double Rooms",
      icon: require("./Media/image7.jpg"),
    },
    {
      title: "Sunways Hostel",
      location: "Opposite Makerere western gate",
      description: "Can easily access public transport",
      singleRoomPrice: "Shs 1,200,000",
      doubleRoomPrice: "Shs 950,000",
      roomTypes: "Single and Double Rooms",
      icon: require("./Media/image8.jpg"),
    },
    {
      title: "New-Nana Hostel",
      location: "Near Makerer Main gate",
      description: "Has the biggest shuttles",
      singleRoomPrice: "Shs 1,900,000",
      doubleRoomPrice: "Shs 1,150,000",
      roomTypes: "Single and Double Rooms",
      icon: require("./Media/image9.jpg"),
    },
  ];
// Function to update the active index of the carousel
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <Carouselitem item={item} key={index} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className="indicator-buttons"
                key={index}
              >
                <span
                  className={
                    `material-symbols-outlined ${
                      index === activeIndex
                        ? "indicator-symbol-active"
                        : "indicator-symbol"
                    }`
                  }
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
