import React, { useState } from "react";
import Carouselitem from "./Carouselitem";
import "./index.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Nakiyingyi Hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      icon: require("./Media/image1.jpg"),
    },
    {
      title: "Olympia Hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      icon: require("./Media/image2.jpg"),
    },
    {
      title: "JJ hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      icon: require("./Media/image3.jpg"),
    },
    {
      title: "Makerere Garden Courts Hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      icon: require("./Media/image4.jpg"),
    },
    {
      title: "Kare Hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      icon: require("./Media/image5.jpg"),
    },
    {
      title: "Kann Hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      icon: require("./Media/image6.jpg"),
    },
    {
      title: "Prince Hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      icon: require("./Media/image7.jpg"),
    },
    {
      title: "Sunways Hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      icon: require("./Media/image8.jpg"),
    },
    {
      title: "New-Nana Hostel",
      description: "Has both selfcontained and non-selfcontained rooms",
      icon: require("./Media/image9.jpg"),
    },
  ];

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
