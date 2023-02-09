import data from '../data/data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';

function Slider1() {
  const myData = data;
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlide(myData.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const nextSliderHandler = (id) => {
    if (id === myData.length) {
      setActiveSlide(1);
    } else if (id < myData.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const PressKeyHandler =(event) => {
    if (event.code=="ArrowLeft"){
      setActiveSlide(activeSlide-1);
    } else if (event.code=="ArrowRight" ) {
      setActiveSlide(activeSlide+1) ;
    }
  };

  return (
    <div className='m-6'>
      {myData.map((item) => {
        const { id, brand, description, price, salesprice, imageurl } = item;
        return (
          <div
            key={id}
            className={
              activeSlide === id
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='text-6xl border-2 border-blue'
              onClick={() => prevSliderHandler(id)}
              onKeyDown = {PressKeyHandler}
            >
              <FiChevronLeft />
            </button>
            <div className='flex flex-col items-center justify-between '>
              <img src={imageurl} alt={brand} />
              <h2 className='text-2xl font-bold my-6'>{brand}</h2>
              <p>{description}</p>
              <p>Price: ${price}</p>
              <p>Sale: ${salesprice}</p>
              <button
                  type="submit" 
                  style = {{width:'150px',
                          backgroundColor:'black',
                          borderWidth: 3, 
                          borderRadius: 15,
                          margin: 20,
                          padding:5,
                          cursor:"pointer",
                        color: "white"}}>Like</button>
            </div>
            <button
              className='text-6xl border-2 border-blue'
              onClick={() => nextSliderHandler(id)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Slider1;

