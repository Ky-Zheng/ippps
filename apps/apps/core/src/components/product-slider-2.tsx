import data from "../data/data";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Carousel from "react-material-ui-carousel";

function Slider2() {
  // State to programmatically set active child
  const [activeChild, setActiveChild] = useState(0);
  const items = data;

  // The Keypress Event Handler
  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        // If supposed previous child is < 0 set it to last child
        setActiveChild((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
      } else if (e.key === "ArrowRight") {
        // If supposed next child is > length -1 set it to first child
        setActiveChild((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
      }
    },
    [items]
  );

  // Set and cleanup the event listener
  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  return (
    <div>
      <Carousel
        index={activeChild} // <-- This controls the activeChild
        autoPlay={false} // <-- You probaly want to disable this for our purposes
        navButtonsAlwaysVisible={true} // doesn't work 
      >
        {items.map((i) => {
          const { id, brand, description, price, salesprice, imageurl } = i;
          return (
            <div key={id}>
              <div className="flex flex-col items-center justify-between ">
                <img src={imageurl} alt={brand} />
                <h2 className="text-2xl font-bold my-6">{brand}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Sale: ${salesprice}</p>
                <button
                  type="submit"
                  style={{
                    width: "150px",
                    backgroundColor: "black",
                    borderWidth: 3,
                    borderRadius: 15,
                    margin: 20,
                    padding: 5,
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  Like
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider2;
